import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Clock, DollarSign, Award } from 'lucide-react'

const universities = [
  {
    name: 'Georgian National University SEU',
    abbr: 'SEU',
    indianStudents: '500+',
    duration: '4 years',
    fee: '$3,500/year',
    hostel: '$300/month (Apartment: $140+, self-cooking)',
  },
  {
    name: 'The University of Georgia',
    abbr: 'UG',
    indianStudents: '500+',
    duration: '4 years',
    fee: '$4,000/year',
    hostel: '$300/month (Apartment: $140+, self-cooking)',
  },
]

export default function NursingPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d7c66 0%, #064e3b 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <span style={{ fontSize: '52px' }}>🏥</span>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 700, color: 'white' }}>
                Nursing in Georgia
              </h1>
              <p style={{ color: '#6ee7b7', fontSize: '16px', marginTop: '4px' }}>4 Years | English Medium | Global Career Opportunities</p>
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

      {/* Eligibility */}
      <section style={{ padding: '60px 24px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#0d7c66', marginBottom: '28px', textAlign: 'center' }}>Eligibility Criteria</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {['50% in 10+2 Exam (any stream)', '4 Year BSc Nursing Program', 'English Medium instruction', 'Affordable Tuition Fee', 'Global Career Opportunities after graduation', 'Valid passport and documents required'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '14px', borderRadius: '10px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <CheckCircle size={16} style={{ color: '#0d7c66', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section style={{ padding: '60px 24px', background: '#f0fdf4' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#0d7c66', marginBottom: '32px', textAlign: 'center' }}>
            Top Universities in Georgia
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {universities.map(uni => (
              <div key={uni.abbr} className="card" style={{ border: '1px solid #d1fae5', overflow: 'hidden' }}>
                <div style={{ background: '#ecfdf5', padding: '18px 24px', borderBottom: '1px solid #d1fae5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '17px', color: '#111827' }}>{uni.name}</h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '6px', background: '#0d7c66', color: 'white' }}>{uni.abbr}</span>
                  </div>
                  <Award size={20} style={{ color: '#e8b820' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    {[
                      { icon: Users, label: 'Indian Students', val: uni.indianStudents },
                      { icon: Clock, label: 'Duration', val: uni.duration },
                      { icon: DollarSign, label: 'Course Fee', val: uni.fee },
                      { icon: DollarSign, label: 'Hostel & Food', val: uni.hostel },
                    ].map(({ icon: Icon, label, val }) => (
                      <div key={label} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Icon size={15} style={{ color: '#0d7c66', marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: '11px', color: '#9ca3af' }}>{label}</div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{val}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', borderRadius: '8px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                      Apply Now
                    </Link>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', borderRadius: '8px', border: '2px solid #0d7c66', color: '#0d7c66', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 24px', background: '#0d7c66', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '14px' }}>Start Your Nursing Career Abroad</h2>
          <p style={{ color: '#6ee7b7', marginBottom: '28px', fontSize: '16px' }}>Affordable fees, English medium, global recognition. Book your free counselling today.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
            Book Free Counselling <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}