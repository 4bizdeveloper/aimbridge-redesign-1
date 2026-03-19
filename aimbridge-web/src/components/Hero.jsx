import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Empowering Your <span className="text-brand">Educational Journey</span>
        </motion.h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Aimbridge Education provides world-class guidance for students aiming for global excellence.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-brand text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition">Get Started</button>
          <button className="border border-slate-300 px-8 py-4 rounded-full font-bold hover:bg-slate-50">View Programs</button>
        </div>
      </div>
    </section>
  );
}