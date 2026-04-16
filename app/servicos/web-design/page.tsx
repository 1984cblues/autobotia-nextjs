import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/layout/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Web Design & Landing Pages de Alta Conversão | Autobotia',
  description: 'Sites profissionais e landing pages de alta performance construídos em Next.js. Do copywriting ao deploy — sem templates genéricos.',
  alternates: { canonical: 'https://www.autobotia.com.br/servicos/web-design' },
}

const features = [
  { title: 'Next.js & Performance', desc: 'Stack corporativa do Vale do Silício. Sites com 98+ no PageSpeed e carregamento sub-segundo.' },
  { title: 'Copywriting de Conversão', desc: 'Narrativas construídas para vender. Cada palavra no seu lugar certo para converter visitante em cliente.' },
  { title: 'Design Responsivo', desc: 'Experiência perfeita em qualquer dispositivo, do mobile ao desktop 4K.' },
  { title: 'SEO Técnico Embutido', desc: 'Schema markup, Core Web Vitals, sitemap e robots.txt configurados desde o primeiro deploy.' },
  { title: 'Deploy no Coolify / VPS', desc: 'Infraestrutura containerizada com CI/CD automático. Zero downtime, atualizações via Git push.' },
  { title: 'Suporte e Manutenção', desc: 'Garantia de 30 dias pós-entrega. Planos mensais para manter o site sempre atualizado.' },
]

export default function WebDesignPage() {
  return (
    <ServicePageLayout
      label="Pilar 1 — Ticket de Entrada"
      title="WEB DESIGN &"
      titleMuted="LANDING PAGES"
      description="Seu site é sua melhor vitrine digital. Construímos sob medida — do zero ao ar — com foco total em velocidade, conversão e posicionamento orgânico."
      features={features}
      iconName="Monitor"
    />
  )
}
