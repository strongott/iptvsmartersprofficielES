import type { IncomingMessage, ServerResponse } from 'http';

// Primary production domain
const DOMAIN = 'https://iptvsmartersprofficiel.shop';

export default function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${DOMAIN}/sitemap.xml
`;

    // High crawl-budget efficiency and uncacheable response headers using standard setHeader
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.end(robotsTxt);
  } catch (error) {
    console.error('Error serving dynamic robots.txt:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Internal Server Error');
  }
}
