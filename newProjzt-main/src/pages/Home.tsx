import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Globe, Tv, Smartphone, Layers, Clock, Calendar, Users, Star } from 'lucide-react';
import Stats from '../components/ui/Stats';
import { BLOG_POSTS } from '../constants/blogData';

export default function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Filter relevant guides for the "Guides & Conseils" section
  const guides = BLOG_POSTS.filter(post => 
    post.category === 'Installation' || post.category === 'Guides' || post.category === 'Dépannage'
  ).slice(0, 6);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-slate-950 text-white selection:bg-gold selection:text-black">
      <Helmet>
        <title>Le meilleur abonnement IPTV | IPTV europe 4K Streaming - IPTV Smarters Pro</title>
        <meta name="description" content="Découvrez IPTV Smarters Pro, le meilleur abonnement IPTV en France pour un streaming 4K sans coupure. Profitez d'un abonnement IPTV premium stable avec +25 000 chaînes. Achat IPTV sécurisé, IPTV pas cher et souscription IPTV immédiate. Le meilleur serveur IPTV France 2026." />
        <meta name="keywords" content="iptv france, meilleur iptv, meilleur abonnement iptv, iptv premium, achat iptv, iptv pas cher, souscription iptv, iptv serveur france, best iptv subscription, 4k streaming, iptv no buffering, IPTV stable France, IPTV Smarters Pro avis, streaming sport 4K, IPTV Smarters Pro officiel, code iptv smarterspro, iptv box firestick, abonnement iptv 12 mois, iptv smarters pro france, tivimate iptv france" />
        <link rel="canonical" href="https://iptvsmartersprofficiel.shop/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Le meilleur abonnement IPTV | IPTV europe 4K Streaming - IPTV Smarters Pro" />
        <meta property="og:description" content="Streaming 4K sans coupure avec le meilleur abonnement IPTV en Europe. +25 000 chaînes en direct." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1920" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le meilleur abonnement IPTV | IPTV europe 4K Streaming - IPTV Smarters Pro" />
        <meta name="twitter:description" content="Streaming 4K sans coupure avec le meilleur abonnement IPTV en Europe. +25 000 chaînes en direct." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1920" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IPTV Smarters Pro",
            "url": "https://iptvsmartersprofficiel.shop/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://iptvsmartersprofficiel.shop/channels?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "description": "Le meilleur service IPTV premium en France avec plus de 20 000 chaînes 4K. Compatible avec l'application officielle IPTV Smarters Pro, Smart TV, Android, MAG, et iOS."
          })}
        </script>

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IPTV Smarters Pro",
            "url": "https://iptvsmartersprofficiel.shop",
            "logo": "https://iptvsmartersprofficiel.shop/logo.png",
            "image": "https://iptvsmartersprofficiel.shop/logo.png",
            "description": "Fournisseur leader d'abonnements IPTV premium with plus de 20 000 chaînes en direct et 60 000 VOD.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FR"
            },
            "sameAs": [
              "https://twitter.com/iptv_smarters",
              "https://instagram.com/iptv_smarters"
            ]
          })}
        </script>

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
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium",
            "description": "Le meilleur abonnement IPTV en France avec plus de 35 000 chaînes et VOD en qualité 4K/8K. Stable et sans coupure.",
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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le meilleur abonnement IPTV en France ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IPTV Smarters Pro est considéré comme le meilleur abonnement IPTV en France en 2026 grâce à sa stabilité 4K sans coupure (no buffering) et son catalogue de plus de 35 000 chaînes."
                }
              },
              {
                "@type": "Question",
                "name": "Comment installer l'IPTV sur Smart TV ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'installation est facile avec l'application IPTV Smarters Pro officielle. Il suffit d'entrer vos codes d'accès reçus par e-mail dans IPTV Smarters Pro pour accéder à tout le contenu en 4K."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/80 to-[#020617] z-10" />
          <motion.div 
            className="flex h-full w-[400%]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[
              "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
            ].map((img, i) => (
              <div key={i} className="w-[12.5%] h-full flex-shrink-0">
                <img 
                  src={img} 
                  alt={`IPTV Smarters Pro Officiel - Meilleur Abonnement IPTV France - Streaming 4K UHD - ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding={i === 0 ? "sync" : "async"}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-[#60a5fa] text-[11px] font-semibold rounded-full mb-8 backdrop-blur-md shadow-lg shadow-blue-500/5 select-none"
            >
              <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
              Meilleur IPTV Europe 2026 – Noté 4.9/5
            </motion.span>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                className="relative text-5xl md:text-8xl lg:text-[7rem] font-black tracking-tight leading-[1.1] select-none"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 select-none pb-2">
                  IPTV Smarters Pro
                </span>
                <span className="block text-white text-2xl md:text-5xl lg:text-6xl mt-4 font-black">
                  Le meilleur abonnement IPTV <br className="hidden md:inline" /> IPTV europe 4K Streaming
                </span>
              </motion.h1>
            </div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-[#94a3b8] text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight mb-8"
            >
              Abonnement IPTV 4K & HD — 35 000+ Chaînes, Films, Sport en Direct
            </motion.h2>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-[#64748b] text-base md:text-lg max-w-4xl mx-auto mb-14 leading-relaxed font-medium select-none"
            >
              L'abonnement IPTV Smarters Pro vous donne accès à des milliers de chaînes IPTV françaises, européennes et mondiales en qualité 4K et HD — activé en quelques minutes sur tous vos écrans. Le service IPTV France le plus fiable du marché.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:w-auto px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full overflow-hidden hover:scale-105 transition-all active:scale-95 shadow-[0_20px_50px_-5px_rgba(212,175,55,0.2)]"
              >
                <span className="relative z-10 transition-colors group-hover:text-gold">Démarrer Maintenant</span>
                <div className="absolute inset-0 bg-zinc-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => window.location.href = '/faq'}
                className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white/10 transition-all text-white/80 backdrop-blur-md"
              >
                FAQ & Aide
              </button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <Stats gridClassName="grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="pt-10 border-t border-white/5"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8">Compatible avec les meilleures plateformes</p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-30 hover:opacity-60 transition-opacity">
                {['SAMSUNG', 'LG TV', 'ANDROID', 'SONY', 'APPLE TV', 'MAG'].map((brand) => (
                  <span key={brand} className="text-sm font-black tracking-widest">{brand}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
          <ChevronRight className="rotate-90 w-10 h-10" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 overflow-hidden bg-slate-900/20 content-visibility-auto">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">L'Excellence IPTV</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
                MEILLEUR IPTV : Pourquoi choisir l'abonnement <span className="text-gold">IPTV Smarters Pro ?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Streaming 4K IPTV Smarters Pro", desc: "Profitez d'une clarté d'image inégalée sur IPTV Smarters Pro avec notre service premium." },
                  { title: "Zéro Coupure IPTV Smarters Pro", desc: "Notre infrastructure serveur garantit 99.9% de stabilité sur l'application IPTV Smarters Pro." },
                  { title: "Support IPTV Smarters Pro 24/7", desc: "Besoin d'aide pour IPTV Smarters Pro ? Notre équipe est à votre écoute en direct." },
                  { title: "Activation IPTV Smarters Pro", desc: "Recevez vos accès d'installation pour IPTV Smarters Pro quelques minutes après l'achat." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wider mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold/20 blur-[120px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200" 
                alt="IPTV Smarters Pro Premium UI" 
                className="relative z-10 w-full rounded-[3rem] shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 overflow-hidden border-t border-white/5 content-visibility-auto">
        <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.05 }}
              whileInView={{ 
                scale: [1.05, 1.1, 1.05],
                rotate: [0, 1, 0, -1, 0]
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1920" 
              alt="Stadium Night Background"
              className="w-full h-full object-cover opacity-[0.12]"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          <div className="absolute inset-0 bg-radial-[at_top_center] from-transparent via-black/60 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-[#080a14] border border-white/5 rounded-[4rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
              
              <div className="text-center mb-24 relative z-10">
                <span className="inline-block px-5 py-2 bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                  Tarification Premium IPTV Smarters Pro - IPTV Pas Cher
                </span>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white">
                  ABONNEMENT <span className="text-gold">IPTV : TARIFS.</span>
                </h2>
                <div className="w-24 h-1.5 bg-gold mx-auto rounded-full mb-8" />
                <p className="text-white/40 uppercase tracking-[0.4em] font-bold text-xs max-w-2xl mx-auto leading-relaxed">
                  Profitez du meilleur IPTV avec une souscription IPTV immédiate. <br /> Qualité 4K garantie pour tout achat IPTV en France.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
                <PricingCard 
                  id="1-mois"
                  name="PREMIUM"
                  price="12.99"
                  period="1 MOIS"
                  features={[
                    "35 000+ chaînes IPTV incluses",
                    "65 000+ films et séries VOD",
                    "Qualité IPTV HD et 4K",
                    "Compatible IPTV Smarters Pro",
                    "Mises à jour chaînes automatiques",
                    "Replay TV inclus",
                    "Anti-coupure IPTV avancé",
                    "Activation abonnement IPTV en 5 min",
                    "Assistance e-mail IPTV France"
                  ]}
                  accent="gold"
                />
                <PricingCard 
                  id="3-mois"
                  name="PREMIUM"
                  price="29.99"
                  period="3 MOIS"
                  features={[
                    "35 000+ chaînes IPTV incluses",
                    "65 000+ films et séries VOD",
                    "Qualité IPTV HD et 4K",
                    "Compatible IPTV Smarters Pro",
                    "Mises à jour chaînes automatiques",
                    "Replay TV inclus",
                    "Anti-coupure IPTV avancé",
                    "Activation abonnement IPTV en 5 min",
                    "Assistance e-mail IPTV France"
                  ]}
                  accent="gold"
                />
                <PricingCard 
                  id="6-mois"
                  name="PREMIUM"
                  price="39.99"
                  period="6 MOIS"
                  features={[
                    "35 000+ chaînes IPTV incluses",
                    "65 000+ films et séries VOD",
                    "Qualité IPTV HD et 4K",
                    "Compatible IPTV Smarters Pro",
                    "Mises à jour chaînes automatiques",
                    "Replay TV inclus",
                    "Anti-coupure IPTV avancé",
                    "Activation abonnement IPTV en 5 min",
                    "Assistance e-mail IPTV France"
                  ]}
                  accent="gold"
                />
                <PricingCard 
                  id="12-mois"
                  name="ELITE"
                  price="59.99"
                  period="12 MOIS"
                  featured
                  features={[
                    "35 000+ chaînes IPTV incluses",
                    "65 000+ films et séries VOD",
                    "Qualité IPTV HD et 4K",
                    "Compatible IPTV Smarters Pro",
                    "Mises à jour chaînes automatiques",
                    "Replay TV inclus",
                    "Anti-coupure IPTV avancé",
                    "Activation abonnement IPTV en 5 min",
                    "Assistance e-mail IPTV France"
                  ]}
                  accent="gold"
                />
              </div>
              
              <div className="mt-20 text-center border-t border-white/5 pt-10">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.6em]">Le service n°1 recommandé par les experts IPTV France</p>
              </div>
            </div>
          </div>
      </section>

      {/* Features Section - Why Choose IPTV Smarters Pro - SEO Optimized */}
      <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5 content-visibility-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Meilleur Abonnement IPTV France 2026</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              Tout ce que le <span className="text-gold">meilleur</span> <br />
              <span className="text-gold">abonnement IPTV</span> doit offrir.
            </h2>
            <p className="text-white/40 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Notre service <span className="text-white font-medium">IPTV Smarters Pro</span> réunit tout ce qui fait un <span className="text-gold font-bold">abonnement IPTV France</span> d'exception : stabilité absolue, qualité <span className="text-white underline decoration-gold/30">IPTV 4K UHD</span>, richesse du catalogue VOD et support client réactif 24/7. Profitez d'un service <span className="text-white font-bold">IPTV sans coupure</span> pour une expérience de streaming ultime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[
              {
                icon: <Smartphone className="w-6 h-6 text-gold" />,
                title: "IPTV multi-écrans",
                prefix: "IPTV Smarters Pro",
                desc: "Votre abonnement IPTV fonctionne sur Smart TV (Samsung, LG), Firestick, smartphones Android/iOS, PC et Box Android TV."
              },
              {
                icon: <Zap className="w-6 h-6 text-gold" />,
                title: "Best IPTV 4K UHD",
                prefix: "Streaming Ultra HD",
                desc: "Le meilleur IPTV 4K avec serveurs optimisés France. Image Ultra HD sans coupure ni buffering, même aux heures de pointe."
              },
              {
                icon: <Globe className="w-6 h-6 text-gold" />,
                title: "+25 000 Chaînes",
                prefix: "Abonnement IPTV France",
                desc: "Accédez au catalogue IPTV le plus complet : chaînes françaises, sport 4K, cinéma UHD, et chaînes mondiales en haute définition."
              },
              {
                icon: <Layers className="w-6 h-6 text-gold" />,
                title: "Interface Fluide",
                prefix: "Meilleur IPTV 2026",
                desc: "Utilisez IPTV Smarters Pro ou TiviMate pour une navigation intuitive, un guide EPG complet et un accès rapide à vos favoris."
              },
              {
                icon: <Clock className="w-6 h-6 text-gold" />,
                title: "VOD & Replay 4K",
                prefix: "Cinéma à la maison",
                desc: "Plus de 65 000 films et séries VOD inclus. Profitez du Replay TV jusqu'à 7 jours pour ne jamais rater vos programmes."
              },
              {
                icon: <Shield className="w-6 h-6 text-gold" />,
                title: "Serveur IPTV Stable",
                prefix: "Technologie Antifreeze",
                desc: "Serveurs premium avec technologie anti-coupure. Garantie 99,9% uptime pour votre abonnement IPTV premium en France."
              },
              {
                icon: <Users className="w-6 h-6 text-gold" />,
                title: "Multi-Connexions",
                prefix: "Pack Famille IPTV",
                desc: "Partagez votre abonnement sur plusieurs appareils simultanément. Créez des profils personnalisés pour chaque membre."
              },
              {
                icon: <Star className="w-6 h-6 text-gold" />,
                title: "Activation 5 Min",
                prefix: "Achat IPTV Immédiat",
                desc: "Achetez votre abonnement IPTV en toute sécurité. Activation immédiate 24/7 avec assistance WhatsApp dédiée."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-gold/5 hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-4 leading-tight">
                  <span className="text-white/60 font-light block text-sm uppercase tracking-wider mb-1">{item.prefix}</span>
                  {item.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-20 text-center">
             <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.5em]">Optimisation SEO : IPTV France, Meilleur Abonnement IPTV stable, Achat IPTV UHD, IPTV Smarters Pro 2026</p>
          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section className="py-32 border-t border-white/5 overflow-hidden content-visibility-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              INSTALLATION IPTV FACILE <br />
              <span className="text-gold">Achat IPTV sécurisé.</span>
            </h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em]">Activation rapide pour votre meilleur abonnement IPTV</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Choisissez votre forfait", desc: "Sélectionnez l'offre IPTV Smarters Pro qui vous convient." },
              { step: "02", title: "Complétez l'achat", desc: "Paiement sécurisé pour votre abonnement IPTV Smarters Pro." },
              { step: "03", title: "Streaming Illimité", desc: "Entrez vos codes dans IPTV Smarters Pro et commencez à regarder immédiatement." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center group hover:bg-gold/5 hover:border-gold/30 transition-all"
              >
                <div className="text-6xl font-black text-white/5 absolute top-6 left-1/2 -translate-x-1/2 group-hover:text-gold/10 transition-colors">{item.step}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-gold transition-colors">{item.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence Section - Addressing Diagnostic Report Findings */}
      <section className="py-32 bg-slate-900/10 border-t border-white/5 content-visibility-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-gold/5 group/infra">
                <img 
                   src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1200" 
                  alt="Architecture Serveur IPTV Smarters Pro - Streaming 4K Ultra HD France" 
                  className="w-full h-full object-cover transition-transform duration-[7s] group-hover/infra:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-3 items-center mb-6">
                    <div className="px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Serveur Actif</span>
                      </div>
                    </div>
                    <div className="px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full backdrop-blur-md">
                      <span className="text-[10px] font-black text-gold uppercase tracking-widest">Optimisé EPG</span>
                    </div>
                    <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                      <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">Anti-Freeze 5.0</span>
                    </div>
                  </div>
                  <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed italic border-l-2 border-gold/50 pl-4 bg-black/20 backdrop-blur-sm p-4 rounded-r-xl">
                    "Notre architecture de pointe résout les problèmes de latence et de synchronisation rencontrés sur les plateformes standards."
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Architecture de Pointe</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                IPTV SMARTERS PRO : <br />
                <span className="text-gold">Tech & Streaming 4K.</span>
              </h2>
              <p className="text-white/40 mb-10 leading-relaxed text-lg">
              Contrairement aux services bas de gamme, notre service utilise une infrastructure propriétaire pour éliminer les erreurs de résolution DNS et les pannes de serveur 5xx. Notre technologie IPTV Smarters Pro garantit une fluidité totale.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Parsing M3U Haute Vitesse", desc: "Chargement instantané des listes de lecture, même avec +25 000 entrées." },
                  { title: "Sync EPG XMLTV Temps Réel", desc: "Guide des programmes toujours à jour sans consommation excessive de mémoire." },
                  { title: "Protocoles HLS & DASH", desc: "Adaptation automatique du débit pour éviter tout buffering." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,1)]" />
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-tight text-sm">{feature.title}</h4>
                      <p className="text-white/30 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                Le meilleur abonnement IPTV pour les utilisateurs en France - Technologie IPTV Smarters Pro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Section for SEO Enrichment */}
      <section className="relative py-32 overflow-hidden border-t border-white/5 content-visibility-auto">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0.1 }}
            whileInView={{ scale: 1, opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1920" 
            alt="Streaming IPTV 4K UHD - Meilleur Abonnement IPTV France 2026"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-radial-[at_left] from-transparent via-black/40 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Streaming Multi-Plateforme</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                  Le meilleur abonnement IPTV <br />
                  <span className="text-gold">pour les utilisateurs en France</span>
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed max-w-xl text-lg">
                  <span className="text-white font-bold">IPTV Smarters Pro</span> est reconnu comme le <span className="text-gold font-bold">meilleur IPTV France</span> grâce à son infrastructure dédiée, ses serveurs ultra-performants et son catalogue de plus de <span className="text-white font-bold">35 000 chaînes</span> en qualité <span className="text-gold font-bold font-medium font-medium">IPTV 4K et HD</span>. Notre abonnement IPTV Smarters Pro est pensé pour vous offrir une expérience télévisuelle sans compromis — fluide, stable et immédiatement disponible sur tous vos appareils.
                </p>
              </motion.div>
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {[
                  { name: "Smart TV Samsung & LG", apps: "Streaming IPTV WebOS & Tizen", icon: <Tv className="w-4 h-4 text-gold/60" /> },
                  { name: "Firestick & Fire TV", apps: "Application IPTV Smarters Pro", icon: <Zap className="w-4 h-4 text-gold/60" /> },
                  { name: "Android TV & Box", apps: "TiviMate, Nvidia Shield, Xiaomi", icon: <Layers className="w-4 h-4 text-gold/60" /> },
                  { name: "Apple TV & iOS", apps: "GSE Smart IPTV, iPad, iPhone", icon: <Smartphone className="w-4 h-4 text-gold/60" /> },
                  { name: "MAG & Formuler", apps: "Interface Mytvonline, Portal M3U", icon: <Globe className="w-4 h-4 text-gold/60" /> },
                  { name: "PC & Web Player", apps: "VLC, Chrome, Windows IPTV", icon: <Tv className="w-4 h-4 text-gold/60" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h4 className="text-white font-black text-[11px] md:text-xs uppercase tracking-wider">{item.name}</h4>
                    </div>
                    <p className="text-white/40 text-[10px] md:text-xs leading-relaxed font-medium">{item.apps}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] leading-loose">
                Mots-clés SEO : Meilleur abonnement IPTV stable, IPTV France 4K, Serveur IPTV premium, Achat IPTV immédiat, Application IPTV Smarters Pro, Meilleur IPTV 2026 IPTV Smarters Pro.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-gold/20 to-yellow-600/10 blur-[100px] opacity-40 pointer-events-none" />
              <motion.div 
                className="relative bg-black/40 border border-white/10 p-8 md:p-12 rounded-[3.5rem] backdrop-blur-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-8">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-2.5 h-2.5 text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gold text-white/90">TOP RATED APPS 2026</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter leading-tight">Applications <br /><span className="text-gold">IPTV Recommandées</span></h3>
                <ul className="space-y-6">
                  {[
                    { name: "IPTV Smarters Pro App", desc: "La meilleure application dédiée pour un abonnement IPTV premium fluide.", seo: "IPTV Player Pro" },
                    { name: "TiviMate IPTV Player", desc: "L'interface premium préférée des utilisateurs de box Android TV et Shield.", seo: "PVR Premium" },
                    { name: "IPTV Smarters Pro", desc: "Multi-plateforme, idéal pour Firestick et Smart TV avec abonnement IPTV France.", seo: "Original Player" },
                    { name: "IBO Player / Flix IPTV", desc: "Optimisé pour la vitesse et la qualité 4K sur Smart TV Samsung, LG et Sony.", seo: "UHD Streaming" }
                  ].map((app, i) => (
                    <motion.li 
                      key={i} 
                      className="flex gap-5 items-start pb-6 border-b border-white/5 last:border-0 last:pb-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center flex-shrink-0 group hover:bg-gold/20 transition-all">
                        <Smartphone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-sm md:text-base font-black text-white uppercase tracking-tight">{app.name}</h4>
                          <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] border border-white/5 px-2 py-0.5 rounded-full">{app.seo}</span>
                        </div>
                        <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">{app.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">Totalement optimisé pour IPTV Smarters Pro & TiviMate</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional SEO Section */}
      <section className="py-20 bg-slate-950 border-t border-white/5 opacity-40 content-visibility-auto">
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-[#020617]/20 to-[#020617] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            <span>IPTV Smarters Pro France</span>
            <span>IPTV Smarters Pro Belgique</span>
            <span>IPTV Smarters Pro Suisse</span>
            <span>IPTV Smarters Pro Canada</span>
            <span>IPTV Smarters Pro Maghreb</span>
            <span>IPTV Smarters Pro Europe</span>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-2xl md:text-4xl font-light italic text-white/80 leading-tight mb-8">
            Meilleur ABONNEMENT IPTV en France : IPTV Smarters Pro offre une stabilité 4K incroyable. C'est le service le plus fiable pour IPTV Smarters Pro, sans aucune coupure même pendant les grands matchs.
            </blockquote>
            <p className="uppercase tracking-[0.4em] text-gold font-bold text-xs">— Marc L., Expert IPTV Stable</p>
        </div>
      </section>

      {/* Trust Review Section */}
      <section className="relative py-32 overflow-hidden bg-slate-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.03),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-8"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Shield key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Trust Review 4.9/5</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              AVIS IPTV : Confiance de nos <span className="text-gold">Utilisateurs.</span>
            </h2>
            <p className="text-white/30 text-xs font-bold uppercase tracking-[0.4em]">Optimisé pour le SEO : Meilleur Abonnement IPTV France</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean-P. (Paris)",
                location: "🇫🇷 FRANCE",
                review: "Incroyable. Qualité 4K pure sur beIN et Canal. Zéro coupure pendant le Classico. L'installation a pris moins de 60 secondes.",
                tag: "Meilleur Service Foot"
              },
              {
                name: "Sarah M. (Lyon)",
                location: "🇫🇷 FRANCE",
                review: "Le support WhatsApp est une merveille. Réponse en 2 min pour m'aider à configurer mon accès. Stable et rapide.",
                tag: "Support Client 24/7"
              },
              {
                name: "Lucas V. (Belgique)",
                location: "🇧🇪 BELGIQUE",
                review: "Bibliothèque VOD immense. Les films sortent en UHD quelques jours après le ciné. Streaming sans buffering même en WiFi.",
                tag: "Qualité 4K UHD"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center font-black text-black shadow-lg shadow-gold/20">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-white text-xs uppercase tracking-wider">{review.name}</h4>
                    <p className="text-[10px] text-white/40 font-bold tracking-widest">{review.location}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-8 italic font-medium">"{review.review}"</p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gold">
                    {review.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SEO Trust Keywords Bar */}
          <div className="mt-24 pt-20 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 grayscale opacity-20 hover:opacity-100 transition-opacity duration-700">
            {[
              { text: 'SERVEURS STABLES', icon: <Layers className="w-4 h-4" /> },
              { text: 'QUALITÉ 4K UHD', icon: <Tv className="w-4 h-4" /> },
              { text: 'SUPPORT WHATSAPP', icon: <Smartphone className="w-4 h-4" /> },
              { text: 'ANTIFREEZE 5.0', icon: <Layers className="w-4 h-4" /> },
              { text: 'SANS COUPURE', icon: <Shield className="w-4 h-4" /> }
            ].map((kw) => (
              <div key={kw.text} className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">{kw.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">{kw.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Blog Section - Dark Professional Theme with Carousel */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-8">
                <Layers className="w-4 h-4 text-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Blog & Expertise IPTV</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                Guides et Conseils <span className="text-gold">IPTV.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed font-light">
                Tutoriels d'installation et d'activation pour profiter du <span className="text-white font-medium">meilleur abonnement IPTV France</span>. Tout le savoir-faire Premium IPTV Smarters Pro à votre disposition.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <button 
                  onClick={() => scroll('left')}
                  className="w-14 h-14 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-14 h-14 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <Link 
                to="/blog" 
                className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3"
              >
                Explorer tout le blog <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </header>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {guides.map((post) => (
              <motion.div
                key={post.id}
                className="flex-shrink-0 w-[320px] md:w-[420px] snap-start"
              >
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 mb-8 transform-gpu transition-all duration-700 group-hover:border-gold/30">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-4">
                    <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-gold transition-colors leading-[1.2] uppercase">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                      Découvrir le guide <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global SEO Tags */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/10 px-6 max-w-5xl mx-auto border-t border-white/5 pt-20">
          <span className="hover:text-gold/30 transition-colors cursor-default">IPTV France</span>
          <span className="hover:text-gold/30 transition-colors cursor-default">Meilleur IPTV Premium</span>
          <span className="hover:text-gold/30 transition-colors cursor-default">Achat IPTV Sécurisé</span>
          <span className="hover:text-gold/30 transition-colors cursor-default">Serveur IPTV Stable</span>
          <span className="hover:text-gold/30 transition-colors cursor-default">IPTV Pas Cher</span>
          <span className="hover:text-gold/30 transition-colors cursor-default">Meilleur Abonnement IPTV</span>
        </div>
      </section>


      {/* FAQ / Content Section for SEO */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">
          FAQ IPTV FRANCE : <span className="text-gold">Expertise IPTV Smarters Pro</span>
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Pourquoi choisir l'abonnement IPTV Smarters Pro en 2026 ?</h3>
            <p className="text-white/40 leading-relaxed">
              IPTV Smarters Pro s'impose comme l'un des meilleurs fournisseurs d'abonnement IPTV en France. Notre service premium offre une stabilité incomparable pour tous vos besoins en streaming. Choisir notre abonnement c'est opter pour la qualité 4K et une expérience utilisateur sans faille. Notre service est compatible avec tous vos appareils favoris.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Comment installer mon service sur Smart TV ?</h3>
            <p className="text-white/40 leading-relaxed">
              L'installation de notre abonnement est instantanée. Que vous utilisiez une Smart TV Samsung, LG ou Android TV, il vous suffit de télécharger l'application IPTV Smarters Pro. Une fois votre abonnement activé, profitez de vos chaînes préférées immédiatement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Est-ce que l'abonnement IPTV Smarters Pro fonctionne avec un VPN ?</h3>
            <p className="text-white/40 leading-relaxed">
              Absolument, notre service est 100% compatible with les meilleurs VPN du marché. L'usage d'un VPN avec votre abonnement IPTV Smarters Pro est même recommandé pour garantir une fluidité totale en 4K Ultra HD sans aucune restriction de votre fournisseur d'accès.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Index Section */}
      <section className="py-32 border-t border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-gold mb-4 italic">INDEX DE PERFORMANCE & RÉFÉRENCEMENT IPTV</h2>
            <div className="w-24 h-1 bg-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              "IPTV SMARTERS PRO", 
              "LE MEILLEUR ABONNEMENT IPTV POUR LES UTILISATEURS EN FRANCE", 
              "ABONNEMENT IPTV FRANCE", 
              "IPTV SMARTERS PRO OFFICIEL", 
              "IPTV STABLE SANS COUPURE", 
              "MEILLEUR IPTV 2026", 
              "STREAMING 4K FRANCE", 
              "IPTV SMARTERS PRO INSTALLATION", 
              "CODE IPTV SMARTERS PRO", 
              "TEST IPTV 24H", 
              "IPTV SMARTERS PRO PREMIUM", 
              "APPLICATION IPTV SMARTERS PRO", 
              "IPTV SMARTERS PRO AVIS", 
              "IPTV SMARTERS PRO ACTIVATION", 
              "IPTV SMARTERS PRO PRIX", 
              "MEILLEUR ABONNEMENT IPTV FRANCE", 
              "IPTV SMARTERS PRO PLAYER", 
              "IPTV SMARTERS PRO SMARTERS PLAYER PRO", 
              "IPTV SMARTERS PRO SMART TV", 
              "IPTV SMARTERS PRO ANDROID", 
              "IPTV SMARTERS PRO GRATUIT", 
              "MEILLEUR IPTV FRANCE 2026", 
              "ABONNEMENT IPTV PAS CHER", 
              "IPTV SMARTERS PRO SMART TV LG", 
              "IPTV SMARTERS PRO SAMSUNG TV", 
              "MEILLEUR IPTV SPORT 4K", 
              "IPTV SANS BUFFERING", 
              "ACTIVATION IPTV INSTANTANÉE", 
              "SERVEUR IPTV STABLE FRANCE", 
              "IPTV SMARTERS PRO M3U", 
              "MEILLEUR ABONNEMENT IPTV 2026", 
              "IPTV ESSAI GRATUIT SANS CARTE BANCAIRE", 
              "FREE IPTV TRIAL 24 HOURS", 
              "IPTV PREMIUM 4K ULTRA HD", 
              "IPTV STABLE POUR SPORT EN DIRECT", 
              "IPTV SMARTERS PRO LOGO", 
              "COMMENT INSTALLER IPTV SUR SMART TV", 
              "IPTV COMPATIBLE ANDROID ET IPHONE", 
              "IPTV AVEC CHAÎNES FRANÇAISES ET SPORT", 
              "IPTV NETFLIX ET DISNEY PLUS", 
              "IPTV SANS COUPURE", 
              "MEILLEUR SERVICE IPTV FRANCE", 
              "IPTV CODE GRATUIT 24H", 
              "TEST IPTV INSTANTANÉ", 
              "MEILLEUR IPTV PREMIUM AVEC ESSAI GRATUIT 24H EN 2026", 
              "IPTV SMARTERS PRO LOGIN", 
              "ABONNEMENT IPTV 12 MOIS FRANCE", 
              "IPTV SMARTERS PRO PC", 
              "COMMENT CONFIGURER IPTV SMARTERS PRO", 
              "IPTV SMARTERS PRO FIRESTICK", 
              "IPTV SMARTERS PRO APK", 
              "IPTV SMARTERS PRO POUR APPLE TV", 
              "ABONNEMENT IPTV PREMIUM 4K SANS BUG", 
              "MEILLEUR IPTV POUR LE FOOTBALL 2026", 
              "FLUX IPTV STABLE 4K", 
              "IPTV SMARTERS PRO LITE", 
              "IPTV SMARTERS PRO VERSION PRO", 
              "OFFRE IPTV SMARTERS PRO 2026", 
              "IPTV SMARTERS PRO GUIDE D'ACTIVATION", 
              "ACHETER IPTV SMARTERS PRO"
            ].map((keyword, i) => (
              <div 
                key={i} 
                className="p-4 bg-white/5 border border-white/5 rounded-xl text-[9px] font-black text-white/30 uppercase tracking-widest text-center flex items-center justify-center min-h-[70px] hover:text-gold hover:border-gold/20 transition-all cursor-default"
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keyword Section - Visually Hidden */}
      <section className="sr-only" aria-hidden="true">
        {Array.from({ length: 151 }).map((_, i) => (
          <span key={i}>iptv france - meilleur iptv - meilleur abonnement iptv - iptv premium - achat iptv - iptv pas cher - souscription iptv - iptv serveur france - IPTV Smarters Pro - IPTV Smarters Pro - iptvsmarters pro - Le meilleur abonnement IPTV pour les utilisateurs en France - IPTV France 2026 - installation iptv facile - iptv smarters pro officiel - iptv smarters pro officiel - meilleur service iptv - streaming 4k sans coupure - iptv premium france - meilleur fournisseur iptv - iptv stable 4k - </span>
        ))}
      </section>
    </div>
  );
}

function PricingCard({ id, name, price, period, features, featured }: { 
  id: string, 
  name: string, 
  price: string, 
  period: string, 
  features: string[], 
  featured?: boolean,
  accent?: string
}) {
  const navigate = useNavigate();
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/abonnement/${id}`)}
      className={`relative p-8 xl:p-10 rounded-[2.5rem] border transition-all duration-500 overflow-hidden group flex flex-col h-full cursor-pointer ${
        featured 
          ? 'border-gold/60 bg-[#080a14] shadow-[0_0_80px_-20px_rgba(212,175,55,0.3)]' 
          : 'border-white/5 bg-[#080a14]/80 hover:border-white/10'
      }`}
    >
      {/* MEILLEUR CHOIX Badge for 12 months */}
      {featured && (
        <div className="absolute top-6 right-6 z-20">
          <span className="px-4 py-1.5 bg-[#d4af37] text-black text-[8px] font-black uppercase tracking-[0.1em] rounded-lg shadow-lg shadow-gold/20">
            MEILLEUR CHOIX
          </span>
        </div>
      )}

      <div className="relative z-10 flex flex-col flex-grow text-center">
        {/* Header */}
        <div className="mb-8">
          <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] leading-[1.5] mb-8 pt-4">
            L'ABONNEMENT <br />
            IPTV DE {period} <br />
            {name}
          </h4>
          
          {/* Quality Badge */}
          <div className="inline-block px-5 py-3 border border-gold/40 rounded-lg mb-8">
            <span className="text-gold text-[9px] font-black uppercase tracking-widest block leading-tight">
              MEILLEUR RAPPORT
            </span>
            <span className="text-gold text-[9px] font-black uppercase tracking-widest block leading-tight">
              QUALITÉ/PRIX {period}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-10">
          <div className="flex items-center justify-center">
            <span className="text-6xl font-black tracking-tighter text-white leading-none">{price}€</span>
          </div>
        </div>

        {/* Feature List */}
        <ul className="space-y-4 mb-12 flex-grow">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-[9px] font-bold text-white/50 uppercase tracking-tight leading-tight group/item">
              <div className={`w-1 h-1 rounded-full flex-shrink-0 ${featured ? 'bg-gold ring-2 ring-gold/20' : 'bg-white/20'}`} />
              <span className="text-left">{f}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-auto space-y-4">
          <button 
            className="w-full py-4 rounded-2xl border border-white/5 bg-white/[0.02] text-white/30 text-[9px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white/5 hover:text-white"
          >
            DÉTAILS DE L'OFFRE
          </button>
          
          <button 
            className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all transform active:scale-95 ${
              featured 
                ? 'bg-[#d4af37] text-black shadow-lg shadow-gold/20 hover:scale-[1.02]' 
                : 'bg-white text-black hover:scale-[1.02]'
            }`}
          >
            COMMANDER
          </button>
        </div>
      </div>
    </motion.div>
  );
}
