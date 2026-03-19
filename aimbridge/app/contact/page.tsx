'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e3a6e 0%, #0f2040 100%)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', color: 'white' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            Contact Us
          </h1>
          <p style={{ color: '#bfdbfe', fontSize: '17px' }}>
            Book a free counselling session or reach us directly. We're here to help you every step of the way.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '50px', alignItems: 'start' }} className="two-col">

          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#1e3a6e', marginBottom: '28px' }}>Get in Touch</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                { icon: Phone, label: 'Phone', val: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX', color: '#1e3a6e' },
                { icon: Mail, label: 'Email', val: 'info@aimbridgeeducation.com', href: 'mailto:info@aimbridgeeducation.com', color: '#0d7c66' },
                { icon: MapPin, label: 'Address', val: 'Calicut (Kozhikode), Kerala, India', href: '#', color: '#7c2d12' },
              ].map(({ icon: Icon, label, val, href, color }) => (
                <a key={label} href={href} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '18px', borderRadius: '14px', background: 'white', border: '1px solid #e5e7eb', textDecoration: 'none' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: '14px', color: '#111827', fontWeight: 600, marginTop: '2px' }}>{val}</div>
                  </div>
                </a>
              ))}
            </div>

            
              href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20programs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px', borderRadius: '14px', background: '#25D366', color: 'white', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <div style={{ marginTop: '28px', padding: '20px', borderRadius: '14px', background: 'linear-gradient(135deg, #1e3a6e, #0f2040)', color: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: '#bfdbfe', marginBottom: '6px' }}>Office Hours</p>
              <p style={{ fontWeight: 600, fontSize: '15px' }}>Monday – Saturday</p>
              <p style={{ color: '#93c5fd', fontSize: '14px' }}>9:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '36px', border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={52} style={{ color: '#0d7c66', margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#1e3a6e', marginBottom: '12px' }}>Thank You!</h3>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.7 }}>
                  We've received your enquiry. Our counsellor will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, color: '#1e3a6e', marginBottom: '24px' }}>Book Free Counselling</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #e5e7eb', fontSize: '14px', color: '#111827', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #e5e7eb', fontSize: '14px', color: '#111827', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #e5e7eb', fontSize: '14px', color: '#111827', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Interested Program *</label>
                    <select
                      required
                      value={form.course}
                      onChange={e => setForm({ ...form, course: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #e5e7eb', fontSize: '14px', color: '#111827', outline: 'none', fontFamily: 'inherit', background: 'white' }}
                    >
                      <option value="">Select a program</option>
                      <option>MBBS in Georgia</option>
                      <option>MBBS in Russia</option>
                      <option>MBBS in Uzbekistan</option>
                      <option>Nursing in Georgia</option>
                      <option>Pilot Training – South Africa</option>
                      <option>Pilot Training – USA</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Message</label>
                    <textarea
                      placeholder="Tell us about yourself or ask any question..."
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #e5e7eb', fontSize: '14px', color: '#111827', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px', borderRadius: '12px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer' }}
                  >
                    <Send size={18} />
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}