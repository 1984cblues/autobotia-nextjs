'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Agronegócio',
    category: 'Agronegócio | Vendas',
    description: 'Plataforma robusta para o setor agrícola, focada em exposição de maquinários e sementes com alta performance.',
    image: '/works/agronegocio.webp',
    year: '2025',
    tags: ['Site Profissional', 'Setor Agrícola', 'Design Premium'],
    href: '/agronegocio/index.html'
  },
  {
    title: 'Clean Work',
    category: 'Serviços | Conservação',
    description: 'Site institucional para empresa de limpeza técnica e conservação, focado em geração de leads comerciais.',
    image: '/works/clean-work.webp',
    year: '2025',
    tags: ['Geração de Leads', 'Serviços B2B', 'Limpeza'],
    href: '/clean-work'
  },
  {
    title: 'Concreto',
    category: 'Engenharia | Civil',
    description: 'Landing page para construtora e engenharia, destacando solidez e projetos de infraestrutura de grande porte.',
    image: '/works/concreto.webp',
    year: '2024',
    tags: ['Engenharia', 'Construção Civil', 'Portfólio'],
    href: '/concreto'
  },
  {
    title: 'Refrigeração',
    category: 'Manutenção | Técnica',
    description: 'Site especializado em climatização e sistemas de refrigeração, otimizado para busca local por técnicos.',
    image: '/works/refrigeracao.webp',
    year: '2024',
    tags: ['Busca Local', 'Manutenção', 'Otimizado'],
    href: '/refrigeracao/index.html'
  },
  {
    title: 'Waso Strategy',
    category: 'Consultoria | Business',
    description: 'Portal de consultoria estratégica para negócios, com layout minimalista que comunica autoridade e expertise.',
    image: '/works/waso-strategy.webp',
    year: '2025',
    tags: ['Consultoria', 'Estratégia', 'Brutalismo'],
    href: '/waso-strategy/index.html'
  },
]

export default function PortfolioClient() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '100vh', background: 'hsl(var(--background))' }}>
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <Link href="/" style={{ fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3rem', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
            onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}>
            <ArrowLeft size={16} /> Voltar para Início
          </Link>
          
          <div style={{ maxWidth: 700, marginBottom: '6rem' }}>
            <span className="section-label">Nossos Projetos</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.05, marginBottom: '2rem', color: 'hsl(var(--foreground))' }}>
              RESULTADOS<br />
              <span style={{ color: 'hsl(var(--foreground) / 0.35)' }}>PARA CLIENTES</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7 }}>
              Veja alguns dos sites que criamos e como ajudamos nossos clientes a dominarem o Google e atraírem mais contatos todos os dias.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6rem' }}>
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', border: '1px solid hsl(var(--border) / 0.1)' }}>
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    className="portfolio-image"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'hsl(var(--background) / 0.2)', transition: 'background 0.3s' }} className="image-overlay" />
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--muted-foreground) / 0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.category}</span>
                      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '0.5rem', color: 'hsl(var(--foreground))' }}>{p.title}</h2>
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'hsl(var(--muted-foreground) / 0.4)' }}>{p.year}</span>
                  </div>
                  
                  <p style={{ fontSize: '1.05rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {p.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.4rem 0.8rem', border: '1px solid hsl(var(--border) / 0.15)', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={p.href} 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '2px solid hsl(var(--foreground))', color: 'hsl(var(--foreground))', paddingBottom: '0.4rem', transition: 'gap 0.2s' }}
                    className="view-project-link">
                    Visitar Site <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1.5rem', color: 'hsl(var(--foreground))' }}>
            SEU PROJETO PODE SER<br />
            <span style={{ color: 'hsl(var(--foreground) / 0.3)' }}>O PRÓXIMO</span>
          </h2>
          <Link href="/simulador" style={{ display: 'inline-flex', padding: '1rem 3rem', background: 'hsl(var(--foreground))', color: 'hsl(var(--background))', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Quero meu site assim
          </Link>
        </div>
      </section>

      <style>{`
        .portfolio-image:hover { transform: scale(1.05); }
        .view-project-link:hover { gap: 0.9rem; }
      `}</style>
    </main>
  )
}
