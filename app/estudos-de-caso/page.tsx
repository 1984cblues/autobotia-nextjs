import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Estudos de Caso | Resultados Reais | Autobotia',
  description: 'Veja como aplicamos SEO, GEO e arquitetura web de alta performance para multiplicar resultados de clientes reais.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <section className="container" style={{ padding: 'var(--space-7) var(--space-2)', textAlign: 'center', minHeight: '60vh' }}>
          <span className="section-label">Comprovação Técnica</span>
          <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>Estudos de Caso</h1>
          <p style={{ maxWidth: 800, margin: '0 auto var(--space-6)', color: 'var(--color-text-muted)' }}>
            Nossas estratégias em ação. Analise como resolvemos problemas de ranqueamento, recuperamos tráfego de penalizações 
            e escalamos negócios locais através de SEO e Inteligência Artificial.
          </p>
          <div style={{ padding: 'var(--space-6)', border: '1px dashed var(--color-border)', borderRadius: 'var(--radius-md)' }}>
            <p>Lista de Estudos de Caso em elaboração...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
