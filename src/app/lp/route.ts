import { readFile } from 'node:fs/promises';
import path from 'node:path';

// Emit the complete document at build time. Public assets may be served by a
// separate CDN in production, so /lp must not rewrite to a public HTML file.
export const dynamic = 'force-static';

export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), 'public/naritai-lp/index.html'),
    'utf8',
  );
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
