import { Link, useNavigate, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const pricingPlans = [
  { id: '1-mois', name: "ABONNEMENT IPTV 1 MOIS", price: "12.99", desc: "OFFRE PREMIUM 4K" },
  { id: '3-mois', name: "ABONNEMENT IPTV 3 MOIS", price: "29.99", desc: "OFFRE PREMIUM 4K" },
  { id: '6-mois', name: "ABONNEMENT IPTV 6 MOIS", price: "39.99", desc: "OFFRE PREMIUM 4K" },
  { id: '12-mois', name: "ABONNEMENT IPTV 12 MOIS", price: "59.99", desc: "OFFRE PREMIUM 4K", featured: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pricingRef.current && !pricingRef.current.contains(event.target as Node)) {
        setIsPricingOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <img 
            src="/logo.png" 
            alt="IPTV Smarters Pro Logo" 
            className="w-10 h-10 rounded-xl object-cover border border-white/10 group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            IPTV <span className="text-blue-500">Smarters Pro</span>
          </span>
        </Link>

        {/* Live Server Status */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Status: <span className="text-green-500">Live Server</span></span>
        </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-white/70 hover:text-white'}`}
            >
              Accueil
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-white/70 hover:text-white'}`}>FAQ</NavLink>
            
            {/* Desktop Dropdown */}
          <div className="relative" ref={pricingRef}>
            <button 
              onClick={() => setIsPricingOpen(!isPricingOpen)}
              onMouseEnter={() => setIsPricingOpen(true)}
              className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              Tarifs 
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPricingOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isPricingOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  onMouseLeave={() => setIsPricingOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-[#0a1528] border border-white/10 rounded-[2rem] shadow-2xl p-4 overflow-hidden z-[60]"
                >
                  <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="px-4 py-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Premium Experience</span>
                      </div>
                    </div>

                    {pricingPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => {
                          setIsPricingOpen(false);
                          navigate(`/abonnement/${plan.id}`);
                        }}
                        className={`w-full text-left px-6 py-5 rounded-[1.5rem] transition-all flex items-center justify-between group/item ${
                          plan.featured 
                            ? 'bg-gold/10 border border-gold/30 hover:bg-gold/20' 
                            : 'hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className={`text-[11px] font-black tracking-tight uppercase ${plan.featured ? 'text-gold' : 'text-white'}`}>
                            {plan.name}
                          </span>
                          <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-1">
                            {plan.desc}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-sm font-black ${plan.featured ? 'text-gold' : 'text-white'}`}>
                            {plan.price}€
                          </span>
                          {plan.featured && <Sparkles className="w-3 h-3 text-gold" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

            <NavLink to="/channels" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-white/70 hover:text-white'}`}>Chaînes</NavLink>
            <NavLink to="/blog" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-white/70 hover:text-white'}`}>Blog</NavLink>
            <NavLink 
              to="/comment-ca-marche" 
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-gold underline decoration-gold/30 underline-offset-8' : 'text-gold hover:text-white'}`}
            >
              Comment ça marche ?
            </NavLink>
          <Link 
            to="/product" 
            className="px-6 py-3 bg-gold text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:scale-110 active:scale-95 transition-all shadow-xl shadow-gold/20"
          >
            Acheter
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          <Link 
            to="/" 
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="text-lg font-medium text-white"
          >
            Accueil
          </Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70">FAQ</Link>
          
          <div>
            <button 
              onClick={() => setIsPricingOpen(!isPricingOpen)}
              className="w-full flex items-center justify-between text-lg font-medium text-white/70"
            >
              Tarifs
              <ChevronDown className={`w-5 h-5 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isPricingOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden flex flex-col gap-2 mt-4 px-4 border-l border-white/10"
                >
                  {pricingPlans.map((plan) => (
                    <Link
                      key={plan.id}
                      to={`/abonnement/${plan.id}`}
                      onClick={() => {
                        setIsOpen(false);
                        setIsPricingOpen(false);
                      }}
                      className="py-3 flex justify-between items-center"
                    >
                      <div className="flex flex-col">
                        <span className={`text-xs font-bold uppercase tracking-wider ${plan.featured ? 'text-gold' : 'text-white'}`}>
                          {plan.name}
                        </span>
                        <span className="text-[10px] text-white/30 uppercase">{plan.desc}</span>
                      </div>
                      <span className={`text-sm font-black ${plan.featured ? 'text-gold' : 'text-white'}`}>{plan.price}€</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/channels" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70">Chaînes</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70">Blog</Link>
          <Link 
            to="/comment-ca-marche" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gold"
          >
            Comment ça marche ?
          </Link>
          <Link 
            to="/product" 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-gold text-white text-sm font-bold uppercase tracking-widest rounded-xl text-center"
          >
            Acheter IPTV Smarters Pro
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
