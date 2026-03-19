import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, Eye, MapPin, Phone, Mail } from 'lucide-react'

const values = [
  'We are committed to give the quality that you deserve.',
  'We aim at providing the best options to our students rather than providing students to the options we have. Student-centric, not business-centric.',
  'You are the decision makers of your lives — we are counsellors who provide effective options and guidance.',
  'Studying abroad may be a difficult process. But we make it easy by providing step-by-step assistance until the process ends.',
  'We aim to achieve a principal market position in education by providing reliable, quality education and service.',
]

export default function AboutPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e3a6e 0%, #0f2040 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'white' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700, marginBottom: '20px', color: 'white' }}>
            About Aimbridge Education
          </h1>
          <p style={{ color: '#bfdbfe', fontSize: '17px', lineHeight: 1.8 }}>
            A professionally managed overseas education consultancy in Kerala, guiding students toward globally recognized programs.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start', marginBottom: '60px' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#1e3a6e', marginBottom: '20px' }}>Who We Are</h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.9, marginBottom: '16px' }}>
                Aimbridge Education is a professionally managed overseas education consultancy based in Kerala, guiding students toward globally recognized programs in MBBS, Nursing, and Pilot Training. Aimbridge serves as a bridge to realizing their goals.
              </p>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.9, marginBottom: '16px' }}>
                We specialize in selected international destinations including Georgia, Russia, Uzbekistan, South Africa and USA — offering transparent, structured, and end-to-end admission and visa support.
              </p>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.9 }}>
                Our goal is to create clear and responsible international education pathways for students seeking global career opportunities.
              </p>
            </div>

            <div style={{ borderRadius: '20px', padding: '36px', background: 'linear-gradient(135deg, #1e3a6e, #0f2040)', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { num: '10+', label: 'Years Experience' },
                  { num: '1000+', label: 'Students Placed' },
                  { num: '15+', label: 'Universities' },
                  { num: '5', label: 'Countries' },
                ].map(({ num, label }) => (
                  <div key={label} style={{ padding: '20px 14px', borderRadius: '12px', textAlign: 'center', background: 'rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '28px', fontWeight: 700, color: '#e8b820' }}>{num}</div>
                    <div style={{ fontSize: '12px', color: '#93c5fd', marginTop: '4px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '60px' }} className="two-col">
            <div style={{ padding: '32px', borderRadius: '16px', background: '#f0f4ff', border: '1px solid #dbe4ff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Eye size={20} style={{ color: '#1e3a6e' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#1e3a6e' }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.8 }}>
                To be the most trusted overseas education consultancy in Kerala — known for transparency, student-first approach, and creating real pathways to global careers.
              </p>
            </div>

            <div style={{ padding: '32px', borderRadius: '16px', background: '#fef9ee', border: '1px solid #fde68a' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Target size={20} style={{ color: '#d97706' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#7c2d12' }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.8 }}>
                To achieve a principal market position in education by providing reliable, quality education and service — guiding students to the best option, not to fill our seats.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', fontWeight: 700, color: '#1e3a6e', marginBottom: '24px', textAlign: 'center' }}>What We Stand For</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {values.map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px 20px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#1e3a6e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7 }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section style={{ padding: '60px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', fontWeight: 700, color: '#1e3a6e', marginBottom: '32px' }}>Our Office</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {[
              { icon: MapPin, text: 'Calicut (Kozhikode), Kerala, India', color: '#1e3a6e' },
              { icon: Phone, text: '+91 XXXXX XXXXX', color: '#0d7c66' },
              { icon: Mail, text: 'info@aimbridgeeducation.com', color: '#7c2d12' },
            ].map(({ icon: Icon, text, color }) => (
              <div key={text} style={{ padding: '20px', borderRadius: '14px', background: 'white', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                <Icon size={22} style={{ color, margin: '0 auto 10px' }} />
                <p style={{ fontSize: '13px', color: '#374151' }}>{text}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}