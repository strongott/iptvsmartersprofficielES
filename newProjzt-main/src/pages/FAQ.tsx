import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Zap, Shield, Smartphone, Tv } from 'lucide-react';
import Stats from '../components/ui/Stats';

const faqs = [
  {
    question: "Qu'est-ce que IPTV Smarters Pro ?",
    answer: "IPTV Smarters Pro est un service de streaming premium de nouvelle génération. C'est la plateforme leader mondial qui permet de regarder des chaînes de télévision en direct, des films et des séries (VOD) de manière ultra-stable. Notre service est optimisé afin d'offrir la meilleure expérience utilisateur.",
    icon: <PlayIcon className="w-5 h-5" />
  },
  {
    question: "Pourquoi choisir le meilleur abonnement IPTV Smarters Pro ?",
    answer: "Choisir IPTV Smarters Pro, c'est opter pour le meilleur abonnement IPTV en France. Nous garantissons un accès à plus de 25 000 chaînes premium avec une technologie Anti-Freeze exclusive pour un streaming 4K sans aucune coupure.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    question: "Comment faire l'installation IPTV Smarters Pro ?",
    answer: "L'installation de notre abonnement IPTV Smarters Pro est ultra-rapide. Il vous suffit de télécharger l'application officielle, d'entrer vos identifiants Xtream Codes fournis par nos soins, et vous accédez instantanément à tout notre catalogue en 4K.",
    icon: <Tv className="w-5 h-5" />
  },
  {
    question: "Puis-je utiliser mon abonnement sur plusieurs appareils ?",
    answer: "Oui, l'abonnement IPTV Smarters Pro est compatible avec une multitude d'appareils, incluant les smartphones Android/iOS, tablettes, PC/Mac, et Box Android (Nvidia Shield, Formuler). Vous pouvez installer IPTV Smarters Pro sur tous ces supports.",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    question: "Ai-je besoin d'un VPN pour IPTV Smarters Pro ?",
    answer: "Bien que notre service fonctionne parfaitement sans VPN, nous recommandons son utilisation pour contourner le bridage de certains fournisseurs d'accès (FAI) et garantir une confidentialité totale. Notre service IPTV Smarters Pro est 100% compatible avec les VPN comme NordVPN ou CyberGhost.",
    icon: <Shield className="w-5 h-5" />
  },
  {
    question: "Proposez-vous un support IPTV 24/7 ?",
    answer: "Absolument. Nous offrons un support IPTV 24/7 via WhatsApp pour répondre à toutes vos questions techniques. Que ce soit pour une installation IPTV Smarters Pro ou un dépannage, nos experts sont toujours là pour vous.",
    icon: <HelpCircle className="w-5 h-5" />
  }
];

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5V19L19 12L8 5Z" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-slate-950 pt-32 pb-20 selection:bg-gold selection:text-black">
      <Helmet>
        <title>FAQ IPTV France | Meilleur Abonnement IPTV & Achat IPTV Premium - IPTV Smarters Pro</title>
        <meta name="description" content="Toutes vos questions sur le meilleur abonnement IPTV. Guide installation IPTV Smarters Pro, IPTV pas cher et souscription IPTV immédiate avec le meilleur serveur IPTV France." />
        <meta name="keywords" content="iptv france, meilleur iptv, meilleur abonnement iptv, iptv premium, achat iptv, iptv pas cher, souscription iptv, iptv serveur france, FAQ IPTV Smarters Pro, installation IPTV Smarters Pro, support IPTV 24/7, aide iptv france, assistance IPTV Smarters Pro, streaming 4k sans coupure, iptv stable 2026" />
        <link rel="canonical" href="https://iptvsmartersprofficiel.shop/faq" />
        
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
                "name": "F.A.Q",
                "item": "https://iptvsmartersprofficiel.shop/faq"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/\*\*/g, '')
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium - FAQ",
            "description": "Toutes vos questions sur le meilleur abonnement IPTV. Guide installation IPTV Smarters Pro, IPTV pas cher et souscription IPTV immédiate.",
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

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6">
              Assistance & FAQ
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-white">
              FAQ <br />
              <span className="text-gold">Smarters Pro.</span>
            </h1>
            <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed uppercase tracking-widest">
              Tout ce que vous devez savoir pour profiter de votre expérience streaming premium sans limite.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-16"
            >
              <Stats gridClassName="grid-cols-2 lg:grid-cols-4 gap-8" />
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white/[0.03] border-gold/30 shadow-lg shadow-gold/5' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${openIndex === index ? 'bg-gold/20 text-gold' : 'bg-white/5 text-white/40'}`}>
                    {faq.icon}
                  </div>
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-white' : 'text-white/70'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/20 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-gold' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 text-white/60 leading-relaxed text-sm md:text-base border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-gold/20 to-yellow-600/5 border border-gold/20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">Une autre question ?</h3>
            <p className="text-white/40 text-sm mb-8 max-w-sm mx-auto">
              Notre équipe d'experts IPTV Smarters Pro est prête à vous aider en direct sur WhatsApp.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://wa.me/447853159847?text=Bonjour, j'ai une question sur IPTV Smarters Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-gold text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-full hover:scale-110 transition-all shadow-2xl shadow-gold/30"
              >
                Contacter le Support
              </a>
              <p className="text-white/60 font-black text-xs tracking-widest mt-2">
                WHATSAPP: <span className="text-gold">+44 7853 159847</span>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section - SEO Powerhouse */}
        <div className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
              >
                Aide & Assistance
              </motion.span>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-white">
                Questions <span className="text-gold">Fréquentes.</span>
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Tout ce que vous devez savoir sur le <span className="text-white font-bold">meilleur abonnement IPTV en France</span>. Installation, compatibilité et support 2026.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Qu'est-ce que IPTV Smarters Pro et comment l'utiliser ?",
                  a: "IPTV Smarters Pro est l'application lecteur par excellence pour profiter de votre abonnement IPTV. Elle est compatible avec notre service et permet de visionner plus de 25 000 chaînes et 60 000 VOD en 4K. Pour l'utiliser, il vous suffit de saisir vos identifiants IPTV Smarters Pro reçus par e-mail après votre achat."
                },
                {
                  q: "Pourquoi mon IPTV coupe et comment éviter le buffering ?",
                  a: "Le buffering est souvent dû à une connexion instable ou un serveur surchargé. Avec notre service, nous utilisons des serveurs premium anti-coupure (anti-freeze) optimisés pour la France. Pour une stabilité maximale en 4K, nous recommandons une connexion fibre ou l'utilisation d'un câble Ethernet sur votre Box Android ou Smart TV."
                },
                {
                  q: "L'abonnement IPTV IPTV Smarters Pro est-il compatible avec ma Smart TV ?",
                  a: "Absolument. Notre service est 100% compatible avec toutes les Smart TV (Samsung via Tizen, LG via WebOS, Sony via Android TV). Vous pouvez utiliser des applications comme IPTV Smarters, IBO Player, ou TiviMate pour une expérience fluide."
                },
                {
                  q: "Quel est le délai d'activation après l'achat IPTV ?",
                  a: "Chez IPTV Smarters Pro, l'activation est quasi-instantanée. Une fois votre paiement sécurisé validé, vos codes d'accès sont envoyés automatiquement par e-mail en moins de 5 minutes. Notre support WhatsApp est également disponible 24/7 pour vous aider lors de la première configuration."
                },
                {
                  q: "Ai-je besoin d'un VPN pour mon abonnement IPTV France ?",
                  a: "Bien que non obligatoire, un VPN peut aider à contourner les restrictions géographiques ou le bridage de certains fournisseurs d'accès internet (FAI) le soir des grands matchs. Notre service fonctionne parfaitement avec ou sans VPN."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                  className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-gold/20 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Shield className="w-12 h-12 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 pr-10">
                    <span className="text-gold font-black mr-4">Q.</span>
                    {item.q}
                  </h3>
                  <div className="flex gap-4">
                    <span className="text-white/20 font-black">R.</span>
                    <p className="text-white/40 leading-relaxed font-light">{item.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center p-10 md:p-16 rounded-[4rem] bg-gold/5 border border-gold/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white">Encore des questions ?</h4>
              <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">Notre équipe d'experts IPTV est disponible sur WhatsApp pour vous guider dans votre choix et votre installation.</p>
              <a 
                href="https://wa.me/447853159847" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-transform shadow-[0_20px_50px_-10px_rgba(212,175,55,0.4)]"
              >
                Contactez le Support 24/7
              </a>
            </div>
          </div>
        </div>

        {/* Hidden SEO Keywords */}
        <section className="sr-only" aria-hidden="true">
          {Array.from({ length: 201 }).map((_, i) => (
            <span key={i}>iptv france - meilleur iptv - meilleur abonnement iptv - iptv premium - achat iptv - iptv pas cher - souscription iptv - iptv serveur france - IPTV Smarters Pro FAQ - Meilleur Abonnement IPTV France 2026 - INSTALLATION IPTV Smarters Pro - iptv smarters pro officiel - iptvsmarters pro - aide technique iptv - support whatsapp smarterspro - streaming 4k sans coupure - meilleur service iptv france - iptv smarters pro apk - </span>
          ))}
        </section>
      </div>
    </div>
  );
}
