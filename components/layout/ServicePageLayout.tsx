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
    <main style={{ paddingTop: '7rem', minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <span className="section-label">{label}</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.05, maxWidth: 700, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
            {title}<br />
            <span style={{ color: 'var(--color-text-muted)' }}>{titleMuted}</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5511922908507?text=Oi%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis" target="_blank" rel="noopener noreferrer"
              style={{ padding: '0.9rem 2rem', background: 'var(--color-text)', color: 'var(--color-bg)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.07em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-sm, 4px)' }}>
              {ctaText} <ArrowRight size={14} />
            </a>
            <Link href="/simulador" style={{ padding: '0.9rem 2rem', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', borderRadius: 'var(--radius-sm, 4px)' }}>
              Como Funciona?
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0', borderTop: '1px solid var(--color-border)' }}>
            {features.map((f, i) => (
              <div key={i}
                style={{ padding: '2.5rem 2rem', borderBottom: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)', transition: 'background 0.3s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = 'var(--color-bg)')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}>
                <Icon size={20} style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em', marginBottom: '0.65rem', color: 'var(--color-text)' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.05em', marginBottom: '1.25rem', color: 'var(--color-text)' }}>
            VAMOS COMEÇAR?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', maxWidth: 440, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            É rápido, grátis e sem compromisso. Você fala com um especialista — não com um robô.
          </p>
          <a href="https://wa.me/5511922908507?text=Oi%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis" target="_blank" rel="noopener noreferrer"
            style={{ padding: '1rem 2.5rem', background: 'var(--color-text)', color: 'var(--color-bg)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-sm, 4px)' }}>
            Falar Agora no WhatsApp <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </main>
  )
}
