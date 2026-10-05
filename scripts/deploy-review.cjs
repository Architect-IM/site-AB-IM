const fs = require('node:fs');

// workflow_run always uses main's SHA. Each published snapshot instead needs
// its own gh-pages commit, otherwise Pages can keep serving an earlier artifact.
module.exports = async function deploy({github, context, core,
  env = process.env,
  expected = JSON.parse(fs.readFileSync('incoming/review.json', 'utf8')),
  fetchPage = globalThis.fetch,
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms))}) {
  const artifact = Number(env.PAGES_ARTIFACT_ID);
  const version = env.PAGES_BUILD_SHA;
  if (!Number.isSafeInteger(artifact) || artifact <= 0 || !/^[a-f0-9]{40}$/.test(version || '')) {
    throw new Error('Missing artifact ID or published snapshot commit.');
  }
  if (!/^(main|irina|mihail|pr-\d+)$/.test(expected.key)) throw new Error('Invalid review key.');
  const token = await core.getIDToken();
  core.setSecret(token);
  let deployment;
  try {
    deployment = (await github.request('POST /repos/{owner}/{repo}/pages/deployments', {
      ...context.repo, artifact_id:artifact, pages_build_version:version,
      environment:'github-pages', oidc_token:token
    })).data;
  } catch (error) {
    // Do not include Octokit's request object: it contains the OIDC token.
    throw new Error(`Pages deployment request failed (HTTP ${error.status || 'unknown'}).`);
  }
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    const {data} = await github.request('GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}', {
      ...context.repo, pages_deployment_id:deployment.id
    });
    if (data.status === 'succeed') { ready = true; break; }
    if (['failed','failure','errored','cancelled'].includes(data.status)) throw new Error(`Pages deployment ${data.status}.`);
    await sleep(5000);
  }
  if (!ready) throw new Error('Pages deployment did not complete within five minutes.');
  const pageUrl = new URL(deployment.page_url.startsWith('https://') ? deployment.page_url : `https://${deployment.page_url}`);
  if (!pageUrl.pathname.endsWith('/')) pageUrl.pathname += '/';
  const manifestUrl = new URL(`${expected.key}/review.json`, pageUrl);
  manifestUrl.searchParams.set('revision', version);
  for (let attempt = 0; attempt < 24; attempt++) {
    try {
      const response = await fetchPage(manifestUrl, {cache:'no-store', signal:AbortSignal.timeout(5000)});
      if (response.ok) {
        const actual = await response.json();
        if (actual.key === expected.key && actual.sha === expected.sha && String(actual.run) === String(expected.run)) {
          core.setOutput('page_url', pageUrl.href);
          return;
        }
      }
    } catch { /* A newly published page can temporarily be unavailable. */ }
    await sleep(5000);
  }
  throw new Error('Pages reported success but the expected review is not available. No preview link was posted.');
};
