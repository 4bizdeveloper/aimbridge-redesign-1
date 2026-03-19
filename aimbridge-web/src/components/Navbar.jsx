import { LucideMenu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-brand">Aimbridge</div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-brand transition">Home</a>
          <a href="#about" className="hover:text-brand transition">About</a>
          <a href="#programs" className="hover:text-brand transition">Programs</a>
          <a href="#contact" className="hover:text-brand transition">Contact</a>
        </div>
        <button className="md:hidden"><LucideMenu /></button>
      </div>
    </nav>
  );
}