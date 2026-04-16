'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { Button } from '../ui/Button'

interface NavbarProps {
  transparentOnTop?: boolean
}

export function Navbar({ transparentOnTop = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    // Run once to check initial scroll
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  // Determine if navbar should be transparent
  // It is transparent ONLY IF it's requested to be AND we haven't scrolled down yet
  const isTransparent = transparentOnTop && !scrolled

  // We add an extra class for the transparent state
  const headerClass = `${styles.header} ${scrolled ? styles.scrolled : ''} ${isTransparent ? styles.transparent : ''}`

  return (
    <>
      <header className={headerClass}>
        <div className={`container ${styles.nav}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMobile}>
            Autobot<span>ia</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
            
            <div className={styles.dropdown}>
              <button className={styles.dropdownTrigger}>
                Serviços <span style={{ fontSize: '0.8em' }}>▼</span>
              </button>
              <div className={styles.dropdownContent}>
                <Link href="/servicos/seo" className={styles.dropdownItem}>
                  <span className={styles.dropdownTitle}>SEO</span>
                  <span className={styles.dropdownDesc}>Rankeamento Google Clássico</span>
                </Link>
                <Link href="/servicos/seo-local" className={styles.dropdownItem}>
                  <span className={styles.dropdownTitle}>SEO Local</span>
                  <span className={styles.dropdownDesc}>Domine sua região no Mapa</span>
                </Link>
                <Link href="/servicos/geo" className={styles.dropdownItem}>
                  <span className={styles.dropdownTitle}>GEO (IA)</span>
                  <span className={styles.dropdownDesc}>Apareça no ChatGPT & Gemini</span>
                </Link>
                <Link href="/servicos/aeo" className={styles.dropdownItem}>
                  <span className={styles.dropdownTitle}>AEO</span>
                  <span className={styles.dropdownDesc}>Respostas Rápidas e Voz</span>
                </Link>
                <Link href="/servicos/web-design" className={styles.dropdownItem}>
                  <span className={styles.dropdownTitle}>Web Design</span>
                  <span className={styles.dropdownDesc}>Sites profissionais</span>
                </Link>
              </div>
            </div>

            <Link href="/portfolio" className={styles.navLink}>
              Portfólio
            </Link>
            
            <Link href="/estudos-de-caso" className={styles.navLink}>
              Cases
            </Link>

            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>

            <Link href="/simulador" className={styles.navLink}>
              Simulador
            </Link>
          </nav>

          {/* CTA & Actions */}
          <div className={styles.actions}>
            {/* The button can stay primary even on transparent header to stand out */}
            <Button variant="primary" href="/simulador">
              Pedir orçamento
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.mobileLink} onClick={closeMobile}>
          Início
        </Link>
        
        <div>
          <div className={styles.mobileDropdownTitle}>Serviços</div>
          <div className={styles.mobileSubLinks}>
            <Link href="/servicos/seo" className={styles.mobileSubLink} onClick={closeMobile}>SEO Tradicional</Link>
            <Link href="/servicos/seo-local" className={styles.mobileSubLink} onClick={closeMobile}>SEO Local</Link>
            <Link href="/servicos/geo" className={styles.mobileSubLink} onClick={closeMobile}>GEO - IA (ChatGPT)</Link>
            <Link href="/servicos/aeo" className={styles.mobileSubLink} onClick={closeMobile}>AEO - Respostas</Link>
            <Link href="/servicos/web-design" className={styles.mobileSubLink} onClick={closeMobile}>Web Design</Link>
          </div>
        </div>

        <Link href="/portfolio" className={styles.mobileLink} onClick={closeMobile}>
          Portfólio
        </Link>
        <Link href="/estudos-de-caso" className={styles.mobileLink} onClick={closeMobile}>
          Estudos de Caso
        </Link>
        <Link href="/blog" className={styles.mobileLink} onClick={closeMobile}>
          Blog
        </Link>
        <Link href="/simulador" className={styles.mobileLink} onClick={closeMobile}>
          Simulador de Orçamento
        </Link>

        <div style={{ marginTop: 'auto' }}>
          <Button variant="primary" href="/simulador" style={{ width: '100%' }}>
            Pedir orçamento
          </Button>
        </div>
      </div>
    </>
  )
}
