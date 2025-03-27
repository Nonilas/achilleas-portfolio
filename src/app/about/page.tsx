'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Code, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  // Array of experiences (updated with real experience)
  const experiences = [
    {
      title: 'AI & Environmental Analyst Trainee',
      company: 'EUROCONTROL MUAC',
      period: 'Feb 2025 - Present',
      description: 'Developing and refining machine learning models for contrail detection and tracking. Utilizing Azure Databricks, Apache Spark, Detectron2, and deepSORT within Microsoft\'s Azure ecosystem. Enhancing instance segmentation accuracy to increase mean Average Precision (mAP).',
      skills: ['Python', 'PyTorch', 'Azure', 'Computer Vision']
    },
    {
      title: 'Marketing Manager',
      company: 'SCOPE',
      period: 'Sep 2024 - Present',
      description: 'Leading promotion and organization of international tech and sales events. Collaborating with cross-functional teams to boost attendance and secure partnerships. Developing marketing strategies to increase event visibility and sponsorship.',
      skills: ['Event Management', 'Marketing', 'Team Leadership', 'Strategy']
    },
    {
      title: 'Software Developer Intern',
      company: 'Next Generation Sensors B.V.',
      period: 'June 2024 - August 2024',
      description: 'Built a new website including support pages, authentication systems, admin dashboards, and client messaging tools. Implemented secure RESTful APIs and database schemas using TypeScript, Angular, and MongoDB.',
      skills: ['TypeScript', 'Angular', 'MongoDB', 'REST APIs']
    },
  ];

  // Array of education (updated with real education)
  const education = [
    {
      degree: 'Data Science & Artificial Intelligence Bachelor',
      institution: 'Maastricht University',
      year: 'Sep 2022 - present',
      details: 'Current Modules: Data Analysis, Intelligent Systems. Completed Modules: Calculus (9), Computer Security (9), Data Structures and Algorithms (9), Databases (7), Human Computer Interaction & Affective Computing (10), and more.',
      highlights: ['Advanced Mathematics', 'Machine Learning', 'Data Structures & Algorithms']
    },
    {
      degree: 'Project SMART Biotechnology',
      institution: 'University of New Hampshire',
      year: 'July 2020',
      details: 'Online summer program focused on biotechnology and molecular biology research. Explored cutting-edge research topics in biotechnology and environmental applications.',
      highlights: ['Biotechnology Research', 'Molecular Biology']
    },
    {
      degree: 'IB Diploma Program',
      institution: 'Anatolia College High School',
      year: 'Sep 2017 - July 2020',
      details: 'Recognized for Academic Excellence by the Greek Ministry of Education (National Merit Program).',
      highlights: ['Academic Excellence', 'National Merit Program']
    },
  ];

  // Key strengths/skills categories
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      skills: ["PyTorch", "TensorFlow", "Computer Vision", "NLP", "Deep Learning"]
    },
    {
      title: "Software Development",
      icon: <Code className="h-8 w-8 text-green-500" />,
      skills: ["TypeScript", "Python", "React", "Next.js", "RESTful APIs"]
    },
    {
      title: "Data Engineering",
      icon: <Code className="h-8 w-8 text-purple-500" />,
      skills: ["SQL", "MongoDB", "Azure", "Data Pipelines", "ETL"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-8 w-8 text-amber-500" />,
      skills: ["Cross-functional Collaboration", "Problem Solving", "Critical Thinking", "Communication"]
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get to know more about my background and experience.
          </p>
        </motion.div>

        {/* Personal Bio Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {/* Background decorator */}
            <div className="h-12 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"></div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image Placeholder */}
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 border-4 border-white dark:border-gray-700 shadow-lg -mt-12 flex items-center justify-center">
                  {/* Replace with your actual image */}
                  <span className="text-blue-500 dark:text-blue-300 text-6xl font-bold">AL</span>
                </div>
                
                <div className="flex-1 md:-mt-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Achilleas Leivadiotis
                  </h2>
                  <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                    Data Science & AI Student
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I&apos;m a Data Science and Artificial Intelligence student at Maastricht University with a passion for machine learning, computer vision, and full-stack development. My background spans AI research, marketing management, and software development internships.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Currently working as an AI & Environmental Analyst Trainee at EUROCONTROL MUAC, I&apos;m developing machine learning models for contrail detection and tracking to enhance aviation environmental efficiency.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    My technical expertise includes Python, TypeScript, SQL, and various AI frameworks (PyTorch, TensorFlow). I thrive on cross-functional collaboration, love tackling complex analytical challenges, and aspire to create impactful tech solutions.
                  </p>
                </div>
              </div>
              
              {/* Skills categories */}
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-3">
                      {category.icon}
                      <h4 className="font-medium ml-2 text-gray-800 dark:text-gray-200">{category.title}</h4>
                    </div>
                    {/* Replace the ul/li with styled badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Work Experience
            </h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500 dark:border-blue-400"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 md:ml-4">
                    {experience.period}
                  </span>
                </div>
                <h4 className="text-gray-700 dark:text-gray-300 mb-4">
                  {experience.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.description}
                </p>
                
                {/* Skills used */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.skills.map(skill => (
                    <span key={skill} className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500 dark:border-blue-400"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 md:ml-4">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-gray-700 dark:text-gray-300 mb-4">
                  {edu.institution}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {edu.details}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.highlights.map(highlight => (
                    <span key={highlight} className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}