import { readFileSync, readdirSync, existsSync, statSync, mkdirSync, copyFileSync, cpSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist/client');
const base = process.env.NEXT_PUBLIC_PREVIEW_BASE_PATH ?? '';
// Vinext places prefixed bundles under the prefix inside its output. Each review
// artifact is itself deployed at that prefix, so expose the bundles at its root.
if (base) {
  const prefixedBundles = path.join(root, base, '_next');
  if (existsSync(prefixedBundles)) cpSync(prefixedBundles, path.join(root, '_next'), {recursive:true});
}
const walk = dir => readdirSync(dir, {withFileTypes:true}).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
// GitHub Pages serves directory indexes for the app's extensionless links.
for (const file of walk(root)) {
  if (!file.endsWith('.html') || ['index.html', '404.html'].includes(path.basename(file))) continue;
  const directory = file.slice(0, -5);
  mkdirSync(directory, {recursive:true});
  copyFileSync(file, path.join(directory, 'index.html'));
}
const files = walk(root);
const pages = files.filter(file => file.endsWith('.html'));
const errors = [];
for (const route of ['', 'consulting', 'contacts', 'portfolio', 'bureau', 'lab', 'napravleniya/vladimir', ...['master-plan','concept','ago','research'].map(s => `napravleniya/vladimir/${s}`)]) {
  if (!existsSync(path.join(root, route, 'index.html')) && !existsSync(path.join(root, `${route}.html`))) errors.push(`Missing page: /${route}`);
}
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  if (!html.includes('<h1')) errors.push(`No heading: ${path.relative(root, file)}`);
  for (const match of html.matchAll(/\b(?:href|src)="(\/[^"\s]*)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (url.startsWith('//')) continue;
    if (base && !url.startsWith(`${base}/`) && url !== base) { errors.push(`Outside review: ${url}`); continue; }
    const local = decodeURIComponent(url.slice(base.length).split(/[?#]/)[0]);
    const target = path.join(root, local);
    if (!(existsSync(target) && statSync(target).isFile()) && !existsSync(path.join(target,'index.html')) && !existsSync(`${target}.html`)) errors.push(`Missing target: ${url}`);
  }
}
if (errors.length) throw new Error([...new Set(errors)].join('\n'));
console.log(`Review verified: ${pages.length} pages; local links and assets resolve.`);
