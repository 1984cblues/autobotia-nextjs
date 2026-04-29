import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Apareça no Google Maps e Buscas "Perto de Mim" | Autobotia',
  description: 'Quando alguém pesquisa seu serviço perto de casa, é você que vai aparecer. Estratégia de presença local para empresas que atendem clientes na cidade.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/seo-local' },
}

const features = [
  { title: 'Apareça no Google Maps', desc: 'Otimizamos seu perfil no Google pra você aparecer no mapa quando alguém buscar o que você faz na sua cidade.' },
  { title: 'Páginas por Bairro e Cidade', desc: 'Criamos páginas específicas pra cada região que você atende, pra aparecer quando o cliente pesquisar perto de casa.' },
  { title: 'Informações Consistentes', desc: 'Seu nome, endereço e telefone iguais em todos os lugares da internet — isso ajuda o Google a confiar mais na sua empresa.' },
  { title: 'Mais Avaliações no Google', desc: 'Ajudamos você a conseguir mais avaliações positivas — de forma ética — pra sua empresa parecer mais confiável.' },
  { title: 'Google Entende Seu Negócio', desc: 'Configuramos seu site pra comunicar pro Google exatamente o que você faz, onde fica e pra quem atende.' },
  { title: 'Relatório Mensal Simples', desc: 'Todo mês você recebe um relatório fácil de entender: quantas pessoas viram sua empresa e clicaram no seu contato.' },
]

export default function SeoLocalPage() {
  return (
    <ServicePageLayout
      label="Google Maps e Buscas Locais"
      title="QUANDO PESQUISAM"
      titleMuted='"PERTO DE MIM", VOCÊ APARECE'
      description="O cliente pegou o celular, digitou o serviço que precisa e achou seu concorrente. Com a gente, quem aparece é VOCÊ — não o vizinho da esquina."
      features={features}
      iconName="MapPin"
      ctaText="Quero aparecer no Maps"
      heroImage="/assets/servicos/seo-local-hero.png"
    />
  )
}
