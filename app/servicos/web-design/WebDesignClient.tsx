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
      q: "Quanto tempo demora pra ficar pronto?",
      a: "Em média de 7 a 15 dias úteis dependendo do tamanho do projeto. Você acompanha tudo pelo WhatsApp e aprova cada etapa antes de avançar. Nada vai pro ar sem o seu OK."
    },
    {
      q: "Por que não usar só o Instagram?",
      a: "O Instagram é ótimo pra aparecer pra quem já te segue. Mas quem pesquisa no Google 'encanador em São Paulo' não está no seu Instagram — está buscando um site. Ter um site é a diferença entre aparecer e ficar invisível pra quem mais precisa de você."
    },
    {
      q: "Preciso entender de tecnologia pra ter um site?",
      a: "Não. A gente cuida de tudo — criação, hospedagem, subida no Google. Você só precisa nos contar o que o seu negócio faz e o que você quer que o cliente faça ao entrar no site."
    }
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionWrapper>
            <div className="section-label" style={{ display: 'inline-flex', margin: '0 auto 1.5rem', justifyContent: 'center' }}>
                Criação de Sites
             </div>
            <h1 className={styles.title}>
              Seu cliente pesquisou. O site apareceu.{' '}
              <span className="text-gradient">Ele ligou.</span>
            </h1>
            <p className={styles.description}>
              Criamos o site do seu negócio do zero — bonito, rápido, que abre bem no celular e já aparece no Google. Você não precisa entender de tecnologia. Isso é trabalho nosso.
            </p>
            <a
              href="https://wa.me/5511922908507?text=Oi%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis%20pra%20criar%20meu%20site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" style={{ marginTop: 'var(--space-3)' }}>
                Quero um orçamento grátis →
              </Button>
            </a>
          </SectionWrapper>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <SectionWrapper className="text-center">
            <span className="section-label">Os Problemas que Resolvemos</span>
            <h2>Por que o site do seu concorrente aparece e o seu não?</h2>
          </SectionWrapper>

          <div className={styles.featureGrid}>
            <SectionWrapper delay={0.1}>
              <GlowCard
                icon={<></>}
                title="Site lento que afasta o cliente"
                description="Se a página demora mais de 3 segundos pra abrir, mais da metade das pessoas fecha antes de ver qualquer coisa. Nossos sites carregam em menos de 1 segundo."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <GlowCard
                icon={<></>}
                title="Não aparece no celular direito"
                description="Mais de 80% dos seus clientes vão acessar pelo celular. Um site que não funciona no celular é como uma loja com a porta torta — passa imagem ruim e afasta."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <GlowCard
                icon={<></>}
                title="O Google não te encontra"
                description="Ter um site bonito que ninguém acha é igual a ter uma loja numa rua sem movimento. A gente entrega o site já configurado pra aparecer nas buscas do Google."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.4}>
              <GlowCard
                icon={<></>}
                title="Textos que não convencem"
                description="Muitos sites descrevem o que a empresa faz, mas não falam por que o cliente deve te escolher. Escrevemos os textos pensando em converter visitante em contato."
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <SectionWrapper className="text-center">
             <h2>Como funciona na prática</h2>
          </SectionWrapper>

          <div className={styles.processGrid}>
            <SectionWrapper delay={0.1}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>A gente te entende</h3>
                <p className={styles.stepDesc}>Uma conversa rápida no WhatsApp sobre o seu negócio, seus clientes e o que você quer que o site faça por você.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Você aprova o layout</h3>
                <p className={styles.stepDesc}>Antes de codar qualquer coisa, você vê como o site vai ficar e aprova. Nenhuma surpresa no final.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Criamos tudo</h3>
                <p className={styles.stepDesc}>Desenvolvemos o site completo — design, textos e configuração do Google. Você acompanha pelo WhatsApp.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.4}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Seu site no ar</h3>
                <p className={styles.stepDesc}>Publicamos, testamos em todos os celulares e mandamos o link pra você compartilhar. A gente cuida do suporte.</p>
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
