import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Array of experiences
  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Company Name',
      period: '2022 - Present',
      description: 'Led development of enterprise web applications using React, Node.js, and AWS. Improved site performance by 40% through code optimization and modern front-end architecture.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Previous Company',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications. Collaborated with UI/UX designers to implement responsive designs and ensure cross-browser compatibility.'
    },
    {
      title: 'Junior Developer',
      company: 'First Company',
      period: '2018 - 2020',
      description: 'Built and maintained websites for various clients. Worked on optimizing database queries and implementing security best practices.'
    },
  ];

  // Array of education
  const education = [
    {
      degree: 'MSc in Computer Science',
      institution: 'University Name',
      year: '2017 - 2018',
      details: 'Specialized in Web Technologies and Information Systems.'
    },
    {
      degree: 'BSc in Computer Science',
      institution: 'University Name',
      year: '2014 - 2017',
      details: 'Graduated with honors. Focused on software development and algorithms.'
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
                  Web Developer &amp; Designer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I&apos;m a passionate web developer with expertise in creating responsive, user-friendly websites and applications. With a strong background in both front-end and back-end development, I enjoy bringing ideas to life through clean, efficient code.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  My journey in web development started over 5 years ago, and since then, I&apos;ve had the opportunity to work on a wide range of projects, from small business websites to complex enterprise applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors.
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