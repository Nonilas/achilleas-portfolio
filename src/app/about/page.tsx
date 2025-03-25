'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Array of experiences (updated with real experience)
  const experiences = [
    {
      title: 'AI & Environmental Analyst Trainee',
      company: 'EUROCONTROL MUAC',
      period: 'Feb 2025 - Present',
      description: 'Developing and refining machine learning models for contrail detection and tracking. Utilizing Azure Databricks, Apache Spark, Detectron2, and deepSORT within Microsoft\'s Azure ecosystem. Enhancing instance segmentation accuracy to increase mean Average Precision (mAP).'
    },
    {
      title: 'Marketing Manager',
      company: 'SCOPE',
      period: 'Sep 2024 - Present',
      description: 'Leading promotion and organization of international tech and sales events. Collaborating with cross-functional teams to boost attendance and secure partnerships. Developing marketing strategies to increase event visibility and sponsorship.'
    },
    {
      title: 'Software Developer Intern',
      company: 'Next Generation Sensors B.V.',
      period: 'June 2024 - August 2024',
      description: 'Built a new website including support pages, authentication systems, admin dashboards, and client messaging tools. Implemented secure RESTful APIs and database schemas using TypeScript, Angular, and MongoDB.'
    },
  ];

  // Array of education (updated with real education)
  const education = [
    {
      degree: 'Data Science & Artificial Intelligence Bachelor',
      institution: 'Maastricht University',
      year: 'Sep 2022 - present',
      details: 'Current Modules: Data Analysis, Intelligent Systems. Completed Modules: Calculus (9), Computer Security (9), Data Structures and Algorithms (9), Databases (7), Human Computer Interaction & Affective Computing (10), and more.'
    },
    {
      degree: 'Project SMART – Biotechnology',
      institution: 'University of New Hampshire',
      year: 'July 2020',
      details: 'Online summer program focused on biotechnology and molecular biology research. Explored cutting-edge research topics in biotechnology and environmental applications.'
    },
    {
      degree: 'IB Diploma Program',
      institution: 'Anatolia College High School',
      year: 'Sep 2017 - July 2020',
      details: 'Recognized for Academic Excellence by the Greek Ministry of Education (National Merit Program).'
    },
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* Replace with your actual image */}
                <span className="text-gray-500 dark:text-gray-400 text-6xl">AL</span>
              </div>
              
              <div className="flex-1">
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
          </div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {experience.period}
                  </span>
                </div>
                <h4 className="text-gray-700 dark:text-gray-300 mb-4">
                  {experience.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-gray-700 dark:text-gray-300 mb-4">
                  {edu.institution}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}