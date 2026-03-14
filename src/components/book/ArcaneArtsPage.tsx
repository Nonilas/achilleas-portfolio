import React from 'react';
import BookPage from './BookPage';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

/* Simple geometric SVG icons for each category */
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#D4AF37] stroke-[1.5]">
    <path d="M8 6L2 12L8 18" />
    <path d="M16 6L22 12L16 18" />
    <path d="M14 4L10 20" strokeDasharray="2 1" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#D4AF37] stroke-[1.5]">
    <path d="M6 19C3.79 19 2 17.21 2 15C2 13.14 3.28 11.59 5 11.14C5 11.1 5 11.05 5 11C5 8.24 7.24 6 10 6C12.06 6 13.82 7.26 14.56 9.04C15 9.01 15.5 9 16 9C19.31 9 22 11.69 22 15C22 18.31 19.31 19 16 19H6Z" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#D4AF37] stroke-[1.5]">
    <path d="M12 2C9 2 7 4.5 7 7C5.5 7.5 4 9 4 11C4 13 5 14.5 7 15C7 17.5 9 20 12 20C15 20 17 17.5 17 15C19 14.5 20 13 20 11C20 9 18.5 7.5 17 7C17 4.5 15 2 12 2Z" />
    <path d="M12 6V14" />
    <path d="M9 10H15" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#D4AF37] stroke-[1.5]">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" />
    <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" />
  </svg>
);

const categories: SkillCategory[] = [
  {
    name: 'Frontend & Mobile',
    icon: <CodeIcon />,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vue.js',
      'Angular',
      'Expo/React Native',
      'Framer Motion',
    ],
  },
  {
    name: 'Backend & Cloud',
    icon: <CloudIcon />,
    skills: [
      'Node.js',
      'Python',
      'FastAPI',
      'Express.js',
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: <BrainIcon />,
    skills: [
      'PyTorch',
      'TensorFlow',
      'Detectron2',
      'DINOv3',
      'LangChain',
      'OpenAI API',
      'scikit-learn',
      'Computer Vision',
    ],
  },
  {
    name: 'Data & Specialized',
    icon: <DatabaseIcon />,
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Supabase',
      'Prisma',
      'Bioinformatics',
      'Geospatial',
      '3D (Three.js)',
    ],
  },
];

export default function ArcaneArtsPage() {
  return (
    <BookPage pageNumber={4}>
      {/* Title */}
      <h2 className="text-2xl md:text-3xl text-[#8B0000] font-display pb-3 mb-6 border-b border-[#D4AF37]/40">
        The Arcane Arts
      </h2>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border border-[#D4AF37]/30 bg-[#fff9ee]/40 p-3 md:p-4 rounded-sm"
          >
            {/* Category heading */}
            <div className="flex items-center gap-2 mb-3">
              {cat.icon}
              <h3 className="text-sm md:text-base text-[#D4AF37] font-display font-bold tracking-wide">
                {cat.name}
              </h3>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[10px] md:text-xs px-2 py-0.5 border border-[#D4AF37]/30 text-[#8B0000] bg-[#D4AF37]/10 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BookPage>
  );
}
