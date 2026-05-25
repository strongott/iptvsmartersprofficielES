import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Check, Shield, Zap, Globe, Smartphone, Tv, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const plans: Record<string, Plan> = {
  '1-mois': {
    name: "Abonnement IPTV 1 MOIS",
    price: "12.99",
    period: "Mois",
    description: "Parfait pour tester notre qualité Premium sans engagement.",
    features: [
      "Activation Instantanée",
      "Qualité 4K / UHD / FHD",
      "+25 000 Chaînes Monde",
      "+80 000 VOD (Films & Séries)",
      "Technologie Anti-Freeze",
      "Support 24/7",
      "Tous appareils compatibles"
    ]
  },
  '3-mois': {
    name: "Abonnement IPTV 3 MOIS",
    price: "29.99",
    period: "3 Mois",
    description: "L'option intermédiaire pour un divertissement constant.",
    features: [
      "Activation Instantanée",
      "Qualité 4K / UHD / FHD",
      "+25 000 Chaînes Monde",
      "+80 000 VOD (Films & Séries)",
      "Technologie Anti-Freeze",
      "Support Prioritaire 24/7",
      "Tous appareils compatibles"
    ]
  },
  '6-mois': {
    name: "Abonnement IPTV 6 MOIS",
    price: "39.99",
    period: "6 Mois",
    description: "Économisez sur la durée avec notre pack 6 mois.",
    features: [
      "Activation Instantanée",
      "Qualité 4K / UHD / FHD",
      "+25 000 Chaînes Monde",
      "+80 000 VOD (Films & Séries)",
      "Technologie Anti-Freeze v2.0",
      "Support Prioritaire 24/7",
      "Tous appareils compatibles"
    ]
  },
  '12-mois': {
    name: "Abonnement IPTV 12 MOIS",
    price: "59.99",
    period: "12 Mois",
    description: "Le meilleur rapport qualité/prix pour une année de streaming illimité.",
    features: [
      "Activation Instantanée",
      "Qualité 4K / UHD / FHD",
      "+25 000 Chaînes Monde",
      "+80 000 VOD (Films & Séries)",
      "Technologie Anti-Freeze v3.0 Premium",
      "Support VIP 24/7",
      "Compatible Multi-écrans",
      "Tous appareils compatibles"
    ],
    featured: true
  }
};

type PlanKey = keyof typeof plans;

