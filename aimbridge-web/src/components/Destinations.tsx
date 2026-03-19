"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const destinations = [
  "Georgia", "Uzbekistan", "Moldova", "Philippines", 
  "Kazakhstan", "Egypt", "Kyrgyzstan", "Russia"
];

export default function Destinations() {
  return (
    <section id="mbbs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">Study MBBS Abroad</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from the most sought-after medical universities globally with top-notch facilities and English instruction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((country, index) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer bg-blue-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-blue-600 transition-colors duration-300"
            >
              <MapPin className="h-8 w-8 text-blue-600 group-hover:text-white mb-3 transition-colors" />
              <h3 className="text-lg font-bold text-blue-950 group-hover:text-white transition-colors">
                {country}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}