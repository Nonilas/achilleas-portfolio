'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SceneLayerProps {
  children: React.ReactNode;
  depth: number;
  className?: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function SceneLayer({
  children,
  depth,
  className = '',
  mouseX,
  mouseY,
}: SceneLayerProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  // Convert mouse position to translation by multiplying by depth factor.
  // Movement is inverted (mouse moves right, layer shifts left) for natural parallax.
  const translateX = useTransform(mouseX, (v) =>
    isTouchDevice ? 0 : -v * depth
  );
  const translateY = useTransform(mouseY, (v) =>
    isTouchDevice ? 0 : -v * depth
  );

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{ x: translateX, y: translateY }}
    >
      {children}
    </motion.div>
  );
}
