import { LucideMapPin, LucideDollarSign, LucideClock, LucidePlaneTakeoff, LucideHeartPulse, LucideAward } from 'lucide-react';
import { motion } from 'framer-motion';

const programData = [
  {
    icon: LucideAward,
    title: "MBBS Abroad",
    destinations: "Georgia | Russia | Uzbekistan",
    details: [
      "✓ 50% in PCB in 10+2 Exam, Qualify NEET",
      "✓ 6 Years Duration (5 years + 1 year internship)",
      "✓ English Medium",
      "✓ Affordable Fee Structure (1.5 - 3 lakhs/semester)"
    ],
    cta: "View MBBS Details",
    color: "emerald"
  },
  {
    icon: LucideHeartPulse,
    title: "Nursing - Georgia",
    destinations: "Exclusive Program",
    details: [
      "✓ 50% in 10+2 Exam",
      "✓ 4 Years Program",
      "✓ Affordable Tuition Fee",
      "✓ Global Career Opportunities"
    ],
    cta: "View Nursing Details",
    color: "brand"
  },
  {
    icon: LucidePlaneTakeoff,
    title: "Pilot Training",
    destinations: "South Africa | USA",
    details: [
      "✓ 50% in Physics/Maths 10+2 Exam",
      "✓ Commercial Pilot License (CPL)",
      "✓ Advanced Simulator / Flight Training",
      "✓ 200 Hours Flight Training"
    ],
    cta: "View Pilot Training Details",
    color: "amber"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-28 px-6 bg-accent/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-950">Our <span className="text-brand">Programs</span></h2>
          <p className="text-lg text-slate-600">Explore specialized international pathways designed to launch your global professional career.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programData.map((prog, index) => {
            const Icon = prog.icon;
            const colors = {
              brand: "bg-brand text-brand",
              emerald: "bg-emerald-600 text-emerald-600",
              amber: "bg-amber-500 text-amber-500"
            };
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-xl hover:border-brand/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className={`p-3.5 rounded-2xl bg-opacity-10 ${colors[prog.color]}`}>
                    <Icon size={30} strokeWidth={2.5}/>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 group-hover:text-brand transition">{prog.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-500 mt-1">
                      <LucideMapPin size={15}/>
                      <p className="text-sm font-medium">{prog.destinations}</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 text-slate-700 flex-grow mb-10">
                  {prog.details.map(detail => (
                    <li key={detail} className="font-medium text-[15px] leading-relaxed">{detail}</li>
                  ))}
                </ul>

                <button className={`w-full text-white px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${colors[prog.color].split(' ')[0]} hover:brightness-110`}>
                  {prog.cta}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}