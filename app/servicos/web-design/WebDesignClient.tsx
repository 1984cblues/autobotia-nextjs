'use client'

import React, { useState } from 'react'
import styles from './web-design.module.css'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { GlowCard } from '@/components/ui/GlowCard'
import { Button } from '@/components/ui/Button'
import { AccordionItem } from '@/components/ui/AccordionItem'

export function WebDesignClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: "Vocês usam WordPress ou Elementor?",
      a: "Não. Desenvolvemos com React e Next.js (a mesma tecnologia usada por gigantes como Netflix, TikTok e Vercel). Isso garante segurança impecável (zero plugins falhos) e uma velocidade de carregamento impossível de alcançar com builders visuais."
    },
    {
      q: "Por que não ter apenas um Instagram?",
      a: "Redes sociais geram desejo, mas retêm o tráfego para si mesmas. Um site próprio é um ativo no qual VOCÊ dita as regras. É a diferença entre alugar um terreno e construir a sua própria casa comercial. Além disso, as pesquisas locais (Google) exigem um site bem ancorado."
    }
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionWrapper>
            <div className="section-label" style={{ display: 'inline-flex', margin: '0 auto 1.5rem', justifyContent: 'center' }}>
                Desenvolvimento Premium
             </div>
            <h1 className={styles.title}>
              Não é só um site. É um ecossistema de <span className="text-gradient">Conversão</span>.
            </h1>
            <p className={styles.description}>
              Páginas que carregam em milissegundos, desenvolvidas sob medida com Next.js para colocar sua marca à frente em performance e posicionamento nas buscas.
            </p>
            <Button variant="primary" size="lg" href="/simulador" style={{ marginTop: 'var(--space-3)'}}>
              Ver Planos e Valores
            </Button>
          </SectionWrapper>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <SectionWrapper className="text-center">
            <span className="section-label">Problemas Reais, Soluções Reais</span>
            <h2>Por que 90% dos sites perdem dinheiro?</h2>
          </SectionWrapper>

          <div className={styles.featureGrid}>
            <SectionWrapper delay={0.1}>
              <GlowCard
                icon={<></>}
                title="Lentidão Extrema"
                description="Se a página demorar mais de 3 segundos para carregar, mais de 50% dos usuários desistem. Nossa arquitetura corta isso pela metade."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <GlowCard
                icon={<></>}
                title="Responsivo Quebrado"
                description="Criamos interfaces Mobile First, pois sabemos que +80% da sua conversão virá da tela de um celular."
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <SectionWrapper className="text-center">
             <h2>Nosso Processo Ágil</h2>
          </SectionWrapper>

          <div className={styles.processGrid}>
            <SectionWrapper delay={0.1}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Discovery</h3>
                <p className={styles.stepDesc}>Reunião de alinhamento para mapear objetivos, concorrência e estrutura.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Design</h3>
                <p className={styles.stepDesc}>Prototipagem de alta fidelidade (Figma) com aprovação de rotas e copy.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Code</h3>
                <p className={styles.stepDesc}>Engenharia em Next.js priorizando SEO Core Web Vitals.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.4}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Launch</h3>
                <p className={styles.stepDesc}>Indexação forçada, instalação de Analytics e entrega final.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
           <SectionWrapper className="text-center" style={{ marginBottom: "var(--space-6)"}}>
             <h2>Dúvidas Frequentes</h2>
           </SectionWrapper>
           <div style={{ maxWidth: '700px', margin: '0 auto'}}>
             {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  title={faq.q}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.a}
                </AccordionItem>
             ))}
           </div>
        </div>
      </section>
    </>
  )
}
