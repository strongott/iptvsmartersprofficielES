/**
 * Dynamic WhatsApp Conversion Logic helper for commercial European IPTV customer segmentation.
 * Automatically analyzes current page path/slug to detect active audience country (FR, DE, IT, ES, UK, NL)
 * and generates native, high-converting WhatsApp direct checkout links.
 */

// Primary global sales desk contact phone
export const WHATSAPP_PHONE = '447853159847';

interface RegionData {
  langCode: string;
  countryName: string;
  checkoutMessage: string;
  defaultInquiryMessage: string;
}

const REGION_MAPPINGS: Record<string, RegionData> = {
  // France & Belgium
  fr: {
    langCode: 'fr',
    countryName: 'France / Belgique',
    checkoutMessage: 'Bonjour, je souhaite acheter le plan IPTV Premium pour la France & Belgique.',
    defaultInquiryMessage: "Bonjour, j'ai une question concernant l'abonnement IPTV Smarters Pro."
  },
  // Germany & Austria
  de: {
    langCode: 'de',
    countryName: 'Deutschland / Österreich',
    checkoutMessage: 'Hallo, ich möchte das IPTV Premium Paket für Deutschland / Österreich kaufen.',
    defaultInquiryMessage: 'Hallo, ich habe eine Frage zum IPTV Smarters Pro Abonnement.'
  },
  // Italy
  it: {
    langCode: 'it',
    countryName: 'Italia',
    checkoutMessage: 'Buongiorno, vorrei acquistare il piano IPTV Premium per l\'Italia.',
    defaultInquiryMessage: 'Buongiorno, avrei bisogno di informazioni sull\'abbonamento IPTV Smarters Pro.'
  },
  // Spain
  es: {
    langCode: 'es',
    countryName: 'España',
    checkoutMessage: 'Hola, me gustaría comprar el plan IPTV Premium para España.',
    defaultInquiryMessage: 'Hola, tengo una pregunta sobre la suscripción de IPTV Smarters Pro.'
  },
  // UK & Ireland
  en: {
    langCode: 'en',
    countryName: 'United Kingdom / Ireland',
    checkoutMessage: 'Hello, I would like to buy the IPTV Premium plan for UK / Ireland.',
    defaultInquiryMessage: 'Hello, I have a question regarding IPTV Smarters Pro subscription.'
  },
  // Netherlands
  nl: {
    langCode: 'nl',
    countryName: 'Nederland',
    checkoutMessage: 'Hallo, ik wil graag het IPTV Premium pakket voor Nederland kopen.',
    defaultInquiryMessage: 'Hallo, ik heb een vraag over het IPTV Smarters Pro abonnement.'
  }
};

/**
 * Detects the target region based on window location slug matching
 */
export function detectCurrentRegion(pathname: string): RegionData {
  const normalized = pathname.toLowerCase();

  // Test France / Belgium slugs
  if (
    normalized.includes('france') ||
    normalized.includes('belgi') ||
    normalized.includes('abonnement-iptv') ||
    normalized.includes('iptv-premium')
  ) {
    return REGION_MAPPINGS.fr;
  }

  // Test Germany / Austria slugs
  if (
    normalized.includes('deutsch') ||
    normalized.includes('germany') ||
    normalized.includes('oesterreich') ||
    normalized.includes('kaufen') ||
    normalized.includes('stabil')
  ) {
    return REGION_MAPPINGS.de;
  }

  // Test Italy slugs
  if (
    normalized.includes('italia') ||
    normalized.includes('miglior-iptv') ||
    normalized.includes('stabile')
  ) {
    return REGION_MAPPINGS.it;
  }

  // Test Spain slugs
  if (
    normalized.includes('espana') ||
    normalized.includes('premium-es') ||
    normalized.includes('lista-iptv') ||
    normalized.includes('cortes')
  ) {
    return REGION_MAPPINGS.es;
  }

  // Test UK / Ireland slugs
  if (
    normalized.includes('uk') ||
    normalized.includes('ireland') ||
    normalized.includes('reliable-iptv') ||
    normalized.includes('subscription-uk')
  ) {
    return REGION_MAPPINGS.en;
  }

  // Test Netherlands slugs
  if (
    normalized.includes('nederland') ||
    normalized.includes('kopen') ||
    normalized.includes('goedkope')
  ) {
    return REGION_MAPPINGS.nl;
  }

  // Default fallback is French since it is the lead converting market
  return REGION_MAPPINGS.fr;
}

/**
 * Generates custom native-language WhatsApp action URL dynamically
 * @param planName Optional specific subscription plan name
 * @param price Optional pricing details to include
 * @returns Fully formatted HTTPS URL for direct action conversion
 */
export function getLocalizedWhatsAppUrl(
  planName?: string,
  price?: string,
  pathname: string = typeof window !== 'undefined' ? window.location.pathname : '/'
): string {
  const region = detectCurrentRegion(pathname);
  
  let text = region.defaultInquiryMessage;

  if (planName) {
    const priceText = price ? ` (${price})` : '';
    if (region.langCode === 'fr') {
      text = `Bonjour, je souhaite souscrire au forfait ${planName}${priceText} pour mon pays (${region.countryName}).`;
    } else if (region.langCode === 'de') {
      text = `Hallo, ich möchte das Paket abonnieren: ${planName}${priceText} für mein Land (${region.countryName}).`;
    } else if (region.langCode === 'it') {
      text = `Buongiorno, vorrei abbonarmi al pacchetto ${planName}${priceText} per il mio paese (${region.countryName}).`;
    } else if (region.langCode === 'es') {
      text = `Hola, me gustaría suscribirme al plan ${planName}${priceText} para mi país (${region.countryName}).`;
    } else if (region.langCode === 'nl') {
      text = `Hallo, ik wil me graag abonneren op het pakket ${planName}${priceText} voor mijn land (${region.countryName}).`;
    } else {
      text = `Hello, I would like to subscribe to the ${planName}${priceText} package for my country (${region.countryName}).`;
    }
  } else {
    text = region.checkoutMessage;
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
