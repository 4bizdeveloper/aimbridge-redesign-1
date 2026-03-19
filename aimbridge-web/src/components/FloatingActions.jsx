import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "910000000000"; // Replace with your real number
  const message = encodeURIComponent("Hello Aimbridge Education, I am interested in your programs.");

  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-5 items-end">
      
      {/* AI Chat Button - Matched Size */}
      <motion.button
        whileHover={{ y: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-2xl shadow-xl border border-white/10"
      >
        <Bot size={28} strokeWidth={1.5} />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Tooltip */}
        <span className="absolute right-20 bg-slate-900/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 border border-white/10 whitespace-nowrap">
          Aimbridge AI
        </span>
      </motion.button>

      {/* WhatsApp Button - Real Branding + Modern Squircle */}
      <div className="relative group">
        <AnimatePresence>
          {showTooltip && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              className="absolute bottom-20 right-0 w-64 bg-white/90 backdrop-blur-2xl p-5 rounded-[2rem] shadow-2xl border border-white"
            >
              <button 
                onClick={() => setShowTooltip(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-[#25D366] uppercase tracking-[0.15em]">WhatsApp Support</span>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  Chat with our experts for direct admission.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-2xl shadow-[0_15px_30px_rgba(37,211,102,0.4)]"
        >
          {/* Real WhatsApp SVG Path */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-9 h-9 text-white fill-current" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.895-5.338 11.898-11.896a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>

          {/* Glowing Ring Background */}
          <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
        </motion.a>
      </div>
    </div>
  );
}