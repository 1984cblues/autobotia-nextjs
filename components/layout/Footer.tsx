'use client'

import Link from 'next/link'

const cols = [
  {
    title: 'Serviços',
    links: [
      { label: 'Criação de Site', href: '/servicos/web-design' },
      { label: 'Google Maps (SEO Local)', href: '/servicos/seo-local' },
      { label: 'Blog que Traz Clientes', href: '/servicos/seo' },
      { label: 'Aparecer no ChatGPT', href: '/servicos/geo' },
      { label: 'Respostas do Google', href: '/servicos/aeo' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Portfólio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Estudos de Caso', href: '/estudos-de-caso' },
      { label: 'Simulador', href: '/simulador' },
    ],
  },
]

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid hsl(var(--border) / 0.1)', background: 'hsl(var(--background))', padding: '4rem 0 2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <p style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.04em', marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>AUTOBOTIA</p>
            <p style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, maxWidth: 240 }}>
              Criamos o site da sua empresa e fazemos você aparecer no Google e no ChatGPT.
            </p>
            <a
              href="https://wa.me/5511922908507"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.6rem 1.25rem',
                border: '1px solid hsl(var(--border))',
                color: 'hsl(var(--foreground))',
                transition: 'all 0.2s',
              }}
            >
              WhatsApp →
            </a>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', marginBottom: '1.25rem' }}>
                {col.title}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: '0.875rem', color: 'hsl(var(--foreground) / 0.65)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--foreground) / 0.65)')}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border) / 0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
            © {new Date().getFullYear()} Autobotia. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
            contato@autobotia.com.br
          </p>
        </div>
      </div>
    </footer>
  )
}
