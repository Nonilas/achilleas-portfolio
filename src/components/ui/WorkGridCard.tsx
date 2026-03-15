'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import type { Project } from '@/data/projects';

interface WorkGridCardProps {
  project: Project;
}

export default function WorkGridCard({ project }: WorkGridCardProps) {
  const isLinked = !project.confidential || !!project.liveUrl;

  const content = (
    <article className="border-2 border-black bg-[var(--color-surface)] p-5 h-full flex flex-col transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <CategoryBadge label={project.categoryLabel} color={project.categoryColor} />
        {project.confidential && <Lock size={14} className="text-[var(--color-text-secondary)] mt-0.5" />}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold tracking-tight mb-1">{project.title}</h3>
      <p className="text-xs text-[var(--color-text-secondary)] mb-3 flex-1">
        {project.description}
      </p>

      {/* Organization & Period */}
      <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-3">
        {project.organization} &middot; {project.period}
      </p>

      {/* Tech tags (top 3) */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 3).map((t) => (
          <span key={t} className="text-[10px] px-2 py-0.5 border border-black font-medium">
            {t}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="text-[10px] px-2 py-0.5 text-[var(--color-text-secondary)]">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Footer links */}
      <div className="flex items-center gap-4 text-xs font-medium">
        {!project.confidential && (
          <span className="flex items-center gap-1 group-hover:text-[var(--color-accent-blue)] transition-colors">
            Details <ArrowRight size={12} />
          </span>
        )}
        {project.liveUrl && (
          <span
            role="link"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }
            }}
            className="flex items-center gap-1 text-[var(--color-accent-blue)] hover:underline cursor-pointer"
          >
            Live <ExternalLink size={12} />
          </span>
        )}
      </div>
    </article>
  );

  if (isLinked) {
    return (
      <Link href={`/work/${project.slug}`} className="group block">
        {content}
      </Link>
    );
  }

  return <div className="group block">{content}</div>;
}
