// Vercel Edge Middleware - 100% SEO-Friendly GEO-IP Redirection for European IPTV
// Runs at the Vercel Edge level with 0ms code latency to maximize indexing & conversion.

export const config = {
  // Only target the root page '/' to prevent interference with deep links, blog posts or static assets.
  matcher: ['/'],
};

export function middleware(request: Request): Response | undefined {
  try {
    const url = new URL(request.url);

    // 1. Strict Search Engine Core Crawler Guard
    const userAgent = request.headers.get('user-agent') || '';
    const lowUA = userAgent.toLowerCase();

    const isCrawler = [
      'googlebot',
      'bingbot',
      'yandexbot',
      'baiduspider',
      'duckduckbot',
      'yahoo',
      'ahrefsbot',
      'semrushbot',
      'dotbot',
      'rogerbot',
      'screaming frog',
      'mj12bot',
      'facebookexternalhit',
      'twitterbot',
      'linkedinbot',
      'pinterest'
    ].some((bot) => lowUA.includes(bot));

    // Bypass completely for SEO crawlers and speed-testing tools to ensure 100% indexation of root '/'
    if (isCrawler) {
      return;
    }

    // 2. Extract country code injected by Vercel GEO-IP header
    const country = (request.headers.get('x-vercel-ip-country') || '').toUpperCase();

    // 3. High-Conversion Market Redirections
    let redirectPath = '';

    switch (country) {
      // France & French-speaking markets (Belgium)
      case 'FR':
        redirectPath = '/abonnement-iptv-france';
        break;
      case 'BE':
        redirectPath = '/iptv-abonnement-belgique';
        break;

      // Germany & German-speaking markets (Austria)
      case 'DE':
        redirectPath = '/iptv-kaufen-deutschland';
        break;
      case 'AT':
        redirectPath = '/iptv-oesterreich';
        break;

      // Italy
      case 'IT':
        redirectPath = '/abbonamento-iptv-italia';
        break;

      // Spain
      case 'ES':
        redirectPath = '/comprar-iptv-espana';
        break;

      // Netherlands
      case 'NL':
        redirectPath = '/iptv-abonnement-nederland';
        break;

      // UK & Ireland
      case 'GB':
        redirectPath = '/premium-iptv-uk';
        break;
      case 'IE':
        redirectPath = '/reliable-iptv-server-ireland';
        break;

      default:
        // Keep English or default homepage for all other countries / fallback
        return;
    }

    if (redirectPath) {
      // Construct redirection URL preserving any search query parameters (e.g., campaign / tracking tags)
      const redirectUrl = new URL(redirectPath, request.url);
      redirectUrl.search = url.search;

      // Use a 307 Temporary Redirect so search engines know it is a dynamic Location shift
      return Response.redirect(redirectUrl.toString(), 307);
    }
  } catch (error) {
    console.warn('IPTV GEO-IP Middleware warning:', error);
  }
}
