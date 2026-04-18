'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Monitor, MapPin, BookOpen, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { HeroSection } from '@/components/sections/HeroSection'

/* ── Fade-in on scroll ─────────────────────────────── */
function FadeIn({ children, delay = 0, className = '', style = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

const services = [
  { icon: Monitor, num: '01', title: 'Web Design & LP', desc: 'Sites de alta conversão construídos artesanalmente — do copywriting ao deploy. Next.js, a stack do Vale do Silício.', href: '/servicos/web-design' },
  { icon: MapPin, num: '02', title: 'SEO Local', desc: 'Apareça quando o cliente está com o cartão de crédito na mão, pesquisando "perto de mim" no Google e Maps.', href: '/servicos/seo-local' },
  { icon: BookOpen, num: '03', title: 'SEO Content', desc: 'Clusters semânticos e artigos técnicos que constroem autoridade orgânica sustentável no longo prazo.', href: '/servicos/seo' },
  { icon: Brain, num: '04', title: 'Visibilidade em IAs', desc: 'Seu negócio citado no ChatGPT, Gemini e Perplexity. O canal de descoberta que ninguém está trabalhando.', href: '/servicos/geo' },
]

const works = [
  { title: 'ALEX OLIVEIRA', subtitle: 'Advocacia Especializada', image: '/works/1.webp', year: '2025' },
  { title: 'VENDMIX', subtitle: 'Marketplace B2B', image: '/works/2.webp', year: '2025' },
  { title: 'CLÍNICA PREMIUM', subtitle: 'Saúde e Estética', image: '/works/3.webp', year: '2024' },
  { title: 'RESTAURANTE AROMA', subtitle: 'Alta Gastronomia', image: '/works/4.webp', year: '2024' },
]

const testimonials = [
  { quote: 'O site novo aumentou nossa captação de clientes em mais de 3x em 2 meses. A equipe entendeu exatamente o posicionamento que precisávamos.', author: 'Alex Oliveira', role: 'Advogado | Direito do Consumidor' },
  { quote: 'Profissionalismo do início ao fim. O SEO Local fez nosso restaurante aparecer no topo do Google Maps e as reservas subiram imediatamente.', author: 'Ana Reichert', role: 'Proprietária | Restaurante Aroma' },
  { quote: 'Em menos de 30 dias, a Autobotia entregou uma landing page que converteu mais do que todas as nossas campanhas de tráfego pago juntas.', author: 'Marcos Vieira', role: 'CEO | Vendmix' },
]

const steps = [
  { n: '01', title: 'UX & Copywriting', desc: 'Entendemos seu serviço e construímos narrativas que o cérebro deseja comprar.' },
  { n: '02', title: 'Infraestrutura', desc: 'Desenvolvimento em Next.js focando 100% nos Core Web Vitals do Google.' },
  { n: '03', title: 'SEO e Autoridade', desc: 'Abrimos as torneiras de tráfego local com conteúdo AI-optimized.' },
  { n: '04', title: 'Manutenção', desc: 'Apoiamos seu crescimento mês a mês, sem templates quebrados no caminho.' },
]

export function HomeClient() {

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <HeroSection />

      {/* ═══════════════════════ SERVIÇOS ═══════════════════ */}
      <section id="servicos" style={{ padding: '6rem 0', borderTop: '1px solid hsl(var(--border) / 0.1)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '4rem' }}>
            <span className="section-label">Nossa Abordagem</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: 560, color: 'hsl(var(--foreground))' }}>
              A Escada de<br /><span style={{ color: 'hsl(var(--foreground) / 0.35)' }}>Tração Autobotia</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0' }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <Link href={s.href} style={{ display: 'block', padding: '2.5rem 2rem', borderTop: '1px solid hsl(var(--border) / 0.1)', borderRight: i % 2 === 0 ? '1px solid hsl(var(--border) / 0.1)' : 'none', transition: 'background 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'hsl(var(--foreground) / 0.03)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <s.icon size={22} color="hsl(var(--foreground) / 0.5)" />
                    <span style={{ fontSize: '0.7rem', color: 'hsl(var(--foreground) / 0.25)', letterSpacing: '0.1em' }}>{s.num}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{s.desc}</p>
                  <div style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: 'hsl(var(--foreground) / 0.35)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    Saiba mais <ArrowRight size={13} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TRABALHOS ═══════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid hsl(var(--border) / 0.1)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Trabalhos Selecionados</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'hsl(var(--foreground))' }}>
                Últimos<br /><span style={{ color: 'hsl(var(--foreground) / 0.35)' }}>Projetos</span>
              </h2>
            </div>
            <Link href="/portfolio" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(var(--foreground) / 0.5)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Ver Todos <ArrowRight size={14} />
            </Link>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'hsl(var(--border) / 0.1)' }}>
            {works.map((w, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div style={{ background: 'hsl(var(--background))', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                  onMouseEnter={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) img.style.transform = 'scale(1.04)' }}
                  onMouseLeave={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) img.style.transform = 'scale(1)' }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                    <Image src={w.image} alt={w.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} sizes="(max-width:768px) 100vw, 50vw" />
                    <div style={{ position: 'absolute', inset: 0, background: 'hsl(var(--background) / 0.35)' }} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <p style={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.01em', color: 'hsl(var(--foreground))' }}>{w.title}</p>
                        <p style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.2rem' }}>{w.subtitle}</p>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'hsl(var(--foreground) / 0.25)' }}>{w.year}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESSO ════════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid hsl(var(--border) / 0.1)', background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 100%)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '4rem' }}>
            <span className="section-label">Como Trabalhamos</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'hsl(var(--foreground))' }}>
              Processo<br /><span style={{ color: 'hsl(var(--foreground) / 0.35)' }}>Passo a Passo</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0', borderTop: '1px solid hsl(var(--border) / 0.1)' }}>
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 80} style={{ padding: '2.5rem 2rem', borderRight: '1px solid hsl(var(--border) / 0.1)' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.06em', color: 'hsl(var(--foreground) / 0.08)', display: 'block', marginBottom: '1.25rem' }}>{s.n}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{s.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DEPOIMENTOS ═════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid hsl(var(--border) / 0.1)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '4rem' }}>
            <span className="section-label">Depoimentos</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'hsl(var(--foreground))' }}>
              O Que Nossos<br /><span style={{ color: 'hsl(var(--foreground) / 0.35)' }}>Clientes Dizem</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'hsl(var(--border) / 0.1)' }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ background: 'hsl(var(--background))', padding: '2.5rem 2rem' }}>
                  <p style={{ fontSize: '0.95rem', color: 'hsl(var(--foreground) / 0.7)', lineHeight: 1.75, marginBottom: '2rem', fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={16} color="hsl(var(--foreground) / 0.3)" />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'hsl(var(--foreground))' }}>{t.author}</p>
                      <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.15rem' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid hsl(var(--border) / 0.1)', background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.98) 100%)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.05, marginBottom: '1.5rem', color: 'hsl(var(--foreground))' }}>
                PRONTO PARA<br /><span style={{ color: 'hsl(var(--foreground) / 0.35)' }}>ESCALAR?</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
                Agende uma análise gratuita e montamos um plano de ação para sua empresa dominar os buscadores e as IAs.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/simulador" style={{ padding: '1rem 2.5rem', background: 'hsl(var(--foreground))', color: 'hsl(var(--background))', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                  Iniciar Diagnóstico <ArrowRight size={15} />
                </Link>
                <a href="https://wa.me/5511922908507" target="_blank" rel="noopener noreferrer"
                  style={{ padding: '1rem 2.5rem', border: '1px solid hsl(var(--border) / 0.25)', color: 'hsl(var(--foreground))', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
