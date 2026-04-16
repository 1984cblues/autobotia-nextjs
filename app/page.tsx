import type { Metadata } from 'next'
import styles from './page.module.css'
import { HomeClient } from './HomeClient'

export const metadata: Metadata = {
  title: 'Autobotia | Sites Profissionais & Visibilidade em IA',
  description:
    'Seu negócio precisa ser encontrado. No Google, no ChatGPT, no Gemini. Criamos sites profissionais e estratégias de IA para que sua marca apareça onde seus clientes pesquisam.',
  alternates: {
    canonical: 'https://www.autobotia.com.br',
  },
}

export default function HomePage() {
  return <HomeClient />
}
