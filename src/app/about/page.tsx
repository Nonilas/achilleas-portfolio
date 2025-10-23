'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Code, Users, Database, Server, Cpu, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';

export default function AboutPage() {
  // Client-side state for animations
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Array of experiences (updated with real experience from CV)
  const experiences = [
    {
      title: 'Software Developer - Freelance',
      company: 'Commercial Construction Website',
      period: 'July 2025 - Sep 2025',
      description: 'Built enterprise-grade construction company platform from scratch (80-90% complete). Implemented real-time booking system with Stripe payments, auth, admin dashboard, property listings, CMS, image optimization, and SEO. Full-stack development with modern tech stack.',
      skills: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Supabase', 'Vercel'],
      color: '#10b981',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'AI Research & Development',
      company: 'EUROCONTROL MUAC',
      period: 'Feb 2025 - July 2025',
      description: 'Thesis Grade: 9/10. Enhanced aviation environmental efficiency by developing ML models for contrail detection and real-time tracking. Utilized Azure Databricks, Apache Spark, Detectron2, and deepSORT. Implemented precise flight-attribution algorithms linking detected contrails to specific flights.',
      skills: ['Python', 'Detectron2', 'deepSORT', 'Azure Databricks', 'Apache Spark', 'Computer Vision'],
      color: '#60a5fa',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Marketing Manager',
      company: 'SCOPE Maastricht',
      period: 'Sep 2024 - March 2025',
      description: 'Led marketing for an international Dublin tech & sales trip. Cross-team coordination, boosted attendance & secured sponsorships. Developed marketing strategies to increase event visibility.',
      skills: ['Event Management', 'Marketing', 'Team Leadership', 'Sponsorship'],
      color: '#8b5cf6',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Software Developer Intern',
      company: 'Next Generation Sensors B.V.',
      period: 'June 2024 - August 2024',
      description: 'Built a new website including support pages, authentication systems, admin dashboards, and client messaging tools. Implemented secure RESTful APIs and database schemas to handle user data efficiently.',
      skills: ['TypeScript', 'Angular', 'MongoDB', 'REST APIs'],
      color: '#ec4899',
      icon: <Code className="h-6 w-6" />
    },
  ];

  // Array of education (updated with real education from CV)
  const education = [
    {
      degree: 'Data Science & Artificial Intelligence Bachelor',
      institution: 'Maastricht University',
      year: 'Graduated - June 2025',
      details: 'Grade: 7.16/10. Completed Modules: Calculus (9), Computer Security (9), Data Structures and Algorithms (9), Databases (7), Human Computer Interaction & Affective Computing (10), Introduction to Bio-Informatics (8), Large Scale IT and Cloud Computing (8), Machine Learning (6), Probability and Statistics (7), Simulation and Statistical Analysis (7), Software Engineering (7) & More.',
      highlights: ['GPA: 7.16/10', 'Computer Security (9)', 'DSA (9)', 'HCI (10)'],
      color: '#3b82f6',
      icon: <Database className="h-6 w-6" />
    },
    {
      degree: 'Project SMART - Biotechnology',
      institution: 'University of New Hampshire',
      year: 'July 2020',
      details: 'Online summer program focused on hands-on lab techniques, genetics, and molecular biology.',
      highlights: ['Biotechnology', 'Genetics', 'Molecular Biology'],
      color: '#10b981',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      degree: 'IB Diploma Program',
      institution: 'Anatolia College High School',
      year: 'Sep 2019 - July 2022',
      details: 'IB Diploma Program (2020-2022) and Lyceum/MYP Program prior.',
      highlights: ['IB Diploma', 'International Education'],
      color: '#f59e0b',
      icon: <Star className="h-6 w-6" />
    },
  ];

  // Key strengths/skills categories with visual improvements (from CV)
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="h-8 w-8 text-purple-500" />,
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Detectron2", "deepSORT", "Computer Vision"],
      color: "from-purple-400 to-purple-600",
      darkColor: "from-purple-600 to-purple-800",
      textColor: "text-purple-500",
      darkTextColor: "dark:text-purple-400"
    },
    {
      title: "Software Development",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      skills: ["TypeScript", "Python", "C#", "Java", "React", "Next.js", "Angular", ".NET MAUI", "Node.js"],
      color: "from-blue-400 to-blue-600",
      darkColor: "from-blue-600 to-blue-800",
      textColor: "text-blue-500",
      darkTextColor: "dark:text-blue-400"
    },
    {
      title: "Data & Cloud Technologies",
      icon: <Database className="h-8 w-8 text-green-500" />,
      skills: ["SQL (Expert)", "MongoDB", "PostgreSQL", "Supabase", "Azure", "Prisma", "REST APIs", "WebSockets"],
      color: "from-green-400 to-green-600",
      darkColor: "from-green-600 to-green-800",
      textColor: "text-green-500",
      darkTextColor: "dark:text-green-400" 
    },
    {
      title: "Tools & Libraries",
      icon: <Server className="h-8 w-8 text-orange-500" />,
      skills: ["MATLAB (Expert)", "Pandas", "NumPy", "Git/GitHub", "Docker", "Vercel", "Stripe API", "LLM Tools"],
      color: "from-orange-400 to-orange-600",
      darkColor: "from-orange-600 to-orange-800",
      textColor: "text-orange-500",
      darkTextColor: "dark:text-orange-400"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center mb-10 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get to know more about my background and experience.
          </p>
        </motion.div>

        {/* Personal Bio Section with new design */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            {/* Background gradient bar with animation */}
            <motion.div 
              className="h-3"
              style={{ 
                background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #60a5fa 100%)"
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image with animated gradient border */}
                <div className="relative mx-auto md:mx-0">
                  <motion.div 
                    className="absolute inset-0 rounded-full -m-1"
                    style={{ 
                      background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                      backgroundSize: "300% 300%" 
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-800 border-4 border-white dark:border-gray-700 relative flex items-center justify-center z-10">
                    {/* Replace with your actual image */}
                    <span className="text-white text-6xl font-bold">AL</span>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  {/* Name with animated color gradient */}
                  <motion.h2 
                    className="text-3xl font-bold mb-2"
                    animate={{ 
                      color: isClient ? ["#3b82f6", "#8b5cf6", "#3b82f6"] : "#3b82f6" 
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    Achilleas Leivadiotis
                  </motion.h2>
                  
                  <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                    Data Science & AI Student
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I am a Data Science and Artificial Intelligence graduate with a passion for building full-stack applications, machine learning, and computer vision. My background spans freelance projects, AI-driven research projects, and software development internships. I thrive on cross-functional collaboration, love tackling complex analytical challenges, and aspire to create impactful tech solutions.
                  </p>
                  <div className="text-gray-600 dark:text-gray-300 mb-4">
                    <a
                      href="/Achilleas_Leivadiotis_Resume.pdf"
                      download="AchilleasLeivadiotis_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                    >
                      Download my CV (PDF)
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    My technical expertise includes Python, TypeScript, SQL (expert level), MATLAB (expert level), and various AI frameworks (PyTorch, TensorFlow, OpenCV). I&apos;ve worked on diverse projects from 3D MEP Component predictors and AI image detectors to multiplayer games and enterprise-grade commercial websites. Fluent in Greek (native) and English, with strong interests in chess, music, and outdoor activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
              
        {/* Skills categories with interactive cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Code className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
            <span>Technical Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${category.color} dark:${category.darkColor}`}></div>
                
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    {category.icon}
                    <h4 className={`font-medium ml-2 ${category.textColor} ${category.darkTextColor}`}>
                      {category.title}
                    </h4>
                  </div>
                  
                  {/* Skills badges with hover effect */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {category.skills.map(skill => (
                      <span 
                        key={skill} 
                        className={`inline-block px-3 py-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 ${category.textColor} ${category.darkTextColor} rounded-full transition-colors duration-200`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabbed Experience/Education Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center px-5 py-3 font-medium transition-colors duration-200 ${
                  activeTab === "experience" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center px-5 py-3 font-medium transition-colors duration-200 ${
                  activeTab === "education" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <GraduationCap className="h-5 w-5 mr-2" />
                Education
              </button>
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div className={`space-y-6 ${activeTab === "experience" ? "block" : "hidden"}`}>
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isClient ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connected timeline */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-14 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 z-0"></div>
                )}
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 ml-20 relative z-10">
                  {/* Timeline dot */}
                  <div 
                    className="absolute -left-24 top-6 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: experience.color }}
                  >
                    {experience.icon}
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 md:ml-4 md:whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  <h4 className="text-gray-700 dark:text-gray-300 mb-4">
                    {experience.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Education Timeline */}
          <div className={`space-y-6 ${activeTab === "education" ? "block" : "hidden"}`}>
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isClient ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connected timeline */}
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-14 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500 z-0"></div>
                )}
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 ml-20 relative z-10">
                  {/* Timeline dot */}
                  <div 
                    className="absolute -left-24 top-6 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: edu.color }}
                  >
                    {edu.icon}
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 md:ml-4 md:whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-gray-700 dark:text-gray-300 mb-4">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.details}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.highlights.map(highlight => (
                      <span 
                        key={highlight} 
                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        
        {/* CTA Section with interactive cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mt-16 md:mt-24 text-center"
        >
          <div className="rounded-lg p-8 border overflow-hidden relative">
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
            
            {/* Animated particles - client-side only */}
            {isClient && Array.from({ length: 20 }).map((_, i) => {
              // Pre-calculate random values
              const size = 2 + Math.random() * 3;
              const left = `${Math.random() * 100}%`;
              const top = `${Math.random() * 100}%`;
              const duration = 3 + Math.random() * 7;
              const delay = Math.random() * 5;
              
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-400 dark:bg-blue-300 opacity-30"
                  style={{
                    width: size,
                    height: size,
                    left,
                    top,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    y: {
                      duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    delay,
                  }}
                />
              );
            })}
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/projects" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}