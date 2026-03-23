import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MBBSPage() {
  const universities = [
    { name: "Georgian National University SEU", fee: "$6300/year", duration: "6 years" },
    { name: "Tashkent Medical Academy TMA", fee: "$3500/year", duration: "6 years" }
  ];

  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">Study MBBS Abroad [cite: 84]</h1>
        <p className="text-gray-600 mb-12">Georgia | Russia | Uzbekistan [cite: 85]</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {universities.map((uni, index) => (
            <div key={index} className="bg-white border p-6 rounded-2xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600" alt={uni.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">{uni.name}</h3>
              <p className="text-blue-600 font-semibold mt-2">Course Fee: {uni.fee}</p>
              <p className="text-gray-500 text-sm mt-1">Duration: {uni.duration}</p>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-bold">Apply Now [cite: 109]</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}