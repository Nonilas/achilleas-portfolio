'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import GitHubStatsSection from '@/components/sections/GitHubStats';
import { getFeaturedProjects } from '@/utils/github';
import ProjectCard from '@/components/ui/ProjectCard';
import FadeInSection from '@/components/ui/FadeInSection';
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
      
      {/* Portfolio Showcase - Visual Project Display */}
      <FadeInSection>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From enterprise platforms to AI systems - explore my diverse project portfolio
            </p>
          </motion.div>

          {/* Main Featured Project - Construction Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Project Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                      Full-Stack
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm font-semibold">
                      Production Ready
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Kassandra Properties VIP
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Enterprise-grade construction & real estate platform featuring property management, 
                    Stripe payment processing, 3D property tours, booking system, and full CMS. 
                    Built with Next.js 15, React 19, Prisma, and Three.js.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'Three.js', 'NextAuth'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/Nonilas/construction-company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-lg hover:opacity-90 transition"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
                {/* Right side - Visual Preview */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  {/* Placeholder for screenshot - you can add your actual screenshot here */}
                  <div className="relative z-10 text-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                      <div className="text-white mb-4">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <p className="text-white font-semibold">Real Estate Platform</p>
                      <p className="text-white/80 text-sm mt-2">FOR_SALE & RENTAL Properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid of Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* .NET MAUI Dental App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-white text-center z-10">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="font-semibold">.NET MAUI</p>
                  <p className="text-sm opacity-80">Cross-Platform</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  PolichroniadouDental
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Medical booking system with Clean Architecture, Google Calendar sync, and encryption. Supports iOS, Android, Windows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded text-xs">
                    C#
                  </span>
                  <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded text-xs">
                    .NET 9
                  </span>
                  <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded text-xs">
                    SQLite
                  </span>
                </div>
              </div>
            </motion.div>

            {/* AI MEP Predictor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-white text-center z-10">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                  <p className="font-semibold">AI/ML</p>
                  <p className="text-sm opacity-80">3D Modeling</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  3D MEP Component Predictor
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  AI system for automatic MEP component placement in Revit models using PyTorch neural networks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs">
                    PyTorch
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs">
                    Revit API
                  </span>
                </div>
              </div>
            </motion.div>

            {/* KassandraTech Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-white text-center z-10">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <p className="font-semibold">Web Dev</p>
                  <p className="text-sm opacity-80">Modern UI/UX</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  KassandraTech Consultancy
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Tech consultancy website with smooth animations, lazy loading, and responsive design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs">
                    Framer
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs">
                    TypeScript
                  </span>
                </div>
              </div>
            </motion.div>

            {/* AI Image Detector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-white text-center z-10">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <p className="font-semibold">Computer Vision</p>
                  <p className="text-sm opacity-80">Grade: 9.5/10</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  AI Image Detector
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  CNN-based system to identify AI-generated images with heatmap visualization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded text-xs">
                    PyTorch
                  </span>
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded text-xs">
                    CNN
                  </span>
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded text-xs">
                    GradCAM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* DINOv3 Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-white text-center z-10">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  <p className="font-semibold">Research</p>
                  <p className="text-sm opacity-80">Vision Transformer</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  DINOv3 Computer Vision
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Self-supervised vision transformer research for domain-specific image recognition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs">
                    DINOv3
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs">
                    PyTorch
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs">
                    ViT
                  </span>
                </div>
              </div>
            </motion.div>

            {/* View All Projects Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
            >
              <a href="/projects" className="p-8 text-center group-hover:scale-105 transition-transform">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">View All Projects</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Explore my complete portfolio</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 group-hover:underline">Including GitHub repos →</p>
              </a>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                🚀 <strong>Interested in working together?</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm always open to discussing new opportunities, collaborations, or interesting projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Contact Me
                </a>
                <a 
                  href="mailto:achilleasleiv@gmail.com" 
                  className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </FadeInSection>
      
      {/* Skills Section - Simplified */}
      <FadeInSection>
      <section className="py-16 relative overflow-hidden">
        {/* Subtle background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
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
          
          {/* Categorized Skills Grid */}
          <div className="space-y-12">
            {/* AI/ML Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                🤖 AI & Machine Learning
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Python', level: 95 },
                  { name: 'PyTorch', level: 90 },
                  { name: 'TensorFlow', level: 85 },
                  { name: 'scikit-learn', level: 90 },
                  { name: 'Computer Vision', level: 85 },
                  { name: 'Deep Learning', level: 88 },
                  { name: 'MATLAB', level: 80 },
                  { name: 'NumPy/Pandas', level: 92 }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-t-4 border-purple-500 
                              transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-gray-700 dark:text-gray-200 font-medium mb-2 text-sm">
                        {skill.name}
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                        <motion.div
                          className="bg-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Full-Stack Development */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                💻 Full-Stack Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'TypeScript', level: 90 },
                  { name: 'JavaScript', level: 92 },
                  { name: 'React', level: 88 },
                  { name: 'Next.js', level: 85 },
                  { name: 'Node.js', level: 82 },
                  { name: 'Prisma', level: 80 },
                  { name: 'HTML/CSS', level: 90 },
                  { name: 'Tailwind CSS', level: 85 },
                  { name: 'C#', level: 85 },
                  { name: '.NET/MAUI', level: 82 },
                  { name: 'ASP.NET Core', level: 78 },
                  { name: 'Three.js', level: 75 }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-t-4 border-blue-500 
                              transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-gray-700 dark:text-gray-200 font-medium mb-2 text-sm">
                        {skill.name}
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                        <motion.div
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data & Cloud */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                ☁️ Data & Cloud Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'PostgreSQL', level: 85 },
                  { name: 'MongoDB', level: 80 },
                  { name: 'Supabase', level: 83 },
                  { name: 'SQLite', level: 80 },
                  { name: 'Azure', level: 75 },
                  { name: 'Docker', level: 70 },
                  { name: 'Git', level: 90 },
                  { name: 'REST APIs', level: 88 },
                  { name: 'GraphQL', level: 70 },
                  { name: 'Stripe API', level: 82 },
                  { name: 'NextAuth.js', level: 85 },
                  { name: 'Entity Framework', level: 78 }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-t-4 border-green-500 
                              transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-gray-700 dark:text-gray-200 font-medium mb-2 text-sm">
                        {skill.name}
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                        <motion.div
                          className="bg-green-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* GitHub Stats Section */}
      <FadeInSection>
      <GitHubStatsSection />
      </FadeInSection>
      
      {/* Space-Themed CTA Section */}
      <FadeInSection delay={0.2}>
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
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
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
      </FadeInSection>
    </main>
  );
}