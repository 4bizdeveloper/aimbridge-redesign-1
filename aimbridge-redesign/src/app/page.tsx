import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Globe, GraduationCap, Plane } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
            Structured Pathways to <span className="text-blue-600">Global Careers</span> [cite: 2]
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">[cite: 4]</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition">Apply Now [cite: 8]</button>
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition">Book Free Counselling [cite: 9]</button>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Programs [cite: 10]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MBBS Card */}
          <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6"><GraduationCap /></div>
            <h3 className="text-2xl font-bold mb-4">MBBS Abroad [cite: 11]</h3>
            <p className="text-gray-500 mb-6">Georgia | Russia | Uzbekistan [cite: 12]</p>
            <ul className="space-y-3 mb-8 text-gray-600 text-sm">
              <li>✓ English Medium [cite: 15]</li>
              <li>✓ Affordable Fee Structure [cite: 16]</li>
            </ul>
            <a href="/mbbs-abroad" className="text-blue-600 font-bold hover:underline">View Details →</a>
          </div>

          {/* Nursing Card */}
          <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><Globe /></div>
            <h3 className="text-2xl font-bold mb-4">Nursing - Georgia [cite: 18]</h3>
            <p className="text-gray-500 mb-6">4 Years Program [cite: 20]</p>
            <a href="/nursing" className="text-blue-600 font-bold hover:underline">View Details →</a>
          </div>

          {/* Pilot Card */}
          <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Plane /></div>
            <h3 className="text-2xl font-bold mb-4">Pilot Training [cite: 24]</h3>
            <p className="text-gray-500 mb-6">South Africa | USA [cite: 24]</p>
            <a href="/pilot-training" className="text-blue-600 font-bold hover:underline">View Details →</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}