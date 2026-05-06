'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, BarChart3, Globe, MapPin, Search } from 'lucide-react'

const cases = [
  {
    title: 'De Invisível a Escolha Número 1 na Região',
    scenario: 'Empresa de Serviços Locais começando do Zero',
    problem: 'O cliente não tinha site profissional e dependia apenas de indicações boca-a-boca e um Instagram básico. Ao pesquisar pelos serviços na cidade, a empresa simplesmente não existia no Google.',
    solution: 'Implementação do "Kit Domínio Local": Criação de Site Profissional otimizado para conversão + Configuração Estratégica do Google Meu Negócio (SEO Local).',
    results: [
      'Entrou para o "Top 3" (Local Pack) do Google Maps na região.',
      'Aumento de 400% no número de ligações mensais (visitas ao perfil).',
      'Construção de autoridade imediata frente aos concorrentes estabelecidos.'
    ],
    stats: 'Dados do Mercado (2024): 81% dos consumidores pesquisam online antes de comprar. Empresas com site passam 84% mais credibilidade.',
    icon: <Search size={24} />,
    color: 'hsl(var(--primary))'
  },
  {
    title: 'A Reestruturação de Alto Impacto e Conversão',
    scenario: 'Clínica/Escritório com site amador e baixo volume de leads',
    problem: 'O cliente tinha um site antigo que não funcionava bem no celular, carregava lento e não passava a credibilidade necessária para cobrar tickets mais altos.',
    solution: 'Redesign completo com foco em UX (Experiência do Usuário), arquitetura de conversão e gestão ativa de avaliações no Google Meu Negócio.',
    results: [
      'Aumento de 200% na taxa de conversão (visitantes que viram clientes).',
      '78% a mais de clientes entrando em contato já decididos a fechar negócio.',
      'Aumento percepção de valor: o cliente conseguiu subir os preços dos serviços.'
    ],
    stats: 'Dados do Mercado (2024): 75% dos consumidores julgam a credibilidade da sua empresa pelo design do seu site.',
    icon: <BarChart3 size={24} />,
    color: 'hsl(var(--foreground))'
  },
  {
    title: 'A Conquista da Busca Orgânica (Sem depender de tráfego pago)',
    scenario: 'Empresa B2B / Vendas que queria reduzir custo de aquisição',
    problem: 'A empresa só recebia orçamentos quando pagava anúncios no Facebook/Instagram (Tráfego Pago). Quando o orçamento acabava, as vendas paravam.',
    solution: 'Criação de uma estrutura SEO Profunda e Otimização para IAs (GEO), tornando a empresa a resposta padrão do Google para buscas complexas do setor.',
    results: [
      'Geração de leads previsível 24 horas por dia, 7 dias por semana.',
      'Redução do Custo de Aquisição de Cliente (CAC) em 60%.',
      'Crescimento exponencial em tráfego qualificado de alta intenção de compra.'
    ],
    stats: 'Dados do Mercado (2025): Quase 60% das buscas no Google terminam na própria página de resultados (Zero-Click). Estar na resposta certa é crucial.',
    icon: <Globe size={24} />,
    color: 'hsl(var(--muted-foreground))'
  }
]

export default function CaseStudiesClient() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '100vh', background: 'hsl(var(--background))' }}>
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <Link href="/" style={{ fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3rem', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
            onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}>
            <ArrowLeft size={16} /> Voltar para Início
          </Link>
          
          <div style={{ maxWidth: 800, marginBottom: '6rem' }}>
            <span className="section-label">Estudos de Caso</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.05, marginBottom: '2rem', color: 'hsl(var(--foreground))' }}>
              O QUE ACONTECE<br />
              <span style={{ color: 'hsl(var(--foreground) / 0.35)' }}>QUANDO VOCÊ APARECE?</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7 }}>
              Você está começando agora? Não tem site profissional ou não usa o Google Meu Negócio? <br/>
              Veja como nossos serviços transformam negócios amadores em líderes de mercado na sua região, baseando-se em dados reais e estratégias comprovadas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            {cases.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ 
                  background: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border) / 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px -10px hsl(var(--foreground) / 0.05)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                }}
              >
                <div style={{ padding: '3rem', background: 'hsl(var(--foreground) / 0.02)', borderRight: '1px solid hsl(var(--border) / 0.1)' }}>
                  <div style={{ display: 'inline-flex', padding: '1rem', background: c.color, color: 'hsl(var(--background))', borderRadius: '12px', marginBottom: '2rem' }}>
                    {c.icon}
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'hsl(var(--foreground))', marginBottom: '1rem', lineHeight: 1.2 }}>
                    {c.title}
                  </h2>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: c.color, marginBottom: '2rem' }}>
                    {c.scenario}
                  </p>
                  
                  <div style={{ background: 'hsl(var(--foreground) / 0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: \`4px solid \${c.color}\` }}>
                    <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', fontStyle: 'italic', lineHeight: 1.6 }}>
                      "{c.stats}"
                    </p>
                  </div>
                </div>

                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'hsl(var(--destructive))' }}>✗</span> O Problema
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{c.problem}</p>
                  </div>
                  
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'hsl(var(--primary))' }}>✓</span> A Solução Autobotia
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{c.solution}</p>
                  </div>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>
                      Resultados Alcançados:
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {c.results.map((res, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>
                          <span style={{ color: c.color, fontWeight: 800 }}>→</span> {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1.5rem', color: 'hsl(var(--foreground))' }}>
            NÃO DEIXE DINHEIRO<br />
            <span style={{ color: 'hsl(var(--foreground) / 0.3)' }}>NA MESA</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Empresas invisíveis no Google e sem site profissional perdem clientes todos os dias para a concorrência. Faça uma simulação e descubra o seu potencial.
          </p>
          <Link href="/simulador" style={{ display: 'inline-flex', padding: '1.2rem 3.5rem', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', fontWeight: 800, textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.1em', borderRadius: '4px', boxShadow: '0 4px 15px hsl(var(--primary) / 0.25)', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px hsl(var(--primary) / 0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px hsl(var(--primary) / 0.25)'
            }}>
            SIMULAR MEU PROJETO AGORA
          </Link>
        </div>
      </section>
    </main>
  )
}
