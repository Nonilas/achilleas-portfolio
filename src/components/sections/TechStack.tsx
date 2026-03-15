import SectionHeading from '@/components/ui/SectionHeading';
import TechBadge from '@/components/ui/TechBadge';

const categories = [
  {
    title: 'AI & Machine Learning',
    techs: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Detectron2', 'Norfair', 'DINOv3', 'Mask R-CNN', 'PLINK', 'ADMIXTURE'],
    highlighted: ['PyTorch', 'Detectron2'],
  },
  {
    title: 'Languages & Frameworks',
    techs: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C#', 'SQL', 'MATLAB'],
    highlighted: ['Python', 'TypeScript'],
  },
  {
    title: 'Web & Mobile',
    techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'FastAPI', 'Expo/React Native', 'D3.js', 'Tailwind CSS', 'Prisma'],
    highlighted: ['Next.js', 'Vue.js'],
  },
  {
    title: 'Data & Infrastructure',
    techs: ['Azure Databricks', 'Apache Spark', 'PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'Supabase', 'Kubernetes', 'OpenShift', 'Docker', 'Vercel'],
    highlighted: ['Kubernetes', 'Azure Databricks'],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b-2 border-black pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <TechBadge
                    key={tech}
                    name={tech}
                    highlighted={cat.highlighted.includes(tech)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
