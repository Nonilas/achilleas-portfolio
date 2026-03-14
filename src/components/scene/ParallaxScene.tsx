'use client';

import { useState, useEffect, useCallback } from 'react';
import { useMotionValue, motion } from 'framer-motion';
import SceneLayer from './SceneLayer';
import SceneHotspot from './SceneHotspot';
import CharacterDialog from './CharacterDialog';

interface ParallaxSceneProps {
  onOpenBook: () => void;
  onDownloadCV: () => void;
}

export default function ParallaxScene({
  onOpenBook,
  onDownloadCV,
}: ParallaxSceneProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Fade in on load
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#0a0908' }}
    >
      {/* ───────── BACKGROUND IMAGE LAYER ───────── */}
      <SceneLayer depth={0.015} mouseX={mouseX} mouseY={mouseY}>
        <div
          className="absolute inset-[-20px] transition-opacity duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            backgroundImage: 'url("/assets/scene/palace-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </SceneLayer>

      {/* ───────── WARM LIGHT OVERLAY (parallax mid) ───────── */}
      <SceneLayer depth={0.04} mouseX={mouseX} mouseY={mouseY}>
        {/* Sunlight beams from windows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 25%, rgba(245,200,110,0.08) 0%, transparent 50%)',
          }}
        />
        {/* Warm floor glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 85%, rgba(212,175,55,0.06) 0%, transparent 40%)',
          }}
        />
      </SceneLayer>

      {/* ───────── SCHOLAR CHARACTER (right side) ───────── */}
      <SceneLayer depth={0.08} mouseX={mouseX} mouseY={mouseY}>
        <div
          className="absolute pointer-events-none"
          style={{
            right: '8%',
            bottom: '8%',
            width: '200px',
            height: '380px',
          }}
        >
          <svg
            viewBox="0 0 200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.6))' }}
          >
            {/* Robe body - flowing Byzantine robes */}
            <path
              d="M65 120 Q55 130 40 180 L25 350 Q25 380 100 380 Q175 380 175 350 L160 180 Q145 130 135 120 Z"
              fill="#1a1410"
              stroke="#2a2218"
              strokeWidth="1"
            />

            {/* Inner robe fold - deep crimson undergarment */}
            <path
              d="M80 125 L70 345 Q70 370 100 370 Q130 370 130 345 L120 125 Z"
              fill="#3a0a0a"
              opacity="0.7"
            />

            {/* Robe trim - gold Byzantine embroidery */}
            <path
              d="M80 125 L70 345"
              stroke="#d4af37"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M120 125 L130 345"
              stroke="#d4af37"
              strokeWidth="1.5"
              opacity="0.5"
            />

            {/* Gold sash/belt */}
            <path
              d="M60 190 Q100 200 140 190"
              stroke="#d4af37"
              strokeWidth="3"
              fill="none"
              opacity="0.7"
            />

            {/* Shoulder mantle */}
            <path
              d="M50 120 Q100 100 150 120 Q145 140 135 145 L65 145 Q55 140 50 120 Z"
              fill="#2a1a12"
              stroke="#3a2a20"
              strokeWidth="0.5"
            />

            {/* Gold mantle trim */}
            <path
              d="M50 120 Q100 100 150 120"
              stroke="#d4af37"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />

            {/* Hood/cowl */}
            <path
              d="M60 120 Q60 55 100 45 Q140 55 140 120 Q130 110 100 108 Q70 110 60 120 Z"
              fill="#1a1410"
              stroke="#2a2218"
              strokeWidth="1"
            />

            {/* Face - shadowed but warm */}
            <ellipse cx="100" cy="85" rx="22" ry="26" fill="#2c2018" />
            <ellipse
              cx="100"
              cy="82"
              rx="18"
              ry="22"
              fill="#3a2e22"
              opacity="0.5"
            />

            {/* Eyes - warm gold glow */}
            <circle cx="92" cy="78" r="3" fill="#d4af37" opacity="0.5" />
            <circle cx="108" cy="78" r="3" fill="#d4af37" opacity="0.5" />
            <circle cx="92" cy="78" r="1.5" fill="#f5e6ce" opacity="0.6" />
            <circle cx="108" cy="78" r="1.5" fill="#f5e6ce" opacity="0.6" />

            {/* Beard suggestion */}
            <path
              d="M88 92 Q100 108 112 92"
              stroke="#4a3a2e"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />

            {/* Hands - holding a scroll */}
            <ellipse cx="70" cy="220" rx="12" ry="8" fill="#8b7a60" />
            <ellipse cx="130" cy="220" rx="12" ry="8" fill="#8b7a60" />

            {/* Scroll in hands */}
            <rect
              x="68"
              y="210"
              width="64"
              height="20"
              rx="10"
              fill="#e8d8b0"
              opacity="0.6"
            />

            {/* Gold medallion on chest */}
            <circle
              cx="100"
              cy="155"
              r="10"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
              opacity="0.8"
            />
            <path
              d="M100 147 L100 163 M92 155 L108 155"
              stroke="#d4af37"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle cx="100" cy="155" r="4" fill="#d4af37" opacity="0.3" />

            {/* Byzantine cross embroidery on lower robe */}
            <path
              d="M100 280 L100 320 M88 300 L112 300"
              stroke="#d4af37"
              strokeWidth="1.5"
              opacity="0.3"
            />

            {/* Subtle glow around figure */}
            <defs>
              <radialGradient
                id="figureGlow"
                cx="50%"
                cy="45%"
                r="55%"
              >
                <stop
                  offset="0%"
                  stopColor="#d4af37"
                  stopOpacity="0.08"
                />
                <stop
                  offset="100%"
                  stopColor="#d4af37"
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="200"
              height="400"
              fill="url(#figureGlow)"
            />
          </svg>
        </div>
      </SceneLayer>

      {/* ───────── HOTSPOTS ───────── */}
      <div className="absolute inset-0 z-30">
        {/* Scholar character hotspot — aligned over the figure */}
        <SceneHotspot
          label="Speak with the Archmaester"
          onClick={() => setDialogOpen(true)}
          position={{ bottom: '40%', right: '12%' }}
          size="80px"
          icon={
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                d="M18 6a8 8 0 0 0-8 8v2l-3 14s0 2 11 2 11-2 11-2L26 16v-2a8 8 0 0 0-8-8z"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <circle cx="14" cy="14" r="1.5" fill="#d4af37" opacity="0.7" />
              <circle cx="22" cy="14" r="1.5" fill="#d4af37" opacity="0.7" />
              <path
                d="M14 20 Q18 23 22 20"
                stroke="#d4af37"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
            </svg>
          }
        />

        {/* Book on the altar/lectern — center of the scene */}
        <SceneHotspot
          label="Open the Chronicles"
          onClick={onOpenBook}
          position={{ bottom: '28%', left: '46%' }}
          size="80px"
          icon={
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect
                x="4"
                y="6"
                width="28"
                height="24"
                rx="2"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              <line
                x1="18"
                y1="6"
                x2="18"
                y2="30"
                stroke="#d4af37"
                strokeWidth="1"
                opacity="0.5"
              />
              <path d="M8 10h6M8 14h5M8 18h4" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
              <path d="M22 10h6M22 14h5M22 18h4" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
            </svg>
          }
        />

        {/* Scroll (CV) — left side */}
        <SceneHotspot
          label="Download Scroll (CV)"
          onClick={onDownloadCV}
          position={{ bottom: '35%', left: '15%' }}
          size="64px"
          icon={
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect
                x="9"
                y="3"
                width="12"
                height="24"
                rx="6"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              <line x1="12" y1="10" x2="18" y2="10" stroke="#d4af37" strokeWidth="0.8" opacity="0.5" />
              <line x1="12" y1="14" x2="18" y2="14" stroke="#d4af37" strokeWidth="0.8" opacity="0.5" />
              <line x1="12" y1="18" x2="16" y2="18" stroke="#d4af37" strokeWidth="0.8" opacity="0.5" />
            </svg>
          }
        />

        {/* Astrolabe — left of center */}
        <SceneHotspot
          label="The Arcane Arts"
          onClick={onOpenBook}
          position={{ bottom: '35%', left: '30%' }}
          size="60px"
          icon={
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle
                cx="14"
                cy="14"
                r="10"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              <ellipse
                cx="14"
                cy="14"
                rx="4"
                ry="10"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1"
                opacity="0.5"
              />
              <line x1="4" y1="14" x2="24" y2="14" stroke="#d4af37" strokeWidth="1" opacity="0.4" />
              <line x1="14" y1="4" x2="14" y2="24" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
            </svg>
          }
        />
      </div>

      {/* ───────── AMBIENT EFFECTS ───────── */}

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Warm atmospheric haze */}
      <div
        className="absolute inset-0 pointer-events-none z-10 flicker"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Title overlay - top center */}
      <motion.div
        className="absolute top-8 left-0 right-0 z-30 text-center pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        <h1
          className="text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            color: '#d4af37',
            textShadow:
              '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.2)',
          }}
        >
          The Archmaester&apos;s Study
        </h1>
        <p
          className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase opacity-60"
          style={{
            fontFamily: 'var(--font-display)',
            color: '#d4af37',
          }}
        >
          Achilleas Leivadiotis
        </p>
      </motion.div>

      {/* Bottom hint text */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 z-30 text-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0.5 : 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            color: '#d4af37',
          }}
        >
          Click the glowing objects to explore
        </p>
      </motion.div>

      {/* ───────── CHARACTER DIALOG ───────── */}
      <CharacterDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onOpenBook={onOpenBook}
        onDownloadCV={onDownloadCV}
      />
    </div>
  );
}
