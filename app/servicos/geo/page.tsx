import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Sua Empresa Recomendada pelo ChatGPT e Gemini | Autobotia',
  description: 'Cada vez mais gente pergunta pro ChatGPT em vez de pesquisar no Google. Fazemos sua empresa ser a resposta recomendada pelas principais IAs.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/geo' },
}

const features = [
  { title: 'O ChatGPT Conhece Você?', desc: 'Verificamos se o ChatGPT, Gemini e Perplexity já mencionam sua empresa — e o que precisamos fazer pra você aparecer.' },
  { title: 'Conteúdo que a IA Recomenda', desc: 'Criamos textos com informações claras e confiáveis — exatamente o tipo de conteúdo que as IAs gostam de citar.' },
  { title: 'Organização das Informações', desc: 'Estruturamos os dados do seu site de um jeito que o ChatGPT e o Google entendem e confiam. Sem código difícil pra você.' },
  { title: 'Sua Marca no Mapa Digital', desc: 'Construímos a presença da sua empresa como uma referência reconhecida na internet — que as IAs usam como fonte.' },
  { title: 'Publicações Estratégicas', desc: 'Publicamos sobre sua empresa em sites e fontes que alimentam os modelos de IA com informações do seu segmento.' },
  { title: 'Relatório Mensal de Citações', desc: 'Todo mês você vê quantas vezes sua empresa foi mencionada pelas IAs e em que contexto — em linguagem simples.' },
]

export default function GeoPage() {
  return (
    <ServicePageLayout
      label="Visibilidade no ChatGPT e IAs"
      title="QUANDO PERGUNTAM"
      titleMuted="PRO CHATGPT, VOCÊ É A RESPOSTA"
      description="Cada vez mais gente pergunta pro ChatGPT em vez de pesquisar no Google. Se sua empresa não aparece lá, você está perdendo clientes sem saber disso."
      features={features}
      iconName="Brain"
      ctaText="Quero aparecer nas IAs"
    />
  )
}
