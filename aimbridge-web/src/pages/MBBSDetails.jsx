import { motion } from 'framer-motion';

const destinations = [
  { country: "Georgia", unis: "5+ Universities", img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800" },
  { country: "Russia", unis: "10+ Universities", img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=800" },
  { country: "Uzbekistan", unis: "3+ Universities", img: "https://images.unsplash.com/photo-1528510138831-272cb28d241a?q=80&w=800" }
];

export default function MBBSDetails() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Study MBBS Abroad</h1>
        <p className="text-xl text-slate-600 font-medium">Georgia | Russia | Uzbekistan</p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="text-4xl">🌍</span> Choose Your Destination
        </h2>
        
        {/* Three large clickable cards based on requirements */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
              <img src={dest.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={dest.country} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">MBBS in {dest.country}</h3>
                <p className="text-slate-200 mb-4 font-medium">{dest.unis}</p>
                <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm">View Universities</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}