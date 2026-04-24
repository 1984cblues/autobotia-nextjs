'use client'

import Link from 'next/link'
import { ArrowRight, Monitor, MapPin, BookOpen, Brain, Search, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Monitor, MapPin, BookOpen, Brain, Search,
}

interface Feature { title: string; desc: string }

interface ServicePageLayoutProps {
  label: string
  title: string
  titleMuted: string
  description: string
  features: Feature[]
  iconName: keyof typeof iconMap
  ctaText?: string
}

export function ServicePageLayout({
  label, title, titleMuted, description, features, iconName, ctaText = 'Solicitar Orçamento',
}: ServicePageLayoutProps) {
  const Icon = iconMap[iconName] ?? Monitor

  return (
    <main style={{ paddingTop: '7rem', minHeight: '100vh', background: '#000' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container">
          <span className="section-label">{label}</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.05, maxWidth: 700, marginBottom: '1.5rem' }}>
            {title}<br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>{titleMuted}</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5511922908507?text=Oi%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis" target="_blank" rel="noopener noreferrer"
              style={{ padding: '0.9rem 2rem', background: '#fff', color: '#000', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.07em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {ctaText} <ArrowRight size={14} />
            </a>
            <Link href="/simulador" style={{ padding: '0.9rem 2rem', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Como Funciona?
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {features.map((f, i) => (
              <div key={i}
                style={{ padding: '2.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.07)', borderRight: '1px solid rgba(255,255,255,0.07)', transition: 'background 0.3s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}>
                <Icon size={20} style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em', marginBottom: '0.65rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.05em', marginBottom: '1.25rem' }}>
            VAMOS COMEÇAR?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', maxWidth: 440, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            É rápido, grátis e sem compromisso. Você fala com um especialista — não com um robô.
          </p>
          <a href="https://wa.me/5511922908507?text=Oi%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis" target="_blank" rel="noopener noreferrer"
            style={{ padding: '1rem 2.5rem', background: '#fff', color: '#000', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Falar Agora no WhatsApp <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </main>
  )
}
