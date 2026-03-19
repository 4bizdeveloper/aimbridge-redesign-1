import { motion } from 'framer-motion';
import { LucideCheckCircle, LucideCalendarDays } from 'lucide-react';

export default function Hero() {
  const points = [
    "Transparent Fee Structure",
    "Direct University Partnerships",
    "Complete Admission & Visa Support",
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-accent/30 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full font-semibold text-sm">
            <LucideCheckCircle size={16} />
            <span>Guiding Students to Global Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-950">
            Structured Pathways to <span className="text-brand">Global Careers</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-slate-800">
            Study MBBS Abroad | Nursing | Pilot Training
          </p>
          
          <p className="text-lg text-slate-600 max-w-3xl">
            Professional guidance for admission to recognized international universities in destinations like Georgia, Russia, Uzbekistan, South Africa, and the USA.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left pt-2">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-2.5 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <LucideCheckCircle className="text-emerald-500 flex-shrink-0" size={22} />
                <span className="font-semibold text-slate-800 text-sm leading-snug">{point}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <button className="bg-brand text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:bg-brand/90 transition transform hover:-translate-y-0.5">
              Apply Now
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-300 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition">
              <LucideCalendarDays size={20}/>
              Book Free Counselling
            </button>
          </div>
        </motion.div>
        
        {/* Right Image/Graphic Area */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Placeholder for real image later */}
          <div className="aspect-[4/5] bg-slate-100 rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center text-slate-400 p-8 text-center font-medium">
            (Replace with image of confident student at airport or university later)
          </div>
        </motion.div>
      </div>
    </section>
  );
}