import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { getLocalizedWhatsAppUrl } from '../../utils/whatsappHelper';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            className="absolute bottom-20 right-0 w-80 bg-zinc-950 border border-white/10 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(37,99,235,0.3)] overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gold p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black/20">
                      <img 
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100" 
                        alt="Support Agent"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tighter text-sm leading-none mb-1">Support Smarters Pro</h4>
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">En ligne maintenant</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Bonjour 👋 ! Comment pouvons-nous vous aider aujourd'hui ?
              </p>
            </div>

            {/* Content */}
            <div className="p-6 bg-zinc-950/50">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-6">
                <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider font-bold">
                  Questions sur nos forfaits, chaînes ou installation ? Nos experts sont là.
                </p>
              </div>
              
              <a
                href={getLocalizedWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all font-black uppercase tracking-[0.2em] text-[10px] group shadow-lg shadow-green-500/20"
              >
                <span>Démarrer le Chat</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 text-center">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Réponse en moins de 5 min</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-[0_15px_30px_-10px_rgba(34,197,94,0.4)] transition-colors ${
          isOpen ? 'bg-zinc-900 border border-white/10 text-white' : 'bg-green-600 text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex items-center justify-center"
            >
              <MessageCircle className="w-8 h-8 fill-white/20" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black"
          />
        )}
      </motion.button>
    </div>
  );
}
