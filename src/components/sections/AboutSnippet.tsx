import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSnippet() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">About</h2>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
            I&apos;m Achilleas  - a Greek software engineer on contract at EUROCONTROL
            MUAC and founder of Vadiotech. I hold a BSc in Data Science &amp; AI
            from Maastricht University and enjoy working across the full stack:
            from contrail avoidance systems to production web and mobile platforms.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-sm font-medium hover:text-[var(--color-accent-blue)] transition-colors"
          >
            More about me
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
