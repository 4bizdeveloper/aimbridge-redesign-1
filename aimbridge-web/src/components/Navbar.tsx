"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-2xl text-blue-950 tracking-tight">Aimbridge</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link href="#mbbs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Study MBBS</Link>
            <Link href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md">
              Book Consultation
            </Link>
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link href="#home" className="block px-3 py-2 text-gray-600 font-medium">Home</Link>
          <Link href="#mbbs" className="block px-3 py-2 text-gray-600 font-medium">Study MBBS</Link>
        </div>
      )}
    </nav>
  );
}