import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Resultados e Clientes | Autobotia',
  description: 'Veja como ajudamos empresas de diversos setores a saírem do anonimato e dominarem as buscas no Google e ChatGPT.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <section className="container" style={{ padding: 'var(--space-7) var(--space-2)', textAlign: 'center', minHeight: '60vh' }}>
          <span className="section-label">O que já fizemos</span>
          <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>Resultados que trazem lucro</h1>
          <p style={{ maxWidth: 800, margin: '0 auto var(--space-6)', color: 'var(--color-text-muted)' }}>
            Nossas estratégias em ação. Veja como resolvemos o problema de empresas que não eram achadas pelos clientes
            e agora são referência na sua região e no Google.
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
