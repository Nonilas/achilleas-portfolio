import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import type { Project } from '@/data/projects';

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article
        className={`border-2 border-black bg-[var(--color-surface)] p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] ${
          index % 2 === 0 ? '' : 'md:translate-y-8'
        }`}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <CategoryBadge label={project.categoryLabel} color={project.categoryColor} />
          <span className="text-xs text-[var(--color-text-secondary)] whitespace-nowrap">
            {project.period}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="serif-italic text-[var(--color-text-secondary)] text-sm mb-4">
          {project.subtitle}
        </p>

        {/* Organization */}
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
          {project.organization}
        </p>

        {/* Metrics preview */}
        {project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-6">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <span className="text-lg font-bold">{m.value}</span>
                <span className="text-xs text-[var(--color-text-secondary)] ml-1">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center text-sm font-medium group-hover:text-[var(--color-accent-blue)] transition-colors">
          Read case study
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}
