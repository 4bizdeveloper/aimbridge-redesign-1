import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, DollarSign, Award, Plane } from 'lucide-react'

const highlights = [
  '50% in Physics/Maths in 10+2 (NIOS Valid)',
  'Commercial Pilot License (CPL)',
  'Private Pilot License (PPL)',
  'DGCA Ground School included',
  'Advanced Simulator Training',
  '200 Hours Flight Training',
]

export default function PilotTrainingPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1c1917 0%, #3c1a00 100%)', padding: '72px 24px', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', color: 'white', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
            <span style={{ fontSize: '52px' }}>✈️</span>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
                Integrated Professional<br />Pilot Training
              </h1>
              <p style={{ color: '#fdba74', fontSize: '16px', marginTop: '6px' }}>South Africa | USA</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', borderRadius: '12px', border: '2px solid white', color: 'white', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
              Free Counselling
            </Link>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section style={{ padding: '70px 24px', background: '#fff7ed' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#7c2d12', marginBottom: '24px' }}>Program Highlights</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {highlights.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', borderRadius: '10px', background: 'white', border: '1px solid #fed7aa' }}>
                    <CheckCircle size={17} style={{ color: '#ea580c', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#7c2d12' }}>Program Details</h2>

              <div className="card" style={{ border: '1px solid #fed7aa', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                  <Plane size={20} style={{ color: '#ea580c' }} />
                  <h3 style={{ fontWeight: 700, fontSize: '16px', color: '#111827' }}>Kerala Flight Academy / Eagle1 Flight Academy</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {[
                    { icon: Clock, label: 'Ground School', val: '4–6 months' },
                    { icon: Clock, label: 'Flight Training', val: '200 Hours (~12 months)' },
                    { icon: DollarSign, label: 'Course Fee', val: '$47,000' },
                    { icon: DollarSign, label: 'Hostel & Food', val: '$300–350/month' },
                  ].map(({ icon: Icon, label, val }) => (
                    <div key={label} style={{ display: 'flex', gap: '8px' }}>
                      <Icon size={15} style={{ color: '#ea580c', marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '11px', color: '#9ca3af' }}>{label}</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '16px', padding: '12px', borderRadius: '8px', background: '#fef3c7', border: '1px solid #fde68a' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <Award size={15} style={{ color: '#d97706', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '11px', color: '#92400e', fontWeight: 600 }}>Accreditation</div>
                      <div style={{ fontSize: '13px', color: '#78350f', fontWeight: 500 }}>DGCA / SACAA</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '18px', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', borderRadius: '8px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                    Apply Now
                  </Link>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', borderRadius: '8px', border: '2px solid #7c2d12', color: '#7c2d12', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>
                    Talk to an Expert
                  </Link>
                </div>
              </div>

              <div style={{ padding: '20px', borderRadius: '14px', background: '#1c1917', color: 'white', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: '#fdba74', fontStyle: 'italic' }}>
                  "Turn your dream of flying into a professional career with DGCA-approved training."
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ padding: '60px 24px', background: '#1c1917', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '14px' }}>Ready to Fly?</h2>
          <p style={{ color: '#d6d3d1', marginBottom: '28px', fontSize: '16px' }}>Talk to our pilot training experts and begin your aviation journey today.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
            Book Free Counselling <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}