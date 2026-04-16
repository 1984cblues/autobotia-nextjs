import { Metadata } from 'next'
import Link from 'next/link'
import styles from '../Servicos.module.css'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Criação de Sites de Alta Performance | Autobotia',
  description: 'Seu ticket de entrada para o ecossistema digital. Desenvolvemos sites premium, ultra rápidos e otimizados para converter visitantes em clientes reais.',
}

export default function WebDesignPage() {
  return (
    <main className={styles.pageContainer}>
      {/* HERO */}
      <section className={styles.hero}>
        <SectionWrapper className={styles.heroContent}>
          <span className={styles.badge}>O Início da Jornada Digital</span>
          <h1 className={styles.title}>
            Seu Site Não Deve Apenas Existir. <br />
            <span className={styles.highlight}>Ele Deve Vender.</span>
          </h1>
          <p className={styles.description}>
            O cartão de visitas estático morreu. Criamos máquinas de vendas digitais usando design premium, arquitetura persuasiva e velocidade inatingível pela concorrência.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/simulador">
              <Button variant="primary">Calcular Projeto do meu Site</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

      {/* POR QUE NÓS? */}
      <section className={styles.section}>
        <SectionWrapper className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Mais que Design, Engenharia de Conversão</h2>
          <p className={styles.sectionDescription}>
            Entenda por que empresas que criam sites conosco nunca mais precisam refazer seus layouts.
          </p>
        </SectionWrapper>

        <div className={styles.grid}>
          {/* Feature 1 */}
          <SectionWrapper delay={100}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Performance (Core Web Vitals)</h3>
              <p className={styles.featureText}>
                Sites lentos perdem 53% dos usuários. Nossos projetos passam nos critérios mais restritos do Google, garantindo carregamento instantâneo.
              </p>
            </div>
          </SectionWrapper>

          {/* Feature 2 */}
          <SectionWrapper delay={200}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Arquitetura de Conversão (UX)</h3>
              <p className={styles.featureText}>
                O fluxo visual guia seu visitante exatamente de onde ele está até o botão do WhatsApp ou checkout. Zero ruído, foco total na venda.
              </p>
            </div>
          </SectionWrapper>

          {/* Feature 3 */}
          <SectionWrapper delay={300}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Fundação para Crescimento</h3>
              <p className={styles.featureText}>
                Preparamos seu site (ticket de entrada) pronto para receber nossas estratégias pesadas de SEO Tradicional e Local futuramente. Sem refações.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* UP-SELL PITCH / THE NEXT STEP */}
      <section className={styles.section}>
        <SectionWrapper>
          <div className={styles.upSellBanner}>
            <div className={styles.upSellContent}>
              <h3>Sua fundação está pronta. E o tráfego?</h3>
              <p>Ter o melhor site da sua cidade não adianta se ninguém o encontrar. Junte o Design com nossa estratégia de dominação de Google Meu Negócio.</p>
            </div>
            <Link href="/servicos/seo-local">
              <Button variant="primary">Conhecer SEO Local →</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

    </main>
  )
}
