import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Seja a Resposta Número 1 do Google | Autobotia',
  description: 'Sabe quando você pergunta algo e o Google já responde direto, sem precisar clicar em nenhum site? A gente faz sua empresa ser essa resposta.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/aeo' },
}

const features = [
  { title: 'A Resposta Destaque do Google', desc: 'Otimizamos seu conteúdo pra aparecer logo acima dos resultados normais — aquela caixinha de resposta que todo mundo vê primeiro.' },
  { title: 'Apareça no Google e Siri', desc: 'Estruturamos seu conteúdo em linguagem simples pra ser a resposta quando alguém perguntar pro assistente de voz.' },
  { title: 'Perguntas e Respostas no Google', desc: 'Criamos uma seção de perguntas e respostas do seu negócio que aparece diretamente nos resultados de busca.' },
  { title: '"As Pessoas Também Perguntam"', desc: 'Mapeamos as perguntas relacionadas ao seu serviço e criamos respostas que dominam esse espaço no Google.' },
  { title: 'Painel de Conhecimento Google', desc: 'Estratégias pra sua empresa ter aquele painel lateral com informações no Google — sinal de autoridade e confiança.' },
  { title: 'Relatório Mensal de Respostas', desc: 'Todo mês você vê quantas respostas destaque sua empresa conquistou e quais assuntos estão te destacando.' },
]

export default function AeoPage() {
  return (
    <ServicePageLayout
      label="Respostas do Google"
      title="SEJA A RESPOSTA"
      titleMuted="NÚMERO 1 DO GOOGLE"
      description="Sabe quando você pergunta algo e o Google já responde direto, sem precisar clicar em nenhum link? A gente faz a resposta ser sobre a sua empresa."
      features={features}
      iconName="Search"
      ctaText="Quero ser a resposta do Google"
    />
  )
}
