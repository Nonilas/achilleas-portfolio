import React from 'react';
import BookPage from './BookPage';

interface Project {
  title: string;
  role: string;
  org: string;
  desc: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'COAV \u2014 Contrail Avoidance System',
    role: 'AI & Full-Stack',
    org: 'EUROCONTROL',
    desc: 'Real-time air traffic system generating altitude advisories to minimize contrail climate impact.',
    tech: ['Python', 'Redis', 'Vue.js', 'D3.js', 'GeoPandas'],
  },
  {
    title: 'Aviation Contrail Monitoring \u2014 Bachelor Thesis',
    role: 'AI Research',
    org: 'EUROCONTROL',
    desc: 'First validated end-to-end AI pipeline for ground-based contrail detection, tracking, and attribution.',
    tech: ['Python', 'Detectron2', 'PyTorch', 'Azure Databricks'],
  },
  {
    title: 'NeuraGallery \u2014 AI Image Organization',
    role: 'Full-Stack AI',
    org: 'Personal',
    desc: 'Intelligent image clustering platform using DINOv3 with 95% cloud cost reduction.',
    tech: ['PyTorch', 'FastAPI', 'Next.js', 'Azure', 'Docker'],
  },
  {
    title: 'Kassandra Properties VIP',
    role: 'Enterprise Web',
    org: 'Freelance',
    desc: 'Enterprise real estate platform with listings, Stripe booking, and 3D property tours.',
    tech: ['Next.js 15', 'Prisma', 'Supabase', 'Three.js', 'Stripe'],
  },
  {
    title: 'Polichroniadou Dental Booking',
    role: 'Healthcare SaaS',
    org: 'Freelance',
    desc: 'Production appointment booking system with Google Calendar sync and SMS notifications.',
    tech: ['Next.js 14', 'Supabase', 'Google Calendar API', 'Twilio'],
  },
  {
    title: '3D MEP Component Predictor',
    role: 'AI / Construction',
    org: 'Equans (University)',
    desc: 'AI system auto-placing MEP components in 3D Revit models with >50% resource savings.',
    tech: ['PyTorch', 'CNN', 'Autodesk Revit'],
  },
  {
    title: 'Byzantine DNA Ancestry Analyzer',
    role: 'Bioinformatics',
    org: 'Personal',
    desc: 'Genomic pipeline computing genetic proximity to Byzantine-era populations (330\u20131453 CE).',
    tech: ['Python', 'scikit-learn', 'PLINK', 'ADMIXTURE', 'Plotly'],
  },
  {
    title: 'InvestorHub \u2014 Finance Dashboard',
    role: 'FinTech',
    org: 'Personal',
    desc: 'All-in-one financial dashboard with AI market insights and portfolio tracking.',
    tech: ['Next.js 14', 'Supabase', 'Claude API', 'Recharts'],
  },
  {
    title: 'Confidential Client Project',
    role: 'Mobile App',
    org: 'NDA',
    desc: 'Full cross-platform mobile app with biometric auth and real-time messaging.',
    tech: ['Expo SDK 54', 'React Native', 'Zustand', 'Reanimated'],
  },
  {
    title: 'HairlossAI \u2014 Scalp Analysis',
    role: 'Mobile / Health Tech',
    org: 'Personal',
    desc: 'AI-powered hair loss tracking app with vision analysis and gamification.',
    tech: ['Expo', 'React Native', 'OpenAI Vision API', 'Stripe'],
  },
  {
    title: 'AI Image Detector',
    role: 'Computer Vision',
    org: 'University (9.5/10)',
    desc: 'Predictive model identifying AI-generated images with heatmap visualization.',
    tech: ['CNN', 'ResNet', 'Python'],
  },
  {
    title: 'UNO Game with AI Bots',
    role: 'Game AI',
    org: 'University',
    desc: 'AI-driven card game bots using Monte Carlo Tree Search and neural strategies.',
    tech: ['Python', 'Monte Carlo Tree Search', 'Pygame'],
  },
];

export default function GreatWorksPage() {
  return (
    <BookPage pageNumber={3}>
      {/* Title */}
      <h2 className="text-2xl md:text-3xl text-[#8B0000] font-display pb-3 mb-6 border-b border-[#D4AF37]/40">
        The Great Works
      </h2>

      <div className="space-y-5">
        {projects.map((proj, idx) => (
          <div key={idx}>
            {/* Project card */}
            <div>
              <h3 className="text-base md:text-lg text-[#8B0000] font-bold font-display leading-snug">
                {proj.title}
              </h3>
              <div className="flex items-center gap-2 mt-0.5 mb-1">
                <span className="text-[10px] md:text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                  {proj.role}
                </span>
                <span className="text-[#D4AF37]/40 text-[10px]">/</span>
                <span className="text-[10px] md:text-xs text-[#4A3A32]">
                  {proj.org}
                </span>
              </div>
              <p className="text-[#2C1A12] text-xs md:text-sm leading-relaxed mb-2">
                {proj.desc}
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 border border-[#D4AF37]/30 text-[#8B0000] bg-[#D4AF37]/10 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Separator */}
            {idx < projects.length - 1 && (
              <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-5 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </BookPage>
  );
}
