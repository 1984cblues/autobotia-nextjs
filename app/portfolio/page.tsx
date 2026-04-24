import { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfólio de Sites e Resultados | Autobotia',
  description: 'Confira os projetos de criação de sites e estratégias de Google que entregamos para nossos clientes. Resultados reais que trazem mais contatos.',
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
