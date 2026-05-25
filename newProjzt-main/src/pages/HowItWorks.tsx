import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, ShoppingBag, Settings, PlayCircle, X, ChevronRight, Shield } from 'lucide-react';

export default function HowItWorks() {
  const [selectedItem, setSelectedItem] = useState<{ name: string; type: 'player' | 'device' } | null>(null);

  const itemDetails: Record<string, string> = {
    "IPTV Smarters Pro": "L'application la plus populaire. Supporte l'API Xtream Codes et les fichiers M3U. Offre une interface fluide avec EPG et gestion des favoris.",
    "IPTV Smarters": "Version allégée de Smarters Pro, idéale pour les appareils moins puissants tout en gardant les fonctionnalités essentielles de streaming.",
    "Smart IPTV": "Application classique pour Smart TV (Samsung/LG). Reconnue pour sa simplicité et sa stabilité légendaire sur les anciens modèles de TV.",
    "Tivimate": "Considérée par beaucoup comme la meilleure interface IPTV sur Android TV. Design moderne, zapping ultra-rapide et personnalisation avancée.",
    "IBO Player": "Nouveau standard de fluidité. Chargement instantané des listes de lecture et support complet de la 4K Ultra HD sans aucune saccade.",
    "Set IPTV": "Optimisée pour le streaming rapide. Interface minimaliste qui se concentre sur l'essentiel : la qualité d'image et la stabilité.",
    "Net IPTV": "Excellente alternative pour les Smart TV. Supporte les listes de lecture lourdes sans ralentir la navigation.",
    "IPTV Player": "Lecteur polyvalent supportant de multiples formats. Idéal pour une utilisation multi-plateforme avec synchronisation.",
    "XcipTV": "Interface élégante inspirée des grandes plateformes de VOD. Parfait pour naviguer facilement dans les catalogues de films et séries.",
    "Duplex Play": "Gestion intelligente du cache pour éviter le buffering. Très populaire pour sa capacité à lire des flux haute résolution sur des connexions moyennes.",
    "Boîtier IPTV": "La solution ultime. Puissant et dédié, il offre la meilleure expérience de zapping et supporte les codecs HDR les plus récents.",
    "Boîtier Android": "Polyvalence totale. Installez n'importe quel lecteur (TiviMate, Smarters) depuis le Play Store. Evolutif et performant.",
    "Fire Stick": "Le meilleur rapport qualité/prix. Compact, puissant et compatible avec toutes nos applications recommandées en 4K.",
    "Apple TV": "L'excellence Apple. Utilisez des applications comme iPlayTV pour une expérience premium et fluide sur votre ecosystème iOS.",
    "Mag IPTV": "Le boîtier traditionnel des puristes. Stabilité inégalée et interface native dédiée exclusivement à la télévision par IP.",
    "Chromecast": "Diffusez instantanément depuis votre smartphone. Idéal pour partager vos contenus IPTV sur n'importe quel écran en un clin d'œil.",
    "Smart TV": "Pas besoin de matériel supplémentaire. Installez directement l'application sur votre TV Samsung, LG, Sony ou Android TV.",
    "Smartphone": "Votre IPTV partout. Emportez vos 25 000 chaînes dans votre poche avec une application mobile optimisée pour la 4G/5G.",
    "Tablette": "Le compromis idéal entre mobilité et confort visuel. Parfait pour regarder vos sports préférés en terrasse ou au lit."
  };

  return (
    <div className="bg-slate-950 pb-20 pt-32">
      <Helmet>
        <title>Comment ça marche | Installation IPTV facile IPTV Smarters Pro France 2026</title>
        <meta name="description" content="Guide d'installation IPTV facile avec IPTV Smarters Pro. Découvrez comment effectuer votre achat IPTV sécurisé et configurer le meilleur abonnement IPTV France sur Smarters Pro et TiviMate." />
        <meta name="keywords" content="iptv france, meilleur iptv, meilleur abonnement iptv, installation iptv facile, configuration iptv smarters pro, iptv smarters pro guide, abonnement iptv premium france, achat iptv sécurisé, streaming 4k sans coupure, comment marche iptv, iptv 2026" />
        <link rel="canonical" href="https://iptvsmartersprofficiel.shop/comment-ca-marche" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium - Comment ça marche",
            "description": "Guide d'installation IPTV facile avec IPTV Smarters Pro. Découvrez comment effectuer votre achat IPTV sécurisé et configurer le meilleur abonnement IPTV France.",
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

      <div className="max-w-7xl mx-auto px-8">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="max-w-2xl">
              <span className="text-gold text-xs font-black uppercase tracking-[0.6em] mb-4 block">Mode d'emploi</span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
                Comment ça marche avec <span className="text-gold italic">IPTV Smarters Pro</span> ?
              </h1>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Obtenir le <span className="text-white font-bold">meilleur abonnement IPTV France</span> premium est un processus simple et rapide. En moins de 5 minutes, profitez de 25 000 chaînes en 4K UHD.
              </p>
            </div>
            <Link 
              to="/product" 
              className="px-10 py-5 bg-gold rounded-2xl text-[10px] font-black uppercase tracking-widest text-black hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-gold/20"
            >
              Acheter Maintenant
            </Link>
          </motion.div>
        </header>

        {/* Steps */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              step: "01",
              icon: <ShoppingBag className="w-10 h-10 text-gold" />,
              title: "Sélectionner",
              desc: "Choisissez le meilleur abonnement IPTV France pour IPTV Smarters Pro adapté à vos besoins de streaming 4K."
            },
            {
              step: "02",
              icon: <Zap className="w-10 h-10 text-gold" />,
              title: "Achat Sécurisé",
              desc: "Effectuez votre achat IPTV sécurisé. Vos accès pour IPTV Smarters Pro sont envoyés instantanément par email."
            },
            {
              step: "03",
              icon: <Settings className="w-10 h-10 text-gold" />,
              title: "Installation Facile",
              desc: "Profitez d'une installation IPTV facile avec IPTV Smarters Pro grâce à nos guides dédiés."
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-gold/20 transition-all group overflow-hidden"
            >
              <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-gold/10 transition-colors italic leading-none select-none">
                {step.step}
              </div>
              <div className="mb-8 p-6 bg-gold/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-tight">{step.title}</h3>
              <p className="text-white/40 text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Compatibility Section */}
        <section className="py-24 px-8 rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-black uppercase text-white mb-10 flex items-center gap-4">
                <PlayCircle className="w-8 h-8 text-gold" />
                Lecteurs Supportés
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "IPTV Smarters Pro", "IPTV Smarters", "Smart IPTV", 
                  "Tivimate", "IBO Player", "Set IPTV", 
                  "Net IPTV", "IPTV Player", "XcipTV", "Duplex Play"
                ].map((player) => (
                  <button 
                    key={player} 
                    onClick={() => setSelectedItem({ name: player, type: 'player' })}
                    className="p-5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-white/60 uppercase tracking-widest hover:text-gold hover:border-gold/20 hover:bg-gold/5 transition-all text-left group"
                  >
                    <span className="block group-hover:translate-x-2 transition-transform">{player}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black uppercase text-white mb-10 flex items-center gap-4">
                <Zap className="w-8 h-8 text-gold" />
                Appareils Compatibles
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Boîtier IPTV", "Boîtier Android", "Fire Stick", 
                  "Apple TV", "Mag IPTV", "Chromecast", 
                  "Smart TV", "Smartphone", "Tablette"
                ].map((device) => (
                  <button 
                    key={device} 
                    onClick={() => setSelectedItem({ name: device, type: 'device' })}
                    className="p-5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-white/60 uppercase tracking-widest hover:text-gold hover:border-gold/20 hover:bg-gold/5 transition-all text-left group"
                  >
                    <span className="block group-hover:translate-x-2 transition-transform">{device}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-16 text-center text-white/20 text-xs uppercase tracking-[0.4em] font-medium">
            Notre service est compatible avec 99.9% des applications et appareils du marché.
          </p>
        </section>

        {/* SEO Optimized Content Sections */}
        <section className="mt-32 space-y-32">
          {/* Section 1: Detailed Guide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase text-white tracking-tight leading-none">
                Guide d'Installation <span className="text-gold">Abonnement IPTV France</span>
              </h2>
              <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
                <p>
                  Pour profiter pleinement de votre <span className="text-white font-medium italic">meilleur abonnement IPTV</span> en France, l'installation est l'étape cruciale. Nous avons simplifié ce processus pour que même les débutants puissent configurer leur service en quelques minutes.
                </p>
                <p>
                  L'utilisation de l'application <span className="text-gold font-bold">IPTV Smarters Pro</span> est vivement recommandée pour sa stabilité et son interface intuitive. Que vous soyez sur Android, iOS ou Smart TV, Smarters Pro permet une gestion fluide de votre catalogue VOD et des chaînes en direct 4K.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span>Téléchargez l'application officielle sur le Store de votre appareil.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span>Entrez vos identifiants Xtream Codes fournis lors de l'achat.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span>Laissez la liste charger et profitez d'une expérience <span className="text-white">sans coupure</span>.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-12 rounded-[4rem] bg-gold/5 border border-gold/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -mr-32 -mt-32" />
              <h3 className="text-2xl font-black uppercase text-gold mb-6 italic">Pourquoi choisir IPTV Smarters Pro en 2026?</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8">
                Le marché de l'IPTV est vaste, mais peu de fournisseurs garantissent une stabilité réelle sur les serveurs français. Notre service utilise une technologie de <span className="text-white font-medium">Smart Routing</span> qui évite les ralentis pendant les grands événements sportifs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="text-3xl font-black text-white mb-2 tracking-tighter">99.9%</div>
                  <div className="text-[10px] font-black uppercase text-white/30 tracking-widest">Uptime Serveur</div>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="text-3xl font-black text-white mb-2 tracking-tighter">4K+</div>
                  <div className="text-[10px] font-black uppercase text-white/30 tracking-widest">Résolution Ultra</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Technical SEO Content */}
          <div className="relative p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 overflow-hidden">
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-gold/5 blur-[120px]" />
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
                  Compatibilité <span className="text-gold italic">Totale & Haute Performance</span>
                </h2>
                <div className="h-1.5 w-24 bg-gold mx-auto rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-6">
                  <h4 className="text-xl font-black uppercase text-white tracking-wide">Meilleur IPTV pour Smart TV</h4>
                  <p className="text-white/40 text-base leading-relaxed">
                    Si vous possédez une Smart TV Samsung ou LG, notre <span className="text-white">abonnement IPTV France</span> fonctionne parfaitement avec des applications comme <span className="text-gold font-bold italic">IBO Player</span> ou <span className="text-gold font-bold italic">Smart IPTV</span> (SIPTV). Ces applications sont optimisées pour les processeurs de télévision, garantissant une navigation rapide dans nos 25 000 chaînes et 60 000 VOD.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl font-black uppercase text-white tracking-wide">Performance sur Android TV & Firestick</h4>
                  <p className="text-white/40 text-base leading-relaxed">
                    Pour les utilisateurs de l'Amazon Fire TV Stick ou de boîtiers Android (NVIDIA Shield, Xiaomi Mi Box), nous recommandons <span className="text-white">TiviMate</span>. C'est l'expérience premium ultime pour ceux qui recherchent un interface type "Box TV" traditionnelle. Notre abonnement est pré-configuré pour être compatible with les versions les plus récentes de ces lecteurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Value Proposition / Trust Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Qualité Supérieure",
                text: "Profitez du contenu en 4K Ultra HD et 8K sans buffering grâce à nos serveurs haute performance situés en France et en Europe.",
                keywords: "IPTV 4K France, Streaming Ultra HD"
              },
              {
                title: "Support Expert WhatsApp",
                text: "Notre support technique est disponible 24/7 directement via WhatsApp pour vous aider dans l'installation IPTV Smarters Pro.",
                keywords: "Aide IPTV WhatsApp, Support Technique"
              },
              {
                title: "Mises à jour Gratuites",
                text: "Le catalogue de films et séries est mis à jour quotidiennement (Netflix, Disney+, Prime) sans aucun frais supplémentaire.",
                keywords: "VOD IPTV France, Mise à jour Streaming"
              }
            ].map((box, i) => (
              <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/5 hover:bg-gold/5 transition-all duration-500">
                <h3 className="text-xl font-black uppercase text-white mb-4 tracking-tight">{box.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6 italic">{box.text}</p>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gold/30">{box.keywords}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-[3rem] p-12 overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gold" />
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-8 right-8 p-3 text-white/20 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                <div className="relative z-10">
                  <span className="text-gold text-xs font-black uppercase tracking-[0.6em] mb-4 block italic">
                    {selectedItem.type === 'player' ? 'Configuration Lecteur' : 'Support Appareil'}
                  </span>
                  <h3 className="text-5xl font-black uppercase text-white mb-8 tracking-tighter">
                    {selectedItem.name}
                  </h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-12">
                    {itemDetails[selectedItem.name] || "Découvrez comment optimiser votre expérience IPTV Smarters Pro avec ce support premium."}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/product"
                      onClick={() => setSelectedItem(null)}
                      className="flex-[2] px-8 py-5 bg-gold rounded-2xl text-[10px] font-black uppercase tracking-widest text-black hover:scale-[1.02] active:scale-95 transition-all text-center shadow-xl shadow-gold/20"
                    >
                      Acheter IPTV Smarters Pro
                    </Link>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all"
                    >
                      Fermer
                    </button>
                  </div>
                </div>

                <div className="absolute -bottom-16 -right-16 opacity-[0.03] rotate-12 pointer-events-none">
                  {selectedItem.type === 'player' ? <PlayCircle size={320} /> : <Zap size={320} />}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
