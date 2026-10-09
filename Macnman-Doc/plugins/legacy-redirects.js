// @ts-check
/**
 * Redirect stubs for URLs that changed when folders with spaces (and one
 * typo) were renamed in October 2026:
 *
 *   /docs/Modules/LoRa Modules/…                 → /docs/modules/lora-modules/…
 *   /docs/Modules/ble-Modules/…                  → /docs/modules/ble-modules/…
 *   /docs/Macnman Maya/…                         → /docs/macnman-maya/…
 *   /docs/product/…/envirnomental-sensors/…      → …/environmental-sensors/…
 *   /docs/product/…/MacSync L Odor X1-datasheet  → …/macsync-l-odor-x1-datasheet
 *
 * The host answers the old URLs with a 308 (see vercel.json); these static
 * stubs are the fallback for any host without that config: a tiny HTML page
 * at the old path that is `noindex`, declares the new URL as canonical and
 * forwards to it immediately.
 */
const fs = require('node:fs');
const path = require('node:path');

/** [new-path pattern, old-path prefixes it replaces] — relative to baseUrl. */
const RULES = [
  [/^modules\/lora-modules\//, ['Modules/LoRa Modules/', 'modules/LoRa Modules/']],
  [/^modules\/ble-modules\//, ['Modules/ble-Modules/', 'modules/ble-Modules/']],
  [/^macnman-maya\//, ['Macnman Maya/']],
  [/environmental-sensors\//, ['envirnomental-sensors/']],
  [/macsync-l-odor-x1-datasheet$/, ['MacSync L Odor X1-datasheet']],
];

/** Pages whose slug changed outright (new path → old path), relative to baseUrl. */
const EXPLICIT = {
  'datasheets/category/maclink-gen-2-range-coverage-test-report-1': ['datasheets/category/lorawan-range--coverage-test--maclink-gen-2-gateway-report-1'],
  'datasheets/category/maclink-gen-2-performance-indian-climate': ['datasheets/category/lorawan-gateway-performance-in-indian-climate-maclink-gen-2-'],
};

/** Every old path for a new one (the odor page moved folder and name). */
function oldPaths(rel) {
  let variants = [rel, ...(EXPLICIT[rel] ?? [])];
  for (const [pattern, olds] of RULES) {
    if (!pattern.test(rel)) continue;
    const next = [];
    for (const v of variants) {
      next.push(v);
      for (const old of olds) next.push(v.replace(pattern, (m) => (m.endsWith('/') ? old : old)));
    }
    variants = [...new Set(next)];
  }
  return variants.filter((v) => v !== rel);
}

const stub = (to) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)})</script>
</head><body><p>This page has moved to <a href="${to}">${to}</a>.</p></body></html>
`;

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function legacyRedirectsPlugin(context) {
  const {url, baseUrl} = context.siteConfig;
  return {
    name: 'macnman-legacy-redirects',
    async postBuild({outDir, routesPaths}) {
      let written = 0;
      for (const route of routesPaths) {
        if (!route.startsWith(baseUrl)) continue;
        const rel = decodeURI(route.slice(baseUrl.length)).replace(/\/+$/, '');
        if (!rel) continue;
        const to = `${url}${baseUrl}${encodeURI(rel)}`;
        for (const old of oldPaths(rel)) {
          const dir = path.join(outDir, old);
          if (fs.existsSync(path.join(dir, 'index.html'))) continue;
          fs.mkdirSync(dir, {recursive: true});
          fs.writeFileSync(path.join(dir, 'index.html'), stub(to));
          written += 1;
        }
      }
      console.log(`[macnman-legacy-redirects] ${written} redirect stubs written`);
    },
  };
};
