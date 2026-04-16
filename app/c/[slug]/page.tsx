import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { topCities, getCityBySlug } from '@/lib/data/cities';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { GlowCard } from '@/components/ui/GlowCard';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.slug);
  
  if (!city) {
    return { title: 'Página não encontrada' };
  }

  return {
    title: `Criação de Sites em ${city.cityName} - ${city.stateAcronym} | Autobot IA`,
    description: `Agência de marketing especializada na criação de sites profissionais em ${city.cityName}, prestando serviços para os ramos de ${city.mainSectors.slice(0, 2).join(' e ')}. Comece a vender mais hoje.`,
    alternates: {
      canonical: `https://www.autobotia.com.br/c/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `Sites de Alta Conversão em ${city.cityName}`,
      description: `Especialistas em desenvolvimento de ecossistemas web e posicionamento AI em ${city.cityName} - ${city.stateAcronym}.`,
    }
  };
}

export async function generateStaticParams() {
  return topCities.map((city) => ({
    slug: city.slug,
  }));
}

export default async function CityPage({ params }: Props) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.slug);

  if (!city) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development & SEO",
    "provider": {
        "@id": "https://www.autobotia.com.br/#organization"
    },
    "name": `Criação de Sites Profissionais em ${city.cityName} - ${city.stateAcronym}`,
    "description": `Desenvolvimento de ecossistemas web integrados e serviços de SEO para empresas posicionadas em ${city.cityName}.`,
    "areaServed": {
        "@type": "City",
        "name": city.cityName
    },
    "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": city.lat,
            "longitude": city.lng
        },
        "geoRadius": "50000"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className={styles.cityPage}>
        {/* HERO */}
        <section className={styles.cityHero}>
          <div className="container text-center">
            <SectionWrapper animation="fade-up">
              <span className="section-label">Autobot IA em {city.stateAcronym}</span>
              <h1 className={styles.heroTitle}>
                Sites fáceis de achar e feitos para vender em <span className="text-highlight">{city.cityName}</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Ajudamos negócios locais de {city.cityName} ({city.populationInfo}) a pararem de perder
                clientes para a concorrência na busca do Google e no ChatGPT.
              </p>
              
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button size="lg" variant="primary" href="https://wa.me/5511922908507" target="_blank">
                  Pedir Orçamento Exclusivo
                </Button>
                <Button size="lg" variant="outline" href="/simulador">
                  Simular Escopo
                </Button>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* MARKET INFO */}
        <section className={styles.localMarket}>
          <div className="container">
            <SectionWrapper animation="fade-up" className="text-center" style={{ marginBottom: '3rem' }}>
              <h2>Destaques do mercado de {city.cityName}</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: 600, margin: '0 auto' }}>
                Atendemos demandas de alta performance específicas da região, estruturando sistemas que escalam negócios reais.
              </p>
            </SectionWrapper>

            <div className={styles.sectorsGrid}>
              {city.mainSectors.map((sector, idx) => (
                <SectionWrapper animation="scale" delay={idx * 100} key={idx}>
                  <GlowCard
                    icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                    title={sector}
                    description={`Pacotes otimizados para atrair clientes valiosos no setor de ${sector.toLowerCase()} pela área de ${city.cityName}.`}
                  />
                </SectionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ LOCAL */}
        <section className={styles.faqSection}>
          <div className="container">
            <SectionWrapper animation="fade-up" className="text-center" style={{ marginBottom: '3rem' }}>
              <h2>Dúvidas Locais ({city.cityName})</h2>
            </SectionWrapper>
            
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3>A agência fica em {city.cityName}?</h3>
                <p>Nossa engenharia digital atende o Brasil todo de forma remota, mas temos a inteligência de mercado estruturada para o público de {city.cityName}.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Quanto tempo para ranquear minha empresa localmente?</h3>
                <p>Nossos sites já saem com SEO Técnico base. Com nosso pacote Local, você se destaca na região em 30 a 60 dias nas buscas do Google Maps.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
