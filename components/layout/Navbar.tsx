'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Início', href: '/' },
  { 
    label: 'Serviços', 
    href: '/#servicos',
    subLinks: [
      { label: 'Criação de Site', href: '/servicos/web-design' },
      { label: 'Google Maps (SEO Local)', href: '/servicos/seo-local' },
      { label: 'Blog que Traz Clientes', href: '/servicos/seo' },
      { label: 'Aparecer no ChatGPT', href: '/servicos/geo' },
      { label: 'Respostas do Google', href: '/servicos/aeo' },
    ]
  },
  { label: 'Estudos de Caso', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'hsl(var(--background) / 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid hsl(var(--border) / 0.2)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.04em', color: 'hsl(var(--foreground))' }}>
          AUTOBOTIA
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hide-mobile">
            {links.map((l) => (
              <div key={l.label} style={{ position: 'relative' }} className="nav-item">
                <Link
                  href={l.href}
                  style={{ fontSize: '0.85rem', fontWeight: 500, color: 'hsl(var(--foreground) / 0.7)', letterSpacing: '0.02em', transition: 'color 0.2s', padding: '1rem 0' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--foreground) / 0.7)')}
                >
                  {l.label}
                </Link>
                {l.subLinks && (
                  <div className="dropdown" style={{ 
                    position: 'absolute', top: '100%', left: 0, 
                    background: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border) / 0.2)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '0.5rem', 
                    minWidth: '200px',
                    display: 'none',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}>
                    {l.subLinks.map(sub => (
                      <Link key={sub.href} href={sub.href} style={{ fontSize: '0.8rem', padding: '0.5rem', color: 'hsl(var(--foreground) / 0.7)', transition: 'background 0.2s, color 0.2s', borderRadius: 'var(--radius-sm)' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'hsl(var(--muted))'; e.currentTarget.style.color = 'hsl(var(--foreground))' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'hsl(var(--foreground) / 0.7)' }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/simulador"
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.7rem 1.8rem',
                background: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                borderRadius: '4px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 15px hsl(var(--primary) / 0.25)',
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px hsl(var(--primary) / 0.4)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px hsl(var(--primary) / 0.25)';
              }}
            >
              Simulador
            </Link>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', color: 'hsl(var(--foreground))', padding: '0.5rem', cursor: 'pointer' }}
              className="show-mobile"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', background: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border) / 0.1)' }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem', gap: '1.25rem' }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ fontSize: '1.1rem', fontWeight: 600, color: 'hsl(var(--foreground))' }}>
                  {l.label}
                </Link>
              ))}
              <Link href="/simulador" onClick={() => setOpen(false)}
                style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.1em', 
                  textTransform: 'uppercase', 
                  padding: '1rem', 
                  background: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  textAlign: 'center',
                  borderRadius: '4px',
                  marginTop: '1rem' 
                }}>
                Simulador →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) { .hide-mobile { display: none !important; } }
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
      `}</style>
    </header>
  )
}
