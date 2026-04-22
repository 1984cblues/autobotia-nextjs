"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./google-serp-pov.module.css";
import { Search, Mic, Lock } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   Data — Segmentos de mercado com dados realistas
   ═══════════════════════════════════════════════════════ */

interface MapResult {
  name: string;
  stars: string;
  reviews: number;
  dist: string;
  open: boolean;
}

interface OrganicResult {
  fav: string;
  fl: string;
  domain: string;
  crumb: string;
  title: string;
  desc: string;
  stars?: string;
  rating?: string;
  top?: boolean;
}

interface Segment {
  label: string;
  queries: string[];
  category: string;
  maps: MapResult[];
  results: OrganicResult[];
}

const SEGMENTS: Segment[] = [
  {
    label: "Encanador",
    queries: ["encanador perto de mim", "encanador emergência sp"],
    category: "Encanamento · Serviços residenciais",
    maps: [
      { name: "Hidráulica do Seu João", stars: "4,8", reviews: 312, dist: "0,4 km", open: true },
      { name: "Encanações Silva & Filhos", stars: "4,6", reviews: 187, dist: "0,9 km", open: true },
      { name: "Pronto Hidráulica 24h", stars: "4,5", reviews: 94, dist: "1,3 km", open: true },
    ],
    results: [
      { fav: "#4285F4", fl: "H", domain: "hidraulicadoseujoao.com.br", crumb: "hidraulicadoseujoao.com.br › emergencia", title: "Encanador 24h em SP — Hidráulica do Seu João", desc: "Atendimento emergencial em São Paulo. Vazamentos, desentupimento, instalações. Mais de 300 avaliações.", stars: "★★★★★", rating: "4,8 · 312 avaliações", top: true },
    ],
  },
  {
    label: "Restaurante",
    queries: ["restaurante almoço perto de mim", "restaurante executivo sp"],
    category: "Restaurante · Comida",
    maps: [
      { name: "Sabor da Vovó", stars: "4,9", reviews: 528, dist: "0,2 km", open: true },
      { name: "Bistrô do Chef André", stars: "4,7", reviews: 341, dist: "0,6 km", open: true },
      { name: "Cantina Boa Mesa", stars: "4,5", reviews: 209, dist: "1,1 km", open: false },
    ],
    results: [
      { fav: "#EA4335", fl: "S", domain: "sabordavovo.com.br", crumb: "sabordavovo.com.br › cardapio", title: "Sabor da Vovó — Almoço Caseiro em SP", desc: "Prato feito com ingredientes frescos, buffet completo e sobremesa. De segunda a sábado. Reservas online.", stars: "★★★★★", rating: "4,9 · 528 avaliações", top: true },
    ],
  },
  {
    label: "Dentista",
    queries: ["dentista perto de mim", "clínica odontológica sp"],
    category: "Clínica odontológica",
    maps: [
      { name: "Clínica Sorriso Perfeito", stars: "4,9", reviews: 417, dist: "0,3 km", open: true },
      { name: "Dr. Carlos Odontologia", stars: "4,7", reviews: 283, dist: "0,7 km", open: true },
      { name: "OdontoPrime SP", stars: "4,5", reviews: 156, dist: "1,4 km", open: true },
    ],
    results: [
      { fav: "#4285F4", fl: "S", domain: "sorrisoperfeito.com.br", crumb: "sorrisoperfeito.com.br › agendamento", title: "Clínica Sorriso Perfeito — Dentista em SP", desc: "Especialistas em clareamento, implantes e ortodontia. Agendamento online, convênios aceitos.", stars: "★★★★★", rating: "4,9 · 417 avaliações", top: true },
    ],
  },
  {
    label: "Academia",
    queries: ["academia perto de mim", "academia musculação sp"],
    category: "Academia · Fitness",
    maps: [
      { name: "FitZone Academia", stars: "4,8", reviews: 634, dist: "0,3 km", open: true },
      { name: "Studio Corpo em Forma", stars: "4,7", reviews: 389, dist: "0,8 km", open: true },
      { name: "PowerGym SP", stars: "4,6", reviews: 221, dist: "1,2 km", open: true },
    ],
    results: [
      { fav: "#EA4335", fl: "F", domain: "fitzonesp.com.br", crumb: "fitzonesp.com.br › planos", title: "FitZone Academia SP — Musculação e Aulas", desc: "Musculação, spinning, funcional e yoga. Planos a partir de R$89/mês. Personal incluso.", stars: "★★★★★", rating: "4,8 · 634 avaliações", top: true },
    ],
  },
  {
    label: "Advogado",
    queries: ["advogado trabalhista sp", "escritório de advocacia perto"],
    category: "Advocacia · Serviços jurídicos",
    maps: [
      { name: "Rocha & Associados", stars: "4,9", reviews: 198, dist: "0,5 km", open: true },
      { name: "Dra. Mariana Leal — OAB/SP", stars: "4,8", reviews: 143, dist: "0,9 km", open: true },
      { name: "JurisNet Advocacia", stars: "4,6", reviews: 87, dist: "1,6 km", open: true },
    ],
    results: [
      { fav: "#34A853", fl: "R", domain: "rochaadvocacia.com.br", crumb: "rochaadvocacia.com.br › trabalhista", title: "Rocha & Associados — Advogado Trabalhista SP", desc: "Demissão sem justa causa, rescisão, horas extras. Consulta inicial gratuita. 15+ anos de experiência.", stars: "★★★★★", rating: "4,9 · 198 avaliações", top: true },
    ],
  },
];

