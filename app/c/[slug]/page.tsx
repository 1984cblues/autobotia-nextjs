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
              <span className="section-label">Presença Digital em {city.stateAcronym}</span>
              <h1 className={styles.heroTitle}>
                Apareça para os clientes de <span className="text-highlight">{city.cityName}</span> quando eles mais precisam
              </h1>
              <p className={styles.heroSubtitle}>
                Ajudamos empresas e profissionais de {city.cityName} ({city.populationInfo}) a pararem de perder
                clientes para o concorrente da esquina que já está no Google.
              </p>
              
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button size="lg" variant="primary" href="https://wa.me/5511922908507?text=Oi%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis" target="_blank">
                  Quero um orçamento grátis
                </Button>
                <Button size="lg" variant="outline" href="/simulador">
                  Como funciona?
                </Button>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* MARKET INFO */}
        <section className={styles.localMarket}>
          <div className="container">
            <SectionWrapper animation="fade-up" className="text-center" style={{ marginBottom: '3rem' }}>
              <h2>Negócios que mais buscam clientes em {city.cityName}</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: 600, margin: '0 auto' }}>
                Ajudamos empresas desses setores a aparecerem nas buscas locais e mapas da sua região.
              </p>
            </SectionWrapper>

            <div className={styles.sectorsGrid}>
              {city.mainSectors.map((sector, idx) => (
                <SectionWrapper animation="scale" delay={idx * 100} key={idx}>
                  <GlowCard
                    icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                    title={sector}
                    description={`Estratégias para fazer sua empresa de ${sector.toLowerCase()} ser a primeira opção na região de ${city.cityName}.`}
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
                <h3>A agência tem escritório em {city.cityName}?</h3>
                <p>Atendemos clientes no Brasil todo de forma 100% online, mas conhecemos as estratégias que funcionam especificamente para o público de {city.cityName}.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Em quanto tempo começo a aparecer no Google Maps?</h3>
                <p>Seu site já é entregue configurado. Com o nosso serviço local, sua empresa começa a ganhar destaque e atrair contatos na região em cerca de 30 a 60 dias.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
