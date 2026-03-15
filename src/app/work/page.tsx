'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import WorkGridCard from '@/components/ui/WorkGridCard';
import type { Project } from '@/data/projects';

const filters: { label: string; value: string }[] = [
  { label: 'All', value: 'all' },
  { label: 'AI / ML', value: 'ai-ml' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Research', value: 'research' },
  { label: 'Game Dev', value: 'game' },
];

export default function WorkPage() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category === active);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="All Work"
          subtitle="Projects across AI/ML, full-stack, mobile, and game development"
        />

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 border-black transition-colors ${
                active === f.value
                  ? 'bg-black text-white'
                  : 'bg-transparent hover:bg-[var(--color-accent-lime)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featured.map((project, i) => (
              <CaseStudyCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Remaining projects */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project) => (
              <WorkGridCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-[var(--color-text-secondary)] py-16">
            No projects in this category yet.
          </p>
        )}

        {/* Note */}
        <p className="text-xs text-[var(--color-text-secondary)] mt-12 text-center">
          Some projects are private due to company or university restrictions.
        </p>
      </div>
    </main>
  );
}
