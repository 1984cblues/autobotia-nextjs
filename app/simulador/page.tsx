import { Metadata } from 'next'
import { SimuladorClient } from './SimuladorClient'

export const metadata: Metadata = {
  title: 'Descubra como atrair mais clientes | Autobotia',
  description: 'Responda 3 perguntas rápidas e veja o plano ideal para sua empresa aparecer no Google e no ChatGPT.',
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