const AUTO_CYCLE_INTERVAL = 15000; // 15 seconds between segments

/* ═══════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════ */

export function GoogleSerpPOV() {
  const [activeSegIdx, setActiveSegIdx] = useState(0);
  const [withSite, setWithSite] = useState(true);
  const [queryText, setQueryText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [resultsShown, setResultsShown] = useState(false);
  const [lostClients, setLostClients] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const activeSeg = SEGMENTS[activeSegIdx];
  const currentQuery = activeSeg.queries[qIdx % activeSeg.queries.length];

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (queryText.length < currentQuery.length) {
        timer = setTimeout(() => {
          setQueryText(currentQuery.slice(0, queryText.length + 1));
        }, 55 + Math.random() * 35);
      } else {
        setResultsShown(true);
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (queryText.length > 0) {
        timer = setTimeout(() => {
          setQueryText(queryText.slice(0, -1));
        }, 25);
      } else {
        setIsDeleting(false);
        setQIdx((prev) => prev + 1);
        setResultsShown(false);
      }
    }

    return () => clearTimeout(timer);
  }, [queryText, isDeleting, currentQuery]);

  // Auto-cycle segments
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSegIdx((prev) => (prev + 1) % SEGMENTS.length);
      setQIdx(0);
      setQueryText("");
      setIsDeleting(false);
      setResultsShown(false);
    }, AUTO_CYCLE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  // Lost clients counter (when invisible)
  useEffect(() => {
    if (!withSite) {
      setLostClients(0);
      const timer = setInterval(() => {
        setLostClients((prev) => prev + Math.floor(Math.random() * 3) + 1);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [withSite]);

  const toggleView = useCallback(() => {
    setWithSite((prev) => !prev);
  }, []);

  const selectSegment = useCallback((idx: number) => {
    setActiveSegIdx(idx);
    setQIdx(0);
    setQueryText("");
    setIsDeleting(false);
    setResultsShown(false);
  }, []);

  return (
    <div className={`${styles.browserChrome} ${!withSite ? styles.invisibleOverlay : ""}`}>
      {/* ── Browser Chrome Bar ── */}
      <div className={styles.chromeBar}>
        <div className={styles.chromeDots}>
          <div className={`${styles.chromeDot} ${styles.chromeDotRed}`} />
          <div className={`${styles.chromeDot} ${styles.chromeDotYellow}`} />
          <div className={`${styles.chromeDot} ${styles.chromeDotGreen}`} />
        </div>
        <div className={styles.chromeUrl}>
          <Lock className={styles.chromeUrlLock} />
          <span>google.com/search?q={queryText || "..."}</span>
        </div>
      </div>

      {/* ── SERP Content ── */}
      <div className={styles.wrap}>
        <div className={styles.topBar}>
          <div className={styles.logoRow}>
            <div className={styles.gLogo}>
              <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
            </div>
            <div className={styles.searchBar}>
              <Search className={styles.searchIcon} />
              <div className={styles.queryText} aria-live="polite">
                {queryText}
                <span className={styles.cursor} />
              </div>
              <Mic className={styles.micIcon} />
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={`${styles.tab} ${styles.tabActive}`}>Tudo</div>
            <div className={styles.tab}>Maps</div>
            <div className={styles.tab}>Imagens</div>
            <div className={styles.tab}>Mais</div>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.segmentPicker}>
            {SEGMENTS.map((s, i) => (
              <button
                key={i}
                className={`${styles.segBtn} ${activeSegIdx === i ? styles.segBtnActive : ""}`}
                onClick={() => selectSegment(i)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className={styles.resultsCount}>
            {resultsShown && (
              withSite
                ? "Cerca de 2.840.000 resultados (0,38 s)"
                : `"${activeSeg.label}" — seu negócio não aparece.`
            )}
          </div>

          <AnimatePresence mode="wait">
            {resultsShown && (
              <motion.div
                key={`${activeSegIdx}-${withSite}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {withSite ? (
                  <>
                    {/* Maps Local Pack */}
                    <div className={styles.mapsBox}>
                      <div className={styles.mapsHeader}>
                        <svg className={styles.mapsHeaderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                          <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                        </svg>
                        <span>Resultados do Maps perto de você</span>
                      </div>
                      {activeSeg.maps.map((m, idx) => (
                        <div key={idx} className={styles.mapsItem}>
                          <div>
                            <div className={styles.mapsName}>{m.name}</div>
                            <div className={styles.mapsMeta}>
                              <span className={styles.stars}>★</span> {m.stars} ({m.reviews}) · {activeSeg.category}
                            </div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div className={m.open ? styles.openTag : ""} style={!m.open ? { color: "#d93025", fontSize: "10px", fontWeight: 500 } : {}}>
                              {m.open ? "Aberto" : "Fechado"}
                            </div>
                            <div className={styles.mapsDist}>{m.dist}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Resultado orgânico #1 (apenas 1 para compactar) */}
                    {activeSeg.results.map((r, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className={styles.resultItem}
                      >
                        <div className={styles.urlRow}>
                          <div className={styles.favicon} style={{ background: r.fav }}>{r.fl}</div>
                          <div>
                            <div className={styles.domain}>{r.domain}</div>
                            <div className={styles.crumb}>{r.crumb}</div>
                          </div>
                        </div>
                        <div className={styles.resultTitle}>
                          {r.top && <span className={styles.badgeTop}>1º</span>}
                          {r.title}
                        </div>
                        {r.stars && (
                          <div className={styles.starsRow}>
                            <span className={styles.stars}>{r.stars}</span> {r.rating}
                          </div>
                        )}
                        <div className={styles.resultDesc}>{r.desc}</div>
                      </motion.div>
                    ))}
                  </>
                ) : (
                  <>
                    {/* Absent box */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={styles.absentBox}
                    >
                      <div className={styles.absentIcon}>🔍</div>
                      <div className={styles.absentTitle}>Seu negócio não foi encontrado</div>
                      <div className={styles.absentSub}>
                        Sem site e sem presença digital, você não aparece quando seu cliente pesquisa por{" "}
                        <strong>{activeSeg.label.toLowerCase()}</strong> no Google.
                        <br />O cliente escolhe quem aparece — e vai para o concorrente.
                      </div>
                    </motion.div>

                    {/* Concorrente #1 (mostra quem roubou o cliente) */}
                    {!isMobile && activeSeg.results.map((r, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`${styles.resultItem} ${styles.competitorItem}`}
                      >
                        <div className={styles.urlRow}>
                          <div className={styles.favicon} style={{ background: r.fav }}>{r.fl}</div>
                          <div>
                            <div className={styles.domain}>
                              <span className={styles.competitorLabel}>Concorrente #1 — </span>
                              {r.domain}
                            </div>
                            <div className={styles.crumb}>{r.crumb}</div>
                          </div>
                        </div>
                        <div className={styles.resultTitle}>{r.title}</div>
                        <div className={styles.resultDesc}>{r.desc}</div>
                      </motion.div>
                    ))}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom Toggle ── */}
        <div className={styles.bottomToggle}>
          <span className={styles.toggleLabel}>Visão:</span>
          <button
            className={`${styles.toggleBtn} ${withSite ? styles.toggleBtnOn : styles.toggleBtnDanger}`}
            onClick={toggleView}
          >
            {withSite ? "✅ Cliente encontra você" : "❌ Você é invisível"}
          </button>
          <span className={styles.toggleLabel} style={{ fontSize: "10px", opacity: 0.6 }}>
            clique para comparar
          </span>
        </div>

        {/* ── Notice + Lost Counter ── */}
        <AnimatePresence>
          {!withSite && (
            <>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={styles.noticeBar}
              >
                <strong>Seu negócio é invisível.</strong> O cliente achou um concorrente — e você perdeu a venda.
              </motion.div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={styles.lostCounter}
              >
                📉 Clientes perdidos agora: <span className={styles.lostNumber}>{lostClients}</span>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
