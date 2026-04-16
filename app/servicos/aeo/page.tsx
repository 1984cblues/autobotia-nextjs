import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'AEO (Otimização para Motor de Respostas) | Autobotia',
  description: 'Coloque sua marca como resposta definitiva para buscas de voz e assistentes de IA (AI Overviews).',
}

export default function AEOPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <section className="container" style={{ padding: 'var(--space-7) var(--space-2)', textAlign: 'center', minHeight: '60vh' }}>
          <span className="section-label">AEO - Answer Engine Optimization</span>
          <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>Seja a Resposta Definitiva</h1>
          <p style={{ maxWidth: 800, margin: '0 auto var(--space-6)', color: 'var(--color-text-muted)' }}>
            O modo de buscar mudou. Prepararemos seu site com blocos de dados estruturados e semânticos (Schemas e FAQ Pages)
            para que o Google e a Alexa entreguem o *seu* conteúdo quando o usuário faz uma pergunta direta.
          </p>
          <Button variant="primary" href="/simulador">Analisar Estruturação</Button>
        </section>
      </main>
      <Footer />
    </>
  )
}
