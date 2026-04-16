import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'AEO — Answer Engine Optimization: Domine os Featured Snippets | Autobotia',
  description: 'Answer Engine Optimization. Apareça nas respostas diretas do Google, Alexa e assistentes de voz. Seu negócio como a resposta definitiva.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/aeo' },
}

const features = [
  { title: 'Featured Snippets', desc: 'Otimizamos seu conteúdo para aparecer na posição zero do Google — acima do primeiro resultado orgânico.' },
  { title: 'Voice Search Optimization', desc: 'Estrutura de conteúdo em linguagem natural para ser a resposta dos assistentes de voz (Alexa, Google, Siri).' },
  { title: 'FAQ Schema', desc: 'Marcação JSON-LD que cria a seção de perguntas e respostas diretamente nos resultados de busca.' },
  { title: 'People Also Ask', desc: 'Mapeamos as perguntas relacionadas do seu nicho e criamos conteúdo que domina esse espaço.' },
  { title: 'Knowledge Panel', desc: 'Estratégias para construir o Knowledge Panel da sua marca no Google e aparecer como entidade.' },
  { title: 'Relatório de Position Zero', desc: 'Monitoramento mensal de quantos featured snippets sua empresa conquistou e quais palavras-chave dominam.' },
]

export default function AeoPage() {
  return (
    <ServicePageLayout
      label="Pilar 5 — AEO"
      title="SEJA A"
      titleMuted="RESPOSTA DEFINITIVA"
      description="Quando alguém pergunta ao Google ou a um assistente de voz, queremos que a resposta seja você. O Answer Engine Optimization faz exatamente isso."
      features={features}
      iconName="Search"
    />
  )
}
