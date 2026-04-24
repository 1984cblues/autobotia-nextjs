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

      <div className="relative flex max-w-[1400px] flex-col items-center gap-8 px-6 pt-24 pb-12 md:min-h-screen md:flex-row md:items-start md:gap-6 md:px-12 md:pt-24 md:pb-8 lg:px-16" style={{ marginInline: "auto" }}>
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
              Mais de 50 empresas já aparecem no Google com a gente
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
            <span className="text-neutral-900 dark:text-white">SEU CLIENTE</span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-600">PESQUISOU</span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-600">E NÃO TE ACHOU.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-[420px] text-base leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-lg"
          >
            Criamos o site da sua empresa e fazemos ele{" "}
            <strong className="text-neutral-900 dark:text-white">
              aparecer no Google e no ChatGPT
            </strong>{" "}
            — pra que os clientes achem você, e não o concorrente.
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
              { value: "+3x", label: "Novos clientes" },
              { value: "30 dias", label: "Pra aparecer" },
              { value: "4.9★", label: "No Google" },
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
              href="https://wa.me/5511922908507?text=Oi%2C%20quero%20aparecer%20no%20Google"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-2 bg-neutral-900 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-neutral-700 active:scale-[.98] dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Quero Aparecer no Google
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#servicos"
              className="flex cursor-pointer items-center gap-2 border border-neutral-900 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all duration-200 hover:bg-neutral-100 active:scale-[.98] dark:border-white dark:text-white dark:hover:bg-white/10"
            >
              Como Funciona?
            </a>
          </motion.div>
        </div>

        {/* ── Coluna Direita: Simulação Google SERP POV ── */}
        <div className="relative flex w-full items-start justify-center md:w-[52%] md:pt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative h-[440px] w-full max-w-[520px] md:h-[520px]"
          >
            <GoogleSerpPOV />
          </motion.div>
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
