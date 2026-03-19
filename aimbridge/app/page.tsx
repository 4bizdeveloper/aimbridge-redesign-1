import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, MessageCircle, GraduationCap, HeartPulse, Plane, Users, Award, Shield, BookOpen, Globe, Star } from 'lucide-react'

const programs = [
  {
    icon: GraduationCap,
    title: 'MBBS Abroad',
    subtitle: 'Georgia | Russia | Uzbekistan',
    points: ['50% in PCB in 10+2, Qualify NEET', '6 Years (5+1 internship)', 'English Medium', 'Fee: ₹1.5L – ₹3L per semester'],
    href: '/mbbs',
    color: '#1e3a6e',
    bg: '#f0f4ff',
  },
  {
    icon: HeartPulse,
    title: 'Nursing – Georgia',
    subtitle: 'BSc Nursing Program',
    points: ['50% in 10+2 Exam', '4 Years Program', 'Affordable Tuition Fee', 'Global Career Opportunities'],
    href: '/nursing',
    color: '#0d7c66',
    bg: '#f0faf7',
  },
  {
    icon: Plane,
    title: 'Pilot Training',
    subtitle: 'South Africa | USA',
    points: ['50% in Physics/Maths (NIOS Valid)', 'Commercial Pilot License (CPL)', 'DGCA Ground School', '200 Hours Flight Training'],
    href: '/pilot-training',
    color: '#7c3d12',
    bg: '#fff7ed',
  },
]

const whyUs = [
  'Direct partnership with international universities',
  '10+ years of overseas education experience',
  'Transparent fees – No hidden charges',
  'Step-by-step admission & visa support',
  'Dedicated country support team',
  'Education loan assistance',
  'Safe accommodation & student welfare support',
  'Free counselling',
]

const steps = [
  { num: '01', title: 'Free Career Counselling', desc: 'Discuss your goals, eligibility, and best-fit program with our expert counsellors.' },
  { num: '02', title: 'University Selection & Admission', desc: 'We guide you through selecting the right university and submitting your application.' },
  { num: '03', title: 'Documentation & Visa Processing', desc: 'Complete end-to-end support for documents, visa application, and approvals.' },
  { num: '04', title: 'Travel & On-Campus Support', desc: 'Airport departure assistance and on-campus orientation support.' },
]

