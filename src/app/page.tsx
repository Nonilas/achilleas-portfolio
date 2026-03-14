'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ParallaxScene from '@/components/scene/ParallaxScene';
import Book from '@/components/book/Book';

export default function Home() {
  const [sceneMode, setSceneMode] = useState<'scene' | 'book'>('scene');

  const handleOpenBook = useCallback(() => {
    setSceneMode('book');
  }, []);

  const handleCloseBook = useCallback(() => {
    setSceneMode('scene');
  }, []);

  const handleDownloadCV = useCallback(() => {
    window.open('/assets/cv.pdf', '_blank');
  }, []);

  return (
    <main className="min-h-screen bg-[#12100e]">
      <ParallaxScene onOpenBook={handleOpenBook} onDownloadCV={handleDownloadCV} />

      <AnimatePresence>
        {sceneMode === 'book' && (
          <motion.div
            key="book-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Book isOpen={true} onClose={handleCloseBook} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
