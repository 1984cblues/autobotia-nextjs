"use client";

import { motion } from "framer-motion";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { TrendingUp, Award, Zap } from "lucide-react";

// Marcadores representando cidades com forte presença digital/SEO
const visibilityMarkers: GlobeMarker[] = [
  {
    lat: -23.5505,
    lng: -46.6333,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "São Paulo",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: -15.7801,
    lng: -47.9292,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Brasília",
  },
  {
    lat: -12.9714,
    lng: -38.5014,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Salvador",
  },
  {
    lat: -3.7172,
    lng: -38.5434,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Fortaleza",
  },
  {
    lat: -30.0346,
    lng: -51.2177,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "Porto Alegre",
  },
  {
    lat: -19.9191,
    lng: -43.9386,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Belo Horizonte",
  },
  {
    lat: -8.0476,
    lng: -34.877,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Recife",
  },
  {
    lat: -25.4284,
    lng: -49.2733,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Curitiba",
  },
  {
    lat: -1.4558,
    lng: -48.5039,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Belém",
  },
  {
    lat: -2.5307,
    lng: -44.3068,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "São Luís",
  },
  {
    lat: -20.3155,
    lng: -40.3128,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Vitória",
  },
];

// Badges de visibilidade flutuantes ao redor do globo
const floatingBadges = [
  {
    id: 1,
    icon: "📍",
    label: "Google Maps",
    sublabel: "#1 na região",
    top: "12%",
    left: "2%",
    delay: 0,
  },
  {
    id: 2,
    icon: "🔍",
    label: "Google Search",
    sublabel: "Página 1 garantida",
    top: "38%",
    left: "-4%",
    delay: 0.4,
  },
  {
    id: 3,
    icon: "⭐",
    label: "Avaliações",
    sublabel: "4.9 · 200+ reviews",
    top: "66%",
    left: "4%",
    delay: 0.8,
  },
  {
    id: 4,
    icon: "📈",
    label: "Tráfego Orgânico",
    sublabel: "+340% em 90 dias",
    top: "14%",
    right: "0%",
    delay: 0.2,
  },
  {
    id: 5,
    icon: "🤖",
    label: "IA & ChatGPT",
    sublabel: "Citado como referência",
    top: "70%",
    right: "0%",
    delay: 0.6,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

/**
 * Novo Elemento: SEOResultsCard
 * Focado no público leigo para mostrar resultados tangíveis.
 */
function SEOResultsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-20 -right-4 z-30 flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md dark:bg-black/20 md:bottom-32 md:right-0 md:w-[280px]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
          <TrendingUp className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Analytics Live</p>
          <p className="text-sm font-black text-neutral-900 dark:text-white">Sucesso em SEO</p>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { icon: Award, label: "Top 3 no Google", value: "92% dps sites", color: "text-blue-500" },
          { icon: Zap, label: "Indexação IAs", value: "Instantânea", color: "text-amber-500" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-lg bg-white/40 p-2 dark:bg-black/10">
            <div className="flex items-center gap-2">
              <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
              <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400">{item.label}</span>
            </div>
            <span className="text-[11px] font-bold text-neutral-900 dark:text-white">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-neutral-200 dark:border-neutral-900" />
          ))}
        </div>
        <p className="text-[10px] font-medium text-neutral-400">+12 novos leads hoje</p>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
      {/* Grid de fundo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opa"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-0 md:px-12 lg:px-16">
        {/* ── Coluna Esquerda: Copy ── */}
        <div className="flex w-full flex-col justify-center md:w-[48%]">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block border border-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 dark:border-white/20">
              Arquitetura de Conversão Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 font-heading text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight"
          >
            <span className="text-neutral-900 dark:text-white">PARE DE</span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-600">TER UM</span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-600">PANFLETO.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-[420px] text-base leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-lg"
          >
            Desenvolvemos sites profissionais e estratégias de visibilidade que
            fazem sua empresa ser{" "}
            <strong className="text-neutral-900 dark:text-white">
              encontrada no Google e no ChatGPT
            </strong>{" "}
            — onde seus clientes estão buscando agora.
          </motion.p>

          {/* Proof bar */}
          <motion.div
            custom={0.42}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex items-center gap-6"
          >
            {[
              { value: "+340%", label: "Tráfego médio" },
              { value: "90d", label: "Resultados visíveis" },
              { value: "4.9★", label: "Avaliação clientes" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-xl font-black text-neutral-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="group flex cursor-pointer items-center gap-2 bg-neutral-900 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-neutral-700 active:scale-[.98] dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Análise Gratuita
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#servicos"
              className="flex cursor-pointer items-center gap-2 border border-neutral-900 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all duration-200 hover:bg-neutral-100 active:scale-[.98] dark:border-white dark:text-white dark:hover:bg-white/10"
            >
              Ver Serviços
            </a>
          </motion.div>
        </div>

        {/* ── Coluna Direita: Globo + Badges ── */}
        <div className="relative flex w-full items-center justify-center md:w-[52%]">
          {/* Container do globo com badges ao redor */}
          <div className="relative h-[500px] w-full max-w-[620px] md:h-[620px]">
            {/* Badges flutuantes */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.id}
                custom={badge.delay}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="absolute z-20 flex min-w-[148px] items-center gap-2.5 rounded-xl border border-neutral-100 bg-white px-3 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-black/40 dark:backdrop-blur-md"
                style={{
                  top: badge.top,
                  left: "left" in badge ? badge.left : undefined,
                  right: "right" in badge ? badge.right : undefined,
                }}
                whileHover={{ scale: 1.04 }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-base dark:bg-white/10">
                  {badge.icon}
                </span>
                <div>
                  <p className="text-[11px] font-bold leading-tight text-neutral-900 dark:text-white">
                    {badge.label}
                  </p>
                  <p className="text-[10px] leading-tight text-neutral-500 dark:text-neutral-400">
                    {badge.sublabel}
                  </p>
                </div>
                {/* Indicador verde "ao vivo" */}
                <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-emerald-500">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                </span>
              </motion.div>
            ))}

            {/* Novo Elemento: Card de Resultados SEO */}
            <SEOResultsCard />

            {/* Halo de brilho atrás do globo */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />

            {/* Globo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="h-full w-full"
            >
              <Globe3D
                className="h-full w-full"
                markers={visibilityMarkers}
                config={{
                  atmosphereColor: "#3b82f6",
                  atmosphereIntensity: 15,
                  bumpScale: 4,
                  autoRotateSpeed: 0.4,
                }}
              />
            </motion.div>

            {/* Label inferior do globo */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-neutral-100 bg-white px-4 py-1.5 shadow-md dark:border-white/10 dark:bg-black/40"
            >
              <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                🌎 Visibilidade em todo o Brasil
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-neutral-300 p-1 dark:border-neutral-700">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"
          />
        </div>
      </motion.div>
    </section>
  );
}
