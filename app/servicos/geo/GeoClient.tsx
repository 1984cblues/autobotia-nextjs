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
      q: "O que é isso de ChatGPT recomendar empresa?",
      a: "Cada vez mais pessoas, em vez de pesquisar no Google, estão digitando perguntas direto no ChatGPT ou no Gemini — como 'qual o melhor dentista em São Paulo?' ou 'quem faz reforma de apartamento bem perto de mim?'. Nossa estratégia faz a sua empresa ser a resposta que essas IAs indicam."
    },
    {
      q: "Preciso ter um site pra isso funcionar?",
      a: "Sim, e com razão: o ChatGPT e o Google precisam de um lugar oficial pra buscar informações sobre o seu negócio. Um site bem feito é a âncora que faz as IAs confiarem na sua empresa. Se você ainda não tem site, a gente resolve isso primeiro."
    },
    {
      q: "Minha empresa é pequena. Vale a pena?",
      a: "Justamente por isso vale. A maioria das empresas pequenas ainda não fez nada pra aparecer nas IAs. Agir agora é como aparecer no Google há 10 anos atrás — você chega antes da concorrência e domina o espaço primeiro."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <SectionWrapper>
             <div className="section-label" style={{ display: 'inline-flex', margin: '0 auto 1.5rem', justifyContent: 'center' }}>
                ChatGPT e Inteligências Artificiais
             </div>
            <h1 className={styles.title}>
              Quando perguntam pro ChatGPT,{' '}
              <span className="text-gradient">sua empresa é a resposta.</span>
            </h1>
            <p className={styles.description}>
              As pessoas estão parando de pesquisar no Google e começando a perguntar pras IAs. Se o ChatGPT não conhece a sua empresa, você está perdendo clientes sem saber disso.
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

            <a
              href="https://wa.me/5511922908507?text=Oi%2C%20quero%20que%20minha%20empresa%20apare%C3%A7a%20no%20ChatGPT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Quero aparecer nas IAs →
              </Button>
            </a>
          </SectionWrapper>
        </div>
      </section>

      {/* Como funciona */}
      <section className={styles.features}>
        <div className="container">
          <SectionWrapper className="text-center">
            <span className="section-label">O que fazemos por você</span>
            <h2>Como a gente faz o ChatGPT te recomendar</h2>
          </SectionWrapper>

          <div className={styles.featureGrid}>
            <SectionWrapper delay={0.1}>
              <GlowCard
                icon={<></>}
                title="Verificamos se a IA já te conhece"
                description="Testamos como o ChatGPT, Gemini e Perplexity falam (ou ignoram) a sua empresa hoje. Esse diagnóstico revela o que precisa ser feito."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <GlowCard
                icon={<></>}
                title="Organizamos as informações do seu negócio"
                description="Estruturamos os dados da sua empresa de um jeito que as IAs entendem e confiam. Você não precisa saber como funciona — é tudo invisível pra você."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <GlowCard
                icon={<></>}
                title="Criamos conteúdo que a IA cita"
                description="Escrevemos textos com o formato exato que o ChatGPT e o Google adoram referenciar — respostas diretas, claras e com autoridade."
              />
            </SectionWrapper>
          </div>
        </div>
      </section>
      
       <section className={styles.features} style={{ background: 'var(--color-bg)' }}>
        <div className="container">
           <SectionWrapper className="text-center" style={{ marginBottom: "var(--space-6)"}}>
             <h2>Perguntas Frequentes</h2>
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
