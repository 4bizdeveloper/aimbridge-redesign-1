import { motion } from 'framer-motion';
import { LucideMapPin, LucidePhone, LucideMail, LucideInstagram, LucideFacebook, LucideLinkedin, LucideYoutube, LucideArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: LucideInstagram, href: "#" },
    { icon: LucideFacebook, href: "#" },
    { icon: LucideLinkedin, href: "#" },
    { icon: LucideYoutube, href: "#" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: CTA / Newsletter Card */}
        <div className="relative mb-20 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-brand/20 to-slate-900 border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] -z-10" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-3xl font-black mb-2">Ready to start your journey?</h3>
              <p className="text-slate-400 font-medium">Get the latest updates on international admission intakes and visa policies.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent px-4 py-3 outline-none flex-grow md:w-64 text-sm font-medium"
              />
              <button className="bg-brand hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">A</span>
              </div>
              <span className="text-2xl font-black tracking-tight">Aimbridge<span className="text-brand">.</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Professionally managed overseas education consultancy based in Kerala. Guiding students toward globally recognized careers.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all group">
                  <social.icon size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><a href="/mbbs-details" className="hover:text-brand transition flex items-center gap-2 group">MBBS Abroad <LucideArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-brand transition flex items-center gap-2 group">Nursing in Georgia <LucideArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-brand transition flex items-center gap-2 group">Pilot Training <LucideArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-brand transition flex items-center gap-2 group">University Selection <LucideArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li className="flex items-start gap-3">
                <LucideMapPin className="text-brand shrink-0" size={18} />
                <span>Calicut, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <LucidePhone className="text-brand shrink-0" size={18} />
                <span>+91 0000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <LucideMail className="text-brand shrink-0" size={18} />
                <span>info@aimbridge.com</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Goal</h4>
            <p className="text-slate-400 text-sm leading-relaxed font-medium mb-4">
              To create clear and responsible international education pathways for students seeking global career opportunities.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-[10px] uppercase font-black tracking-widest text-brand mb-1">Status</p>
              <p className="text-xs font-bold">Admissions Open for 2026 Intake</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
          <p>© {currentYear} Aimbridge Education</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}