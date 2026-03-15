'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brutalist badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] border-2 border-black bg-[var(--color-accent-lime)]">
            Software Engineer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
        >
          I build systems{' '}
          <span className="serif-italic font-normal">that think.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl"
        >
          ML pipelines, full-stack platforms, and mobile apps. From contrail
          avoidance systems at EUROCONTROL to enterprise real-estate platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/work"
            className="inline-flex items-center px-6 py-3 text-sm font-medium border-2 border-black bg-black text-white hover:bg-[var(--color-accent-lime)] hover:text-black transition-colors"
          >
            View Work
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <a
            href="/Leivadiotis_Achilleas_Resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 text-sm font-medium border-2 border-black hover:bg-[var(--color-bg)] transition-colors"
          >
            Download CV
            <Download size={16} className="ml-2" />
          </a>
        </motion.div>

        {/* Quick stats line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-8 text-sm text-[var(--color-text-secondary)]"
        >
          <span>
            <strong className="text-[var(--color-text)]">Currently</strong>{' '}
            SWE at EUROCONTROL &middot; Freelance, Vadiotech
          </span>
           
          <span>
            <strong className="text-[var(--color-text)]">BSc</strong> Data
            Science &amp; AI, Maastricht University
          </span>
        </motion.div>
      </div>
    </section>
  );
}