export default function Product() {
  const { planId } = useParams();
  const [currentPlan, setCurrentPlan] = useState<Plan>(plans['12-mois']);

  useEffect(() => {
    if (planId && plans[planId as PlanKey]) {
      setCurrentPlan(plans[planId as PlanKey]);
    }
  }, [planId]);

  const whatsappLink = `https://wa.me/447853159847?text=${encodeURIComponent(`Bonjour, je souhaite souscrire au forfait ${currentPlan.name} (${currentPlan.price}€)`)}`;

  return (
    <div className="bg-slate-950 pt-32 pb-20 selection:bg-gold selection:text-black min-h-screen">
      <Helmet>
        <title>{currentPlan.name} | IPTV Smarters Pro Officiel - Streaming 4K Sans Coupure</title>
        <meta name="description" content={`Souscrivez à l'abonnement ${currentPlan.name}. Le meilleur service IPTV en France avec +25 000 chaînes et 80 000 VOD en qualité 4K UHD.`} />
        <link rel="canonical" href={`https://iptvsmartersprofficiel.shop${planId ? `/abonnement/${planId}` : '/product'}`} />
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
                "name": "Produits",
                "item": "https://iptvsmartersprofficiel.shop/product"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": currentPlan.name,
                "item": `https://iptvsmartersprofficiel.shop/abonnement/${planId || '12-mois'}`
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": currentPlan.name,
            "description": currentPlan.description,
            "image": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200",
            "brand": {
              "@type": "Brand",
              "name": "IPTV Smarters Pro"
            },
            "offers": {
              "@type": "Offer",
              "price": currentPlan.price,
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "url": `https://iptvsmartersprofficiel.shop/abonnement/${planId || '12-mois'}`,
              "priceValidUntil": "2027-01-01"
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Comment installer mon service sur IPTV Smarters Pro ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'installation est simple. Téléchargez l'application IPTV Smarters Pro sur votre appareil, puis entrez les identifiants fournis lors de votre souscription à l'abonnement IPTV Smarters Pro. C'est le meilleur abonnement IPTV pour les utilisateurs en France cherchant une configuration rapide."
                }
              },
              {
                "@type": "Question",
                "name": "Est-ce que l'abonnement IPTV Smarters Pro est stable pour le sport en direct ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, notre service utilise des serveurs premium avec technologie Anti-Freeze pour garantir un streaming 4K sans coupure, idéal pour regarder le foot, l'UFC et tous les grands événements sportifs en direct."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont les appareils compatibles avec notre abonnement IPTV Smarters Pro ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre service est compatible avec tous les appareils : Smart TV (Samsung, LG, Android TV), boîtiers Android (Nvidia Shield, Formuler), Firestick, smartphones, tablettes et ordinateurs via des applications comme IPTV Smarters Pro ou TiviMate."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/#pricing" className="inline-flex items-center gap-2 text-white/40 hover:text-gold transition-colors mb-8 group">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:-translate-x-1 transition-transform">← Retour aux offres</span>
            </Link>

            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 text-center">
              Expérience Premium 4K
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-white">
              ABONNEMENT IPTV <br />
              DE <span className="text-gold">{currentPlan.name.split(' ').slice(2).join(' ')}</span>
            </h1>

            <p className="text-white/40 uppercase tracking-[0.4em] font-bold text-xs mb-12">
              Streaming illimité en 4K Ultra HD
            </p>

            <p className="text-white/60 text-lg mb-12 max-w-xl leading-relaxed">
              {currentPlan.description} Rejoignez la communauté IPTV Smarters Pro et profitez du meilleur service IPTV en France avec une stabilité garantie et une qualité d'image exceptionnelle.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight text-sm">Instantané</h4>
                  <p className="text-white/30 text-xs uppercase tracking-widest">Activation Immédiate</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight text-sm">Sécurisé</h4>
                  <p className="text-white/30 text-xs uppercase tracking-widest">Service Garanti</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-6">Ce qui est inclus :</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPlan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-white/60 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Checkout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-32"
          >
            <div className="relative p-1 bg-gradient-to-br from-gold/30 to-transparent rounded-[3rem]">
              <div className="bg-slate-950 rounded-[2.8rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-10">Paiement Sécurisé</h3>
                  
                  <div className="flex items-end justify-center gap-2 mb-10">
                    <span className="text-8xl font-black tracking-tighter text-white leading-none">{currentPlan.price}</span>
                    <span className="text-5xl font-black tracking-tighter text-white leading-none mb-1">€</span>
                  </div>
                  <div className="mb-10">
                    <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] border border-gold/20 px-4 py-1 rounded-full">
                      POUR {currentPlan.period.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-12">
                    Plus de 25,000 Chaînes & 80,000 VOD
                  </p>

                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-6 px-10 bg-gold text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-[1.5rem] hover:scale-105 transition-all shadow-2xl shadow-gold/20 flex items-center justify-center gap-3 group"
                  >
                    🚀 Activer Maintenant
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </a>

                  <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-30">
                    <div className="flex items-center gap-2">
                      <Tv className="w-4 h-4" />
                      <span className="text-[8px] font-bold uppercase tracking-widest">Smart TV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      <span className="text-[8px] font-bold uppercase tracking-widest">Mobile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span className="text-[8px] font-bold uppercase tracking-widest">4K Content</span>
                    </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-white/5 w-full">
                    <div className="flex justify-between items-center text-white/20 text-[9px] font-bold uppercase tracking-widest">
                      <span>Transaction Cryptée</span>
                      <Shield className="w-4 h-4" />
                      <span>Support 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Product FAQ Section */}
        <section className="mt-32 border-t border-white/5 pt-32">
          <div className="max-w-4xl mx-auto">
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4 block text-center">Questions Fréquentes</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center text-white">
              Prêt à passer au <br /><span className="text-gold">Niveau Supérieur ?</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Comment activer mon abonnement après l'achat ?",
                  a: "Dès que votre paiement est confirmé, nous vous envoyons vos identifiants par WhatsApp ou Email. L'activation est généralement immédiate (moins de 15 minutes). Nous vous guidons pas à pas pour l'installation sur IPTV Smarters Pro ou tout autre lecteur de votre choix."
                },
                {
                  q: "Pourquoi IPTV Smarters Pro est le meilleur abonnement IPTV pour les utilisateurs en France ?",
                  a: "IPTV Smarters Pro se distingue par la qualité de son infrastructure. Nous offrons des flux en véritable 4K sans compression exagérée, une stabilité de 99.9% grâce à nos serveurs redondants, et un catalogue VOD mis à jour quotidiennement. C'est l'expérience ultime pour le streaming sans coupure."
                },
                {
                  q: "Puis-je utiliser IPTV Smarters Pro avec cet abonnement ?",
                  a: "Absolument. IPTV Smarters Pro is l'application la plus recommandée pour nos utilisateurs. Elle offre une interface fluide et une gestion parfaite des EPG. Nous fournissons des liens M3U et des codes Xtream Codes compatibles à 100% avec l'application officielle."
                },
                {
                  q: "Est-ce sécurisé ?",
                  a: "Oui, toutes vos transactions sont sécurisées. De plus, nous recommandons l'usage d'un VPN pour protéger votre vie privée, bien que nos serveurs soient optimisés pour fonctionner parfaitement même sans VPN en France."
                }
              ].map((faq, i) => (
                <div key={i} className="group rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all overflow-hidden">
                  <details className="w-full">
                    <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                      <span className="text-white font-bold uppercase tracking-tight text-sm pr-4">{faq.q}</span>
                      <ChevronDown className="w-4 h-4 text-gold group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-8 pb-8">
                      <p className="text-white/40 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 text-center">
              <h3 className="text-white font-black uppercase tracking-tighter text-2xl mb-4">Besoin d'aide pour choisir ?</h3>
              <p className="text-white/40 text-sm mb-8">Nos experts sont disponibles 24/7 pour vous conseiller le meilleur pack selon votre connexion et vos besoins.</p>
              <div className="flex flex-col items-center gap-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-2xl hover:scale-110 shadow-2xl transition-all"
                >
                  Discuter avec un Expert <MessageCircle className="w-4 h-4 ml-1" />
                </a>
                <p className="text-white/60 font-black text-xs tracking-[0.3em] mt-2">
                  DIRECT WHATSAPP: <span className="text-gold">+44 7853 159847</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords Footer - Product Specific */}
        <section className="sr-only" aria-hidden="true">
          {Array.from({ length: 50 }).map((_, i) => (
            <span key={i}>{currentPlan.name} - IPTV Smarters Pro - iptvsmarters pro officiel - Le meilleur abonnement IPTV pour les utilisateurs en France - streaming 4k sans coupure - iptv smarters pro premium - iptv stable - </span>
          ))}
        </section>
      </div>
    </div>
  );
}
