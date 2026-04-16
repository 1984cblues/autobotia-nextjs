import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'GEO — Visibilidade em IAs: ChatGPT, Gemini e Perplexity | Autobotia',
  description: 'Generative Engine Optimization. Seja citado pelo ChatGPT, Google Gemini e Perplexity quando alguém pesquisar por seu serviço.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/geo' },
}

const features = [
  { title: 'Diagnóstico de Brand Mentions', desc: 'Auditamos se sua marca já aparece nas respostas do ChatGPT, Gemini e Perplexity — e onde está a lacuna.' },
  { title: 'Conteúdo AI-Optimized', desc: 'Estruturamos conteúdo no formato que as IAs preferem citar: fatos verificáveis, fontes claras, autoridade temática.' },
  { title: 'Schema Markup Avançado', desc: 'Marcação estruturada que as LLMs utilizam para identificar e citar entidades confiáveis.' },
  { title: 'Gestão de Entidades', desc: 'Construímos a presença da sua marca como uma entidade reconhecida nas bases de conhecimento online.' },
  { title: 'Publicações em Veículos de IA', desc: 'Publicações em fontes que alimentam os modelos de linguagem no seu segmento.' },
  { title: 'Relatório de Citações IA', desc: 'Monitoramento mensal de quantas vezes e em que contexto sua marca é mencionada pelas principais IAs.' },
]

export default function GeoPage() {
  return (
    <ServicePageLayout
      label="Pilar 4 — GEO"
      title="VISIBILIDADE"
      titleMuted="NA NOVA BUSCA"
      description="50% das pesquisas já são respondidas por uma IA. Se você não aparece no ChatGPT e no Gemini, está invisível para metade dos seus futuros clientes."
      features={features}
      iconName="Brain"
    />
  )
}
