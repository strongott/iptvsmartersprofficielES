import type { IncomingMessage, ServerResponse } from 'http';

// Interface for sitemap entries
interface SitemapEntry {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
  // Opt-in flag to attach international localized multilanguage alternate headers
  isTargetedCommercialPage?: boolean;
}

// Target domain for the IPTV platform
const DOMAIN = 'https://iptvsmartersprofficiel.shop';

// Static base pages
const BASE_PAGES: SitemapEntry[] = [
  { loc: '/', changefreq: 'daily', priority: '1.0', isTargetedCommercialPage: true },
  { loc: '/channels', changefreq: 'weekly', priority: '0.8' },
  { loc: '/faq', changefreq: 'weekly', priority: '0.8' },
  { loc: '/comment-ca-marche', changefreq: 'weekly', priority: '0.8' },
  { loc: '/product', changefreq: 'weekly', priority: '0.8' },
  { loc: '/contact', changefreq: 'weekly', priority: '0.8' },
  { loc: '/terms', changefreq: 'monthly', priority: '0.3' },
  { loc: '/privacy', changefreq: 'monthly', priority: '0.3' },
];

// Highest-converting localized European SEO slugs requested
const EUROPEAN_SLUGS: SitemapEntry[] = [
  // France / Belgium
  { loc: '/abonnement-iptv-france', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/best-iptv-france', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/iptv-premium-france', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/iptv-abonnement-belgique', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/iptv-belgium', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },

  // Germany / Austria
  { loc: '/iptv-kaufen-deutschland', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/best-iptv-germany', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/iptv-server-stabil', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/iptv-oesterreich', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },

  // Italy
  { loc: '/abbonamento-iptv-italia', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/miglior-iptv-2026', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/iptv-streaming-stabile', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },

  // Spain
  { loc: '/lista-iptv-premium', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/comprar-iptv-espana', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/mejor-iptv-sin-cortes', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },

  // United Kingdom / Ireland
  { loc: '/premium-iptv-uk', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/best-iptv-subscription-uk', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/reliable-iptv-server-ireland', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },

  // Netherlands
  { loc: '/iptv-abonnement-nederland', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
  { loc: '/goedkope-iptv-kopen', changefreq: 'daily', priority: '0.8', isTargetedCommercialPage: true },
];

// Lead multi-language target representation URLs mapped for Google Search Console (Hreflang canonical alternate set)
const MULTI_LANG_TARGETS = [
  { hreflang: 'x-default', loc: '/' },
  { hreflang: 'fr-fr', loc: '/abonnement-iptv-france' },
  { hreflang: 'fr-be', loc: '/iptv-abonnement-belgique' },
  { hreflang: 'de-de', loc: '/iptv-kaufen-deutschland' },
  { hreflang: 'de-at', loc: '/iptv-oesterreich' },
  { hreflang: 'it-it', loc: '/abbonamento-iptv-italia' },
  { hreflang: 'es-es', loc: '/comprar-iptv-espana' },
  { hreflang: 'en-gb', loc: '/premium-iptv-uk' },
  { hreflang: 'en-ie', loc: '/reliable-iptv-server-ireland' },
  { hreflang: 'nl-nl', loc: '/iptv-abonnement-nederland' },
];

// Dynamic Blog Slugs to capture SEO advice traffic
const BLOG_SLUGS: string[] = [
  'avenir-du-divertissement-a-domicile',
  'top-5-applications-streaming-2024',
  'guide-expert-fixer-buffering',
  'installation-iptv-smart-tv',
  'iptv-firestick-guide-complet',
  'meilleures-chaines-sport-iptv',
  'm3u-vs-xtream-codes',
  'vitesse-connexion-iptv-4k',
  'pourquoi-vpn-iptv',
  'iptv-sur-ordinateur-mac-pc',
  'configurer-epg-iptv',
  'meilleurs-boitiers-iptv-2026',
  'enregistrer-programmation-iptv',
  'iptv-vs-satellite-comparatif',
  'iptv-sur-iphone-ipad-ios',
  'guide-iptv-android-tv-mi-box',
  'meilleurs-serveurs-iptv-4k-2026',
  'tester-vitesse-connexion-iptv',
  'iptv-smarters-pro-vs-gse-smart-iptv',
  'ibo-player-guide-complet',
  'comment-renouveler-abonnement-iptv-smarters-pro',
  'meilleure-vod-iptv-2026',
  'tout-savoir-codec-h265-hevc',
  'jeux-video-sur-box-iptv',
  'iptv-sur-xbox-playstation',
  'guide-iptv-kodi-installation',
  'iptv-securite-guide-protection',
];

export default function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    // Strict W3C format (YYYY-MM-DD) as requested by Google Search Console
    const todayYYYYMMDD = new Date().toISOString().split('T')[0];

    // Helper to safely serialize XML node text contents & attributes
    const escapeXmlValue = (str: string): string => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };

    // Safe absolute URL generator following perfect slash concatenation rules
    const getAbsoluteUrl = (loc: string): string => {
      const cleanLoc = loc.startsWith('/') ? loc : `/${loc}`;
      return `${DOMAIN}${cleanLoc}`;
    };

    // Map blog pages into Sitemap Entries
    const blogEntries: SitemapEntry[] = BLOG_SLUGS.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'weekly',
      priority: '0.6',
    }));

    // Combine all pages
    const allEntries = [...BASE_PAGES, ...EUROPEAN_SLUGS, ...blogEntries];

    // Build the XML content dynamically ensuring NO layout leading whitespace
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

    allEntries.forEach((entry) => {
      const dynamicUrl = getAbsoluteUrl(entry.loc);
      xml += '  <url>\n';
      xml += `    <loc>${escapeXmlValue(dynamicUrl)}</loc>\n`;
      xml += `    <lastmod>${todayYYYYMMDD}</lastmod>\n`;
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
      xml += `    <priority>${entry.priority}</priority>\n`;

      // Inject strict multi-language alternates (hreflang nodes) for maximum commercial target security
      if (entry.isTargetedCommercialPage) {
        MULTI_LANG_TARGETS.forEach((target) => {
          const targetUrl = getAbsoluteUrl(target.loc);
          xml += `    <xhtml:link rel="alternate" hreflang="${target.hreflang}" href="${escapeXmlValue(targetUrl)}" />\n`;
        });
      }

      xml += '  </url>\n';
    });

    xml += '</urlset>';

    // Set high-performance crawling and uncacheable response headers using standard setHeader
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.end(xml);
  } catch (error) {
    console.error('Error generating dynamic sitemap:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Internal Server Error');
  }
}
