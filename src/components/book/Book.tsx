'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';

// Page components (to be created by another agent)
import CoverPage from './CoverPage';
import ChroniclePage from './ChroniclePage';
import GreatWorksPage from './GreatWorksPage';
import ArcaneArtsPage from './ArcaneArtsPage';
import MissivePage from './MissivePage';

const pages = [CoverPage, ChroniclePage, GreatWorksPage, ArcaneArtsPage, MissivePage];

interface BookProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Book({ isOpen, onClose }: BookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = pages.length;

  // ── Mobile detection ──────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Navigation helpers ────────────────────────────────────────────
  const canGoNext = isMobile
    ? currentPage < totalPages - 1
    : currentPage < totalPages - 2;

  const canGoPrev = currentPage > 0;

  const goNext = useCallback(() => {
    if (isMobile) {
      if (currentPage < totalPages - 1) {
        setDirection(1);
        setCurrentPage((p) => p + 1);
      }
    } else {
      if (currentPage < totalPages - 2) {
        setDirection(1);
        setCurrentPage((p) => p + 2);
      }
    }
  }, [currentPage, isMobile, totalPages]);

  const goPrev = useCallback(() => {
    if (currentPage > 0) {
      setDirection(-1);
      if (isMobile) {
        setCurrentPage((p) => p - 1);
      } else {
        setCurrentPage((p) => Math.max(0, p - 2));
      }
    }
  }, [currentPage, isMobile]);

  const goToPage = useCallback(
    (index: number) => {
      setDirection(index > currentPage ? 1 : -1);
      setCurrentPage(index);
    },
    [currentPage],
  );

  // ── Keyboard navigation ───────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          goNext();
          break;
        case 'ArrowLeft':
          goPrev();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goNext, goPrev, onClose]);

  // ── Swipe handler (mobile) ────────────────────────────────────────
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x < -threshold) {
      goNext();
    } else if (info.offset.x > threshold) {
      goPrev();
    }
  };

  // ── Page turn animation variants ─────────────────────────────────
  const pageTurnVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? -180 : 180,
      opacity: 0,
      zIndex: 0,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      zIndex: 10,
      boxShadow: '0px 0px 40px rgba(0,0,0,0.4)',
    },
    exit: (dir: number) => ({
      rotateY: dir < 0 ? -180 : 180,
      opacity: 0,
      zIndex: 0,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    }),
  };

  const pageTurnTransition = {
    duration: 0.7,
    ease: [0.645, 0.045, 0.355, 1] as const,
  };

  // ── Overlay enter / exit variants ─────────────────────────────────
  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  // ── Determine which pages to show ─────────────────────────────────
  const LeftPageComponent = pages[currentPage];
  const rightPageIndex = currentPage + 1;
  const RightPageComponent =
    rightPageIndex < totalPages ? pages[rightPageIndex] : null;

  // ── Page indicator dots ───────────────────────────────────────────
  const renderPageDots = () => (
    <div className="flex items-center gap-2">
      {pages.map((_, idx) => {
        const isActive = isMobile
          ? idx === currentPage
          : idx === currentPage || idx === currentPage + 1;

        return (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            aria-label={`Go to page ${idx + 1}`}
            className={`
              rounded-full transition-all duration-300
              ${isActive
                ? 'w-3 h-3 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                : 'w-2.5 h-2.5 bg-[#d4af37]/30 hover:bg-[#d4af37]/60'
              }
            `}
          />
        );
      })}
    </div>
  );

  // ── Arrow button component ────────────────────────────────────────
  const NavArrow = ({
    dir,
    onClick,
    disabled,
  }: {
    dir: 'left' | 'right';
    onClick: () => void;
    disabled: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'left' ? 'Previous page' : 'Next page'}
      className={`
        absolute top-1/2 -translate-y-1/2 z-[60]
        w-11 h-11 lg:w-12 lg:h-12 rounded-full
        flex items-center justify-center
        bg-[#2c1a12]/90 border-2 border-[#d4af37]/50
        text-[#d4af37]
        shadow-[0_0_16px_rgba(212,175,55,0.15)]
        transition-all duration-300
        hover:bg-[#d4af37] hover:text-[#2c1a12] hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]
        disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-[#2c1a12]/90 disabled:hover:text-[#d4af37] disabled:hover:shadow-none
        ${dir === 'left' ? 'left-2 lg:-left-6' : 'right-2 lg:-right-6'}
      `}
    >
      <svg
        className={`w-5 h-5 fill-current ${dir === 'left' ? 'rotate-180' : ''}`}
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </button>
  );

  // ── Render ────────────────────────────────────────────────────────
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close book"
            className="
              absolute top-4 right-4 lg:top-6 lg:right-6 z-[70]
              w-10 h-10 lg:w-12 lg:h-12 rounded-full
              flex items-center justify-center
              bg-[#2c1a12]/90 border-2 border-[#d4af37]/50
              text-[#d4af37]
              shadow-[0_0_16px_rgba(212,175,55,0.15)]
              transition-all duration-300
              hover:bg-[#d4af37] hover:text-[#2c1a12] hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]
            "
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>

          {/* Book container */}
          <div
            className="
              relative z-[55]
              w-[95vw] max-w-[1400px]
              h-auto
              aspect-[1/1.4] lg:aspect-[2/1.3]
              mx-auto
            "
            style={{ perspective: '2500px' }}
          >
            {/* Book cover (dark brown leather) */}
            <div
              className="absolute inset-0 bg-[#3e2316] rounded-lg lg:rounded-2xl border border-[#D4AF37]/20"
              style={{
                boxShadow:
                  '30px 30px 60px rgba(0,0,0,0.6), inset -5px 0 20px rgba(0,0,0,0.5)',
              }}
            />

            {/* Central spine on desktop */}
            {!isMobile && (
              <div className="absolute top-0 bottom-0 left-1/2 w-12 -ml-6 bg-gradient-to-r from-black/80 via-black/20 to-black/80 z-[45] pointer-events-none shadow-2xl rounded-full" />
            )}

            {/* Navigation arrows */}
            <NavArrow dir="left" onClick={goPrev} disabled={!canGoPrev} />
            <NavArrow dir="right" onClick={goNext} disabled={!canGoNext} />

            {/* Inner crimson liner + pages container */}
            <div
              className="
                absolute inset-[8px] lg:inset-[16px]
                flex bg-[#701616]/90
                rounded-md lg:rounded-xl
                overflow-hidden
                border border-[#D4AF37]/40
                p-1 lg:p-2
                shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]
              "
            >
              {isMobile ? (
                /* ─── MOBILE: Single page with swipe ────────────────── */
                <motion.div
                  className="relative w-full h-full bg-parchment rounded-md shadow-inner overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                >
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={currentPage}
                      custom={direction}
                      variants={pageTurnVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={pageTurnTransition}
                      style={{
                        originX: direction > 0 ? 0 : 1,
                        backfaceVisibility: 'hidden',
                      }}
                      className="w-full h-full absolute inset-0 bg-parchment shadow-[inset_-30px_0_40px_rgba(44,26,18,0.2)]"
                    >
                      <LeftPageComponent />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              ) : (
                /* ─── DESKTOP: Two-page spread ──────────────────────── */
                <div
                  className="relative w-full h-full flex gap-[2px]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Left page */}
                  <div
                    className="w-1/2 h-full relative"
                    style={{ perspective: '2500px' }}
                  >
                    <AnimatePresence custom={-direction} mode="wait">
                      <motion.div
                        key={`L-${currentPage}`}
                        custom={-direction}
                        variants={pageTurnVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={pageTurnTransition}
                        style={{
                          originX: 1,
                          backfaceVisibility: 'hidden',
                        }}
                        className="w-full h-full absolute inset-0 bg-parchment rounded-l-md shadow-[inset_-40px_0_50px_rgba(44,26,18,0.3)] overflow-hidden"
                      >
                        <LeftPageComponent />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right page */}
                  <div
                    className="w-1/2 h-full relative"
                    style={{ perspective: '2500px' }}
                  >
                    <AnimatePresence custom={direction} mode="wait">
                      <motion.div
                        key={`R-${currentPage}`}
                        custom={direction}
                        variants={pageTurnVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={pageTurnTransition}
                        style={{
                          originX: 0,
                          backfaceVisibility: 'hidden',
                        }}
                        className="w-full h-full absolute inset-0 bg-parchment rounded-r-md shadow-[inset_40px_0_50px_rgba(44,26,18,0.3)] overflow-hidden"
                      >
                        {RightPageComponent ? (
                          <RightPageComponent />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center font-[family-name:var(--font-display)] text-[#d4af37]/30 text-2xl select-none">
                            Finis
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Page crease shadow */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-4 -ml-2 bg-gradient-to-r from-transparent via-black/10 to-transparent z-40 pointer-events-none" />
                </div>
              )}
            </div>

            {/* Page indicator dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-[60]">
              {renderPageDots()}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
