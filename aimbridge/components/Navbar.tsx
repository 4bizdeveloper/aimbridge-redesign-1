'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs',
    href: '#',
    children: [
      { label: 'MBBS Abroad', href: '/mbbs' },
      { label: 'MBBS in Georgia', href: '/mbbs/georgia' },
      { label: 'MBBS in Russia', href: '/mbbs/russia' },
      { label: 'MBBS in Uzbekistan', href: '/mbbs/uzbekistan' },
      { label: 'Nursing in Georgia', href: '/nursing' },
      { label: 'Pilot Training', href: '/pilot-training' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(false)

  return (
    <nav style={{ background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#1e3a6e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={20} color="#e8b820" />
            </div>
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: '#1e3a6e', lineHeight: 1.2 }}>
                Aimbridge
              </div>
              <div style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.2 }}>Education</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden-mobile">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', color: '#374151', fontWeight: 500, fontSize: '14px', cursor: 'pointer' }}>
                    {link.label} <ChevronDown size={13} />
                  </button>
                  {dropdownOpen && (
                    <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: '4px', width: '220px', background: 'white', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderRadius: '12px', padding: '8px 0', zIndex: 99 }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{ display: 'block', padding: '9px 18px', fontSize: '13px', color: '#374151', textDecoration: 'none', transition: 'background 0.15s' }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#f0f4ff')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: '#374151', fontWeight: 500, fontSize: '14px', textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              style={{ padding: '9px 20px', borderRadius: '10px', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
            >
              Free Counselling
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={24} color="#374151" /> : <Menu size={24} color="#374151" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #f3f4f6', padding: '16px 24px 20px' }}>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileDropdown(!mobileDropdown)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', background: 'none', border: 'none', color: '#374151', fontWeight: 500, fontSize: '15px', cursor: 'pointer' }}
                >
                  {link.label}
                  <ChevronDown size={14} style={{ transform: mobileDropdown ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                </button>
                {mobileDropdown && (
                  <div style={{ marginLeft: '12px', borderLeft: '2px solid #dbe4ff', paddingLeft: '16px', marginBottom: '8px' }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        style={{ display: 'block', padding: '8px 0', fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '11px 0', color: '#374151', fontWeight: 500, fontSize: '15px', textDecoration: 'none', borderBottom: '1px solid #f9fafb' }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ display: 'block', marginTop: '14px', padding: '12px', textAlign: 'center', background: '#e8b820', color: '#0f2040', fontWeight: 700, fontSize: '15px', borderRadius: '10px', textDecoration: 'none' }}
          >
            Book Free Counselling
          </Link>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}