import { Metadata } from 'next'
import Link from 'next/link'
import styles from '../Servicos.module.css'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'SEO Tradicional e Otimização para Buscadores | Autobotia',
  description: 'Transforme o seu site em um ativo que gera leads todos os dias. Tráfego orgânico, autoridade profunda e posicionamento de longo prazo no Google.',
}

export default function SeoPage() {
  return (
    <main className={styles.pageContainer}>
      {/* HERO */}
      <section className={styles.hero}>
        <SectionWrapper className={styles.heroContent}>
          <span className={styles.badge}>O Topo do Funil Orgânico</span>
          <h1 className={styles.title}>
            Seja a Maior Referência <br />
            <span className={styles.highlight}>Do Seu Mercado.</span>
          </h1>
          <p className={styles.description}>
            Diferente de anúncios que param de funcionar assim que o dinheiro acaba, o SEO Tradicional transforma seu domínio num patrimônio digital. Capture os clientes que pesquisam pelo seu produto toda vez que eles abrirem o Google.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/simulador">
              <Button variant="primary">Agendar Auditoria de SEO</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

      {/* METODOLOGIA */}
      <section className={styles.section}>
        <SectionWrapper className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Escala Invisível e Lucrativa</h2>
          <p className={styles.sectionDescription}>
            Nossa abordagem não foca em métricas de vaidade. Focamos em ranquear para as palavras-chave que trazem dezenas contínuas de novos contratos no longo prazo.
          </p>
        </SectionWrapper>

        <div className={styles.grid}>
          {/* Feature 1 */}
          <SectionWrapper delay={100}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Auditoria Técnica (On-Page)</h3>
              <p className={styles.featureText}>
                Corrigimos a saúde do seu site, melhoramos a semântica do código, meta-tags e removemos todos os obstáculos técnicos que impedem robôs do Google de indexar suas páginas.
              </p>
            </div>
          </SectionWrapper>

          {/* Feature 2 */}
          <SectionWrapper delay={200}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Estratégia de Conteúdo Intencional</h3>
              <p className={styles.featureText}>
                Descobrimos as "dores" do seu Lead e transformamos essas dores em artigos, páginas de serviço e silos de conteúdo que capturam tráfego exato de quem vai comprar de você.
              </p>
            </div>
          </SectionWrapper>

          {/* Feature 3 */}
          <SectionWrapper delay={300}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Autoridade Externa (Link Building)</h3>
              <p className={styles.featureText}>
                Estratégias de relações públicas digitais para conquistar links em grandes portais do seu nicho, repassando "Link Juice" potente e mostrando ao Google que você é um líder no mercado.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* THE NEXT STEP / THE CLIMAX */}
      <section className={styles.section}>
        <SectionWrapper>
          <div className={styles.upSellBanner}>
            <div className={styles.upSellContent}>
              <h3>O Futuro Chegou. Está Preparado para IAs?</h3>
              <p>O SEO garante o Google. Para garantir que marcas como ChatGPT e Gemini indiquem a sua empresa na frente das outras, aplique o serviço inovador de Visibilidade Generativa (GEO).</p>
            </div>
            <Link href="/simulador">
              <Button variant="primary">Agendar um Diagnóstico B2B →</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

    </main>
  )
}
