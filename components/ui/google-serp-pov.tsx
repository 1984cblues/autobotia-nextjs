"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./google-serp-pov.module.css";
import { Search, Mic } from "lucide-react";

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
  city: string;
  category: string;
  maps: MapResult[];
  results: OrganicResult[];
}

const SEGMENTS: Segment[] = [
  {
    label: "Encanador",
    queries: ["encanador perto de mim", "encanador emergência sp", "conserto de cano urgente"],
    city: "São Paulo, SP",
    category: "Encanamento · Serviços residenciais",
    maps: [
      { name: "Hidráulica do Seu João", stars: "4,8", reviews: 312, dist: "0,4 km", open: true },
      { name: "Encanações Silva & Filhos", stars: "4,6", reviews: 187, dist: "0,9 km", open: true },
      { name: "Pronto Hidráulica 24h", stars: "4,5", reviews: 94, dist: "1,3 km", open: true },
    ],
    results: [
      { fav:"#4285F4", fl:"H", domain:"hidraulicadoseujoao.com.br", crumb:"hidraulicadoseujoao.com.br › emergencia", title:"Encanador 24h em SP — Hidráulica do Seu João", desc:"Atendimento emergencial em São Paulo. Vazamentos, desentupimento, instalações. Mais de 300 avaliações 5 estrelas. Orçamento grátis.", stars:"★★★★★", rating:"4,8 · 312 avaliações", top:true },
      { fav:"#EA4335", fl:"E", domain:"encanacoesilva.com.br", crumb:"encanacoesilva.com.br › servicos", title:"Silva Encanamentos — Serviços Hidráulicos em SP", desc:"Reparos hidráulicos residenciais e comerciais. Equipe especializada, atendimento rápido e preço justo." },
      { fav:"#FBBC05", fl:"P", domain:"prontohidraulica.com.br", crumb:"prontohidraulica.com.br", title:"Pronto Hidráulica — Encanadores em São Paulo", desc:"Conserto de vazamentos, troca de registros, instalação de aquecedores. Disponível 24 horas." },
    ],
  },
  {
    label: "Restaurante",
    queries: ["restaurante almoço perto de mim", "restaurante executivo sp", "onde almoçar bem hoje"],
    city: "São Paulo, SP",
    category: "Restaurante · Comida",
    maps: [
      { name: "Sabor da Vovó", stars: "4,9", reviews: 528, dist: "0,2 km", open: true },
      { name: "Bistrô do Chef André", stars: "4,7", reviews: 341, dist: "0,6 km", open: true },
      { name: "Cantina Boa Mesa", stars: "4,5", reviews: 209, dist: "1,1 km", open: false },
    ],
    results: [
      { fav:"#EA4335", fl:"S", domain:"sabordavovo.com.br", crumb:"sabordavovo.com.br › cardapio", title:"Sabor da Vovó — Almoço Caseiro em SP | Cardápio e Reservas", desc:"Prato feito com ingredientes frescos, buffet completo e sobremesa. De segunda a sábado, das 11h às 15h. Reservas online.", stars:"★★★★★", rating:"4,9 · 528 avaliações", top:true },
      { fav:"#4285F4", fl:"B", domain:"bistrodochefandre.com.br", crumb:"bistrodochefandre.com.br", title:"Bistrô Chef André — Almoço Executivo e Jantares", desc:"Culinária contemporânea no coração de SP. Menu executivo a partir de R$49. Ambiente climatizado e estacionamento." },
      { fav:"#34A853", fl:"C", domain:"cantinaboamesa.com.br", crumb:"cantinaboamesa.com.br › almoco", title:"Cantina Boa Mesa — Restaurante Italiano em SP", desc:"Massas artesanais, risoto do dia e pizza em forno a lenha. Grupo de até 50 pessoas, salão privativo disponível." },
    ],
  },
  {
    label: "Dentista",
    queries: ["dentista perto de mim", "clínica odontológica sp", "dentista emergência dor de dente"],
    city: "São Paulo, SP",
    category: "Clínica odontológica",
    maps: [
      { name: "Clínica Sorriso Perfeito", stars: "4,9", reviews: 417, dist: "0,3 km", open: true },
      { name: "Dr. Carlos Odontologia", stars: "4,7", reviews: 283, dist: "0,7 km", open: true },
      { name: "OdontoPrime SP", stars: "4,5", reviews: 156, dist: "1,4 km", open: true },
    ],
    results: [
      { fav:"#4285F4", fl:"S", domain:"sorrisoperfeito.com.br", crumb:"sorrisoperfeito.com.br › agendamento", title:"Clínica Sorriso Perfeito — Dentista em São Paulo", desc:"Especialistas em clareamento, implantes e ortodontia. Agendamento online, convênios aceitos. Mais de 400 avaliações.", stars:"★★★★★", rating:"4,9 · 417 avaliações", top:true },
      { fav:"#EA4335", fl:"D", domain:"drcarlosodonto.com.br", crumb:"drcarlosodonto.com.br › servicos", title:"Dr. Carlos — Odontologia Completa em SP", desc:"Tratamentos: limpeza, extração, canal, próteses e muito mais. Ambiente moderno e atendimento humanizado." },
      { fav:"#34A853", fl:"O", domain:"odontoprime.com.br", crumb:"odontoprime.com.br", title:"OdontoPrime SP — Clínica Odontológica Completa", desc:"Planos odontológicos e atendimento particular. Sem lista de espera. Agende sua avaliação gratuita online." },
    ],
  },
  {
    label: "Academia",
    queries: ["academia perto de mim", "academia musculação sp", "onde treinar perto de mim"],
    city: "São Paulo, SP",
    category: "Academia · Fitness",
    maps: [
      { name: "FitZone Academia", stars: "4,8", reviews: 634, dist: "0,3 km", open: true },
      { name: "Studio Corpo em Forma", stars: "4,7", reviews: 389, dist: "0,8 km", open: true },
      { name: "PowerGym SP", stars: "4,6", reviews: 221, dist: "1,2 km", open: true },
    ],
    results: [
      { fav:"#EA4335", fl:"F", domain:"fitzonesp.com.br", crumb:"fitzonesp.com.br › planos", title:"FitZone Academia SP — Musculação e Aulas Coletivas", desc:"Musculação, spinning, funcional e yoga. Planos a partir de R$89/mês. Personal trainer incluso no plano premium.", stars:"★★★★★", rating:"4,8 · 634 avaliações", top:true },
      { fav:"#4285F4", fl:"S", domain:"corpoformasp.com.br", crumb:"corpoformasp.com.br › matricula", title:"Studio Corpo em Forma — Pilates e Funcional em SP", desc:"Turmas reduzidas, acompanhamento personalizado e método exclusivo. Aula experimental grátis esta semana." },
      { fav:"#FBBC05", fl:"P", domain:"powergymsp.com.br", crumb:"powergymsp.com.br", title:"PowerGym SP — Academia 24h em São Paulo", desc:"Aberto 24 horas, 7 dias por semana. Equipamentos de ponta, vestiário completo e estacionamento gratuito." },
    ],
  },
  {
    label: "Advogado",
    queries: ["advogado trabalhista sp", "escritório de advocacia perto", "consulta jurídica gratuita sp"],
    city: "São Paulo, SP",
    category: "Advocacia · Serviços jurídicos",
    maps: [
      { name: "Rocha & Associados Advocacia", stars: "4,9", reviews: 198, dist: "0,5 km", open: true },
      { name: "Dra. Mariana Leal — OAB/SP", stars: "4,8", reviews: 143, dist: "0,9 km", open: true },
      { name: "JurisNet Advocacia", stars: "4,6", reviews: 87, dist: "1,6 km", open: true },
    ],
    results: [
      { fav:"#34A853", fl:"R", domain:"rochaadvocacia.com.br", crumb:"rochaadvocacia.com.br › trabalhista", title:"Rocha & Associados — Advogado Trabalhista em SP", desc:"Demissão sem justa causa, rescisão, horas extras. Consulta inicial gratuita. Mais de 15 anos de experiência.", stars:"★★★★★", rating:"4,9 · 198 avaliações", top:true },
      { fav:"#4285F4", fl:"M", domain:"dramarianale.adv.br", crumb:"dramarianale.adv.br › areas", title:"Dra. Mariana Leal — Advocacia Trabalhista e Cível", desc:"Atendimento presencial e online em todo o Brasil. Sem honorários antecipados em casos trabalhistas." },
      { fav:"#EA4335", fl:"J", domain:"jurisnetadvocacia.com.br", crumb:"jurisnetadvocacia.com.br", title:"JurisNet Advocacia — Escritório Completo em SP", desc:"Direito trabalhista, família, imobiliário e previdenciário. Primeira consulta gratuita. Agende online." },
    ],
  },
];

