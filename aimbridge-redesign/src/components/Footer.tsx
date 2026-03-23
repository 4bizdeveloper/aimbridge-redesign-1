import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6">Aimbridge Education</h3>
          <p className="text-gray-400 text-sm leading-relaxed">[cite: 45, 63]</p>
        </div>
        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/mbbs-abroad">MBBS Abroad</Link></li>
            <li><Link href="/nursing">Nursing</Link></li>
            <li><Link href="/pilot-training">Pilot Training</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6">Contact</h4>
          <p className="text-gray-400 text-sm">Calicut, Kerala, India [cite: 78]</p>
          <p className="text-gray-400 text-sm mt-2">Phone: [Your Number] [cite: 79]</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        © 2026 Aimbridge Education. All rights reserved.
      </div>
    </footer>
  );
}