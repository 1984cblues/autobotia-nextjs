import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'SEO Content — Autoridade Orgânica de Longo Prazo | Autobotia',
  description: 'Estratégia de conteúdo semântico para construir autoridade no Google. Clusters de tópicos, artigos técnicos e linkbuilding ético.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/seo' },
}

const features = [
  { title: 'Pesquisa de Palavras-chave', desc: 'Identificamos as intenções de busca dos seus potenciais clientes e construímos clusters semânticos.' },
  { title: 'Artigos de Pillar & Cluster', desc: 'Conteúdo técnico e aprofundado que responde às perguntas do seu público e posiciona nos top 3.' },
  { title: 'Otimização On-Page', desc: 'Title, Meta, H1-H6, imagens, velocidade — tudo alinhado com os critérios atuais do Google.' },
  { title: 'Internal Linking', desc: 'Arquitetura de links internos que distribui autoridade e guia o usuário à conversão.' },
  { title: 'Link Building Ético', desc: 'Parcerias e publicações em sites relevantes do seu segmento para aumentar autoridade de domínio.' },
  { title: 'Análise Mensal SGE', desc: 'Monitoramento de como seu conteúdo aparece no Search Generative Experience (IA do Google).' },
]

export default function SeoPage() {
  return (
    <ServicePageLayout
      label="Pilar 3 — SEO Content"
      title="AUTORIDADE"
      titleMuted="ORGÂNICA"
      description="Tráfego pago para quando você para. Conteúdo de autoridade para sempre. Construímos ativos digitais que crescem com o tempo."
      features={features}
      iconName="BookOpen"
    />
  )
}
