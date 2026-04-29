import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Criação de Site Profissional para Empresas | Autobotia',
  description: 'Criamos o site da sua empresa do zero. Bonito, rápido, que abre no celular e aparece no Google. Sem template genérico — feito sob medida pro seu negócio.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/web-design' },
}

const features = [
  { title: 'Carrega em 1 Segundo', desc: 'Ninguém espera site lento. O seu vai abrir rapidinho no celular e no computador — isso também faz o Google preferir você.' },
  { title: 'Textos que Vendem', desc: 'Escrevemos cada palavra pra convencer o cliente a entrar em contato. Nada de textinho genérico que não fala com ninguém.' },
  { title: 'Bonito no Celular', desc: 'Mais de 80% das pessoas vão ver seu site pelo celular. O design funciona perfeito em qualquer tela, do smartphone ao computador.' },
  { title: 'Já Sai Pronto pro Google', desc: 'Seu site vai pro ar configurado pra aparecer nas pesquisas. Sem precisar contratar mais ninguém pra isso depois.' },
  { title: 'Seguro e Sempre no Ar', desc: 'Nada de site fora do ar na hora que o cliente vai entrar. Sua vitrine digital funciona 24h por dia, 7 dias por semana.' },
  { title: 'Suporte Pós-Entrega', desc: 'Qualquer dúvida ou ajuste, estamos aqui. Garantia de 30 dias e planos mensais pra manter tudo atualizado.' },
]

export default function WebDesignPage() {
  return (
    <ServicePageLayout
      label="Criação de Sites"
      title="SEU NEGÓCIO MERECE"
      titleMuted="UM SITE DE VERDADE"
      description="Você já perdeu clientes porque não tem site — ou porque o que tem parece de 2010. A gente resolve isso. Site bonito, rápido, no ar e já aparecendo no Google."
      features={features}
      iconName="Monitor"
      ctaText="Quero um orçamento grátis"
      heroImage="/assets/servicos/web-design-hero.png"
    />
  )
}
