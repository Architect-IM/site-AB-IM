const fs = require('node:fs');
const path = require('node:path');

module.exports = async function ({github, context, core}) {
  const run = context.payload.workflow_run;
  const meta = JSON.parse(fs.readFileSync('incoming/review.json', 'utf8'));
  const associated = run.pull_requests || [];
  let pr;
  let key;
  if (run.event === 'pull_request') {
    if (associated.length !== 1) throw new Error('Expected one pull request.');
    pr = (await github.rest.pulls.get({...context.repo, pull_number:associated[0].number})).data;
    key = `pr-${pr.number}`;
    if (pr.state !== 'open' || pr.head.repo.full_name !== context.payload.repository.full_name || pr.head.sha !== run.head_sha) {
      core.setOutput('skipped', 'true'); return;
    }
  } else {
    key = run.head_branch === 'main' ? 'main' : run.head_branch.startsWith('irina/') ? 'irina' : run.head_branch.startsWith('mihail/') ? 'mihail' : null;
    if (!key) throw new Error('Unsupported review branch.');
    const branch = (await github.rest.repos.getBranch({...context.repo, branch:run.head_branch})).data;
    if (branch.commit.sha !== run.head_sha) { core.setOutput('skipped', 'true'); return; }
  }
  if (meta.key !== key || meta.sha !== run.head_sha || String(meta.run) !== String(run.id)) throw new Error('Review metadata does not match the trusted workflow run.');
  const destination = path.resolve('pages', key);
  if (!destination.startsWith(path.resolve('pages') + path.sep)) throw new Error('Invalid destination.');
  function rejectLinks(dir) {
    for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
      if (entry.isSymbolicLink() || entry.name === '.git') throw new Error('Unsupported artifact entry.');
      if (entry.isDirectory()) rejectLinks(path.join(dir, entry.name));
    }
  }
  rejectLinks('incoming');
  fs.rmSync(destination, {recursive:true, force:true});
  fs.cpSync('incoming', destination, {recursive:true});
  fs.writeFileSync('pages/.nojekyll', '');
  const copies = fs.readdirSync('pages').filter(name => /^(main|irina|mihail|pr-\d+)$/.test(name) && fs.existsSync(path.join('pages',name,'review.json')));
  const labels = {main:'Общая версия', irina:'Правки Ирины', mihail:'Правки Михаила'};
  const rows = copies.map(name => { const data = JSON.parse(fs.readFileSync(path.join('pages',name,'review.json'),'utf8')); return `<li><a href="./${name}/">${labels[name] || name.toUpperCase()}</a><small>${String(data.sha).slice(0,7).replace(/[^a-f0-9]/g,'')}</small></li>`; }).join('');
  fs.writeFileSync('pages/index.html', `<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Предпросмотр — Ирина Михейкина</title><style>body{font:18px/1.6 system-ui;background:#fbfbf9;color:#16171b;max-width:800px;margin:10vh auto;padding:24px}h1{font-weight:500;line-height:1.2}ul{padding:0;list-style:none}li{border-top:1px solid #ddd;padding:20px 0;display:flex;justify-content:space-between}a{color:inherit}small,p{color:#686963}</style><h1>Сайт Ирины Михейкиной</h1><p>Версии для совместного просмотра. Выберите правки, которые хотите проверить.</p><ul>${rows}</ul><p>Обсуждение и объединение изменений — в <a href="https://github.com/Architect-IM/site-AB-IM/pulls">pull requests</a>.</p></html>`);
  core.setOutput('key', key);
  core.setOutput('sha', meta.sha);
  core.setOutput('pr', pr ? String(pr.number) : '');
};
