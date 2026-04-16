'use client'

import React from 'react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { GlowCard } from '@/components/ui/GlowCard'
import { AccordionItem } from '@/components/ui/AccordionItem'
import { StatCounter } from '@/components/ui/StatCounter'
import styles from './page.module.css'

export function HomeClient() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)

  const faqs = [
    {
      q: 'Qual é o diferencial de um site de alta performance?',
      a: 'Diferente de templates genéricos e lentos, desenvolvemos na stack Next.js (a mesma de grandes corporações). Garantimos velocidade de carregamento em milissegundos, responsividade fluida e uma estrutura pronta para converter o seu tráfego em clientes reais.',
    },
    {
      q: 'O que acontece depois que meu site for lançado?',
      a: 'A estrutura é apenas o primeiro pilar (Ticket de Entrada). Após o lançamento, oferecemos pacotes de SEO Local e estratégias focadas em Inteligência Artificial para colocar sua nova "casa digital" nas primeiras posições de busca e recomendações.',
    },
    {
      q: 'Vocês atendem empresas de qualquer segmento?',
      a: 'Sim. Nossa metodologia é focada em conversão para empresas que prestam serviços ou vendem produtos de alto valor agregado: clínicas, escritórios, indústrias, profissionais liberais e muito mais.',
    },
    {
      q: 'Qual é o prazo médio de entrega de um projeto Web?',
      a: 'Por utilizarmos engenharia moderna e design validado, nossos projetos de entrada geralmente levam entre 15 a 30 dias com um escopo fechado, perfeitamente arquitetado para o que a sua empresa precisa.',
    },
  ]

  const problems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      stat: '90%',
      label: 'das empresas têm sites que parecem panfletos digitais, sem copy e sem fluxo de vendas',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18"/>
        </svg>
      ),
      stat: '75%',
      label: 'do tráfego pago é desperdiçado quando enviado para Landing Pages lentas e genéricas',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      stat: '3s',
      label: 'de lentidão é suficiente para que metade dos usuários abandonem a sua página',
    },
  ]

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroAnimation} aria-hidden="true" />

        {/* Floating UI cards */}
        <div className={`${styles.floatingCardWrapper} ${styles.floating1}`} aria-hidden="true">
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className={styles.floatingContent}>
              <h4>SEO Local Ativado</h4>
              <p>142 novas interações no Google Maps esta semana.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.floatingCardWrapper} ${styles.floating2}`} aria-hidden="true">
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
              </svg>
            </div>
            <div className={styles.floatingContent}>
              <h4>Citado no ChatGPT</h4>
              <p>Sua marca foi mencionada como referência do setor.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.floatingCardWrapper} ${styles.floating3}`} aria-hidden="true">
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12h4l3 8 5-16 3 8h5"/>
              </svg>
            </div>
            <div className={styles.floatingContent}>
              <h4>+312% impressões</h4>
              <p>Via AI Overviews nos últimos 30 dias.</p>
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <SectionWrapper animation="fade-up">
            <div className={styles.heroLabel}>
              <span>Arquitetura de Conversão Premium</span>
            </div>
            <h1 className={styles.heroTitle}>
              Pare de ter um panfleto online,<br />
              tenha um <span className={styles.heroHighlight}>Ecossistema de Vendas</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Desenvolvemos Sites Profissionais e Landing Pages de altíssima performance para escalar 
              seu engajamento orgânico, SEO Local e posicionamento com IAs.
            </p>
            <div className={styles.ctaGroup}>
              <Button size="lg" variant="primary" href="/simulador">
                Faça uma Análise Gratuita
              </Button>
              <a
                href="#servicos"
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  padding: '1rem 2.25rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                }}
              >
                Conhecer serviços ↓
              </a>
            </div>
            <p className={styles.heroCopy}>
              Sem promessas vazias. Resultados escaláveis baseados em métricas reais.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* ================= PROBLEMA / SOLUÇÃO (Storytelling) ================= */}
      <section className={styles.problem}>
        <div className="container">
          <SectionWrapper animation="fade-up" className="text-center">
            <span className="section-label">A Maioria Falha Aqui</span>
            <h2>Por que seu site atual não converte?</h2>
            <p className="mx-auto" style={{ maxWidth: 640, color: 'var(--color-text-muted)' }}>
              Templates genéricos e código inflado matam os seus lucros. Um design premium somado 
              a engenharia de milissegundos é a <strong>fórmula definitiva</strong> para fechar contratos de alto ticket.
            </p>
          </SectionWrapper>

          <div className={styles.problemGrid}>
            {problems.map((p, i) => (
              <SectionWrapper key={i} animation="fade-up" delay={(i + 1) * 100}>
                <div className={styles.problemCard}>
                  <div className={styles.problemIcon}>{p.icon}</div>
                  <div className={styles.problemStat}>{p.stat}</div>
                  <p className={styles.problemLabel}>{p.label}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className={styles.services} id="servicos">
        <div className="container">
          <SectionWrapper animation="fade-up" className="text-center">
            <span className="section-label">Web Ecosystem e Tráfego</span>
            <h2>A Escada de Tração Autobotia</h2>
            <p className="mx-auto" style={{ maxWidth: 660, color: 'var(--color-text-muted)' }}>
              A sua fundação web é o Pilar Principal (Ticket 1). Com ela pronta e veloz, conectamos o sistema de 
              tráfego inteligente local e estruturamos conteúdos densos para as máquinas recomendarem a sua marca.
            </p>
          </SectionWrapper>

          <div className={styles.servicesGrid}>
            <SectionWrapper animation="fade-up" delay={100} className={styles.bentoFeatured}>
              <GlowCard
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
                title="Pilar 1: Web Design & LP"
                description="Seu Ticket de Entrada. Sites construídos artesanalmente do Copywriting ao Deploy. Usamos Next.js, a stack favorita das Startups no Vale do Silício para garantir que seu site se torne a fundação invencível do seu negócio."
                linkText="Solicitar Orçamento"
                href="/simulador"
              />
            </SectionWrapper>
            
            <SectionWrapper animation="fade-up" delay={200} className={styles.bentoWide}>
              <GlowCard
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                title="Upsell: Tração & SEO Local"
                description="Casa arrumada? Hora dos visitantes. Otimizamos seu Perfil no Google (Maps/Reviews) para capturar os clientes que estão com o cartão de crédito na mão 'perto de você'."
                linkText="Conhecer SEO Local"
                href="/servicos/seo-local"
              />
            </SectionWrapper>

            <SectionWrapper animation="fade-up" delay={300} className={styles.bentoStandard}>
              <GlowCard
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
                title="SEO Content"
                description="Clusters semânticos implementados em código."
                linkText="Conteúdo"
                href="/servicos/seo"
              />
            </SectionWrapper>
            
            <SectionWrapper animation="fade-up" delay={400} className={styles.bentoStandard}>
              <GlowCard
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18"/></svg>}
                title="Otimização IAs"
                description="Modelamos seu site para recomendações em LLMs."
                linkText="IA Visibility"
                href="/servicos/geo"
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ================= STATS / SOCIAL PROOF ================= */}
      <section className={styles.stats}>
        <div className="container">
          <SectionWrapper animation="fade-up" className="text-center" style={{ marginBottom: 'var(--space-7)' }}>
            <span className="section-label">Números Reais</span>
            <h2>Resultados que falam por si</h2>
          </SectionWrapper>
          <div className={styles.statsGrid}>
            <SectionWrapper animation="scale" delay={100}>
              <StatCounter value={150} suffix="+" label="Projetos Entregues" />
            </SectionWrapper>
            <SectionWrapper animation="scale" delay={200}>
              <StatCounter value={97} suffix="%" label="Clientes Satisfeitos" />
            </SectionWrapper>
            <SectionWrapper animation="scale" delay={300}>
              <StatCounter value={3} suffix="x" label="Crescimento Médio de Tráfego" />
            </SectionWrapper>
            <SectionWrapper animation="scale" delay={400}>
              <StatCounter value={24} suffix="h" label="Tempo Médio de Resposta" />
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className={styles.howItWorks}>
        <div className="container">
          <SectionWrapper animation="fade-up" className="text-center">
            <span className="section-label">Nosso Processo</span>
            <h2>Metodologia Orientada ao Crescimento</h2>
          </SectionWrapper>

          <div className={styles.stepsGrid}>
            {[
              { n: '1', title: 'UX & Copywriting', desc: 'Entendemos seu serviço de alto ticket e construímos narrativas que o cérebro deseja comprar.' },
              { n: '2', title: 'Infraestrutura', desc: 'Desenvolvimento em Headless/Next.js focando 100% no Core Web Vitals do Google.' },
              { n: '3', title: 'SEO e Autoridade', desc: 'Sua base pronta, abrimos as torneiras de tráfego local e criação de artigos IA-Optimized.' },
              { n: '4', title: 'Manutenção / Upsell', desc: 'Apoiamos seu crescimento mês a mês, sem templates quebrados no meio do caminho.' },
            ].map((step, i) => (
              <SectionWrapper key={i} animation="fade-up" delay={(i + 1) * 100}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className={styles.faqSection}>
        <div className="container">
          <SectionWrapper animation="fade-up" className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <span className="section-label">Perguntas Frequentes</span>
            <h2>Dúvidas Comuns</h2>
          </SectionWrapper>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <SectionWrapper key={i} animation="fade-up" delay={(i + 1) * 80}>
                <AccordionItem
                  title={faq.q}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.a}
                </AccordionItem>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className={styles.finalCta}>
        <div className="container">
          <SectionWrapper animation="scale" className={styles.finalCtaContent}>
            <h2>Pronto para escalar sua visibilidade digital?</h2>
            <p>
              Agende uma call de descoberta e vamos construir um plano de ação para a sua empresa
              dominar os motores de busca e de inteligência artificial.
            </p>
            <div className={styles.ctaGroup}>
              <Button size="lg" variant="primary" href="/simulador">
                Iniciar Diagnóstico Agora
              </Button>
              <Button size="lg" variant="whatsapp" href="https://wa.me/5511922908507" target="_blank">
                Falar no WhatsApp
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  )
}
