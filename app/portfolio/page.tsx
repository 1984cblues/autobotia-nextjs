import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Portfólio de Projetos | Autobotia',
  description: 'Confira nossos ecossistemas web construídos e otimizados para máxima performance e inteligência artificial.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <section className="container" style={{ padding: 'var(--space-7) var(--space-2)', textAlign: 'center', minHeight: '60vh' }}>
          <span className="section-label">Nosso Trabalho</span>
          <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>Portfólio</h1>
          <p style={{ maxWidth: 800, margin: '0 auto var(--space-6)', color: 'var(--color-text-muted)' }}>
            Uma vitrine das nossas entregas em Design de Alta Performance, SEO e Integrações Avançadas.
            Trabalhamos com marcas que desejam escalar com embasamento técnico e estético.
          </p>
          <div style={{ padding: 'var(--space-6)', border: '1px dashed var(--color-border)', borderRadius: 'var(--radius-md)' }}>
            <p>Galeria de projetos em construção...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
