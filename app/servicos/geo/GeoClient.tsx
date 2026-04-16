'use client'

import React, { useState } from 'react'
import styles from './geo.module.css'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { GlowCard } from '@/components/ui/GlowCard'
import { Button } from '@/components/ui/Button'
import { AccordionItem } from '@/components/ui/AccordionItem'

export function GeoClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: "Qual a diferença entre SEO e GEO?",
      a: "SEO (Search Engine Optimization) foca em ranquear links baseados em palavras-chave no Google clássico. GEO (Generative Engine Optimization) adapta seu conteúdo para ser a resposta DIRETA gerada pelas Inteligências Artificiais e AI Overviews."
    },
    {
      q: "Posso fazer GEO se não tenho um site?",
      a: "É extremamente difícil. O site é a âncora principal de informação oficial que as IAs usam para validar quem você é. Sem um site otimizado (que nós podemos fazer), a IA confia menos na sua marca."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <SectionWrapper>
             <div className="section-label" style={{ display: 'inline-flex', margin: '0 auto 1.5rem', justifyContent: 'center' }}>
                O Fim do SEO Tradicional?
             </div>
            <h1 className={styles.title}>
              Sua marca como <span className="text-gradient">Resposta</span>{' '}
              nas IAs.
            </h1>
            <p className={styles.description}>
              Os clientes pararam de "pesquisar" no Google e começaram a "perguntar" às Inteligências Artificiais. Sua empresa está pronta para ser a resposta?
            </p>
            
            <div className={styles.aiChips}>
               <div className={styles.aiChip}>
                  <div className={styles.aiChipBox} /> ChatGPT
               </div>
               <div className={styles.aiChip}>
                  <div className={styles.aiChipBox} /> Google Gemini
               </div>
               <div className={styles.aiChip}>
                  <div className={styles.aiChipBox} /> Perplexity
               </div>
            </div>

            <Button variant="primary" size="lg" href="/simulador">
              Quero ser encontrado nas IAs
            </Button>
          </SectionWrapper>
        </div>
      </section>

      {/* Diferenciais */}
      <section className={styles.features}>
        <div className="container">
          <SectionWrapper className="text-center">
            <span className="section-label">Como o GEO funciona</span>
            <h2>Mais que Palavras-Chave. Contexto.</h2>
          </SectionWrapper>

          <div className={styles.featureGrid}>
            <SectionWrapper delay={0.1}>
              <GlowCard
                icon={<></>}
                title="Auditoria de Entidades"
                description="Mapeamos como os LLMs (Language Models) enxergam a sua marca atualmente e o que precisa ser corrigido."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <GlowCard
                icon={<></>}
                title="Estrutura de Dados (JSON-LD)"
                description="Criamos esquemas técnicos ocultos no seu site que mastigam a informação para o Google AI engolir fácil."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <GlowCard
                icon={<></>}
                title="Conteúdo Citável"
                description="Otimizamos os textos do seu site em formatos que as IAs amam referenciar (como este FAQ e passos enumerados)."
              />
            </SectionWrapper>
          </div>
        </div>
      </section>
      
       <section className={styles.features} style={{ background: 'var(--color-bg)' }}>
        <div className="container">
           <SectionWrapper className="text-center" style={{ marginBottom: "var(--space-6)"}}>
             <h2>Dúvidas Frequentes sobre GEO</h2>
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
