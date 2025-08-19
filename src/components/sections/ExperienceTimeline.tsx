'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, GraduationCap, Code, Briefcase } from 'lucide-react';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'project' | 'work' | 'achievement';
  description: string;
  technologies?: string[];
  achievement?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "2025",
    title: "BuildCraft Construction Platform",
    organization: "Personal Project",
    location: "Athens, Greece",
    type: "project",
    description: "Developed a comprehensive full-stack platform for construction companies featuring real estate management, booking system, payment processing, and admin dashboards.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "NextAuth.js", "Three.js"]
  },
  {
    id: 2,
    date: "2025",
    title: "3D MEP Component Predictor",
    organization: "University Project",
    location: "Athens, Greece",
    type: "project",
    description: "AI system for automatically placing MEP components in 3D Revit models using PyTorch neural networks with MLP and 1D CNN architectures.",
    technologies: ["Python", "PyTorch", "Neural Networks", "3D Modeling", "Revit API"]
  },
  {
    id: 3,
    date: "2024",
    title: "AI Image Detector",
    organization: "Academic Project",
    location: "Athens, Greece",
    type: "project",
    description: "Predictive modeling system to identify AI-generated images using Convolutional and residual neural networks with front-end interface and heatmap visualizations.",
    technologies: ["Python", "CNN", "Deep Learning", "Computer Vision", "Web Interface"],
    achievement: "Grade: 9.5/10"
  },
  {
    id: 4,
    date: "2024",
    title: "UNO Game with AI Bots",
    organization: "Game Development Project",
    location: "Athens, Greece",
    type: "project",
    description: "Recreation of UNO card game with AI-driven bots implementing Monte Carlo search algorithms and neural network strategy with GUI.",
    technologies: ["Python", "Monte Carlo", "Neural Networks", "Game AI", "GUI Development"]
  },
  {
    id: 5,
    date: "2023-Present",
    title: "Data Science & AI Studies",
    organization: "University",
    location: "Athens, Greece",
    type: "education",
    description: "Pursuing advanced studies in Data Science and Artificial Intelligence with focus on machine learning, computer vision, and neural networks."
  },
  {
    id: 6,
    date: "2023",
    title: "Portfolio Website Development",
    organization: "Personal Project",
    location: "Athens, Greece",
    type: "project",
    description: "Built modern portfolio website using Next.js with dynamic project loading from GitHub API, animations, and responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"]
  }
];

const getIcon = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'education':
      return <GraduationCap className="h-5 w-5" />;
    case 'work':
      return <Briefcase className="h-5 w-5" />;
    case 'project':
      return <Code className="h-5 w-5" />;
    case 'achievement':
      return <Building className="h-5 w-5" />;
    default:
      return <Calendar className="h-5 w-5" />;
  }
};

const getTypeColor = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'education':
      return 'bg-blue-500 text-blue-100 border-blue-400';
    case 'work':
      return 'bg-green-500 text-green-100 border-green-400';
    case 'project':
      return 'bg-purple-500 text-purple-100 border-purple-400';
    case 'achievement':
      return 'bg-yellow-500 text-yellow-100 border-yellow-400';
    default:
      return 'bg-gray-500 text-gray-100 border-gray-400';
  }
};

export default function ExperienceTimeline() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience Timeline
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through projects, education, and skill development in AI and software engineering.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-50"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-5 w-6 h-6 rounded-full ${getTypeColor(event.type)} flex items-center justify-center z-10 shadow-lg`}>
                {getIcon(event.type)}
              </div>

              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'ml-20' : 'mr-20'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, shadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        {event.organization}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>

                  {/* Achievement */}
                  {event.achievement && (
                    <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <div className="flex items-center text-yellow-800 dark:text-yellow-200">
                        <span className="text-sm font-medium">🏆 {event.achievement}</span>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  {event.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {event.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}