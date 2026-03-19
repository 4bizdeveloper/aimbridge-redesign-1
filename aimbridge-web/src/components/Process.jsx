import { LucideMessageSquare, LucideSchool, LucideFileText, LucidePlane } from 'lucide-react';

const steps = [
  { icon: LucideMessageSquare, title: "Free Career Counselling", desc: "Speak with our experts." },
  { icon: LucideSchool, title: "University Selection", desc: "Find your perfect match." },
  { icon: LucideFileText, title: "Visa Processing", desc: "We handle the paperwork." },
  { icon: LucidePlane, title: "Travel & Support", desc: "Arrival and on-campus help." }
];

export default function Process() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">Your Journey in <span className="text-brand">4 Simple Steps</span></h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                <step.icon size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}