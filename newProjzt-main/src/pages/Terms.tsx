import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <div className="pt-32 pb-20 px-6">
      <Helmet>
        <title>Conditions d'Utilisation - IPTV Smarters Pro</title>
        <meta name="description" content="Conditions générales d'utilisation du service IPTV Smarters Pro." />
        <link rel="canonical" href="https://iptvsmartersprofficiel.shop/terms" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium - Conditions d'Utilisation",
            "description": "Conditions générales d'utilisation du service IPTV Smarters Pro.",
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
        <h1 className="text-3xl font-bold text-white mb-8">Conditions d'Utilisation</h1>
        <div className="space-y-6 text-white/60">
          <p>Bienvenue sur IPTV Smarters Pro. En accédant à notre site web, vous acceptez nos conditions d'utilisation.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Utilisation du service</h2>
          <p>Le service IPTV Smarters Pro est destiné à un usage personnel et non commercial. Vous êtes responsable du maintien de la confidentialité de vos identifiants.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Propriété intellectuelle</h2>
          <p>Tous les contenus présents sur ce site sont la propriété de IPTV Smarters Pro ou de ses partenaires et sont protégés par les lois sur le droit d'auteur.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Limitation de responsabilité</h2>
          <p>IPTV Smarters Pro ne pourra être tenu responsable des interruptions de service dues à des facteurs externes ou à votre connexion internet.</p>
        </div>
      </div>
    </div>
  );
}
