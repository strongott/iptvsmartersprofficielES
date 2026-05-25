import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft, Share2, Facebook, Twitter, Zap, Link as LinkIcon, X, Tag as TagIcon } from 'lucide-react';
import Markdown from 'react-markdown';
import { BLOG_POSTS } from '../constants/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseUrl = "https://iptvsmartersprofficiel.shop";
  const pageUrl = `${baseUrl}/blog/${post.slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl);
    // Optional: show a toast or feedback
  };

  return (
    <div className="bg-[#0B1120] min-h-screen pt-32 pb-20 selection:bg-gold selection:text-black">
      <AnimatePresence>
        {showStickyNav && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] bg-slate-900/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between"
          >
            <div className="flex items-center gap-4 max-w-[60%]">
              <Link 
                to="/blog" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                title="Retour au blog"
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <h2 className="text-sm font-black uppercase tracking-widest text-white truncate hidden md:block">
                {post.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black hidden lg:block mr-2">Partager</span>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-gold/20 hover:border-gold/30 transition-all"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-[#1877F2]/20 hover:border-[#1877F2]/30 transition-all"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <button 
                onClick={copyToClipboard}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <Helmet>
        {/* Basic SEO */}
        <title>{post.title} | IPTV Smarters Pro le Meilleur IPTV France</title>
        <meta name="description" content={`${post.excerpt} Optimisez l'application iptv smarters pro pour un visionnage 4K ultra stable and découvrez pourquoi IPTV Smarters Pro le Meilleur IPTV France.`} />
        <meta name="keywords" content={`${post.keywords.join(', ')}, iptv smarters pro, IPTV Smarters Pro le Meilleur IPTV France, Le meilleur abonnement IPTV pour les utilisateurs en France, streaming 4K sans coupure, IPTV Smarters Pro officiel`} />
        <meta name="author" content={post.author.name} />

        {/* Structured Data: BlogPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "url": "https://iptvsmartersprofficiel.shop/blog"
            },
            "datePublished": post.date,
            "dateModified": "2026-05-19",
            "image": post.image,
            "publisher": {
              "@type": "Organization",
              "name": "IPTV Smarters Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iptvsmartersprofficiel.shop/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://iptvsmartersprofficiel.shop/blog/${post.slug}`
            }
          })}
        </script>

        {/* Global Canonical */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${post.title} | Blog IPTV Smarters Pro`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:site_name" content="IPTV Smarters Pro" />

        {/* Structured Data for Article SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "author": {
              "@type": "Person",
              "name": post.author.name
            },
            "publisher": {
              "@type": "Organization",
              "name": "IPTV Smarters Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iptvsmartersprofficiel.shop/logo.png"
              }
            },
            "datePublished": "2024-05-14",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": pageUrl
            },
            "keywords": "iptv france, best iptv subscription, 4k streaming, iptv no buffering"
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://iptvsmartersprofficiel.shop/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": pageUrl
              }
            ]
          })}
        </script>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `Abonnement IPTV Smarters Pro Premium - ${post.title}`,
            "description": post.excerpt,
            "image": post.image,
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

      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ChevronLeft className="w-4 h-4 text-gold group-hover:-translate-x-1 transition-transform" /> Retour au Blog
        </Link>
        
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 text-[10px] text-gold font-black uppercase tracking-[0.3em] mb-8">
            <span className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">{post.category}</span>
            <span className="text-white/30 flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="text-white/30 flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-12">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-white/5 py-8 mt-12">
            <div className="flex items-center gap-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full border border-white/10"
                />
                <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Rédigé par</p>
                    <p className="text-sm text-white font-bold">{post.author.name}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
                    <Share2 className="w-4 h-4" />
                </button>
            </div>
          </div>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20 rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto opacity-80"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="markdown-body prose prose-invert prose-yellow max-w-none prose-h2:text-white prose-h2:uppercase prose-h2:tracking-tighter prose-h2:text-3xl prose-p:text-white/60 prose-p:leading-relaxed prose-li:text-white/60 mb-12"
        >
          <Markdown>{post.content}</Markdown>
          
          <div className="mt-16 p-8 rounded-2xl bg-gold/5 border border-gold/10">
            <h4 className="text-xl font-bold uppercase tracking-tight mb-2 text-gold">Conclusion : Profitez du Meilleur Service</h4>
            <p className="text-sm text-white/50 m-0">
              En tant que leader incontesté, notre service entièrement compatible <span className="text-white font-bold">iptv smarters pro</span> continue de devancer les autres standards mondiaux. Nos performances ultra-stables font d'**IPTV Smarters Pro le Meilleur IPTV France** pour tous vos écrans. Profitez immédiatement d'une livraison 100% automatisée pour un streaming HD, UHD & 4K stable sans coupure.
            </p>
            <div className="mt-10">
              <Link 
                to="/product" 
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gold rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-gold/20"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative text-xs font-black uppercase tracking-widest text-black flex items-center gap-3">
                  Acheter mon abonnement IPTV Smarters Pro
                  <Zap className="w-4 h-4 fill-black" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Tags Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-2 mb-20 pb-12 border-b border-white/5"
        >
          {post.tags.map(tag => (
            <Link 
              key={tag}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/50 uppercase font-black tracking-widest hover:bg-gold hover:border-gold hover:text-black transition-all flex items-center gap-2"
            >
              <TagIcon className="w-3 h-3" />
              {tag}
            </Link>
          ))}
        </motion.div>

        {/* Author Bio Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[3rem] bg-zinc-950 border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-8 content-visibility-auto"
        >
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] object-cover border-4 border-white/5 shadow-2xl"
          />
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-[10px] text-gold font-bold uppercase tracking-widest mb-4">
              {post.author.role}
            </span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">À propos de {post.author.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
              "{post.author.bio}"
            </p>
          </div>
        </motion.div>

        {/* SEO Keyword Section - Visually Hidden */}
        <section className="sr-only" aria-hidden="true">
          {Array.from({ length: 150 }).map((_, i) => (
            <span key={i}>{post.title} - iptv smarters pro - IPTV Smarters Pro le Meilleur IPTV France - iptv smarters pro officiel - {post.category} - Le meilleur abonnement IPTV pour les utilisateurs en France - streaming 4k sans coupure - {post.slug} - </span>
          ))}
        </section>
        
        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-8">Partager cet article</p>
            <div className="flex justify-center flex-wrap gap-6">
                <button className="flex items-center gap-2 px-6 py-3 bg-gold rounded-full text-[10px] font-black uppercase tracking-widest text-black hover:scale-105 transition-all">
                    <Twitter className="w-4 h-4 fill-black" /> Twitter
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-black hover:scale-105 transition-all">
                    <Facebook className="w-4 h-4 fill-black" /> Facebook
                </button>
                <button className="flex items-center gap-2 px-10 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all">
                    <LinkIcon className="w-4 h-4" /> Copier le Lien
                </button>
            </div>
        </footer>
      </div>
    </div>
  );
}
