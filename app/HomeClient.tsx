'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Monitor, MapPin, BookOpen, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

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
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = shapeRef.current; if (!el) return
    const move = (e: MouseEvent) => {
      const { innerWidth: W, innerHeight: H } = window
      const x = (e.clientX / W - 0.5) * 18
      const y = (e.clientY / H - 0.5) * 18
      el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '7rem 0 5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 50%, #1a1a1a 0%, #000 100%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="section-label">Arquitetura de Conversão Premium</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}
            >
              PARE DE<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>TER UM<br />PANFLETO.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', maxWidth: 440, lineHeight: 1.7, marginBottom: '2.5rem' }}
            >
              Desenvolvemos sites profissionais e estratégias de visibilidade que fazem sua empresa ser encontrada no Google e no ChatGPT.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/simulador" style={{ padding: '0.9rem 2rem', background: '#fff', color: '#000', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                Análise Gratuita <ArrowRight size={15} />
              </Link>
              <a href="#servicos" style={{ padding: '0.9rem 2rem', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Ver Serviços
              </a>
            </motion.div>
          </div>

          {/* Animated shape */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}
            ref={shapeRef}
            style={{ transition: 'transform 0.12s ease-out', transformStyle: 'preserve-3d' }}
            className="hide-mobile"
          >
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: -20, right: -20, width: '65%', height: '65%', border: '1px solid rgba(255,255,255,0.1)', background: '#050505', zIndex: -1 }} />
              <div style={{ aspectRatio: '1/1', border: '1px solid rgba(255,255,255,0.12)', background: 'linear-gradient(135deg, #1c1c1c, #0a0a0a)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '70%', height: '70%', position: 'relative' }}>
                  {[
                    { top:0, left:0, width:'100%', height:2, transform:'scaleX(0)', animation:'growX 0.5s ease 1.2s forwards' },
                    { bottom:0, right:0, width:'100%', height:2, transform:'scaleX(0)', animation:'growXR 0.5s ease 1.4s forwards', transformOrigin:'right' },
                    { top:0, right:0, width:2, height:'100%', transform:'scaleY(0)', animation:'growY 0.5s ease 1.6s forwards' },
                    { bottom:0, left:0, width:2, height:'100%', transform:'scaleY(0)', animation:'growYB 0.5s ease 1.8s forwards', transformOrigin:'bottom' },
                  ].map((s, i) => (
                    <div key={i} style={{ position:'absolute', background:'#fff', ...s } as React.CSSProperties} />
                  ))}
                  <div style={{ position:'absolute', top:'25%', left:'25%', width:'50%', height:'50%', border:'1px solid rgba(255,255,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <div style={{ width:'60%', height:'60%', background:'#111', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <div style={{ width:'45%', height:'45%', background:'#fff' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <style>{`
          @keyframes growX  { to { transform: scaleX(1); } }
          @keyframes growXR { to { transform: scaleX(1); } }
          @keyframes growY  { to { transform: scaleY(1); } }
          @keyframes growYB { to { transform: scaleY(1); } }
          @media(max-width:767px){.hide-mobile{display:none!important}}
        `}</style>
      </section>

      {/* ═══════════════════════ SERVIÇOS ═══════════════════ */}
      <section id="servicos" style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '4rem' }}>
            <span className="section-label">Nossa Abordagem</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: 560 }}>
              A Escada de<br /><span style={{ color: 'rgba(255,255,255,0.35)' }}>Tração Autobotia</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0' }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <Link href={s.href} style={{ display: 'block', padding: '2.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.08)', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', transition: 'background 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <s.icon size={22} color="rgba(255,255,255,0.5)" />
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>{s.num}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{s.desc}</p>
                  <div style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    Saiba mais <ArrowRight size={13} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TRABALHOS ═══════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Trabalhos Selecionados</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
                Últimos<br /><span style={{ color: 'rgba(255,255,255,0.35)' }}>Projetos</span>
              </h2>
            </div>
            <Link href="/portfolio" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Ver Todos <ArrowRight size={14} />
            </Link>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {works.map((w, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div style={{ background: '#000', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                  onMouseEnter={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) img.style.transform = 'scale(1.04)' }}
                  onMouseLeave={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) img.style.transform = 'scale(1)' }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                    <Image src={w.image} alt={w.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} sizes="(max-width:768px) 100vw, 50vw" />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <p style={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>{w.title}</p>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>{w.subtitle}</p>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>{w.year}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESSO ════════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '4rem' }}>
            <span className="section-label">Como Trabalhamos</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
              Processo<br /><span style={{ color: 'rgba(255,255,255,0.35)' }}>Passo a Passo</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 80} style={{ padding: '2.5rem 2rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.08)', display: 'block', marginBottom: '1.25rem' }}>{s.n}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{s.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DEPOIMENTOS ═════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: '4rem' }}>
            <span className="section-label">Depoimentos</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
              O Que Nossos<br /><span style={{ color: 'rgba(255,255,255,0.35)' }}>Clientes Dizem</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ background: '#000', padding: '2.5rem 2rem' }}>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '2rem', fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={16} color="rgba(255,255,255,0.3)" />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.875rem' }}>{t.author}</p>
                      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.15rem' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, #000 0%, #080808 100%)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                PRONTO PARA<br /><span style={{ color: 'rgba(255,255,255,0.35)' }}>ESCALAR?</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
                Agende uma análise gratuita e montamos um plano de ação para sua empresa dominar os buscadores e as IAs.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/simulador" style={{ padding: '1rem 2.5rem', background: '#fff', color: '#000', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                  Iniciar Diagnóstico <ArrowRight size={15} />
                </Link>
                <a href="https://wa.me/5511922908507" target="_blank" rel="noopener noreferrer"
                  style={{ padding: '1rem 2.5rem', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
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
