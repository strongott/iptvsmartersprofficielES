import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Play, MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "447853159847";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Bonjour, j'ai une question concernant le service IPTV Smarters Pro`;

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="IPTV Smarters Pro Logo" 
                className="w-8 h-8 rounded-lg object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold text-white uppercase tracking-tighter">IPTV Smarters Pro</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-4">
              IPTV Smarters Pro est votre fournisseur #1 d'abonnements IPTV premium. Streaming en 4K/8K Ultra HD avec plus de 20 000 chaînes et VOD.
            </p>
            <div className="flex items-center gap-3 mt-6 p-4 bg-white/5 rounded-2xl border border-white/10 w-fit group hover:border-gold/30 transition-all">
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Support 24/7</div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-gold transition-colors">
                  +44 7853 159847
                </a>
              </div>
            </div>
            <div className="hidden" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="IPTV Smarters Pro" />
              <meta itemProp="url" content="https://iptvsmartersprofficiel.shop" />
              <meta itemProp="logo" content="https://iptvsmartersprofficiel.shop/logo.png" />
              <meta itemProp="description" content="Leader du streaming IPTV premium 4K/8K." />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Plateforme</h4>
            <ul className="space-y-4">
              <li><Link to="/channels" className="text-sm text-white/40 hover:text-white transition-colors">Liste des Chaînes</Link></li>
              <li><Link to="/comment-ca-marche" className="text-sm text-white/40 hover:text-white transition-colors">Télécharger les Apps</Link></li>
              <li><Link to="/comment-ca-marche" className="text-sm text-white/40 hover:text-white transition-colors">Guide d'Installation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Entreprise</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-white/40 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/blog" className="text-sm text-white/40 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-white/40 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-white/40 hover:text-white transition-colors">Questions fréquentes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © 2026 IPTV Smarters Pro. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link to="/terms" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Conditions d'Utilisation</Link>
            <Link to="/privacy" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
