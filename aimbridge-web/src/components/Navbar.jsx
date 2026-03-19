import { useState, useEffect } from 'react';
import { LucideMenu, LucideX, LucidePhone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for transparency and shape
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 md:px-8 
        ${isScrolled ? 'pt-4' : 'pt-0'}`}
      >
        <div 
          className={`max-w-7xl mx-auto transition-all duration-500 
          ${isScrolled 
            ? 'bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl h-16 px-6' 
            : 'bg-transparent h-24 px-4 border-b border-transparent'
          } flex items-center justify-between`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">A</span>
            </div>
            <span className={`text-2xl font-black tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Aimbridge<span className="text-brand">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest text-slate-800 hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-slate-950 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand transition-all shadow-md active:scale-95">
              Talk to Expert
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'bg-slate-100' : 'bg-white/20 backdrop-blur-md'}`}
          >
            <LucideMenu size={24} className="text-slate-900" />
          </button>
        </div>
      </nav>

      {/* Mobile Flyout Menu (Right Side) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[120] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 bg-slate-100 rounded-2xl text-slate-900"
                >
                  <LucideX size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-black text-slate-900 hover:text-brand transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Contact Us</p>
                <a href="tel:+" className="flex items-center gap-4 p-4 bg-brand/5 rounded-2xl text-brand font-bold">
                  <LucidePhone size={20} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}