export function GoogleSerpPOV() {
  const [activeSegIdx, setActiveSegIdx] = useState(0);
  const [withSite, setWithSite] = useState(true);
  const [queryText, setQueryText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [resultsShown, setResultsShown] = useState(false);
  
  const activeSeg = SEGMENTS[activeSegIdx];
  const currentQuery = activeSeg.queries[qIdx % activeSeg.queries.length];

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (queryText.length < currentQuery.length) {
        timer = setTimeout(() => {
          setQueryText(currentQuery.slice(0, queryText.length + 1));
        }, 60 + Math.random() * 40);
      } else {
        setResultsShown(true);
        timer = setTimeout(() => setIsDeleting(true), 2600);
      }
    } else {
      if (queryText.length > 0) {
        timer = setTimeout(() => {
          setQueryText(queryText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setQIdx((prev) => prev + 1);
        setResultsShown(false);
      }
    }

    return () => clearTimeout(timer);
  }, [queryText, isDeleting, currentQuery]);

  const toggleView = () => {
    setWithSite(!withSite);
  };

  const selectSegment = (idx: number) => {
    setActiveSegIdx(idx);
    setQIdx(0);
    setQueryText("");
    setIsDeleting(false);
    setResultsShown(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.topBar}>
        <div className={styles.logoRow}>
          <div className={styles.gLogo}>
            <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
          </div>
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} />
            <div className={styles.queryText}>
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
              : `"${activeSeg.label}" sem site indexado: seu negócio não aparece.`
          )}
        </div>

        <AnimatePresence mode="wait">
          {resultsShown && (
            <motion.div
              key={`${activeSegIdx}-${withSite}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {withSite ? (
                <>
                  <div className={styles.mapsBox}>
                    <div className={styles.mapsHeader}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
                          <div className={m.open ? styles.openTag : ""} style={!m.open ? { color: "#d93025", fontSize: "11px", fontWeight: 500 } : {}}>
                            {m.open ? "Aberto" : "Fechado"}
                          </div>
                          <div className={styles.mapsDist}>{m.dist}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeSeg.results.map((r, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
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
                        <div style={{ fontSize: "12px", color: "#5f6368", marginBottom: "4px" }}>
                          <span className={styles.stars}>{r.stars}</span> {r.rating}
                        </div>
                      )}
                      <div className={styles.resultDesc}>{r.desc}</div>
                    </motion.div>
                  ))}
                </>
              ) : (
                <>
                  <div className={styles.absentBox}>
                    <div className={styles.absentIcon}>🔍</div>
                    <div className={styles.absentTitle}>Seu negócio não foi encontrado</div>
                    <div className={styles.absentSub}>
                      Sem site e sem presença digital, você não aparece quando seu cliente pesquisa por <strong>{activeSeg.label.toLowerCase()}</strong> no Google.
                      <br />O cliente escolhe quem aparece — e vai para o concorrente.
                    </div>
                  </div>

                  {activeSeg.results.map((r, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={styles.resultItem}
                      style={r.top ? { borderLeft: "2px solid #EA4335", paddingLeft: "12px", marginLeft: "-14px" } : {}}
                    >
                      <div className={styles.urlRow}>
                        <div className={styles.favicon} style={{ background: r.fav }}>{r.fl}</div>
                        <div>
                          <div className={styles.domain}>
                            {r.top && <strong style={{ color: "#EA4335", fontSize: "12px" }}>Concorrente #1 — </strong>}
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

      <div className={styles.bottomToggle}>
        <span className={styles.toggleLabel}>Visão:</span>
        <button 
          className={`${styles.toggleBtn} ${withSite ? styles.toggleBtnOn : ""}`}
          onClick={toggleView}
        >
          {withSite ? "Cliente encontra você" : "Você é invisível"}
        </button>
        <span className={styles.toggleLabel} style={{ fontSize: "11px", opacity: 0.7 }}>
          clique para comparar
        </span>
      </div>

      {!withSite && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className={styles.noticeBar}
        >
          <strong>Seu negócio é invisível.</strong> O cliente achou um concorrente — e você perdeu a venda.
        </motion.div>
      )}
    </div>
  );
}
