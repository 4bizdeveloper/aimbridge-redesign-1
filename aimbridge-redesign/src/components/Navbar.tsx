import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          AIMBRIDGE
        </Link>
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/mbbs-abroad" className="hover:text-blue-600 transition">MBBS Abroad</Link>
          <Link href="/nursing" className="hover:text-blue-600 transition">Nursing</Link>
          <Link href="/pilot-training" className="hover:text-blue-600 transition">Pilot Training</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
        <Link href="https://wa.me/yournumber" className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
          <Phone size={18} /> WhatsApp
        </Link>
      </div>
    </nav>
  );
}