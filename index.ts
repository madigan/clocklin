import { serve } from 'bun';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

serve({
  port: PORT,
  hostname: HOST,
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === '/') {
      return serveFile('public/index.html', 'text/html');
    }

    if (pathname.startsWith('/static/')) {
      const filePath = pathname.slice(8);
      const fullPath = join('public', filePath);

      if (existsSync(fullPath)) {
        const contentType = getContentType(filePath);
        return serveFile(fullPath, contentType);
      }
    }

    return new Response('Not Found', { status: 404 });
  },
});

function serveFile(filePath: string, contentType: string): Response {
  try {
    const content = readFileSync(filePath);
    return new Response(content, {
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch {
    return new Response('File not found', { status: 404 });
  }
}

function getContentType(filePath: string): string {
  const ext = filePath.split('.').pop()?.toLowerCase();
  const contentTypes: Record<string, string> = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    svg: 'image/svg+xml',
  };
  return contentTypes[ext || ''] || 'text/plain';
}

console.log(`Server running on http://${HOST}:${PORT}`);
