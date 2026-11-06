const fs = require('node:fs');

module.exports = async function choose({github, context, core}) {
  const branch = String(context.payload.inputs?.branch || '').trim();
  if (!/^(main|irina\/[A-Za-z0-9._/-]+|mihail\/[A-Za-z0-9._/-]+)$/.test(branch)) {
    throw new Error('Branch must be main, irina/… or mihail/…');
  }
  const repo = `${context.repo.owner}/${context.repo.repo}`;
  const tip = (await github.rest.repos.getBranch({...context.repo, branch})).data.commit.sha;
  const {data} = await github.rest.actions.listWorkflowRuns({
    ...context.repo,
    workflow_id: 'site-checks.yml',
    branch,
    status: 'success',
    per_page: 20,
  });
  const runs = data.workflow_runs.filter(run =>
    run.head_sha === tip &&
    run.head_repository?.full_name === repo &&
    (run.event === 'pull_request' || run.event === 'push' || run.event === 'workflow_dispatch')
  );
  const chosen = runs.find(run => run.event === 'pull_request')
    || runs.find(run => run.event === 'push')
    || runs.find(run => run.event === 'workflow_dispatch');
  if (!chosen) throw new Error(`No successful site check for ${branch} at ${tip.slice(0, 7)}.`);
  const record = {
    id: chosen.id,
    event: chosen.event,
    head_sha: chosen.head_sha,
    head_branch: chosen.head_branch || branch,
    pull_requests: (chosen.pull_requests || []).map(pr => ({number: pr.number})),
  };
  fs.writeFileSync('chosen-run.json', JSON.stringify(record));
  core.setOutput('run_id', String(chosen.id));
};
