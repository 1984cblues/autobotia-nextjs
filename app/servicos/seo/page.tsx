import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Apareça no Google Sem Pagar por Clique | Autobotia',
  description: 'Anúncio pago para quando você paga. Conteúdo bem feito traz clientes de graça — mês após mês. Estratégia de blog e artigos para empresas que querem crescer.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/seo' },
}

const features = [
  { title: 'O Que Seu Cliente Procura', desc: 'Descobrimos as perguntas que seu cliente faz no Google e criamos conteúdo que responde — posicionando você como referência.' },
  { title: 'Artigos que Aparecem no Top', desc: 'Textos aprofundados sobre o seu segmento que sobem pro topo do Google e ficam lá — sem precisar pagar por isso.' },
  { title: 'Site Otimizado por Completo', desc: 'Ajustamos os títulos, descrições e estrutura do seu site pra o Google entender melhor o que você faz.' },
  { title: 'Links Internos Estratégicos', desc: 'Conectamos as páginas do seu site de um jeito que guia o visitante até entrar em contato com você.' },
  { title: 'Parcerias e Menções', desc: 'Trabalhamos pra outros sites do seu segmento falarem da sua empresa — aumentando sua credibilidade no Google.' },
  { title: 'Como o Google IA te Vê', desc: 'Monitoramos se o Google está destacando seu conteúdo nas buscas inteligentes e ajustamos o que for preciso.' },
]

export default function SeoPage() {
  return (
    <ServicePageLayout
      label="Blog e Conteúdo"
      title="APAREÇA NO GOOGLE"
      titleMuted="SEM PAGAR POR CLIQUE"
      description="Anúncio pago funciona enquanto você paga. Conteúdo bem feito traz clientes de graça — mês após mês, sem gastar mais. É o investimento que cresce com o tempo."
      features={features}
      iconName="BookOpen"
      ctaText="Quero clientes orgânicos"
    />
  )
}