const testimonials = [
  { name: 'Arjun Menon', course: 'MBBS', country: 'Georgia', text: 'Aimbridge made the entire process smooth and stress-free. I am now studying at Georgian National University. Best decision of my life!', stars: 5 },
  { name: 'Priya Nair', course: 'Nursing', country: 'Georgia', text: 'Very professional and transparent. No hidden charges, and they were available every step of the way. Highly recommend.', stars: 5 },
  { name: 'Rahul Krishna', course: 'Pilot Training', country: 'South Africa', text: 'My dream of becoming a pilot is coming true! The team guided me from DGCA exam prep to flight training enrollment.', stars: 5 },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #1e3a6e 0%, #0f2040 70%)', minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'rgba(232,184,32,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(232,184,32,0.06)' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div style={{ color: 'white' }} className="fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '50px', background: 'rgba(232,184,32,0.15)', border: '1px solid rgba(232,184,32,0.35)', color: '#e8b820', fontSize: '13px', marginBottom: '24px' }}>
              <Globe size={13} /> Kerala's Trusted Overseas Education Consultancy
            </div>

            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '20px' }}>
              Structured Pathways<br />to <span style={{ color: '#e8b820' }}>Global Careers</span>
            </h1>

            <p style={{ fontSize: '18px', color: '#bfdbfe', fontWeight: 600, marginBottom: '10px' }}>
              Study MBBS Abroad | Nursing | Pilot Training
            </p>
            <p style={{ fontSize: '15px', color: '#93c5fd', marginBottom: '32px', lineHeight: 1.7, maxWidth: '480px' }}>
              Professional guidance for admission to recognized international universities with complete admission & visa support.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
              {['Transparent Fee Structure', 'Direct University Partnerships', 'Complete Admission & Visa Support'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#86efac', fontSize: '13px' }}>
                  <CheckCircle size={15} /> {b}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                Apply Now <ArrowRight size={17} />
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', border: '2px solid white', color: 'white', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
                <MessageCircle size={17} /> Book Free Counselling
              </Link>
            </div>
          </div>

          {/* Right - Stats */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              {[
                { icon: Users, num: '1000+', label: 'Students Placed', color: '#e8b820' },
                { icon: Globe, num: '5+', label: 'Countries', color: '#4ade80' },
                { icon: Award, num: '10+', label: 'Years Experience', color: '#60a5fa' },
                { icon: BookOpen, num: '15+', label: 'Partner Universities', color: '#f472b6' },
              ].map(({ icon: Icon, num, label, color }) => (
                <div key={label} style={{ borderRadius: '16px', padding: '22px', textAlign: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <Icon size={26} style={{ color, margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '26px', fontWeight: 700, color: 'white' }}>{num}</div>
                  <div style={{ fontSize: '12px', color: '#93c5fd' }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: '🎓 MBBS Abroad – Georgia | Russia | Uzbekistan', href: '/mbbs' },
                { label: '🏥 Nursing – Georgia', href: '/nursing' },
                { label: '✈️ Pilot Training – South Africa | USA', href: '/pilot-training' },
              ].map(item => (
                <Link key={item.href} href={item.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.13)', color: 'white', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
                  {item.label} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* PROGRAMS */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }} id="programs">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#1e3a6e', marginBottom: '14px' }}>Our Programs</h2>
            <p style={{ color: '#6b7280', fontSize: '17px', maxWidth: '500px', margin: '0 auto' }}>Internationally recognized programs with transparent admissions and complete support</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {programs.map(({ icon: Icon, title, subtitle, points, href, color, bg }) => (
              <div key={title} className="card" style={{ border: '1px solid #f1f5f9', overflow: 'hidden' }}>
                <div style={{ height: '5px', background: color }} />
                <div style={{ padding: '28px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#1a1a2e', marginBottom: '4px' }}>{title}</h3>
                  <p style={{ fontSize: '13px', fontWeight: 600, color, marginBottom: '16px' }}>{subtitle}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                    {points.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                        <CheckCircle size={14} style={{ color, marginTop: '2px', flexShrink: 0 }} /> {p}
                      </div>
                    ))}
                  </div>
                  <Link href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color, textDecoration: 'none' }}>
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AIMBRIDGE */}
      <section style={{ padding: '80px 24px', background: 'white' }} id="why-us">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="two-col">
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#1e3a6e', marginBottom: '16px' }}>Why Choose Aimbridge Education?</h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.8, marginBottom: '28px' }}>
              We are student-centric, not business-centric. We find the best option for you — not students for the options we have.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '32px' }}>
              {whyUs.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px', borderRadius: '10px', background: '#f0f4ff' }}>
                  <CheckCircle size={16} style={{ color: '#1e3a6e', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '14px' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '10px', background: '#1e3a6e', color: 'white', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                Get Started <ArrowRight size={15} />
              </Link>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '10px', border: '2px solid #1e3a6e', color: '#1e3a6e', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
                About Us
              </Link>
            </div>
          </div>

          <div style={{ borderRadius: '24px', padding: '40px', background: 'linear-gradient(135deg, #1e3a6e, #0f2040)', color: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '52px', fontWeight: 800, color: '#e8b820' }}>10+</div>
              <div style={{ color: '#bfdbfe', fontSize: '15px' }}>Years of Excellence</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {[{ num: '1000+', label: 'Students' }, { num: '15+', label: 'Universities' }, { num: '5', label: 'Countries' }].map(({ num, label }) => (
                <div key={label} style={{ padding: '16px 8px', borderRadius: '12px', textAlign: 'center', background: 'rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '22px', fontWeight: 700, color: '#e8b820' }}>{num}</div>
                  <div style={{ fontSize: '11px', color: '#93c5fd', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '18px', borderRadius: '14px', textAlign: 'center', background: 'rgba(232,184,32,0.12)', border: '1px solid rgba(232,184,32,0.25)' }}>
              <Shield size={22} style={{ color: '#e8b820', margin: '0 auto 8px' }} />
              <p style={{ fontSize: '13px', color: '#bfdbfe', fontStyle: 'italic' }}>
                "We guide students to the best opportunity — not to fill seats."
              </p>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ADMISSION STEPS */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }} id="admission">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#1e3a6e', marginBottom: '14px' }}>Your Journey in 4 Simple Steps</h2>
            <p style={{ color: '#6b7280', fontSize: '17px' }}>From counselling to campus – we handle everything</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {steps.map((step) => (
              <div key={step.num} className="card" style={{ padding: '32px 24px', textAlign: 'center', border: '1px solid #f1f5f9' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1e3a6e', color: 'white', fontWeight: 700, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  {step.num}
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '16px', color: '#111827', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 32px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
              Start Your Journey Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#1e3a6e', marginBottom: '14px' }}>Student Stories</h2>
            <p style={{ color: '#6b7280', fontSize: '17px' }}>Real students, real success</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {testimonials.map(t => (
              <div key={t.name} className="card" style={{ padding: '28px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="#e8b820" style={{ color: '#e8b820' }} />
                  ))}
                </div>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e3a6e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#111827' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>{t.course} | {t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1e3a6e 0%, #0f2040 100%)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            Begin Your International Career with Confidence
          </h2>
          <p style={{ color: '#bfdbfe', fontSize: '17px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Speak with our expert team today and take the first step toward your global academic journey.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 32px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 32px', borderRadius: '12px', border: '2px solid white', color: 'white', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>
              <MessageCircle size={18} /> Contact Us
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <a href="tel:+91XXXXXXXXXX" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#bfdbfe', fontSize: '14px', textDecoration: 'none' }}>
              <Phone size={16} /> +91 XXXXX XXXXX
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}