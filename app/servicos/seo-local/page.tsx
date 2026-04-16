import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'SEO Local — Apareça no Google Maps e Pesquisas "Perto de Mim" | Autobotia',
  description: 'Domine o Google Maps e as buscas locais. Estratégia de SEO Local para empresas que atendem clientes na sua cidade ou região.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/seo-local' },
}

const features = [
  { title: 'Google Business Profile', desc: 'Otimização completa do seu perfil para aparecer no Google Maps e no pacote local (Local Pack).' },
  { title: 'City Pages Dinâmicas', desc: 'Páginas específicas para cada cidade ou bairro que você atende, com conteúdo único e Schema markup.' },
  { title: 'NAP Consistency', desc: 'Nome, Endereço e Telefone consistentes em todas as plataformas e diretórios locais.' },
  { title: 'Avaliações e Reputação', desc: 'Estratégias éticas para aumentar reviews no Google e responder ao feedback de clientes.' },
  { title: 'Schema LocalBusiness', desc: 'Marcação estruturada que comunica ao Google exatamente o que seu negócio faz e onde.' },
  { title: 'Relatórios Mensais', desc: 'Acompanhamento de posições, impressões e cliques nas buscas locais com relatório simplificado.' },
]

export default function SeoLocalPage() {
  return (
    <ServicePageLayout
      label="Pilar 2 — SEO Local"
      title="APAREÇA QUANDO"
      titleMuted="O CLIENTE PROCURA"
      description="O cliente está com o cartão de crédito na mão, pesquisando seu serviço no Google Maps. Garantimos que é você que aparece — não o concorrente."
      features={features}
      iconName="MapPin"
    />
  )
}
