"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────── Tipos ─────────────── */
interface MapMarker {
  lat: number;
  lng: number;
  label: string;
  rank: number;
  category: string;
  rating: string;
  reviews: number;
  color: "red" | "orange" | "gray";
}

/* ─────────────── Dados: negócios ranqueados em SP ─────────────── */
const MARKERS: MapMarker[] = [
  {
    lat: -23.5505,
    lng: -46.6333,
    label: "Autobotia Agency",
    rank: 1,
    category: "Agência Digital",
    rating: "5.0",
    reviews: 248,
    color: "red",
  },
  {
    lat: -23.5614,
    lng: -46.658,
    label: "Concorrente A",
    rank: 2,
    category: "Web Design",
    rating: "4.2",
    reviews: 87,
    color: "orange",
  },
  {
    lat: -23.5432,
    lng: -46.628,
    label: "Concorrente B",
    rank: 3,
    category: "Marketing",
    rating: "4.1",
    reviews: 53,
    color: "orange",
  },
  {
    lat: -23.558,
    lng: -46.645,
    label: "Concorrente C",
    rank: 4,
    category: "SEO",
    rating: "3.8",
    reviews: 31,
    color: "gray",
  },
  {
    lat: -23.545,
    lng: -46.65,
    label: "Concorrente D",
    rank: 5,
    category: "Sites",
    rating: "3.6",
    reviews: 19,
    color: "gray",
  },
];

/* ─────────────── SVG Pin estilo Google Maps ─────────────── */
const PIN_COLORS = {
  red: { body: "#EA4335", text: "#fff" },
  orange: { body: "#FBBC04", text: "#333" },
  gray: { body: "#9E9E9E", text: "#fff" },
};

function pinSvgHtml(rank: number, color: MapMarker["color"]) {
  const { body, text } = PIN_COLORS[color];
  const scale = color === "red" ? 1.2 : 1;
  const w = Math.round(32 * scale);
  const h = Math.round(42 * scale);

  return `
    <div style="width:${w}px; height:${h}px; cursor:pointer; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35));">
      <svg width="${w}" height="${h}" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1C7.716 1 1 7.716 1 16c0 5.255 2.627 9.893 6.647 12.709L16 41l8.353-12.291C28.373 25.893 31 21.255 31 16 31 7.716 24.284 1 16 1z"
          fill="${body}" stroke="white" stroke-width="1.5"/>
        <circle cx="16" cy="16" r="8" fill="white" fill-opacity="0.25"/>
        <text x="16" y="20" text-anchor="middle" font-family="Arial,sans-serif"
          font-size="${rank >= 10 ? "9" : "11"}" font-weight="700" fill="${text}">${rank}</text>
      </svg>
    </div>`;
}

/* ─────────────── Cards do Local Pack (resultado Google) ─────────────── */
const RESULT_CARDS = MARKERS.slice(0, 3);

function StarRating({ rating }: { rating: string }) {
  const val = parseFloat(rating);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={val >= s ? "text-[#FBBC04]" : "text-neutral-300 dark:text-neutral-700"}
          fill="currentColor"
        >
          <path d="M5 0.5l1.2 2.5 2.8.4-2 2 .5 2.8L5 7l-2.5 1.2.5-2.8-2-2 2.8-.4z" />
        </svg>
      ))}
    </div>
  );
}

