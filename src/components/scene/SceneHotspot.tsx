'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SceneHotspotProps {
  label: string;
  onClick: () => void;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  icon: React.ReactNode;
  size?: string;
}

export default function SceneHotspot({
  label,
  onClick,
  position,
  icon,
  size = '64px',
}: SceneHotspotProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      role="button"
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute z-20 flex items-center justify-center cursor-pointer"
      style={{
        ...position,
        width: size,
        height: size,
        minWidth: '48px',
        minHeight: '48px',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gold glow pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 8px 2px rgba(212, 175, 55, 0.3)',
            '0 0 20px 6px rgba(212, 175, 55, 0.6)',
            '0 0 8px 2px rgba(212, 175, 55, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Icon container */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
        }}
      >
        {icon}
      </div>

      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          className="absolute z-30 px-3 py-1.5 rounded whitespace-nowrap pointer-events-none"
          style={{
            bottom: `calc(100% + 10px)`,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--color-parchment)',
            border: '2px solid var(--color-gold)',
            fontFamily: 'var(--font-display)',
            color: 'var(--color-ink)',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}
        >
          {label}
          {/* Tooltip arrow */}
          <div
            className="absolute"
            style={{
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid var(--color-gold)',
            }}
          />
        </motion.div>
      )}
    </motion.button>
  );
}
