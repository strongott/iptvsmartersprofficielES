import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronLeft, ChevronRight, Tv, Globe, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CHANNELS, CATEGORIES, Channel } from '../constants/channelsData';

const CHANNELS_PER_PAGE = 24;

const COUNTRIES = [
  { code: 'Tout', name: 'Tous les pays', flag: '🌐' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'UK', name: 'Royaume-Uni', flag: '🇬🇧' },
  { code: 'US', name: 'États-Unis', flag: '🇺🇸' },
  { code: 'DE', name: 'Allemagne', flag: '🇩🇪' },
  { code: 'ES', name: 'Espagne', flag: '🇪🇸' },
  { code: 'IT', name: 'Italie', flag: '🇮🇹' },
];

export default function Channels() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tout');
  const [selectedCountry, setSelectedCountry] = useState('Tout');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  // Filter channels based on search, category and country
  const filteredChannels = useMemo(() => {
    return CHANNELS.filter(channel => {
      const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Tout' || channel.category === selectedCategory;
      const matchesCountry = selectedCountry === 'Tout' || channel.country === selectedCountry;
      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [searchQuery, selectedCategory, selectedCountry]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredChannels.length / CHANNELS_PER_PAGE);
  const currentChannels = filteredChannels.slice(
    (currentPage - 1) * CHANNELS_PER_PAGE,
    currentPage * CHANNELS_PER_PAGE
  );

  // Reset page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setCurrentPage(1);
    setIsCountryOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const activeCountry = COUNTRIES.find(c => c.code === selectedCountry) || COUNTRIES[0];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950">
      <Helmet>
        <title>Le meilleur abonnement IPTV | Liste des Chaînes IPTV France Streaming - IPTV Smarters Pro</title>
        <meta name="description" content="Accédez à la meilleure offre IPTV France : plus de 35 000 chaînes HD/4K, films et séries. Le meilleur abonnement IPTV pour les utilisateurs en France avec streaming 4K sans coupure. Catalogue complet live & VOD." />
        <meta name="keywords" content="iptv france, best iptv subscription, 4k streaming, iptv no buffering, liste chaînes IPTV, meilleur abonnement IPTV, streaming sport 4K, Le meilleur abonnement IPTV pour les utilisateurs en France, IPTV Smarters Pro, iptv smarters pro officiel, catalogue iptv france, chaine sport iptv" />
        <link rel="canonical" href="https://iptvsmartersprofficiel.shop/channels" />
        
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
                "name": "Chaînes",
                "item": "https://iptvsmartersprofficiel.shop/channels"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Catalogue des Chaînes IPTV Smarters Pro",
            "description": "Découvrez le meilleur abonnement IPTV France avec streaming 4K sans coupure.",
            "numberOfItems": CHANNELS.length,
            "itemListElement": CHANNELS.slice(0, 10).map((channel, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": channel.name
            }))
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium - Liste des Chaînes",
            "description": "Accédez à la meilleure offre IPTV France : plus de 35 000 chaînes HD/4K, films et séries. Le meilleur abonnement IPTV pour les utilisateurs en France.",
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

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Catalogue des <span className="text-gold">Chaînes IPTV Smarters Pro</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl"
          >
            Accédez à une sélection mondiale de plus de 20 000 chaînes haute définition avec IPTV Smarters Pro. 
            Utilisez les filtres pour trouver votre contenu préféré instantanément sur IPTV Smarters Pro.
          </motion.p>
        </div>

        {/* Search and Filters Bar */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Rechercher une chaîne (ex: beIN Sports, TF1...)"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all font-medium"
              />
            </div>
            
            {/* Country Filter Dropdown */}
            <div className="relative min-w-[240px]">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="w-full flex items-center justify-between gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{activeCountry.flag}</span>
                  <span className="text-sm font-bold uppercase tracking-wider">{activeCountry.name}</span>
                </div>
                <Filter className={`w-4 h-4 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCountryOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setIsCountryOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden z-40 shadow-2xl backdrop-blur-xl"
                    >
                      {COUNTRIES.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => handleCountryChange(country.code)}
                          className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors hover:bg-white/5 ${
                            selectedCountry === country.code ? 'bg-gold/10 text-gold' : 'text-white/60'
                          }`}
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-sm font-bold uppercase tracking-wider">{country.name}</span>
                          {selectedCountry === country.code && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gold" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-4 rounded-2xl whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all border ${
                  selectedCategory === category
                    ? 'bg-gold border-yellow-600 text-black shadow-lg shadow-gold/20'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          <AnimatePresence mode="popLayout">
            {currentChannels.length > 0 ? (
              currentChannels.map((channel, index) => (
                <motion.div
                  key={channel.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index % 12 * 0.02 }}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-gold/50 hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Tv className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl" title={channel.country}>{channel.flag}</span>
                        <h3 className="text-sm font-semibold text-white truncate group-hover:text-gold transition-colors">
                          {channel.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                        <Globe className="w-3 h-3" />
                        <span>{channel.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Aucune chaîne trouvée</h3>
                <p className="text-white/40">Essayez d'ajuster vos filtres ou votre recherche.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                // Only show a limited number of page buttons
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-12 h-12 rounded-xl text-sm font-bold transition-all border ${
                        currentPage === pageNum
                          ? 'bg-gold border-yellow-600 text-black'
                          : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                if (
                  (pageNum === 2 && currentPage > 3) ||
                  (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return <span key={pageNum} className="text-white/20 px-1 self-center">...</span>;
                }
                return null;
              })}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* SEO Keyword Section - Visually Hidden */}
      <section className="sr-only" aria-hidden="true">
        {Array.from({ length: 150 }).map((_, i) => (
          <span key={i}>IPTV Smarters Pro - iptvsmarters pro officiel - Le meilleur abonnement IPTV pour les utilisateurs en France - liste des chaines iptv france - streaming 4k sans coupure - iptv premium - meilleur fournisseur iptv - iptv stable - iptv 2026 - foot live iptv - </span>
        ))}
      </section>
    </div>
  );
}
