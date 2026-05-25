import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Search, Tag as TagIcon, X } from 'lucide-react';
import { BLOG_POSTS } from '../constants/blogData';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  const selectedTag = searchParams.get('tag');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BLOG_POSTS.map(post => post.category)));
    return cats.sort();
  }, []);

  const countries = ["France", "Belgique", "Suisse", "Luxembourg"];

  const popularTags = useMemo(() => {
    const counts: Record<string, number> = {};
    BLOG_POSTS.forEach(post => {
      post.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  }, []);

  const filteredPosts = useMemo(() => {
    const posts = [...BLOG_POSTS].reverse();
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesCountry = !selectedCountry || post.tags.includes(selectedCountry);

      return matchesSearch && matchesTag && matchesCategory && matchesCountry;
    });
  }, [searchQuery, selectedTag, selectedCategory, selectedCountry]);

  const handleTagClick = (tag: string | null) => {
    if (tag === null) {
      searchParams.delete('tag');
    } else {
      searchParams.set('tag', tag);
    }
    setSearchParams(searchParams);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      <Helmet>
        <title>{selectedTag ? `${selectedTag} | Blog IPTV Smarters Pro - Le Meilleur IPTV France` : 'Blog IPTV Smarters Pro le Meilleur IPTV France | Guides & Astuces Streaming 4K'}</title>
        <meta name="description" content={selectedTag ? `Articles sur ${selectedTag} par IPTV Smarters Pro le Meilleur IPTV France. Apprenez à configurer votre application iptv smarters pro facilement.` : 'Découvrez le blog de référence d\'IPTV Smarters Pro le Meilleur IPTV France. Nos guides et tutoriels complets pour l\'application iptv smarters pro et le streaming 4K sans ralentissement.'} />
        <meta name="keywords" content={`${selectedTag ? selectedTag + ', ' : ''}iptv smarters pro, IPTV Smarters Pro le Meilleur IPTV France, meilleur iptv, meilleur abonnement iptv, iptv premium, achat iptv, iptv pas cher, souscription iptv, iptv serveur france, Le meilleur abonnement IPTV pour les utilisateurs en France, streaming 4K sans coupure, IPTV Smarters Pro officiel, IPTV Smarters Pro avis`} />
        <link rel="canonical" href={`https://iptvsmartersprofficiel.shop/blog${selectedTag ? `?tag=${encodeURIComponent(selectedTag)}` : ''}`} />
        <meta property="og:url" content="https://iptvsmartersprofficiel.shop/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={selectedTag ? `${selectedTag} | IPTV Smarters Pro le Meilleur IPTV France` : "Blog IPTV Smarters Pro - Le Meilleur IPTV France"} />
        <meta property="og:description" content="Découvrez nos guides d'experts sur le streaming IPTV premium 4K sans coupure avec iptv smarters pro." />

         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": selectedTag ? `${selectedTag} | IPTV Smarters Pro le Meilleur IPTV France` : "IPTV Smarters Pro le Meilleur IPTV France Blog",
            "description": "Le blog ultime pour maitriser l'application iptv smarters pro et profiter de l'abonnement IPTV le plus stable de France.",
            "url": `https://iptvsmartersprofficiel.shop/blog${selectedTag ? `?tag=${encodeURIComponent(selectedTag)}` : ''}`,
            "publisher": {
              "@type": "Organization",
              "name": "IPTV Smarters Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iptvsmartersprofficiel.shop/logo.png"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement IPTV Smarters Pro Premium - Blog & Guides",
            "description": "Découvrez le blog de référence d'IPTV Smarters Pro le Meilleur IPTV France. Nos guides complets de configuration, astuces réseau pour l'application officielle iptv smarters pro.",
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
        <header className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-4 block">Votre Source d'Expertise Ultime</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
              IPTV Smarters Pro : <br/>
              <span className="text-gold">Le Meilleur IPTV France</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
              Bienvenue sur la plateforme incontournable de <span className="text-gold font-bold">IPTV Smarters Pro le Meilleur IPTV France</span>. Découvrez tous nos guides complets de configuration, astuces réseau pour l'application officielle <span className="text-white font-bold">iptv smarters pro</span>, et vivez une expérience de streaming 4K d'une stabilité absolue !
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/product" 
                className="px-8 py-4 bg-gold rounded-2xl text-[10px] font-black uppercase tracking-widest text-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold/20"
              >
                Acheter IPTV Smarters Pro
              </Link>
              <a 
                href="/#pricing" 
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all"
              >
                Voir les Tarifs
              </a>
              <Link 
                to="/comment-ca-marche"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gold hover:border-gold/30 transition-all flex items-center gap-2"
              >
                Comment ça marche ?
              </Link>
            </div>
          </motion.div>
        </header>

        <div className="mb-16 flex flex-col gap-10">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative grow max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                type="text"
                placeholder="RECHERCHER UN ARTICLE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-14 py-5 text-white text-xs font-bold tracking-[0.2em] uppercase focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/50 block md:text-right">
              {filteredPosts.length} ARTICLE{filteredPosts.length > 1 ? 'S' : ''} TROUVÉ{filteredPosts.length > 1 ? 'S' : ''}
            </p>
          </div>

          {/* Categories & Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Catégories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all border ${
                    !selectedCategory 
                      ? 'bg-gold border-yellow-600 text-black shadow-lg shadow-gold/20' 
                      : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                  }`}
                >
                  Toutes
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all border ${
                      selectedCategory === category
                        ? 'bg-gold border-yellow-600 text-black'
                        : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Pays</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCountry(null)}
                  className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all border ${
                    !selectedCountry 
                      ? 'bg-gold border-yellow-600 text-black shadow-lg shadow-gold/20' 
                      : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                  }`}
                >
                  Tous
                </button>
                {countries.map(country => (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(selectedCountry === country ? null : country)}
                    className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all border ${
                      selectedCountry === country
                        ? 'bg-gold border-yellow-600 text-black'
                        : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Tags Section (Requested) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-1 rounded-full bg-gold" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Tags Populaires</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(([tag, count]) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(selectedTag === tag ? null : tag)}
                  className={`px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all border flex items-center gap-2 group ${
                    selectedTag === tag
                      ? 'bg-white text-black border-white'
                      : 'bg-white/5 border-white/5 text-white/30 hover:border-gold/30 hover:text-gold hover:bg-gold/5'
                  }`}
                >
                  <TagIcon className={`w-3 h-3 ${selectedTag === tag ? 'text-black' : 'text-gold'}`} />
                  {tag}
                  <span className={`text-[8px] opacity-40 font-medium ${selectedTag === tag ? 'text-black' : ''}`}>
                    ({count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {filteredPosts.map((post, index) => (
        <motion.article 
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group cursor-pointer"
        >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-3xl mb-8 aspect-[16/10] bg-zinc-900 border border-white/5 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-gold text-black text-[10px] font-bold uppercase tracking-widest rounded-full z-10">
                  {post.category}
                </div>
              </Link>
              
              <div className="flex items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4">
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h2>
              </Link>

              <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <button 
                    key={tag} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleTagClick(tag);
                    }}
                    className={`px-3 py-1 border rounded-full text-[9px] uppercase font-black tracking-widest transition-colors ${
                      selectedTag === tag 
                        ? 'bg-gold border-yellow-600 text-black' 
                        : 'bg-white/5 border-white/10 text-white/30 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Lire l'Article <ChevronRight className="w-4 h-4 text-gold" />
                </Link>
                <Link 
                  to="/product" 
                  className="ml-auto inline-flex items-center gap-2 text-gold text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all"
                >
                  Commander <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-[3rem] bg-white/5">
          <Search className="w-12 h-12 text-white/10 mx-auto mb-6" />
          <h3 className="text-2xl font-black uppercase text-white mb-2">Aucun résultat trouvé</h3>
          <p className="text-white/40 text-sm">Essayez de rechercher avec d'autres mots-clés ou vérifiez l'orthographe.</p>
        </div>
      )}
        
        {/* Newsletter Box */}
        <section className="mt-40 p-12 md:p-20 bg-slate-950 border border-white/5 rounded-[3rem] text-center content-visibility-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Restez Informé.</h2>
            <p className="text-white/40 text-sm mb-12 max-w-md mx-auto">Recevez les derniers guides d'installation et des offres exclusives directement dans votre boîte mail.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                    type="email" 
                    placeholder="ENTREZ VOTRE EMAIL" 
                    className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-gold transition-colors"
                />
                <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-gold hover:text-black transition-all whitespace-nowrap">
                    S'abonner
                </button>
            </form>
        </section>

        {/* Global CTA Section after Blog List */}
        <section className="mt-20 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-gold/10 via-transparent to-transparent border border-gold/10 text-center content-visibility-auto">
          <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Le Moment de Choisir le Meilleur Service</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
            Rejoignez <span className="text-gold">IPTV Smarters Pro</span> <br/>Le Meilleur IPTV France.
          </h2>
          <p className="text-white/40 text-sm mb-10 max-w-xl mx-auto">
            Plus de 50 000 utilisateurs font confiance à **IPTV Smarters Pro le Meilleur IPTV France** pour leur divertissement quotidien. Profitez dès aujourd'hui du meilleur abonnement IPTV pour optimiser votre application **iptv smarters pro** en qualité ultra HD.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/product" 
              className="px-10 py-5 bg-gold text-black font-black uppercase tracking-widest text-[11px] rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-gold/30"
            >
              Prendre mon Pass 4K
            </Link>
            <Link 
              to="/channels" 
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-white/10 transition-all"
            >
              Consulter la Liste des Chaînes
            </Link>
          </div>
        </section>

        {/* SEO Keyword Section - Visually Hidden */}
        <section className="sr-only" aria-hidden="true">
          {Array.from({ length: 201 }).map((_, i) => (
            <span key={i}>iptv smarters pro - IPTV Smarters Pro le Meilleur IPTV France - iptv france - meilleur iptv - meilleur abonnement iptv - iptv premium - achat iptv - iptv pas cher - souscription iptv - iptv serveur france - IPTV Smarters Pro - IPTV Smarters Pro - iptvsmarters pro - Le meilleur abonnement IPTV pour les utilisateurs en France - meilleur service IPTV 2026 - installation iptv smarters - iptv smarters pro officiel - streaming sans coupure 4k - iptv premium france - meilleur fournisseur iptv - iptv stable express - aide installation iptv - </span>
          ))}
        </section>
      </div>
    </div>
  );
}
