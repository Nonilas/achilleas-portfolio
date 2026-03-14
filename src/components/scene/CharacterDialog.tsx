'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DialogState = 'greeting' | 'recruiter' | 'scholar' | 'browsing';

interface CharacterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBook: () => void;
  onDownloadCV: () => void;
}

const dialogContent: Record<
  DialogState,
  {
    text: string;
    buttons: { label: string; action: string }[];
  }
> = {
  greeting: {
    text: 'Welcome, traveler, to the study of the Archmaester. What brings you to these halls?',
    buttons: [
      { label: 'I seek to recruit', action: 'recruiter' },
      { label: 'I wish to learn', action: 'scholar' },
      { label: 'Just browsing', action: 'browsing' },
    ],
  },
  recruiter: {
    text: 'Ah, a patron of talent. Allow me to present my Chronicles \u2014 a record of my craft and endeavors.',
    buttons: [
      { label: 'Open the Chronicles', action: 'openBook' },
      { label: 'Download the Scroll (CV)', action: 'downloadCV' },
    ],
  },
  scholar: {
    text: 'A kindred spirit! Within these Chronicles you shall find my works, knowledge, and arcane arts.',
    buttons: [
      { label: 'Open the Chronicles', action: 'openBook' },
      { label: 'Return', action: 'greeting' },
    ],
  },
  browsing: {
    text: 'Feel free to explore the study. Click on any object to discover more. The great book upon the desk holds all knowledge.',
    buttons: [{ label: 'Thank you', action: 'close' }],
  },
};

export default function CharacterDialog({
  isOpen,
  onClose,
  onOpenBook,
  onDownloadCV,
}: CharacterDialogProps) {
  const [state, setState] = useState<DialogState>('greeting');

  // Reset to greeting when dialog opens
  useEffect(() => {
    if (isOpen) {
      setState('greeting');
    }
  }, [isOpen]);

  const handleAction = (action: string) => {
    switch (action) {
      case 'recruiter':
      case 'scholar':
      case 'browsing':
      case 'greeting':
        setState(action as DialogState);
        break;
      case 'openBook':
        onOpenBook();
        break;
      case 'downloadCV':
        onDownloadCV();
        break;
      case 'close':
        onClose();
        break;
    }
  };

  const current = dialogContent[state];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed z-50 px-4"
          style={{
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '32rem',
          }}
        >
          <div
            className="relative rounded-lg p-6"
            style={{
              backgroundColor: 'var(--color-parchment)',
              border: '2px solid var(--color-gold)',
              boxShadow:
                '0 0 30px rgba(212, 175, 55, 0.2), 0 8px 32px rgba(0, 0, 0, 0.5)',
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E\")",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer"
              style={{
                color: 'var(--color-ink-light)',
                background: 'rgba(212, 175, 55, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            </button>

            {/* Speaker label */}
            <div
              className="mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-gold)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              The Archmaester
            </div>

            {/* Dialog text */}
            <p
              className="mb-5 leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-ink)',
                fontSize: '0.95rem',
                lineHeight: '1.7',
              }}
            >
              {current.text}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2">
              {current.buttons.map((btn) => (
                <motion.button
                  key={btn.label}
                  onClick={() => handleAction(btn.action)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 rounded cursor-pointer transition-colors"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.05em',
                    backgroundColor: 'var(--color-ink)',
                    color: 'var(--color-gold)',
                    border: '1px solid var(--color-gold)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'var(--color-crimson)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-ink)';
                  }}
                >
                  {btn.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
