import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'motion/react';
import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import WhatsAppWidget from './components/ui/WhatsAppWidget';
import GoogleReviewsWidget from './components/ui/GoogleReviewsWidget';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Channels = lazy(() => import('./pages/Channels'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Product = lazy(() => import('./pages/Product'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Contact = lazy(() => import('./pages/Contact'));
const CountryLanding = lazy(() => import('./pages/CountryLanding'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-slate-950">
    <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="fr" />
        {/* Global Fallback SEO Metadata */}
        <meta property="og:site_name" content="IPTV Smarters Pro" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="de_DE" />
        <meta property="og:locale:alternate" content="it_IT" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="nl_NL" />

        <meta name="twitter:card" content="summary_large_image" />

        {/* Automatic Hreflang Tags for Multi-Language European Target Security */}
        <link rel="alternate" hrefLang="x-default" href="https://iptvsmartersprofficiel.shop/" />
        <link rel="alternate" hrefLang="fr-fr" href="https://iptvsmartersprofficiel.shop/abonnement-iptv-france" />
        <link rel="alternate" hrefLang="fr-be" href="https://iptvsmartersprofficiel.shop/iptv-abonnement-belgique" />
        <link rel="alternate" hrefLang="de-de" href="https://iptvsmartersprofficiel.shop/iptv-kaufen-deutschland" />
        <link rel="alternate" hrefLang="de-at" href="https://iptvsmartersprofficiel.shop/iptv-oesterreich" />
        <link rel="alternate" hrefLang="it-it" href="https://iptvsmartersprofficiel.shop/abbonamento-iptv-italia" />
        <link rel="alternate" hrefLang="es-es" href="https://iptvsmartersprofficiel.shop/comprar-iptv-espana" />
        <link rel="alternate" hrefLang="en-gb" href="https://iptvsmartersprofficiel.shop/premium-iptv-uk" />
        <link rel="alternate" hrefLang="en-ie" href="https://iptvsmartersprofficiel.shop/reliable-iptv-server-ireland" />
        <link rel="alternate" hrefLang="nl-nl" href="https://iptvsmartersprofficiel.shop/iptv-abonnement-nederland" />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans relative overflow-x-hidden">
          {/* Global Ambient Background Glow */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px]" />
          </div>

          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-yellow-900 origin-left z-[100]"
            style={{ scaleX }}
          />
          
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/channels" element={<Channels />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/comment-ca-marche" element={<HowItWorks />} />
                <Route path="/product" element={<Product />} />
                <Route path="/abonnement/:planId" element={<Product />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Localized European Landing Slugs */}
                {/* France & Belgium */}
                <Route path="/iptv-subscription-france" element={<CountryLanding />} />
                <Route path="/best-iptv-france" element={<CountryLanding />} />
                <Route path="/abonnement-iptv-france" element={<CountryLanding />} />
                <Route path="/iptv-premium-france" element={<CountryLanding />} />
                <Route path="/iptv-abonnement-belgique" element={<CountryLanding />} />
                <Route path="/iptv-belgium" element={<CountryLanding />} />

                {/* Germany & Austria */}
                <Route path="/iptv-subscription-germany" element={<CountryLanding />} />
                <Route path="/best-iptv-germany" element={<CountryLanding />} />
                <Route path="/iptv-austria" element={<CountryLanding />} />
                <Route path="/iptv-kaufen-deutschland" element={<CountryLanding />} />
                <Route path="/iptv-server-stabil" element={<CountryLanding />} />
                <Route path="/iptv-oesterreich" element={<CountryLanding />} />

                {/* Italy */}
                <Route path="/iptv-subscription-italy" element={<CountryLanding />} />
                <Route path="/best-iptv-italy" element={<CountryLanding />} />
                <Route path="/abbonamento-iptv-italia" element={<CountryLanding />} />
                <Route path="/miglior-iptv-2026" element={<CountryLanding />} />
                <Route path="/iptv-streaming-stabile" element={<CountryLanding />} />

                {/* Spain */}
                <Route path="/iptv-subscription-spain" element={<CountryLanding />} />
                <Route path="/best-iptv-spain" element={<CountryLanding />} />
                <Route path="/lista-iptv-premium" element={<CountryLanding />} />
                <Route path="/comprar-iptv-espana" element={<CountryLanding />} />
                <Route path="/mejor-iptv-sin-cortes" element={<CountryLanding />} />

                {/* Netherlands & Benelux */}
                <Route path="/iptv-subscription-netherlands" element={<CountryLanding />} />
                <Route path="/iptv-abonnement-nederland" element={<CountryLanding />} />
                <Route path="/goedkope-iptv-kopen" element={<CountryLanding />} />

                {/* United Kingdom & Ireland */}
                <Route path="/iptv-subscription-uk" element={<CountryLanding />} />
                <Route path="/best-iptv-uk" element={<CountryLanding />} />
                <Route path="/premium-iptv-uk" element={<CountryLanding />} />
                <Route path="/best-iptv-subscription-uk" element={<CountryLanding />} />
                <Route path="/reliable-iptv-server-ireland" element={<CountryLanding />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppWidget />
          <GoogleReviewsWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}
