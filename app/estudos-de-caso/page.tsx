import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import CaseStudiesClient from './CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Estudos de Caso e Resultados Reais | Autobotia',
  description: 'Descubra como ajudamos negócios que estavam começando do zero a dominarem as buscas do Google e se tornarem referência na sua região.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <CaseStudiesClient />
      <Footer />
    </>
  )
}
