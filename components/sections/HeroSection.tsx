"use client";

import { motion } from "framer-motion";
import { GoogleSerpPOV } from "@/components/ui/google-serp-pov";
import { TrendingUp, Award, Zap } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

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

        {/* ── Coluna Direita: Simulação Google SERP POV ── */}
        <div className="relative flex w-full items-center justify-center md:w-[54%]">
          <div className="relative h-[600px] w-full max-w-[620px] md:h-[680px]">
            {/* Efeito de profundidade/sombra atrás do card */}
            <div className="absolute inset-0 -m-4 rounded-[20px] bg-black/5 blur-2xl dark:bg-white/5" />

            {/* Componente Google SERP POV */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="relative h-full w-full"
            >
              <GoogleSerpPOV />
            </motion.div>

            {/* Badge de contexto flutuante */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute -right-4 top-1/4 z-10 hidden rounded-xl border border-neutral-100 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-black/80 md:block"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  Simulação em Tempo Real
                </p>
              </div>
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
