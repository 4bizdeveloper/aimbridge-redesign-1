import React from 'react';
import { Plane, Stethoscope, GraduationCap, CheckCircle, MessageCircle, Phone, MapPin, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">{children}</h2>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="text-2xl font-black tracking-tight text-brand">AIMBRIDGE</div>
        <div className="hidden md:flex space-x-8 font-semibold text-slate-600">
          <a href="#home" className="hover:text-brand">Home</a>
          <a href="#programs" className="hover:text-brand">Programs</a>
          <a href="#about" className="hover:text-brand">About Us</a>
        </div>
        <button className="bg-brand text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-blue-200 transition-all">
          Apply Now
        </button>
      </nav>

      {/* Hero Section [cite: 2, 3, 4] */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="bg-blue-100 text-brand px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
              Admission 2026 Open
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-6 leading-tight">
              Structured Pathways to Global Careers [cite: 2]
            </h1>
            <p className="text-xl text-slate-600 mt-6 mb-10 leading-relaxed">
              Professional guidance for admission to recognized international universities. [cite: 4]
            </p>
            <div className="flex gap-4">
              <button className="bg-brand text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200">
                Book Free Counselling [cite: 9]
              </button>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mt-12">
              <CheckCircle className="text-green-500 mb-4" />
              <p className="font-bold">Transparent Fee Structure [cite: 5]</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <CheckCircle className="text-green-500 mb-4" />
              <p className="font-bold">Direct University Partnerships [cite: 6]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs [cite: 10-29] */}
      <section id="programs" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Our Programs [cite: 10]</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {/* MBBS [cite: 11-17] */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <Stethoscope className="text-brand mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-2">MBBS Abroad [cite: 11]</h3>
              <p className="text-brand font-medium mb-4 italic">Georgia | Russia | Uzbekistan [cite: 12]</p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2"><CheckCircle size={16}/> 50% in PCB (10+2) [cite: 13]</li>
                <li className="flex items-center gap-2"><Clock size={16}/> 6 Years Duration [cite: 14]</li>
                <li className="flex items-center gap-2"><GraduationCap size={16}/> English Medium [cite: 15]</li>
              </ul>
              <button className="w-full py-4 bg-white border-2 border-slate-200 rounded-2xl font-bold hover:border-brand transition-colors">
                View MBBS Details [cite: 17]
              </button>
            </div>

            {/* Nursing [cite: 18-23] */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <Shield className="text-brand mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-2">Nursing - Georgia [cite: 18]</h3>
              <p className="text-brand font-medium mb-4 italic">Global Career Opportunities [cite: 22]</p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2"><CheckCircle size={16}/> 50% in 10+2 [cite: 19]</li>
                <li className="flex items-center gap-2"><Clock size={16}/> 4 Years Program [cite: 20]</li>
              </ul>
              <button className="w-full py-4 bg-white border-2 border-slate-200 rounded-2xl font-bold hover:border-brand transition-colors">
                View Nursing Details [cite: 23]
              </button>
            </div>

            {/* Pilot Training [cite: 24-29] */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <Plane className="text-brand mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-2">Pilot Training [cite: 24]</h3>
              <p className="text-brand font-medium mb-4 italic">South Africa | USA [cite: 24]</p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2"><CheckCircle size={16}/> CPL License [cite: 26]</li>
                <li className="flex items-center gap-2"><MapPin size={16}/> DGCA Ground School [cite: 27]</li>
              </ul>
              <button className="w-full py-4 bg-white border-2 border-slate-200 rounded-2xl font-bold hover:border-brand transition-colors">
                View Pilot Details [cite: 29]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button className="bg-[#25D366] text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </button>
        <button className="bg-brand text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform">
          <Phone size={28} />
        </button>
      </div>
    </div>
  );
}