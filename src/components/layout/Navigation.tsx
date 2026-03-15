'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'News', path: '/news' },
  { name: 'About', path: '/about' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)] z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl tracking-tight">
            Achilleas Leivadiotis.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.path || pathname?.startsWith(link.path + '/')
                    ? 'text-[var(--color-text)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-medium px-4 py-2 border-brutal hover:bg-[var(--color-accent-lime)] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-sm font-medium border-b border-[var(--color-border)] ${
                  pathname === link.path || pathname?.startsWith(link.path + '/')
                    ? 'text-[var(--color-text)]'
                    : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 text-sm font-medium px-4 py-2 border-brutal text-center hover:bg-[var(--color-accent-lime)] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
