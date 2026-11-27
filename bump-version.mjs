// Night Herd: the site's version. `node bump-version.mjs` adds 0.001 (사용자: 0.001부터, 올릴 때마다 0.001씩);
// `node bump-version.mjs --stamp` only writes the current one into the page. The page loads night.js?v=<version>,
// so opening the page with anything new on the end of the address (?2, ?3 …) gets the new game at once.
import { readFileSync, writeFileSync } from 'fs';
let v = parseFloat(readFileSync('VERSION', 'utf8'));
if (!process.argv.includes('--stamp')) { v = Math.round(v * 1000 + 1) / 1000; writeFileSync('VERSION', v.toFixed(3) + '\n'); }
const ver = v.toFixed(3), page = 'night/index.html';
let html = readFileSync(page, 'utf8');
html = html.replace(/<script src="night\.js(\?v=[^"]*)?"><\/script>/, `<script src="night.js?v=${ver}"></script>`)
  .replace(/<p id="ver"[^>]*>[^<]*<\/p>/, `<p id="ver">v${ver}</p>`);
writeFileSync(page, html);
console.log('version', ver);