/* ─────────────── Componente principal ─────────────── */
export function VisibilityMapHero() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [scanAngle, setScanAngle] = useState(0);

  /* ── Cicla pelos cards ── */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveCard((p) => (p + 1) % RESULT_CARDS.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  /* ── Radar scan animation ── */
  useEffect(() => {
    let raf: number;
    let angle = 0;
    const tick = () => {
      angle = (angle + 0.6) % 360;
      setScanAngle(angle);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Inicializa Leaflet ── */
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    let destroyed = false;

    (async () => {
      // Import dinâmico do Leaflet para evitar erros de SSR
      const L = (await import("leaflet")).default;

      if (destroyed || !mapContainerRef.current) return;

      const map = L.map(mapContainerRef.current, {
        center: [-23.551, -46.635],
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        keyboard: false,
        attributionControl: false,
        boxZoom: false,
      });

      /* CartoDB Voyager — aparência limpa estilo Google Maps */
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        { maxZoom: 19, subdomains: "abcd" }
      ).addTo(map);

      /* Círculo de raio (local SEO radius) */
      L.circle([-23.5505, -46.633], {
        radius: 1350,
        color: "#4285f4",
        weight: 2,
        fillColor: "#4285f4",
        fillOpacity: 0.07,
      }).addTo(map);

      /* Pins */
      MARKERS.forEach((m, idx) => {
        const icon = L.divIcon({
          html: `<div style="animation: pinDrop 0.45s cubic-bezier(.22,1,.36,1) ${idx * 0.12 + 0.4}s both;">${pinSvgHtml(m.rank, m.color)}</div>`,
          className: "",
          iconSize: [m.color === "red" ? 38 : 32, m.color === "red" ? 50 : 42],
          iconAnchor: [
            m.color === "red" ? 19 : 16,
            m.color === "red" ? 50 : 42,
          ],
        });

        L.marker([m.lat, m.lng], { icon })
          .addTo(map);
      });

      mapRef.current = map;
      setReady(true);
    })();

    return () => {
      destroyed = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const RADAR_R = 148; 

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10">

      <style>{`
        @keyframes pinDrop {
          from { opacity:0; transform: translateY(-18px) scale(0.6); }
          to   { opacity:1; transform: translateY(0)    scale(1); }
        }
        @keyframes ringPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      {/* ── Mapa Leaflet ── */}
      <div
        ref={mapContainerRef}
        className="absolute inset-0 bg-[#f9f9f9]"
        style={{ zIndex: 0 }}
      />

      {/* ── Overlay escurecido nas bordas (Vignette) ── */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle at 55% 48%, transparent 40%, rgba(200,200,255,0.15) 100%)",
          zIndex: 5,
        }}
      />

      {/* ── Radar scanner SVG ── */}
      {ready && (
        <div
          className="pointer-events-none absolute"
          style={{
            top: "50%",
            left: "54%",
            width: RADAR_R * 2,
            height: RADAR_R * 2,
            transform: "translate(-50%, -50%)",
            zIndex: 8,
          }}
        >
          <svg
            width={RADAR_R * 2}
            height={RADAR_R * 2}
            viewBox={`0 0 ${RADAR_R * 2} ${RADAR_R * 2}`}
          >
            <circle
              cx={RADAR_R}
              cy={RADAR_R}
              r={RADAR_R - 2}
              fill="none"
              stroke="#4285f4"
              strokeWidth="1"
              strokeDasharray="6 4"
              opacity="0.3"
            />

            <g
              style={{
                transform: `rotate(${scanAngle}deg)`,
                transformOrigin: `${RADAR_R}px ${RADAR_R}px`,
              }}
            >
              <defs>
                <radialGradient id="scanGrad" cx="0%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="#4285f4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#4285f4" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d={`M${RADAR_R},${RADAR_R} L${RADAR_R * 2},${RADAR_R} A${RADAR_R},${RADAR_R} 0 0,0 ${RADAR_R + RADAR_R * Math.cos((-70 * Math.PI) / 180)},${RADAR_R + RADAR_R * Math.sin((-70 * Math.PI) / 180)} Z`}
                fill="url(#scanGrad)"
              />
              <line
                x1={RADAR_R}
                y1={RADAR_R}
                x2={RADAR_R * 2}
                y2={RADAR_R}
                stroke="#4285f4"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </g>

            <circle cx={RADAR_R} cy={RADAR_R} r="4" fill="#4285f4" />
            <circle
              cx={RADAR_R}
              cy={RADAR_R}
              r="4"
              fill="#4285f4"
              style={{ animation: "ringPulse 2s ease-out infinite" }}
            />
          </svg>
        </div>
      )}

      {/* ── Google Maps search bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute left-3 right-3 top-3 z-20 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-sm dark:bg-neutral-900/95 dark:border dark:border-white/10"
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 text-neutral-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <span className="flex-1 text-[13px] font-medium text-neutral-700 dark:text-neutral-300">
          agência de sites perto de mim
        </span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
          A
        </div>
      </motion.div>

      {/* ── Local Pack (Resultados Google) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.55 }}
        className="absolute bottom-3 left-3 right-3 z-20 overflow-hidden rounded-xl border border-neutral-100 bg-white/95 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/95"
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2 dark:border-white/5">
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
            Visibilidade Google Maps
          </span>
          <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wide">
            Ao vivo
          </span>
        </div>

        <div className="divide-y divide-neutral-100 dark:divide-white/5">
          {RESULT_CARDS.map((m, i) => (
            <motion.div
              key={m.rank}
              animate={activeCard === i ? { backgroundColor: "rgba(66,133,244,0.06)" } : {}}
              className="flex items-center gap-3 px-3 py-2.5 transition-colors duration-300"
            >
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white shadow-sm"
                style={{
                  background: m.color === "red" ? "#EA4335" : m.color === "orange" ? "#FBBC04" : "#9E9E9E",
                  color: m.color === "orange" ? "#333" : "#fff",
                }}
              >
                {m.rank}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 line-clamp-1">
                  <p className="truncate text-[13px] font-bold text-neutral-900 dark:text-white">
                    {m.label}
                  </p>
                  {m.rank === 1 && (
                    <span className="shrink-0 rounded-[4px] bg-blue-500/10 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-blue-500">
                      Top #1
                    </span>
                  )}
                </div>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <StarRating rating={m.rating} />
                  <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                    {m.rating} ({m.reviews})
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-0.5">
                <span className="text-[10px] font-bold text-emerald-500">Aberto</span>
                <span className="text-[10px] font-medium text-neutral-400">0.{m.rank}km</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Badge "Você está aqui" ── */}
      {ready && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
          className="absolute z-20"
          style={{ top: "44%", left: "51%", transform: "translate(-50%, -50%)" }}
        >
          <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 ring-2 ring-white dark:ring-neutral-900 shadow-lg">
            <div className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>
        </motion.div>
      )}

      {/* ── Watermark Maps ── */}
      <div className="absolute bottom-[130px] right-3 z-10 opacity-70">
        <div className="flex items-center gap-1.5 rounded-md bg-white/60 px-2 py-1 backdrop-blur-sm dark:bg-black/20">
          <span className="text-[9px] font-black tracking-tighter">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </span>
          <span className="text-[9px] font-bold text-neutral-600 dark:text-neutral-400">Maps</span>
        </div>
      </div>

      {/* Loading overlay */}
      <AnimatePresence>
        {!ready && (
          <motion.div
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-neutral-50 dark:bg-neutral-950"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Sincronizando Local SEO...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
