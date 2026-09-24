import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

// The deployment adapter must receive a real /lp route and its built response,
// not depend on a rewrite from server routes to separately hosted public files.
const routes = JSON.parse(await readFile('.next/routes-manifest.json', 'utf8'));
assert(!Object.values(routes.rewrites).flat().some(route => route.source === '/lp'));
const sourceHtml = await readFile('public/naritai-lp/index.html', 'utf8');
const builtHtml = await readFile('.next/server/app/lp.body', 'utf8');
assert.equal(builtHtml, sourceHtml, 'Build must contain the complete /lp response');

const origin = 'http://127.0.0.1:3107';
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '3107'], { stdio: 'inherit' });
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw new Error('Production server exited before it became ready');
    try { if ((await fetch(origin + '/lp')).ok) { ready = true; break; } } catch {}
    await delay(500);
  }
  assert(ready, 'Production server must become ready');
  const response = await fetch(origin + '/lp');
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') || '', /text\/html/);
  const html = await response.text();
  assert.equal(html, sourceHtml);
  assert.match(html, /id="next-conversation"/);
  assert.match(html, /id="security"/);
  assert.match(html, /rel="canonical" href="https:\/\/www\.naritai-career-official\.com\/lp"/);
  assert.doesNotMatch(html, /noindex|Design demo/);
  assert.equal((html.match(/class="feature-detail"/g) || []).length, 14);
  const files = [...new Set([...html.matchAll(/(?:src|href|data-image)="(\/naritai-lp\/[^"#?]+)"/g)].map(m => m[1]))];
  for (const file of files) {
    const asset = await fetch(origin + file);
    assert.equal(asset.status, 200, file);
    assert.notEqual((await asset.arrayBuffer()).byteLength, 0, file);
  }
  const corporate = await fetch(origin + '/corporate', { redirect: 'manual' });
  assert([307, 308].includes(corporate.status));
  assert.equal(new URL(corporate.headers.get('location'), origin).pathname, '/lp');
  const contact = await fetch(origin + '/contact?from=lp&intent=demo');
  assert.equal(contact.status, 200, 'Existing contact page remains available');
  console.log(`LP release checks passed: /lp, ${files.length} assets, redirect, contact page`);
} finally {
  server.kill('SIGTERM');
}
