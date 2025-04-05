'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { getFeaturedProjects } from '@/utils/github';
import ProjectCard from '@/components/ui/ProjectCard';
import type { GitHubProject } from '@/utils/github';

export default function Home() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Fetch projects on client side
    async function loadProjects() {
      try {
        const githubProjects = await getFeaturedProjects('Nonilas');
        // Only slice the projects to get the top 3
        setProjects(githubProjects.slice(0, 3));
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Projects will remain an empty array
      }
    }

    loadProjects();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent AI and software development projects.
            </p>
          </motion.div>
          
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">
                Loading projects or no projects available.
              </p>
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a 
              href="/projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              View All Projects
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section - Simplified */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills &amp; Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These are some of the technologies I work with regularly.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Python', 'PyTorch', 'TensorFlow', 'scikit-learn',
              'TypeScript', 'JavaScript', 'React', 'Next.js',
              'SQL', 'MongoDB', 'Azure', 'Angular',
              'Git', 'MATLAB', 'HTML/CSS', 'REST APIs'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center
                          border-t-4 border-blue-500 dark:border-blue-400
                          transition-all duration-300 ease-in-out
                          hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Space-Themed CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Starry space background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 z-0"></div>
        
        {/* Stars - only rendered client-side */}
        {isClient && Array.from({ length: 100 }).map((_, i) => {
          // Pre-calculate random values
          const size = Math.random() < 0.8 ? Math.random() * 2 : Math.random() * 4;
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const duration = 2 + Math.random() * 6;
          const delay = Math.random() * 5;
          const opacity = 0.5 + Math.random() * 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white z-0"
              style={{
                width: size,
                height: size,
                left,
                top,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                opacity: [opacity, opacity * 0.3, opacity],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
        
        {/* Nebula effects */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-purple-500 opacity-20 blur-3xl z-0"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              I&apos;m currently looking for opportunities in AI, machine learning, and data science roles.
            </motion.p>
            
            {/* Glowing button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-transparent border-2 border-blue-400 hover:border-blue-300 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 z-0 opacity-80"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md blur-sm z-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                />
              </a>
            </motion.div>
            
            {/* Floating planet decoration - only on larger screens */}
            {isClient && window.innerWidth >= 768 && (
              <motion.div
                className="absolute -right-10 lg:right-10 top-10 opacity-40 md:opacity-70 w-20 h-20 md:w-28 md:h-28"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Simple planet with correctly positioned rings */}
                  <defs>
                    <radialGradient id="planetGradient" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#93C5FD" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </radialGradient>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#818CF8" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Planet */}
                  <circle cx="50" cy="50" r="30" fill="url(#planetGradient)" />
                  
                  {/* Rings with proper perspective and transparency */}
                  <g transform="rotate(15, 50, 50)">
                    <ellipse cx="50" cy="50" rx="45" ry="8" fill="none" stroke="url(#ringGradient)" strokeWidth="3" strokeOpacity="0.7" />
                    <ellipse cx="50" cy="50" rx="38" ry="6" fill="none" stroke="url(#ringGradient)" strokeWidth="2" strokeOpacity="0.5" />
                  </g>
                  
                  {/* Subtle highlights */}
                  <circle cx="40" cy="40" r="10" fill="rgba(255,255,255,0.1)" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}