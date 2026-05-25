import { Helmet } from 'react-helmet-async';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "+447853159847";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Bonjour, j'ai une question concernant l'abonnement IPTV Smarters Pro.`;

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-950 min-h-screen">
      <Helmet>
        <title>Contactez IPTV Smarters Pro | Support IPTV France 24/7 - Meilleur Abonnement IPTV</title>
        <meta name="description" content="Besoin d'aide ? Contactez le support IPTV Smarters Pro 24/7 pour votre abonnement IPTV France. Assistance technique, activation immédiate et conseils d'achat IPTV." />
        <link rel="canonical" href="https://iptvsmartersprofficiel.shop/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact IPTV Smarters Pro",
            "description": "Page de contact pour le support client IPTV Smarters Pro.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://iptvsmartersprofficiel.shop/" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://iptvsmartersprofficiel.shop/contact" }
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium - Contact & Support",
            "description": "Besoin d'aide ? Contactez le support IPTV Smarters Pro 24/7 pour votre abonnement IPTV France. Assistance technique, activation immédiate et conseils d'achat IPTV.",
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

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Assistance Client</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            NOUS SOMMES <span className="text-gold">À VOTRE ÉCOUTE.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
            Notre équipe technique IPTV Smarters Pro est disponible 24h/24 et 7j/7 pour vous accompagner dans l'installation de votre meilleur abonnement IPTV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-gold/20 hover:bg-gold/5 transition-all group">
            <MessageCircle className="w-10 h-10 text-gold mb-6" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">WhatsApp Support</h3>
            <p className="text-white/40 text-sm mb-6">La méthode la plus rapide pour une activation ou une aide technique en direct.</p>
            <span className="text-gold font-bold">{whatsappNumber}</span>
          </a>

          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all">
            <Mail className="w-10 h-10 text-gold mb-6" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">E-mail</h3>
            <p className="text-white/40 text-sm mb-6">Pour toute question commerciale ou demande de partenariat.</p>
            <span className="text-white/80 font-bold">contact@iptvsmartersprofficiel.shop</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-tight mb-1">Disponibilité</h4>
                    <p className="text-white/40 text-sm">24 flux de support par jour, 365 jours par an.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-tight mb-1">Localisation</h4>
                    <p className="text-white/40 text-sm">Support client basé en France & Europe.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
