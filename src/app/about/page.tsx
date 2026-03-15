'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TechBadge from '@/components/ui/TechBadge';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Contract Software Engineer',
    company: 'EUROCONTROL MUAC',
    period: 'Nov 2025 – Present',
    description:
      'Working on the COAV contrail avoidance system  - a real-time air traffic management platform generating flight altitude advisories to reduce contrail climate impact. Full-stack contributions across Python backend services, Vue.js + D3.js dashboard, and Kubernetes/OpenShift infrastructure.',
    skills: ['Python', 'Vue.js', 'JavaScript', 'Node.js', 'Redis', 'Kubernetes', 'OpenShift'],
    current: true,
  },
  {
    title: 'Founder',
    company: 'Vadiotech',
    period: 'Jul 2025 – Present',
    description:
      'Own software development company. Built Kassandra Properties VIP (enterprise construction platform with Stripe payments), Polichroniadou Dental Booking (SaaS clinic system), and other client projects.',
    skills: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Supabase'],
    current: true,
  },
  {
    title: 'AI Research & Development (Thesis)',
    company: 'EUROCONTROL MUAC',
    period: 'Feb 2025 – Jul 2025',
    description:
      'Thesis graded 9/10. Built the first validated ground-based contrail monitoring pipeline  - Mask R-CNN detection, Norfair multi-object tracking, and novel 4D→2D flight attribution.',
    skills: ['Python', 'Detectron2', 'Norfair', 'Azure Databricks', 'Apache Spark', 'Mask R-CNN'],
  },
  {
    title: 'Marketing Manager',
    company: 'SCOPE Maastricht',
    period: 'Sep 2024 – Mar 2025',
    description:
      'Led marketing for an international Dublin tech & sales trip. Cross-team coordination, boosted attendance, and secured sponsorships.',
    skills: ['Event Management', 'Marketing', 'Team Leadership'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Next Generation Sensors B.V.',
    period: 'Jun 2024 – Aug 2024',
    description:
      'Built a new website including support pages, authentication systems, admin dashboards, and client messaging tools with secure RESTful APIs.',
    skills: ['TypeScript', 'Angular', 'MongoDB', 'REST APIs'],
  },
];

const education = [
  {
    degree: 'BSc Data Science & Artificial Intelligence',
    institution: 'Maastricht University',
    year: 'Graduated Jun 2025',
    details: 'Grade: 7.16/10. Notable module grades: HCI & Affective Computing (10), Calculus (9), Computer Security (9), Data Structures & Algorithms (9), Introduction to Bioinformatics (8), Large Scale IT & Cloud Computing (8).',
  },
  {
    degree: 'Project SMART  - Biotechnology',
    institution: 'University of New Hampshire',
    year: 'Jul 2020',
    details: 'Summer program focused on hands-on lab techniques, genetics, and molecular biology.',
  },
  {
    degree: 'IB Diploma Program',
    institution: 'Anatolia College High School',
    year: 'Sep 2019 – Jul 2022',
    details: 'International Baccalaureate Diploma Program.',
  },
];

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    techs: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Detectron2', 'deepSORT'],
    highlighted: ['PyTorch', 'Detectron2'],
  },
  {
    title: 'Software Development',
    techs: ['TypeScript', 'Python', 'Java', 'C#', 'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'FastAPI', 'Expo/React Native'],
    highlighted: ['TypeScript', 'Python'],
  },
  {
    title: 'Data & Cloud',
    techs: ['SQL (Expert)', 'MongoDB', 'PostgreSQL', 'MariaDB', 'Supabase', 'Redis', 'Azure Databricks', 'Kubernetes', 'Docker', 'Prisma'],
    highlighted: ['SQL (Expert)', 'Azure Databricks'],
  },
  {
    title: 'Tools & Libraries',
    techs: ['MATLAB (Expert)', 'pandas', 'NumPy', 'Git/GitHub', 'Vercel', 'Stripe API', 'D3.js', 'Shapely', 'GeoPandas'],
    highlighted: ['MATLAB (Expert)'],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About</h1>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-2">
            I&apos;m Achilleas Leivadiotis  - a Greek software engineer currently on
            contract at EUROCONTROL MUAC and founder of Vadiotech. I hold a BSc in Data
            Science &amp; AI from Maastricht University.
          </p>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
            My work spans ML pipelines and computer vision research, full-stack web
            platforms, and cross-platform mobile apps. I thrive on cross-functional
            challenges and enjoy building systems that make a real-world impact.
          </p>
          <div className="mb-12">
            <a
              href="/Leivadiotis_Achilleas_Resume.pdf"
              download
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border-2 border-black hover:bg-[var(--color-accent-lime)] transition-colors"
            >
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-6">Experience</h2>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-t-2 border-black py-6"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <div>
                    <h3 className="font-bold text-base">
                      {exp.title}
                      {exp.current && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--color-accent-lime)] border border-black">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{exp.company}</p>
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)] whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 border border-black font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-6">Education</h2>
          <div className="grid grid-cols-1 gap-4">
            {education.map((edu, i) => (
              <div key={i} className="border-2 border-black p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <h3 className="font-bold text-base">{edu.degree}</h3>
                  <span className="text-xs text-[var(--color-text-secondary)] whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">{edu.institution}</p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-bold mb-3 border-b-2 border-black pb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.techs.map((t) => (
                    <TechBadge key={t} name={t} highlighted={cat.highlighted.includes(t)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t-2 border-black pt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-3">Let&apos;s connect</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border-2 border-black bg-black text-white hover:bg-[var(--color-accent-lime)] hover:text-black transition-colors"
            >
              View My Work
              <ArrowRight size={14} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border-2 border-black hover:bg-[var(--color-bg)] transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
