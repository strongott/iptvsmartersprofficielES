import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { Check, Shield, Zap, Globe, Smartphone, Tv, MessageCircle, Star, Sparkles, Award, PlayCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

// Strict typing for localized pages
interface LocalizedContent {
  countryName: string;
  langCode: string; // e.g. fr, de, en...
  currency: 'EUR' | 'GBP';
  currencySymbol: string;
  focusKeywords: string[];
  
  // High-CTR SEO Metadata
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  
  // Custom Content
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaButton: string;
  ctaSubtext: string;
  
  // Value Props Titles & Texts
  featuresTitle: string;
  featuresSubtitle: string;
  featuresList: Array<{ title: string; desc: string; icon: string }>;
  
  // Pricing Section translation
  pricingTitle: string;
  pricingSubtitle: string;
  plans: Array<{
    id: string;
    originalName: string;
    name: string;
    price: string;
    period: string;
    badge?: string;
    desc: string;
    features: string[];
  }>;
  
  // Testimonials
  reviewsTitle: string;
  reviewsSubtitle: string;
  reviews: Array<{ author: string; city: string; text: string; rating: number; date: string }>;

  // Localized FAQ Section
  faqTitle: string;
  faqSubtitle: string;
  faqs: Array<{ q: string; a: string }>;
}

// Data configurations for all European target countries
const COUNTRY_CONFIGS: Record<string, LocalizedContent> = {
  // France targeting
  'france': {
    countryName: 'France',
    langCode: 'fr',
    currency: 'EUR',
    currencySymbol: '€',
    focusKeywords: ['Abonnement IPTV', 'Haute Qualité', 'Pas de Coupure'],
    seoTitle: '⭐ Abonnement IPTV France | Meilleur Serveur Haute Qualité Sans Coupure',
    seoDescription: 'Profitez du meilleur abonnement IPTV en France avec IPTV Smarters Pro. Plus de 35 000 chaînes 4K UHD, films & séries récents. Technologie Anti-Freeze premium pour un streaming stable et sans blocage. Activation immédiate.',
    seoKeywords: 'abonnement iptv france, meilleur iptv france, iptv premium sans coupure, achat iptv stable, iptv smarters pro officielle, streaming 4k francais, serveur anti freeze',
    heroBadge: 'Offre Spéciale France 2026',
    heroTitle: 'L\'Abonnement IPTV #1 en France sans coupure',
    heroSubtitle: 'Bénéficiez d\'une stabilité d\'image absolue grâce à notre réseau unique Anti-Freeze v3.0. Plus de 35 000 chaînes premium HD, FHD et 4K directement activées sur tous vos écrans.',
    ctaButton: 'Obtenir Mon Accès Immédiat',
    ctaSubtext: 'Livraison automatisée en moins de 10 minutes — Assistance VIP 24/7',
    featuresTitle: 'Pourquoi Choisir Notre Service IPTV en France ?',
    featuresSubtitle: 'Une infrastructure réseau à la pointe du streaming pour garantir une fluidité totale',
    featuresList: [
      { title: 'Technologie Anti-Freeze v3.0', desc: 'Regardez vos sports, actualités et grands événements en direct sans le moindre ralentissement grâce à nos serveurs ultra-rapides.', icon: 'Shield' },
      { title: '+35 000 Chaînes & VOD', desc: 'Accédez au plus grand catalogue mondial de chaînes nationales et internationales, ainsi qu\'à des milliers de films et séries à la demande mis à jour quotidiennement.', icon: 'Tv' },
      { title: 'Qualité 4K & Ultra HD réelle', desc: 'Tous nos serveurs gèrent le flux ultra haute définition pour une expérience immersive comme au cinéma.', icon: 'Zap' },
      { title: 'Compatibilité Universelle', desc: 'Fonctionne parfaitement sur l\'application officielle IPTV Smarters Pro, Smart TV, Firestick, Android, iOS, Windows, Mac et MAG.', icon: 'Smartphone' }
    ],
    pricingTitle: 'Nos Formules IPTV Premium',
    pricingSubtitle: 'Choisissez l\'offre idéale pour vos besoins. Tarification transparente et sans frais cachés.',
    plans: [
      {
        id: '1-mois',
        originalName: '1-mois',
        name: 'Forfait 1 Mois Premium',
        price: '12.99',
        period: '/ mois',
        desc: 'Idéal pour valider la qualité de nos serveurs sans engagement.',
        features: ['Activation automatique 24/7', 'Qualité 4K / UHD / FHD', '+35 000 Chaînes & VOD', 'Technologie Anti-Freeze v3.0', 'Support VIP 24/7', 'Appareil unique']
      },
      {
        id: '3-mois',
        originalName: '3-mois',
        name: 'Forfait 3 Mois Performance',
        price: '29.99',
        period: '/ 3 mois',
        desc: 'L\'équilibre parfait entre flexibilité et économies.',
        features: ['Activation automatique immédiate', 'Flux 4K & FHD stables', '+35 000 Chaînes & VOD', 'Serveurs redondants (Stabilité accrue)', 'Guide EPG Complet inclus', 'Support Prioritaire']
      },
      {
        id: '6-mois',
        originalName: '6-mois',
        name: 'Forfait 6 Mois Confort',
        price: '39.99',
        period: '/ 6 mois',
        desc: 'Le compromis idéal pour un divertissement constant à prix réduit.',
        features: ['Activation instantanée par SMS/Email', 'Qualité Ultra HD & 4K', '+35 000 Chaînes & VOD', 'Bande passante non bridée', 'Option Replay 7 jours', 'Support Priority VIP']
      },
      {
        id: '12-mois',
        originalName: '12-mois',
        name: 'Forfait 12 Mois Illimité',
        price: '59.99',
        period: '/ an',
        badge: 'Le Plus Populaire (Économisez 60%)',
        desc: 'Le prix imbattable pour une année complète de streaming sans limite.',
        features: ['Activation Instantanée & VIP', 'Qualité Exceptionnelle 4K & UHD', '+35 000 Chaînes & VOD Monde', 'Technologie Anti-Freeze Exclusive v3.0', 'Assistance Technique Live 24/7', 'Tous appareils compatibles', 'Connexion Stable Garantie']
      }
    ],
    reviewsTitle: 'Ce que pensent nos abonnés en France',
    reviewsSubtitle: 'Rejoignez plus de 850 utilisateurs satisfaits de notre qualité d\'image et support technique.',
    reviews: [
      { author: 'Jean-Pierre L.', city: 'Paris', text: 'Après avoir essayé 3 fournisseurs différents, j\'ai enfin trouvé la perle rare. Aucun buffering pendant le classico de football, la qualité d\'image en 4K est bluffante. Je recommande fortement !', rating: 5, date: 'Il y a 2 jours' },
      { author: 'Amandine R.', city: 'Lyon', text: 'Installation rapide en 5 minutes. J\'ai téléchargé IPTV Smarters Pro sur ma TV Samsung et j\'ai entré les codes fournis. Tout fonctionne parfaitement, mon fils adore les dessins animés !', rating: 5, date: 'Il y a 1 semaine' },
      { author: 'Karim B.', city: 'Marseille', text: 'Le support client via WhatsApp est exemplaire. Ils m\'ont guidé étape par étape tard le soir pour configurer ma clé Firestick. Le forfait 12 mois est rentabilisé dès le premier mois.', rating: 5, date: 'Il y a 3 jours' }
    ],
    faqTitle: 'Questions Fréquentes — FAQ',
    faqSubtitle: 'Des réponses claires pour vous guider dans votre souscription IPTV',
    faqs: [
      { q: 'Combien de temps prend l\'activation de mon abonnement ?', a: 'Dès que votre demande est validée, l\'activation est entièrement automatisée. Vous recevrez vos identifiants d\'accès uniques par e-mail et WhatsApp en moins de 10 minutes.' },
      { q: 'Comment fonctionne la technologie anti-freeze ?', a: 'Notre système surveille en temps réel l\'état des réseaux et bascule automatiquement les flux vers nos serveurs secondaires redondants si une surcharge est détectée. Cela élimine 99,99% des saccades habituelles.' },
      { q: 'Ai-je besoin d\'un décodeur spécial ?', a: 'Non, notre service fonctionne avec la majorité des appareils actuels : l\'application officielle IPTV Smarters Pro, Smart TV (Samsung, LG, Sony), box Android, Firestick, ordinateurs, Smartphones et tablettes.' }
    ]
  },
  
  // Germany/Austria targeting
  'germany': {
    countryName: 'Deutschland & Österreich',
    langCode: 'de',
    currency: 'EUR',
    currencySymbol: '€',
    focusKeywords: ['IPTV Kaufen', 'Stabil Server', 'Ohne Ruckeln'],
    seoTitle: '⭐ IPTV Kaufen Deutschland | Bester Stabiler Server Ohne Ruckeln 4K',
    seoDescription: 'Bester Premium IPTV Server für Deutschland & Österreich. Über 35.000 Sender & VOD in brillanter 4K/UHD Qualität. Exklusive High-Speed Anti-Freeze Technologie für Streaming ohne Ruckeln. Sofortige Aktivierung.',
    seoKeywords: 'iptv kaufen deutschland, bester iptv server, stabil iptv ohne ruckeln, hdtv deutsch, iptv oesterreich, iptv smarters pro de, premium streaming server',
    heroBadge: 'Premium-Angebot Deutschland & Österreich',
    heroTitle: 'Das stabilste Premium IPTV ohne Ruckeln',
    heroSubtitle: 'Vergessen Sie Pufferungen! Genießen Sie über 3.000 deutsche und internationale Sport- und Filmkanäle in bester 4K/UHD-Auflösung dank unserer fortschrittlichen Anti-Freeze-Server.',
    ctaButton: 'Jetzt Zugang Holen',
    ctaSubtext: 'Automatische Bereitstellung innerhalb von 10 Minuten — VIP Support 24/7',
    featuresTitle: 'Warum unser IPTV-Dienst die Nr. 1 in Deutschland ist',
    featuresSubtitle: 'Maximale Bandbreite und hochmoderne Server-Infrastruktur für anspruchsvolle Zuschauer',
    featuresList: [
      { title: 'Anti-Freeze v3.0 Server-Technologie', desc: 'Unsere Hochgeschwindigkeitsserver garantieren reibungsloses Live-Streaming von Sportereignissen und Filmen ohne jede Unterbrechung.', icon: 'Shield' },
      { title: 'Über 35.000 Live-Sender & VODs', desc: 'Greifen Sie auf weltweite TV-Sender, Live-Sportkanäle, topaktuelle Serien und Filme mit regelmäßigen Updates in bester Ton- und Bildqualität zu.', icon: 'Tv' },
      { title: 'Echte 4K & UHD Streaming', desc: 'Keine künstliche Skalierung. Erleben Sie Ihre Sportereignisse und Blockbuster in messerscharfer Ultra-HD Qualität.', icon: 'Zap' },
      { title: 'Universelle Kompatibilität', desc: 'Kompatibel mit IPTV Smarters Pro, Apple TV, Firestick, Smart TVs (Samsung, LG), Smartphones, Android-Boxen und PCs.', icon: 'Smartphone' }
    ],
    pricingTitle: 'Unsere IPTV-Preispakete',
    pricingSubtitle: 'Transparente Tarife für jeden Bedarf. Wählen Sie Ihr optimales Paket für grenzenloses Fernsehen.',
    plans: [
      {
        id: '1-mois',
        originalName: '1-mois',
        name: '1 Monat Premium',
        price: '12.99',
        period: '/ Monat',
        desc: 'Ideal zum unverbindlichen Testen unserer hervorragenden Qualität.',
        features: ['Sofortige Aktivierung rund um die Uhr', '4K / UHD / FHD Qualität', 'Über 35.000 Sender & VODs', 'Anti-Freeze v3.0 Technologie', '24/7 VIP Kundenservice', '1 Gerät aktiv']
      },
      {
        id: '3-mois',
        originalName: '3-mois',
        name: '3 Monate Performance',
        price: '29.99',
        period: '/ 3 Monate',
        desc: 'Die beliebte flexible Wahl mit erstklassigem Preis-Leistungs-Verhältnis.',
        features: ['Automatisierte Zustellung', 'Kristallklares UHD & FHD', 'Über 35.000 Sender & VODs', 'Redundante Stream-Server', 'Kompletter EPG-Guide', 'Bevorzugter Support']
      },
      {
        id: '6-mois',
        originalName: '6-mois',
        name: '6 Monate Komfort',
        price: '39.99',
        period: '/ 6 Monate',
        desc: 'Erhebliche Ersparnis bei voller Senderauswahl und exklusivem Zugriff.',
        features: ['Sofortige Freischaltung', 'Beste 4K & Ultra HD Streams', 'Über 35.000 Sender & VODs', 'Unbegrenzte Bandbreite', '7-Tage-Replay-Funktion', 'VIP-Support-Chat']
      },
      {
        id: '12-mois',
        originalName: '12-mois',
        name: '12 Monate Unbegrenzt',
        price: '59.99',
        period: '/ Jahr',
        badge: 'Bestseller (Sie sparen 60%)',
        desc: 'Die ultimative Wahl für ein ganzes Jahr sorgenfreies Fernsehen in Spitzenqualität.',
        features: ['VIP Express-Aktivierung', 'Echte 4K & UHD Ultra-Stabilität', 'Das komplette weltweite Sender-Paket', 'Exklusive Anti-Locking Technologie', 'Technischer Elite-Support 24/7', 'Kompatibel mit allen Endgeräten', 'Garantiert stabile Verbindung']
      }
    ],
    reviewsTitle: 'Kundenbewertungen aus Deutschland & Österreich',
    reviewsSubtitle: 'Über 850 verifizierte Kunden nutzen täglich unsere stabile Streaming-Infrastruktur.',
    reviews: [
      { author: 'Markus W.', city: 'München', text: 'Endlich ein IPTV-Anbieter, der hält, was er verspricht. Die Bundesliga läuft am Samstag in Top-4K-Qualität ohne Ruckeln durch. Der Server ist extrem stabil!', rating: 5, date: 'Vor 2 Tagen' },
      { author: 'Lukas S.', city: 'Wien', text: 'Die Einrichtung war ein Kinderspiel. Ich habe das Passwort per WhatsApp erhalten, auf meinem Firestick eingetippt und hatte sofort alle Sender. Genialer Kundendienst!', rating: 5, date: 'Vor 4 Tagen' },
      { author: 'Sabine M.', city: 'Hamburg', text: 'Der Support ist super nett und antwortet blitzschnell auf Deutsch über WhatsApp. Die Filmauswahl ist gigantisch, wir haben unser teures Kabel-TV bereits gekündigt!', rating: 5, date: 'Vor 1 Woche' }
    ],
    faqTitle: 'Häufig gestellte Fragen — FAQ',
    faqSubtitle: 'Alles, was Sie über unsere Premium-IPTV-Dienste wissen müssen',
    faqs: [
      { q: 'Wie schnell erhalte ich meine Zugangsdaten?', a: 'Nach der Freigabe erfolgt die Aktivierung vollautomatisch. Sie erhalten Ihre Zugangsdaten (M3U Link & Xtream-Codes) innerhalb von 10 Minuten per E-Mail und WhatsApp.' },
      { q: 'Was bedeutet die Anti-Freeze-Technologie?', a: 'Unsere intelligente Lastverteilung leitet die Streams bei Netzwerkschwankungen in Echtzeit über redundante Ersatzserver um. Dadurch wird lästiges Buffering zu 99,99 % verhindert.' },
      { q: 'Welche Apps muss ich installieren?', a: 'Wir empfehlen die offizielle und bewährte IPTV Smarters Pro App. Sie können jedoch auch jede beliebige andere App wie TiviMate, IBO Player oder GSE Smart IPTV verwenden.' }
    ]
  },
  
  // Italy targeting
  'italy': {
    countryName: 'Italia',
    langCode: 'it',
    currency: 'EUR',
    currencySymbol: '€',
    focusKeywords: ['Abbonamento IPTV', 'Alta Qualità', 'Streaming Stabile'],
    seoTitle: '⭐ Miglior Abbonamento IPTV Italia | Canali HD & VOD Senza Blocchi 4K',
    seoDescription: 'Scopri il miglior abbonamento IPTV in Italia con IPTV Smarters Pro. Oltre 35.000 canali TV, serie e sport in streaming Ultra HD 4K stabile. Server veloci dotati di tecnologia Anti-Freeze.',
    seoKeywords: 'abbonamento iptv italia, migliore iptv stabile, lista iptv premium, iptv italia senza blocchi, acquisto iptv, iptv smarters pro ufficiale, streaming calcio 4k',
    heroBadge: 'Offerta Limitata Italia 2026',
    heroTitle: 'Il miglior abbonamento IPTV in Italia senza blocchi',
    heroSubtitle: 'La stabilità dello streaming si unisce alla massima definizione. Oltre 35.000 canali nazionali ed esteri in 4K ad attivazione istantanea con server dedicati Anti-Freeze.',
    ctaButton: 'Ottieni Accesso Immediato',
    ctaSubtext: 'Configurazione rapida in meno di 10 minuti — Assistenza WhatsApp VIP 24/7',
    featuresTitle: 'Perché siamo il servizio IPTV preferito dagli italiani ?',
    featuresSubtitle: 'Server locali superveloci per garantire trasmissioni in diretta in altissima qualità',
    featuresList: [
      { title: 'Tecnologia Anti-Freeze Elevata', desc: 'Regolazioni automatiche della larghezza di banda per evitare buffering sui canali sportivi e grandi eventi live.', icon: 'Shield' },
      { title: '+35.000 Canali e Film VOD', desc: 'Una libreria immensa con canali italiani ed esteri, serie TV, cinema e intrattenimento aggiornata costantemente.', icon: 'Tv' },
      { title: 'Qualità di Immagine Ultra HD 4K', desc: 'I nostri canali sono ottimizzati ed erogati con compressione avanzata per garantire video cristallini.', icon: 'Zap' },
      { title: 'Facile da Configurare su Tutto', desc: 'Perfetto su IPTV Smarters Pro ufficiale, Smart TV (LG, Samsung), Firestick Amazon, computer e dispositivi mobile.', icon: 'Smartphone' }
    ],
    pricingTitle: 'Piani Abbonamento IPTV Premium',
    pricingSubtitle: 'Nessun costo di attivazione o vincolo nascosto. Scegli l\'opzione perfetta per te.',
    plans: [
      {
        id: '1-mois',
        originalName: '1-mois',
        name: 'Piano 1 Mese Premium',
        price: '12.99',
        period: '/ mese',
        desc: 'Ottima soluzione per testare la fluidità dei nostri server premium.',
        features: ['Attivazione automatica 24/7', 'Qualità 4K / UHD / FHD', 'Oltre 35.000 Canali & VOD', 'Tecnologia Anti-Freeze', 'Supporto VIP 24/7', 'Per 1 dispositivo']
      },
      {
        id: '3-mois',
        originalName: '3-mois',
        name: 'Piano 3 Mesi Extra',
        price: '29.99',
        period: '/ 3 mesi',
        desc: 'La scelta flessibile e conveniente per il tuo intrattenimento.',
        features: ['Configurazione istantanea', 'Immagine stabile HD/4K', 'Oltre 35.000 Canali & VOD', 'Server ridondanti veloci', 'Guida programmi EPG', 'Assistenza prioritaria']
      },
      {
        id: '6-mois',
        originalName: '6-mois',
        name: 'Piano 6 Mesi Confort',
        price: '39.99',
        period: '/ 6 mesi',
        desc: 'Risparmio garantito con canali illimitati e la massima qualità tecnica.',
        features: ['Consegna immediata dei codici', 'Qualità Ultra HD & 4K premium', 'Oltre 35.000 Canali & VOD', 'Larghezza di banda non limitata', 'Funzione Replay disponibile', 'Supporto continuo VIP']
      },
      {
        id: '12-mois',
        originalName: '12-mois',
        name: 'Piano 12 Mesi Gold',
        price: '59.99',
        period: '/ anno',
        badge: 'Miglior Valore (Risparmi il 60%)',
        desc: 'Un intero anno di streaming ad alta quota senza lag o disconnessioni.',
        features: ['Aria di attivazione VIP espressa', 'Esperienza 4K HDR ultra-stabile', 'Il pacchetto canali completo mondiale', 'Tecnologia esclusiva Anti-Freeze v3.0', 'Assistenza tecnica VIP Live 24/7', 'Perfettamente compatibile con tutto', 'Connessione stabile garantita']
      }
    ],
    reviewsTitle: 'Le recensioni dei nostri clienti in Italia',
    reviewsSubtitle: 'Oltre 850 clienti soddisfatti confermano l\'affidabilità costante del nostro servizio.',
    reviews: [
      { author: 'Francesco M.', city: 'Roma', text: 'Finalmente un IPTV serio in Italia. Il campionato si vede benissimo in 4K e non si è mai bloccato durante le partite clou della domenica. Supporto via WhatsApp davvero cordiale.', rating: 5, date: '2 giorni fa' },
      { author: 'Giulia P.', city: 'Milano', text: 'Incredibilmente veloce! Ho comprato il piano 12 mesi, ho installato IPTV Smarters Pro sulla mia Smart TV e dopo 5 minuti stavo già guardando il mio film preferito. Fantastico.', rating: 5, date: '1 settimana fa' },
      { author: 'Alessio D.', city: 'Napoli', text: 'Ottimo servizio, l\'assistenza mi ha spiegato passo-passo la configurazione per Firestick. La qualità video è pazzesca e la VOD è sempre aggiornata con gli ultimi film.', rating: 5, date: '3 giorni fa' }
    ],
    faqTitle: 'Domande Frequenti — FAQ',
    faqSubtitle: 'Tutte le risposte di cui hai bisogno prima di abbonarti',
    faqs: [
      { q: 'Come ricevo le mie credenziali d\'accesso?', a: 'Subito dopo aver completato l\'ordine, l\'attivazione è istantanea. Riceverai via e-mail e WhatsApp i dati Xtream-Codes e l\'indirizzo M3U compilato in meno di 10 minuti.' },
      { q: 'Il servizio funziona all\'estero?', a: 'Sì! Il nostro abbonamento è globale. Puoi utilizzarlo in qualsiasi paese con una normale connessione Internet, senza alcuna limitazione geografica o necessità di VPN.' },
      { q: 'Cosa devo fare se ho bisogno di assistenza?', a: 'Siamo disponibili 24 ore su 24, 7 giorni su 7 tramite live chat di WhatsApp. Il nostro team tecnico risolverà qualsiasi configurazione o dubbio immediatamente.' }
    ]
  },
  
  // Spain targeting
  'spain': {
    countryName: 'España',
    langCode: 'es',
    currency: 'EUR',
    currencySymbol: '€',
    focusKeywords: ['Lista IPTV Premium', 'Servidor Estable', 'Sin Cortes'],
    seoTitle: '⭐ Lista IPTV Premium España | Servidor Estable Sin Cortes en 4K UHD',
    seoDescription: 'Accede a la mejor lista IPTV Premium en España con IPTV Smarters Pro. Más de 35.000 canales nacionales e internacionales y películas VOD. Tecnología exclusiva Anti-Freeze sin cortes.',
    seoKeywords: 'lista iptv premium espana, mejor servidor iptv estable, iptv sin cortes, comprar iptv espana, iptv smarters pro oficial, futbol directo 4k, vlc m3u espana',
    heroBadge: 'Selección Exclusiva España 2026',
    heroTitle: 'La lista IPTV Premium líder en España y sin cortes',
    heroSubtitle: 'Disfruta de la máxima estabilidad y definición en tu pantalla. Más de 35.000 canales de televisión premium, deportes y series en 4K Ultra HD gracias a nuestros servidores Anti-Freeze.',
    ctaButton: 'Obtener Mi Lista al Instante',
    ctaSubtext: 'Envío automático por correo y WhatsApp en 10 min — Soporte VIP 24/7',
    featuresTitle: '¿Por qué elegir nuestro servicio IPTV en España?',
    featuresSubtitle: 'Garantía de rendimiento y velocidad de transmisión para todos tus dispositivos',
    featuresList: [
      { title: 'Tecnología Avanzada Anti-Conxelación', desc: 'Olvídate de las odiosas pausas. Nuestros servidores inteligentes balancean la carga de tráfico de forma instantánea.', icon: 'Shield' },
      { title: 'Catálogo de +35.000 Canales y VOD', desc: 'Todos tus canales favoritos de España, canales internacionales, películas taquilleras y series completas con audio en español.', icon: 'Tv' },
      { title: 'Calidad 4K UHD Real y Fluida', desc: 'Transmisión optimizada con el códec más avanzado para que disfrutes de imágenes super nítidas como en el estadio.', icon: 'Zap' },
      { title: 'Fácil Conexión en Cualquier Equipo', desc: 'Instalación sencilla en IPTV Smarters Pro oficial, Smart TV (Samsung, LG), Amazon Fire TV Stick, móviles, tablets y PCs.', icon: 'Smartphone' }
    ],
    pricingTitle: 'Planes de Suscripción IPTV Premium',
    pricingSubtitle: 'Elige la duración de tu pack. Precios claros, activación inmediata con soporte de por vida.',
    plans: [
      {
        id: '1-mois',
        originalName: '1-mois',
        name: 'Suscripción 1 Mes',
        price: '12.99',
        period: '/ mes',
        desc: 'Ideal para experimentar la calidad de nuestro servidor IPTV estable de manera temporal.',
        features: ['Activación automática 24/7', 'Resolución 4K / UHD / FHD', 'Más de 35.000 Canales & VOD', 'Tecnología sin cortes', 'Soporte al cliente 24/7', 'Acceso para 1 dispositivo']
      },
      {
        id: '3-mois',
        originalName: '3-mois',
        name: 'Suscripción 3 Meses',
        price: '29.99',
        period: '/ 3 meses',
        desc: 'Excelente opción intermedia con descuento para tu TV diario.',
        features: ['Configuración súper rápida', 'Imágenes en calidad 4K/FHD', 'Más de 35.000 Canales & VOD', 'Servidores dedicados redundantes', 'Guía completa de canales (EPG)', 'Soporte Prioritario']
      },
      {
        id: '6-mois',
        originalName: '6-mois',
        name: 'Suscripción 6 Meses',
        price: '39.99',
        period: '/ 6 meses',
        desc: 'El plan ideal para tener acceso continuo a tus canales preferidos a mitad de precio.',
        features: ['Entrega inmediata vía WhatsApp/Email', 'Señal UHD y 4K ultra estable', 'Más de 35.000 Canales & VOD', 'Sin límites de velocidad de Internet', 'Opción de Replay (pérdete nada)', 'Prioridad técnica VIP']
      },
      {
        id: '12-mois',
        originalName: '12-mois',
        name: 'Suscripción 12 Meses',
        price: '59.99',
        period: '/ año',
        badge: 'Mejor Opción (Ahorras un 60%)',
        desc: 'Un año entero de tranquilidad y entretenimiento premium en máxima definición.',
        features: ['Prioridad de activación Express VIP', 'Calidad excepcional 4K HDR', 'Lista de canales mundial completa', 'Tecnología exclusiva Anti-Freeze v3.0', 'Soporte y asistencia WhatsApp 24/7', 'Totalmente compatible con todo', 'Garantía de servicio garantizada']
      }
    ],
    reviewsTitle: 'Opiniones de nuestros suscriptores en España',
    reviewsSubtitle: 'Únete a las más de 850 valoraciones 5 estrellas de usuarios reales sobre el mejor servidor.',
    reviews: [
      { author: 'Mateo R.', city: 'Madrid', text: 'Esta es la mejor lista de canales IPTV que he probado. El fútbol de la Champions y de la Liga española se ve del tirón, sin cortes ni retardos molestos. Una pasada de verdad.', rating: 5, date: 'Hace 2 días' },
      { author: 'Sofía G.', city: 'Barcelona', text: 'Muy contenta con el servicio. El soporte de ayuda técnica me ayudó a ponerlo en marcha en mi Chromecast con la aplicación IPTV Smarters Pro en 5 minutos. Calidad excelente.', rating: 5, date: 'Hace 1 semana' },
      { author: 'Diego V.', city: 'Valencia', text: 'Servicio al cliente excelente y muy eficaces. Respondieron mis dudas por WhatsApp al instante. El paquete de películas VOD es enorme y con excelente calidad.', rating: 5, date: 'Hace 3 días' }
    ],
    faqTitle: 'Preguntas Frecuentes — FAQ',
    faqSubtitle: 'Resolvemos tus inquietudes para facilitarte el acceso',
    faqs: [
      { q: '¿Cuánto tardan en enviarme los datos de acceso?', a: 'Nuestro sistema automatizado completa la activación en menos de 10 minutos desde la validación del pedido, enviándote los datos de Xtream-Codes a tu e-mail y canal de WhatsApp.' },
      { q: '¿Se requiere antena parabólica para que funcione?', a: 'No, nuestro servicio es 100% digital a través de Internet. No necesitas hardware, antenas ni decodificadores antiguos, se instala de manera muy sencilla mediante apps.' },
      { q: '¿Qué formas de soporte ofrecen?', a: 'Ofrecemos soporte técnico prioritario 24 horas del día, los 7 días de la semana mediante nuestro número oficial de de WhatsApp.' }
    ]
  },
  
  // Belgium / Netherlands targeting (Dutch/Flemish - lowPrice, highPrice, EUR)
  'belgium-netherlands': {
    countryName: 'België & Nederland',
    langCode: 'nl',
    currency: 'EUR',
    currencySymbol: '€',
    focusKeywords: ['IPTV Abonnement', 'Snelle Activering', 'Stabiel Streamen'],
    seoTitle: '⭐ #1 IPTV Abonnement Nederland & België | Stabiel 4K Zonder Buffering',
    seoDescription: 'Kies het beste IPTV abonnement in Nederland en België met IPTV Smarters Pro. Meer dan 35.000 live zenders, sportkanalen & VOD films. Snelle activering en 100% stabiele Anti-Freeze technologie.',
    seoKeywords: 'iptv abonnement nederland, beste iptv belgie, snelle activering iptv, stabiele iptv streamen, iptv kopen, iptv smarters pro nederlands, voetbal live streamen',
    heroBadge: 'Premium Deals Nederland & België',
    heroTitle: 'Het meest stabiele IPTV Abonnement met snelle activering',
    heroSubtitle: 'Geniet van haarscherpe 4K kwaliteit zonder haperingen. Meer dan 35.000 nationale en internationale tv-kanalen direct geactiveerd door onze exclusieve Anti-Freeze netwerken.',
    ctaButton: 'Activeer Direct Mijn Toegang',
    ctaSubtext: 'Binnen 10 minuten activering via E-mail & WhatsApp — 24/7 VIP Support',
    featuresTitle: 'Waarom wij de absolute nummer 1 in de Benelux zijn',
    featuresSubtitle: 'Krachtige serverarchitectuur en snelle verbindingen ontworpen voor high-end streaming',
    featuresList: [
      { title: 'Anti-Freeze v3.0 Systeem', desc: 'Nooit meer last van irritant bufferen tijdens livestreams, topwedstrijden of films dankzij slimme netwerkrouting.', icon: 'Shield' },
      { title: 'Meer dan 35.000 TV Zenders & VOD', desc: 'Toegang tot alle Nederlandse, Belgische en internationale premium zenders inclusief de nieuwste films en series met wekelijkse updates.', icon: 'Tv' },
      { title: 'Haarscherpe 4K UHD Resolutie', desc: 'Zuiverste bioscoop- en stadionervaring rechtstreeks op uw televisie via onze geoptimaliseerde mediastreams.', icon: 'Zap' },
      { title: 'Volledige App Compatibiliteit', desc: 'Eenvoudige installatie op de officiële IPTV Smarters Pro app, Smart TV (Samsung, LG), Firestick, PC en mobiele toestellen.', icon: 'Smartphone' }
    ],
    pricingTitle: 'Onze Premium IPTV Pakketten',
    pricingSubtitle: 'Transparante prijzen zonder verborgen extra kosten. Kies hier de gewenste duur.',
    plans: [
      {
        id: '1-mois',
        originalName: '1-mois',
        name: '1 Maand Premium',
        price: '12.99',
        period: '/ maand',
        desc: 'Mooi instapmodel om vrijblijvend de stabiliteit van onze servers te ervaren.',
        features: ['Snelle activering 24/7', 'Echte 4K / UHD / FHD kwaliteit', '+35.000 Zenders & VODs', 'Geavanceerde Anti-Freeze v3.0', '24/7 VIP Klantenservice', 'Actief op 1 apparaat']
      },
      {
        id: '3-mois',
        originalName: '3-mois',
        name: '3 Maanden Voordeel',
        price: '29.99',
        period: '/ 3 maanden',
        desc: 'Een uitstekende en populaire keuze met gereduceerd tarief.',
        features: ['Snelle levering per e-mail', 'Stabiele 4K & FHD streams', '+35.000 TV zenders & VODs', 'Redundante backup-servers', 'Complete EPG (Zendgids)', 'VIP support prioriteit']
      },
      {
        id: '6-mois',
        originalName: '6-mois',
        name: '6 Maanden Comfort',
        price: '39.99',
        period: '/ 6 maanden',
        desc: 'Meer gemak en gegarandeerd probleemloos streamen voor een scherpe prijs.',
        features: ['Directe levering via WhatsApp/Email', 'Ultieme Ultra HD & 4K streams', '+35.000 Zenders & VODs', 'Onbeperkte netwerksnelheid', '7 dagen terugkijk optie', 'VIP Support Chat']
      },
      {
        id: '12-mois',
        originalName: '12-mois',
        name: '12 Maanden Onbeperkt',
        price: '59.99',
        period: '/ jaar',
        badge: 'Meest Gekozen Option (Bespaar 60%)',
        desc: 'Een heel jaar zorgeloos genieten van topkwaliteit televisie, sport en entertainment.',
        features: ['VIP Express Activering', 'Echte 4K & UHD stabiliteit', 'Volledige wereldwijde kanalenlijst', 'Anti-Freezing v3.0 Technologie', '24/7 Live WhatsApp Elite-hulp', 'Geschikt voor alle apparaten', 'Gegarandeerde netwerkverbinding']
      }
    ],
    reviewsTitle: 'Klantervaringen uit Nederland & België',
    reviewsSubtitle: 'Sluit u aan bij de 850+ tevreden abonnees die live sport en series stabiel bekijken.',
    reviews: [
      { author: 'Robert V.', city: 'Rotterdam', text: 'Eerste IPTV aanbieder die echt en betrouwbaar werkt. De live voetbalwedstrijden en formule 1 streams draaien perfect in 4K zonder te haperen. Dikke 5 sterren.', rating: 5, date: '2 dagen geleden' },
      { author: 'Annelies D.', city: 'Antwerpen', text: 'Supersnelle levering. Na betaling binnen 5 minuten m\'n inlogcodes ontvangen op WhatsApp. De IPTV Smarters app is heel makkelijk te configureren.', rating: 5, date: '1 week geleden' },
      { author: 'Sven K.', city: 'Utrecht', text: 'Erg tevreden over de snelle hulp via WhatsApp. Ze reageerden meteen en hielpen me met de installatie op m\'n Chromecast. De filmcollectie is enorm!', rating: 5, date: '3 dagen geleden' }
    ],
    faqTitle: 'Veelgestelde Vragen — FAQ',
    faqSubtitle: 'Veelgestelde vragen over onze IPTV diensten',
    faqs: [
      { q: 'Hoe snel wordt mijn verbinding geactiveerd?', a: 'Dankzij onze geavanceerde automatisering ontvangt u uw Xtream-inloggegevens en M3U-url binnen 10 minuten na uw bestelling in uw e-mail en op WhatsApp.' },
      { q: 'Wat is de anti-freeze technologie?', a: 'Onze techniek detecteert eventuele netwerkschommelingen en leidt de stream-data realtime om via onze snelle backup-servers. Hierdoor behoudt u die soepele stream.' },
      { q: 'Heb ik een VPN nodig?', a: 'Nee, een VPN is niet verplicht. Onze servers maken gebruik van beveiligde dataverbindingen die stabiel en anoniem streamen mogelijk maken bij elke provider.' }
    ]
  },
  
  // United Kingdom / Ireland targeting (English language - GBP / EUR currency dynamically)
  'uk-ireland': {
    countryName: 'United Kingdom & Ireland',
    langCode: 'en',
    currency: 'GBP', // Will adjust based on exact slug preference
    currencySymbol: '£',
    focusKeywords: ['Premium IPTV Server', '4K Quality', '24/7 Support'],
    seoTitle: '⭐ Best Premium IPTV Server UK & Ireland | Over 35,000 Channels 4K Quality',
    seoDescription: 'Unlock the #1 premium IPTV subscription in the UK and Ireland. 35,000+ live HD/4K TV channels, soccer networks, and raw UHD movies. Smooth anti-freeze system with instant activation.',
    seoKeywords: 'premium iptv server uk, best iptv ireland, 4k iptv subscription, instant activation, anti freeze tv server, iptv box firestick, sports stream 4k',
    heroBadge: 'Special Offer UK & Ireland 2026',
    heroTitle: 'The most stable Premium IPTV Server in UK & Ireland',
    heroSubtitle: 'Say goodbye to buffering! Stream over 35,000 premium channels, sports events, and UHD movies in crisp 4K with our world-class Anti-Freeze infrastructure.',
    ctaButton: 'Activate My Instant Access',
    ctaSubtext: '10-minute automated delivery via Email & WhatsApp — VIP Elite Support 24/7',
    featuresTitle: 'Why We Are Rated the #1 IPTV Provider',
    featuresSubtitle: 'High-speed dedicated streaming servers engineered to eliminate delays and limits',
    featuresList: [
      { title: 'Anti-Freeze v3.0 Technology', desc: 'No buffering, stuttering, or pixelation on major sport games or trending releases thanks to our advanced load-balancing.', icon: 'Shield' },
      { title: '35,000+ Live Channels & VODs', desc: 'Access an unlimited library of premium UK, Ireland, and global television channels, blockbuster movies, and top series.', icon: 'Tv' },
      { title: 'True 4K & Ultra HD Streams', desc: 'Enjoy actual cinema and stadium projection with raw high bit-rate source files on our elite servers.', icon: 'Zap' },
      { title: 'Easy Setup on Any App', desc: 'Setup is extremely quick on the official IPTV Smarters Pro app, Firestick, Smart TV, Android box, iOS, Mac, and PC.', icon: 'Smartphone' }
    ],
    pricingTitle: 'Choose Your Premium IPTV Plan',
    pricingSubtitle: 'Flat-rate transparent packages with zero setup fee. VIP tech support included.',
    plans: [
      {
        id: '1-mois',
        originalName: '1-mois',
        name: '1 Month Custom Package',
        price: '12.99',
        period: '/ month',
        desc: 'Test-drive the premium streaming quality on our top server with zero commitment.',
        features: ['Automated delivery 24/7', 'Brilliant 4K / UHD / FHD streams', '+35,000 channels & VODs', 'Advanced Anti-Freeze v3.0', '24/7 Live Elite Support', 'Single connection']
      },
      {
        id: '3-mois',
        originalName: '3-mois',
        name: '3 Months Value Pack',
        price: '29.99',
        period: '/ 3 months',
        desc: 'Flexible and highly highly cost-effective and steady option for your TV requirements.',
        features: ['Instant setup delivery', 'Smooth 4K & FHD video feeds', '+35,000 channels & VODs', 'Redundant streaming routes', 'Fully integrated TV guide (EPG)', 'Priority VIP help Desk']
      },
      {
        id: '6-mois',
        originalName: '6-mois',
        name: '6 Months Ultimate Pack',
        price: '39.99',
        period: '/ 6 months',
        desc: 'Massive discount on our elite network with uninterrupted support and service.',
        features: ['Credentials in 10 minutes', 'High bitrate Ultra HD & 4K quality', '+35,000 channels & VODs', 'Unlimited download bandwidth', '7-day catch-up / Replay option', 'Instant VIP helpline']
      },
      {
        id: '12-mois',
        originalName: '12-mois',
        name: '12 Months VIP Access',
        price: '59.99',
        period: '/ year',
        badge: 'Best Value Deal (Save 60%)',
        desc: 'An entire year of continuous high-fidelity television, sporting events, and VOD entertainment.',
        features: ['Express Priority Activation', 'True 4K & UHD Ultra-Stabilitity', 'Full worldwide package unlocked', 'Elite Anti-Freeze Splicing Technology', 'Elite Priority Line 24/7 Chat', 'Universally supported', 'Robust Up-time Guarantee']
      }
    ],
    reviewsTitle: 'What our members write about us',
    reviewsSubtitle: 'See why more than 850 verified premium users trust our service every single day.',
    reviews: [
      { author: 'Liam H.', city: 'London', text: 'Hands down the best stable server in the UK. I haven\'t seen a single buffer cycle during the weekend Premier League. The 4K streams are incredibly sharp. Highly recommend them!', rating: 5, date: '2 days ago' },
      { author: 'Sarah M.', city: 'Dublin', text: 'Lightning fast setup! Ordered the 12-month package, got credentials via WhatsApp and email, and had the IPTV Smarters Pro app working in 5 minutes with all Irish & UK channels.', rating: 5, date: '1 week ago' },
      { author: 'James O.', city: 'Manchester', text: 'Incredibly professional team. They answered my setup questions fast on WhatsApp at late night. The Movie library is massive, and picture quality is second to none.', rating: 5, date: '3 days ago' }
    ],
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Simple answers to help you configure your premium IPTV package',
    faqs: [
      { q: 'How long until I receive my codes?', a: 'Once payment is processed, activation begins automatically. Your Xtream login codes (username, password, port) and M3U playlist link will be sent in less than 10 minutes.' },
      { q: 'Can I use this on different devices?', a: 'Absolutely. You can download and run the service on the official IPTV Smarters Pro app on Firestick, Samsung or LG Smart TVs, Apple iOS, Android, and Windows PCs.' },
      { q: 'Is there a guarantee with my annual subscription?', a: 'Yes. We offer fully-configured redundant pipelines and a guaranteed stability SLA. Our customer success team is on active standby 24/7 to solve any issues.' }
    ]
  }
};

// Helper to determine config key from route slug
function getConfigKey(slug: string): string {
  const norm = slug.toLowerCase();
  
  // Explicit high-conversion slugs matching
  if (
    norm.includes('france') || 
    norm.includes('belgique') ||
    norm.includes('belgi') ||
    norm.includes('french')
  ) {
    if (norm.includes('belgique') || norm.includes('belgie') || norm.includes('belg')) {
      return 'belgium-netherlands';
    }
    return 'france';
  }
  if (
    norm.includes('germany') || 
    norm.includes('deutschland') || 
    norm.includes('austria') || 
    norm.includes('oesterreich') || 
    norm.includes('stabil')
  ) {
    return 'germany';
  }
  if (
    norm.includes('italy') || 
    norm.includes('italia') || 
    norm.includes('italiano') || 
    norm.includes('miglior-iptv') || 
    norm.includes('stabile')
  ) {
    return 'italy';
  }
  if (
    norm.includes('spain') || 
    norm.includes('espan') || 
    norm.includes('castellano') || 
    norm.includes('premium') || 
    norm.includes('cortes')
  ) {
    // If it contains premium or cortes, verify it is Spain or we default to Spain since other countries have distinct keys or use other terms
    return 'spain';
  }
  if (
    norm.includes('netherland') || 
    norm.includes('dutch') || 
    norm.includes('nederlands') || 
    norm.includes('kopen')
  ) {
    return 'belgium-netherlands';
  }
  if (
    norm.includes('uk') || 
    norm.includes('ireland') || 
    norm.includes('united-kingdom') || 
    norm.includes('reliable')
  ) {
    return 'uk-ireland';
  }
  
  // Default fallback is English if nothing detected
  return 'uk-ireland';
}

export default function CountryLanding() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Extract slug name from the URL path: e.g. /iptv-subscription-france -> "iptv-subscription-france"
  const rawSlug = currentPath.split('/').filter(Boolean)[0] || 'best-iptv-uk';
  const configKey = getConfigKey(rawSlug);
  const content = COUNTRY_CONFIGS[configKey];
  
  // Determine correct currency symbol and price modifications
  const isIrelandOrEuroZone = rawSlug.toLowerCase().includes('ireland') || rawSlug.toLowerCase().includes('austria') || rawSlug.toLowerCase().includes('france') || rawSlug.toLowerCase().includes('germany') || rawSlug.toLowerCase().includes('italy') || rawSlug.toLowerCase().includes('spain') || rawSlug.toLowerCase().includes('belgium');
  
  const currencySymbol = (content.currency === 'GBP' && !isIrelandOrEuroZone) ? '£' : '€';
  const currencyCode = (content.currency === 'GBP' && !isIrelandOrEuroZone) ? 'GBP' : 'EUR';

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Auto scroll to pricing when clicking CTA
  const scrollToPricing = () => {
    document.getElementById('pricing-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper to compile dynamic WhatsApp link based on plane
  const getWhatsAppLink = (planName: string, price: string) => {
    const phone = "447853159847";
    let message = "";
    if (content.langCode === 'fr') {
      message = `Bonjour, je souhaite souscrire au forfait ${planName} (${price}${currencySymbol}) ou obtenir des informations pour mon pays (${content.countryName}).`;
    } else if (content.langCode === 'de') {
      message = `Hallo, ich möchte das Paket abonnieren: ${planName} (${currencySymbol}${price}) für mein Land (${content.countryName}).`;
    } else if (content.langCode === 'it') {
      message = `Buongiorno, vorrei abbonarmi al pacchetto ${planName} (${price}${currencySymbol}) per il mio paese (${content.countryName}).`;
    } else if (content.langCode === 'es') {
      message = `Hola, me gustaría suscribirme al plan ${planName} (${price}${currencySymbol}) para mi país (${content.countryName}).`;
    } else if (content.langCode === 'nl') {
      message = `Hallo, ik wil me graag abonneren op het pakket ${planName} (${price}${currencySymbol}) voor mijn land (${content.countryName}).`;
    } else {
      message = `Hello, I would like to subscribe to the ${planName} (${currencySymbol}${price}) package for my country (${content.countryName}).`;
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-slate-950 text-white selection:bg-gold selection:text-black">
      <Helmet>
        {/* Dynamic high-CTR SEO title and description tailored in the native language */}
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta name="keywords" content={`${content.seoKeywords}, ${content.focusKeywords.join(', ')}`} />
        
        {/* Canonical Link */}
        <link rel="canonical" href={`https://iptvsmartersprofficiel.shop/${rawSlug}`} />

        {/* Dynamic Language Lang code */}
        <html lang={content.langCode} />

        {/* Open Graph Tags for conversion on social feeds */}
        <meta property="og:title" content={`${content.seoTitle} 🚀`} />
        <meta property="og:description" content={content.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://iptvsmartersprofficiel.shop/${rawSlug}`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200" />
        <meta property="og:locale" content={
          content.langCode === 'fr' 
            ? (rawSlug.toLowerCase().includes('belg') ? 'fr_BE' : 'fr_FR') 
            : content.langCode === 'de' 
              ? (rawSlug.toLowerCase().includes('oest') || rawSlug.toLowerCase().includes('aust') ? 'de_AT' : 'de_DE') 
              : content.langCode === 'it' 
                ? 'it_IT' 
                : content.langCode === 'es' 
                  ? 'es_ES' 
                  : content.langCode === 'nl' 
                    ? 'nl_NL' 
                    : 'en_GB'
        } />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.seoTitle} />
        <meta name="twitter:description" content={content.seoDescription} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200" />

        {/* Dynamic Rich Snippets / Google Rating & Product JSON-LD schema with European formatting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `Abonnement IPTV Smarters Pro Premium - ${content.countryName}`,
            "description": content.seoDescription,
            "image": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200",
            "brand": {
              "@type": "Brand",
              "name": "IPTV Smarters Pro"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": content.plans[0].price,
              "highPrice": content.plans[content.plans.length - 1].price,
              "priceCurrency": currencyCode,
              "offerCount": content.plans.length.toString(),
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "850",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://iptvsmartersprofficiel.shop/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": content.countryName,
                "item": `https://iptvsmartersprofficiel.shop/${rawSlug}`
              }
            ]
          })}
        </script>

        {/* Dedicated FAQ Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": content.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

        {/* WebSite Schema with localized search parameters */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IPTV Smarters Pro Official",
            "url": `https://iptvsmartersprofficiel.shop/${rawSlug}`
          })}
        </script>
      </Helmet>

      {/* Hero Module */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden md:px-6">
        {/* Interactive Glowing Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950 z-10" />
          <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gold/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-blue-900/15 rounded-full blur-[160px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.heroBadge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white max-w-5xl mx-auto leading-none mb-6"
          >
            {content.heroTitle.split(' ').map((word, idx) => {
              if (idx >= content.heroTitle.split(' ').length - 3) {
                return (
                  <span key={idx} className="bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent">
                    {word}{' '}
                  </span>
                );
              }
              return word + ' ';
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {content.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              id={`cta-main-${rawSlug}`}
              onClick={scrollToPricing}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold hover:bg-gold/90 text-slate-950 font-black uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.35)] flex items-center justify-center gap-3 border border-yellow-300"
            >
              <PlayCircle className="w-5 h-5 fill-slate-950" />
              <span>{content.ctaButton}</span>
            </button>
            <Link
              to="/channels"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-white/25 flex items-center justify-center gap-2"
            >
              <Tv className="w-5 h-5 text-white" />
              <span>Liste des Chaînes</span>
            </Link>
          </motion.div>

          {/* Social Proof Bar rating stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 max-w-4xl mx-auto hover:border-gold/20 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-white">4.9</span>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold stroke-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white/50 border-l border-white/20 pl-2">850+ Avis Verifiés Google</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/25 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">100% En Stock • Activation Immédiate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Grid (Anti-Freeze Focus) */}
      <section className="py-24 bg-slate-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">{content.featuresTitle}</h2>
            <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto">{content.featuresSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.featuresList.map((feature, idx) => {
              // Map dynamic string to corresponding icon
              const IconComp = idx === 0 ? Shield : idx === 1 ? Tv : idx === 2 ? Zap : Smartphone;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-300 hover:bg-white/[0.04] group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all" />
                  <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-115 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed m-0">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Pricing Grid section with dynamically generated values */}
      <section id="pricing-grid" className="py-24 bg-slate-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4" />
              <span>Sécurisé & Garanti</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">{content.pricingTitle}</h2>
            <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto">{content.pricingSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.plans.map((plan, idx) => {
              const isBest = plan.id === '12-mois';
              return (
                <div
                  key={plan.id}
                  className={`rounded-[2.5rem] p-8 relative flex flex-col transition-all duration-300 overflow-hidden ${
                    isBest
                      ? 'bg-slate-900 border-2 border-gold shadow-[0_0_40px_rgba(234,179,8,0.15)] md:-translate-y-2'
                      : 'bg-white/[0.02] border border-white/5 hover:border-white/15'
                  }`}
                >
                  {isBest && (
                    <div className="absolute top-0 right-0 bg-gold text-slate-950 text-[10px] font-black uppercase tracking-wider px-6 py-2 rounded-bl-3xl">
                      Populaire
                    </div>
                  )}

                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-white/40 mb-6 min-h-[2.5rem] leading-relaxed">{plan.desc}</p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-3xl font-black text-white">{currencySymbol}</span>
                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-white/40 text-sm font-semibold">{plan.period}</span>
                  </div>

                  <hr className="border-white/5 mb-8" />

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gold/10 rounded-full flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/55 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    id={`buy-button-${plan.id}-${rawSlug}`}
                    href={getWhatsAppLink(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-full font-black uppercase tracking-wider text-xs transition-all duration-300 text-center flex items-center justify-center gap-2 ${
                      isBest
                        ? 'bg-gold hover:bg-gold/90 text-slate-950 shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Commander via WhatsApp</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">{content.reviewsTitle}</h2>
            <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto">{content.reviewsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.reviews.map((rev, index) => (
              <div
                key={index}
                className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all"
              >
                <div className="flex text-gold mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold stroke-gold" />
                  ))}
                </div>
                <p className="text-sm text-white/50 italic leading-relaxed mb-6">"{rev.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                    <p className="text-xs text-gold font-semibold uppercase tracking-wider">{rev.city}</p>
                  </div>
                  <span className="text-[10px] text-white/30">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized dynamic FAQ */}
      <section className="py-24 bg-slate-950 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">{content.faqTitle}</h2>
            <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto">{content.faqSubtitle}</p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    id={`faq-toggle-${idx}-${rawSlug}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between text-white hover:text-gold transition-colors"
                  >
                    <span className="text-sm font-bold uppercase tracking-tight pr-6">{faq.q}</span>
                    <span className={`text-xl transform transition-transform duration-300 text-gold flex-shrink-0`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6 text-xs md:text-sm text-white/55 leading-relaxed bg-black/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-24 bg-slate-950 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-white">
            {content.langCode === 'fr' ? 'PRÊT À ESSAYER LA DIFFÉRENCE ?' :
             content.langCode === 'de' ? 'BEREIT, DEN UNTERSCHIED ZU ERLEBEN?' :
             content.langCode === 'it' ? 'PRONTO A PROVARE LA DIFFERENZA?' :
             content.langCode === 'es' ? '¿LISTO PARA PROBAR LA DIFERENCIA?' :
             content.langCode === 'nl' ? 'KLAAR OM HET VERSCHIL TE ERVAREN?' :
             'READY TO EXPERIENCE THE DIFFERENCE?'}
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto mb-8 font-semibold uppercase tracking-wider">
            {content.ctaSubtext}
          </p>
          <button
            id={`cta-bottom-${rawSlug}`}
            onClick={scrollToPricing}
            className="px-10 py-5 rounded-full bg-gold hover:bg-gold/90 text-slate-950 text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:scale-105 border border-yellow-300 inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>{content.ctaButton}</span>
          </button>
        </div>
      </section>
    </div>
  );
}
