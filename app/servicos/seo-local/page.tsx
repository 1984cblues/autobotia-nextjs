import { Metadata } from 'next'
import Link from 'next/link'
import styles from '../Servicos.module.css'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'SEO Local & Google Meu Negócio | Autobotia',
  description: 'Domine as buscas na sua região. Atraia clientes qualificados todos os dias que buscam pelos seus serviços no Google Maps.',
}

export default function SeoLocalPage() {
  return (
    <main className={styles.pageContainer}>
      {/* HERO */}
      <section className={styles.hero}>
        <SectionWrapper className={styles.heroContent}>
          <span className={styles.badge}>Atração de Leads Qualificados</span>
          <h1 className={styles.title}>
            Seja a Primeira Opção da Sua <span className={styles.highlight}>Cidade.</span>
          </h1>
          <p className={styles.description}>
            Seu cliente já está buscando pelo seu serviço no Google neste exato momento. O problema? Ele está achando o seu concorrente. Nós mudamos esse jogo através do SEO e Google Meu Negócio.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/simulador">
              <Button variant="primary">Fazer Diagnóstico do Meu Perfil</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

      {/* METODOLOGIA */}
      <section className={styles.section}>
        <SectionWrapper className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Dominação Regional na Prática</h2>
          <p className={styles.sectionDescription}>
            Aplicamos uma engenharia reversa nas buscas da sua cidade para colocar sua empresa no topo do Map Pack (os 3 primeiros resultados do Google).
          </p>
        </SectionWrapper>

        <div className={styles.grid}>
          {/* Feature 1 */}
          <SectionWrapper delay={100}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Otimização de Perfil (GMB)</h3>
              <p className={styles.featureText}>
                Transformamos o Perfil da sua Empresa no Google numa vitrine conversiva. Ajuste de categorias, dados estruturados locais (NAP) e CTAs para o WhatsApp.
              </p>
            </div>
          </SectionWrapper>

          {/* Feature 2 */}
          <SectionWrapper delay={200}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Gestão de Reputação & Reviews</h3>
              <p className={styles.featureText}>
                Estratégias semi-automatizadas para multiplicar a quantidade de avaliações 5-estrelas do seu negócio. A prova social é o maior gatilho para cliques locais.
              </p>
            </div>
          </SectionWrapper>

          {/* Feature 3 */}
          <SectionWrapper delay={300}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3 className={styles.featureTitle}>Produção de Conteúdo Geo-Alvo</h3>
              <p className={styles.featureText}>
                Postagens e artigos otimizados com keywords específicas da sua cidade e bairros, sinalizando autoridade regional para os rastreadores do Google.
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
              <h3>Dominou a Região? Chegou a hora de expandir.</h3>
              <p>O SEO Local capta os clientes próximos. Para virar uma autoridade inquestionável em todo o Brasil (ou mercado de nicho), você precisa do SEO Estrutural Massivo.</p>
            </div>
            <Link href="/servicos/seo">
              <Button variant="primary">Conhecer SEO Global →</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

    </main>
  )
}
