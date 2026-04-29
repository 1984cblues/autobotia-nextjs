'use client'

import Link from 'next/link'
import { ArrowRight, Monitor, MapPin, BookOpen, Brain, Search, type LucideIcon } from 'lucide-react'

import Image from 'next/image'

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
  heroImage?: string
}

export function ServicePageLayout({
  label, title, titleMuted, description, features, iconName, ctaText = 'Solicitar Orçamento', heroImage
}: ServicePageLayoutProps) {
  const Icon = iconMap[iconName] ?? Monitor

  return (
    <main style={{ paddingTop: '7rem', minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{
            display: heroImage ? 'grid' : 'block',
            gridTemplateColumns: heroImage ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
            gap: '4rem',
            alignItems: 'center',
            textAlign: heroImage ? 'left' : 'center'
          }}>
            {/* Text Column */}
            <div style={{ margin: heroImage ? '0' : '0 auto', maxWidth: heroImage ? '100%' : '700px' }}>
              <span className="section-label" style={{ margin: heroImage ? '0 0 1.5rem 0' : '0 auto 1.5rem auto' }}>{label}</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                {title}<br />
                <span style={{ color: 'var(--color-text-muted)' }}>{titleMuted}</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: 520, lineHeight: 1.7, marginBottom: '2.5rem', margin: heroImage ? '0 0 2.5rem 0' : '0 auto 2.5rem auto' }}>
                {description}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: heroImage ? 'flex-start' : 'center' }}>
                <a href="https://wa.me/5511922908507?text=Oi%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis" target="_blank" rel="noopener noreferrer"
                  style={{ padding: '0.9rem 2rem', background: 'var(--color-text)', color: 'var(--color-bg)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-sm, 4px)' }}>
                  {ctaText} <ArrowRight size={14} />
                </a>
                <Link href="/simulador" style={{ padding: '0.9rem 2rem', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', borderRadius: 'var(--radius-sm, 4px)' }}>
                  Como Funciona?
                </Link>
              </div>
            </div>

            {/* Image Column */}
            {heroImage && (
              <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '12px', overflow: 'visible', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))' }}>
                <Image src={heroImage} alt={`${label} illustration`} fill style={{ objectFit: 'contain' }} priority />
              </div>
            )}
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
