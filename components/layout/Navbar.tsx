'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Portfólio', href: '/portfolio' },
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
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.04em', color: '#fff' }}>
          AUTOBOTIA
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hide-mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/simulador"
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.6rem 1.5rem',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}
          >
            Orçamento
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#fff', padding: '0.5rem' }}
          className="show-mobile"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', background: '#000', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem', gap: '1.25rem' }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>
                  {l.label}
                </Link>
              ))}
              <Link href="/simulador" onClick={() => setOpen(false)}
                style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.85rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#fff', marginTop: '0.5rem' }}>
                Solicitar Orçamento →
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
