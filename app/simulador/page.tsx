import { Metadata } from 'next'
import { SimuladorClient } from './SimuladorClient'

export const metadata: Metadata = {
  title: 'Simulador de Orçamento | Autobotia',
  description: 'Descubra a estratégia e o orçamento ideais para alavancar a visibilidade digital da sua empresa nos buscadores e IAs.',
  robots: {
    index: false, // Prevents indexing the form directly, commonly used for lead capture pages.
    follow: true,
  }
}

export default function SimuladorPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg)' }}>
      <SimuladorClient />
    </main>
  )
}
