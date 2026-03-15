import { getMoreWorkProjects } from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import WorkGridCard from '@/components/ui/WorkGridCard';

export default function MoreWorkGrid() {
  const moreWork = getMoreWorkProjects();

  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="More Work"
          subtitle="Additional projects across AI, web, mobile, and game development"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreWork.map((project) => (
            <WorkGridCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
