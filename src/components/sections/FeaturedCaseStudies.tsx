import { getFeaturedProjects } from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from '@/components/ui/CaseStudyCard';

export default function FeaturedCaseStudies() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Selected Work"
          subtitle="Case studies from research, industry, and freelance"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <CaseStudyCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
