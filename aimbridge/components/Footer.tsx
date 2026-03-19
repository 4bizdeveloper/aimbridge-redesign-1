import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0f2040', color: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#e8b820', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={20} color="#0f2040" />
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px' }}>Aimbridge Education</span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: 1.8, marginBottom: '20px' }}>
              A professionally managed overseas education consultancy in Kerala, guiding students toward globally recognized programs in MBBS, Nursing, and Pilot Training.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: Facebook, href: '#', bg: '#1877F2' },
                { icon: Instagram, href: '#', bg: '#E4405F' },
                { icon: Youtube, href: '#', bg: '#FF0000' },
                { icon: Linkedin, href: '#', bg: '#0A66C2' },
              ].map(({ icon: Icon, href, bg }) => (
                <a key={bg} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: '34px', height: '34px', borderRadius: '8px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                  <Icon size={15} color="white" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px', color: 'white' }}>Programs</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[
                { label: 'MBBS in Georgia', href: '/mbbs/georgia' },
                { label: 'MBBS in Russia', href: '/mbbs/russia' },
                { label: 'MBBS in Uzbekistan', href: '/mbbs/uzbekistan' },
                { label: 'Nursing in Georgia', href: '/nursing' },
                { label: 'Pilot Training – South Africa', href: '/pilot-training' },
                { label: 'Pilot Training – USA', href: '/pilot-training' },
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e8b820')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px', color: 'white' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Why Aimbridge?', href: '/#why-us' },
                { label: 'Admission Process', href: '/#admission' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Book Free Counselling', href: '/contact' },
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px', color: 'white' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={15} color="#e8b820" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9ca3af', fontSize: '13px' }}>Calicut (Kozhikode), Kerala, India</span>
              </div>
              <a href="tel:+91XXXXXXXXXX" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>
                <Phone size={15} color="#e8b820" />
                +91 XXXXX XXXXX
              </a>
              <a href="mailto:info@aimbridgeeducation.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>
                <Mail size={15} color="#e8b820" />
                info@aimbridgeeducation.com
              </a>
            </div>
            <Link href="/contact" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '13px', borderRadius: '10px', textDecoration: 'none' }}>
              Book Free Counselling
            </Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1f2d45', marginTop: '40px', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <p style={{ color: '#4b5563', fontSize: '13px' }}>© {new Date().getFullYear()} Aimbridge Education. All rights reserved.</p>
          <p style={{ color: '#374151', fontSize: '12px' }}>Kerala's trusted overseas education consultancy</p>
        </div>
      </div>
    </footer>
  )
}