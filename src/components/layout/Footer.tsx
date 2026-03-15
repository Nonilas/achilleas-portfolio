import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-black mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left */}
          <div>
            <p className="font-bold text-lg tracking-tight">achilleas.</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Software Engineer &middot; ML Engineer &middot; Full-Stack Dev
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-[var(--color-text-secondary)]">
            <Link href="/work" className="hover:text-[var(--color-text)] transition-colors">Work</Link>
            <Link href="/about" className="hover:text-[var(--color-text)] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[var(--color-text)] transition-colors">Contact</Link>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="https://github.com/Nonilas" target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/achilleas-leivadiotis" target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:achilleasleiv@gmail.com"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} Achilleas Leivadiotis
        </div>
      </div>
    </footer>
  );
}
