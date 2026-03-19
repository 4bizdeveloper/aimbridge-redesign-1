"use client";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, BookOpen, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              The Best Study Abroad Consultant in India
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-950 tracking-tight mb-8 leading-tight">
              Discover Yourself in a <span className="text-blue-600">New Culture</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Achieve your dream of studying MBBS abroad. We provide step-by-step guidance to top-ranked universities worldwide with easy visa procedures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2">
                Get Free Counseling <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            {[
              { icon: Globe2, title: "20+ Countries", desc: "Top destinations including Georgia, UK, Canada & more." },
              { icon: BookOpen, title: "100+ Universities", desc: "Direct partners with globally recognized medical institutions." },
              { icon: Award, title: "10+ Years Exp.", desc: "Trusted expertise in overseas education and visa processing." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-950 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}