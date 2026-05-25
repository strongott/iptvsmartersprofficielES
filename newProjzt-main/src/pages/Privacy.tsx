import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-6">
      <Helmet>
        <title>Politique de Confidentialité - IPTV Smarters Pro</title>
        <meta name="description" content="Politique de protection des données personnelles de IPTV Smarters Pro." />
        <link rel="canonical" href="https://iptvsmartersprofficiel.shop/privacy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium - Confidentialité",
            "description": "Politique de protection des données personnelles de IPTV Smarters Pro.",
            "image": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200",
            "brand": {
              "@type": "Brand",
              "name": "IPTV Smarters Pro"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "12.99",
              "highPrice": "59.99",
              "priceCurrency": "EUR",
              "offerCount": "4",
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
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
        <h1 className="text-3xl font-bold text-white mb-8">Politique de Confidentialité</h1>
        <div className="space-y-6 text-white/60">
          <p>Chez IPTV Smarters Pro, la protection de vos données personnelles est notre priorité.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">Collecte des données</h2>
          <p>Nous collectons uniquement les informations nécessaires au traitement de vos commandes et à l'amélioration de votre expérience utilisateur.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">Utilisation des données</h2>
          <p>Vos données ne sont jamais vendues ou partagées avec des tiers à des fins commerciales sans votre consentement explicite.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">Cookies</h2>
          <p>Nous utilisons des cookies pour assurer le bon fonctionnement du site et analyser notre trafic.</p>
        </div>
      </div>
    </div>
  );
}
