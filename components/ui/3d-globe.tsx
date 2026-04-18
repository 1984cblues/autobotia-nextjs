"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface GlobeMarker {
  lat: number;
  lng: number;
  src?: string;
  label: string;
}

interface Globe3DProps {
  className?: string;
  markers?: GlobeMarker[];
  config?: {
    atmosphereColor?: string;
    atmosphereIntensity?: number;
    bumpScale?: number;
    autoRotateSpeed?: number;
  };
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

/**
 * Globe3D Mock Component
 * Provides a high-performance, premium-looking animated globe using CSS and Framer Motion.
 */
export function Globe3D({
  className = "",
  markers = [],
  config = {},
  onMarkerClick,
  onMarkerHover,
}: Globe3DProps) {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Atmosphere Glow */}
      <div 
        className="absolute h-[80%] w-[80%] rounded-full blur-[80px] opacity-30"
        style={{ 
          backgroundColor: config.atmosphereColor || "#3b82f6",
        }}
      />

      {/* Main Sphere Body */}
      <div className="relative h-[85%] w-[85%] animate-[spin_60s_linear_infinite] rounded-full border border-neutral-200/20 bg-neutral-900/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-[2px] dark:border-white/10">
        {/* World Map Overlay (Stylized Grid) */}
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at center, transparent 40%, currentColor 100%)",
            backgroundSize: "20px 20px"
          }}
        />

        {/* Reflected Light Highlight */}
        <div className="absolute -left-10 -top-10 h-[60%] w-[60%] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl" />
      </div>

      {/* Interactive Markers Layer (Fixed relative to container, simplified positioning) */}
      <div className="absolute inset-0 z-20 overflow-visible">
        {markers.slice(0, 8).map((marker, idx) => {
          // Simple pseudo-random positioning for mock visual impact
          const top = `${25 + Math.sin(idx * 1.5) * 35}%`;
          const left = `${25 + Math.cos(idx * 1.5) * 35}%`;

          return (
            <motion.div
              key={marker.label}
              className="absolute cursor-pointer"
              style={{ top, left }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              onMouseEnter={() => {
                setHoveredMarker(marker.label);
                onMarkerHover?.(marker);
              }}
              onMouseLeave={() => {
                setHoveredMarker(null);
                onMarkerHover?.(null);
              }}
              onClick={() => onMarkerClick?.(marker)}
            >
              {/* Pulsing Core */}
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" />
                <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-60" />
              </div>

              {/* Label Popup */}
              <AnimatePresence>
                {hoveredMarker === marker.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -25, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-[10px] font-bold text-neutral-900 shadow-xl ring-1 ring-black/5"
                  >
                    {marker.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
