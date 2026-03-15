import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Download } from 'lucide-react';
import { projects, getProjectBySlug, getAllSlugs } from '@/data/projects';
import CategoryBadge from '@/components/ui/CategoryBadge';
import MetricBox from '@/components/ui/MetricBox';
import TechBadge from '@/components/ui/TechBadge';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title}  - Achilleas Leivadiotis`,
    description: project.description,
    openGraph: {
      title: `${project.title}  - Achilleas Leivadiotis`,
      description: project.description,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Prev / Next navigation
  const idx = projects.indexOf(project);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back nav */}
        <Link
          href="/work"
          className="inline-flex items-center text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-1" />
          All Work
        </Link>

        {/* Header */}
        <div className="mb-10">
          <CategoryBadge label={project.categoryLabel} color={project.categoryColor} />

          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="mt-2 serif-italic text-lg text-[var(--color-text-secondary)]">
            {project.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]">
            <span>{project.organization}</span>
            <span>&middot;</span>
            <span>{project.period}</span>
          </div>
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12">
            {project.metrics.map((m) => (
              <MetricBox key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        )}

        {/* Problem */}
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[var(--color-accent-pink)]">
            Problem
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Approach */}
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[var(--color-accent-blue)]">
            Approach
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            {project.approach}
          </p>

          {/* Pipeline stages */}
          {project.pipeline && project.pipeline.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.pipeline.map((stage) => (
                <div
                  key={stage.title}
                  className="border-2 border-black p-4"
                  style={{ borderLeftColor: stage.color, borderLeftWidth: '4px' }}
                >
                  <h3 className="font-bold text-sm">{stage.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">
                    {stage.subtitle}
                  </p>
                  <ul className="text-xs text-[var(--color-text-secondary)] space-y-1">
                    {stage.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: stage.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-emerald-600">
            Results
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {project.results}
          </p>
        </section>

        {/* Video */}
        {project.videoUrl && (
          <div className="mb-12 border-2 border-black">
            <video
              src={project.videoUrl}
              controls
              playsInline
              preload="metadata"
              className="w-full"
            >
              Your browser does not support the video tag.
            </video>
            <p className="px-4 py-2 text-xs text-[var(--color-text-secondary)] border-t-2 border-black bg-[var(--color-bg)]">
              Detection &amp; tracking demonstration
            </p>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Screenshots
            </h2>
            <div className="space-y-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="border-2 border-black">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                  <p className="px-4 py-2 text-xs text-[var(--color-text-secondary)] border-t-2 border-black bg-[var(--color-bg)]">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-3">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge
                key={tech}
                name={tech}
                highlighted={project.highlightedTech?.includes(tech)}
              />
            ))}
          </div>
        </section>

        {/* Action links */}
        <div className="flex flex-wrap gap-3 mb-16 border-t-2 border-black pt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border-2 border-black bg-black text-white hover:bg-[var(--color-accent-lime)] hover:text-black transition-colors"
            >
              View Live
              <ExternalLink size={14} className="ml-2" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border-2 border-black hover:bg-[var(--color-bg)] transition-colors"
            >
              GitHub
              <Github size={14} className="ml-2" />
            </a>
          )}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              download
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border-2 border-black hover:bg-[var(--color-bg)] transition-colors"
            >
              {project.downloadLabel || 'Download'}
              <Download size={14} className="ml-2" />
            </a>
          )}
        </div>

        {/* Prev / Next navigation */}
        <nav className="flex justify-between border-t-2 border-black pt-8">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              <ArrowLeft size={16} />
              <div>
                <span className="text-[10px] uppercase tracking-wider block">Previous</span>
                <span className="font-medium text-[var(--color-text)]">{prev.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-right"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider block">Next</span>
                <span className="font-medium text-[var(--color-text)]">{next.title}</span>
              </div>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </main>
  );
}
