import Link from 'next/link'

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      
      {/* Internal Linking Section */}
      <section style={{ padding: '4rem 1rem', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-text)' }}>Conheça Nossos Outros Serviços</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            
            <Link href="/servicos/web-design" className="service-link" style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-text)', transition: 'border-color 0.2s' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Criação de Site</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Site profissional</p>
            </Link>
            
            <Link href="/servicos/seo-local" className="service-link" style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-text)', transition: 'border-color 0.2s' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Google Maps</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Para negócios locais</p>
            </Link>
            
            <Link href="/servicos/seo" className="service-link" style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-text)', transition: 'border-color 0.2s' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Blog SEO</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Atraia clientes via blog</p>
            </Link>

            <Link href="/servicos/geo" className="service-link" style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-text)', transition: 'border-color 0.2s' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Otimização IA (GEO)</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Apareça no ChatGPT</p>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}
