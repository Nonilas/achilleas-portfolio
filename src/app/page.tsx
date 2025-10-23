'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { getFeaturedProjects } from '@/utils/github';
import ProjectCard from '@/components/ui/ProjectCard';
import { Monitor, Server, Brain, Cloud } from 'lucide-react';
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


  const techCategories = [
    {
      title: 'Frontend',
      icon: <Monitor className="h-6 w-6 " />,
      items: [
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextdotjs' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
        { name: 'Vue.js', slug: 'vuedotjs' },
        { name: 'Angular', slug: 'angular' },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="h-6 w-6 " />,
      items: [
        { name: 'Node.js', slug: 'nodedotjs' },
        { name: 'Python', slug: 'python' },
        { name: 'Jupyter', slug: 'jupyter' },
        { name: 'Express.js', slug: 'express' },
        { name: 'FastAPI', slug: 'fastapi' },
        { name: 'PostgreSQL', slug: 'postgresql' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="h-6 w-6 " />,
      items: [
        { name: 'TensorFlow', slug: 'tensorflow' },
        { name: 'PyTorch', slug: 'pytorch' },
        { name: 'LangChain', slug: 'langchain' },
        { name: 'OpenAI API', slug: 'openai' },
        { name: 'Hugging Face', slug: 'huggingface' },
        { name: 'Scikit-learn', slug: 'scikitlearn' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6 " />,
      items: [
        { name: 'AWS', slug: 'amazonaws' },
        { name: 'Google Cloud', slug: 'googlecloud' },
        { name: 'Docker', slug: 'docker' },
        { name: 'Kubernetes', slug: 'kubernetes' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Vercel', slug: 'vercel' },
      ],
    },
  ];

  const masteredTechnologies = [
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextdotjs' },
    { name: 'Python', slug: 'python' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'PyTorch', slug: 'pytorch' },
    { name: 'AWS', slug: 'amazonaws' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Jupyter', slug: 'jupyter' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Portfolio Showcase - Visual Project Display */}
      <section id="portfolio-section" className="py-2 md:py-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4 md:mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
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
                    Kassandra Properties VIP - Web App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Enterprise-grade construction & real estate platform featuring property listings, 
                    property management, and full Admin CMS with Supabase. 
                    Built with Next.js 15, React 19, Prisma, and Supabase.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'Admin CMS', 'NextAuth'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://construction-company-gamma.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      View Live Site
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
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NeuraGallery - AI Image Organization Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">
                        Full-Stack AI Application
                      </span>
                      <span className="px-3 py-1 bg-green-400/20 backdrop-blur rounded-full text-sm font-semibold">
                        Production Deployed
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      NeuraGallery - AI-Powered Image Organization
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      Intelligent Image Clustering with Deep Learning • Deployed on Azure
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-center">
                      <div className="text-3xl font-bold">95%</div>
                      <div className="text-sm text-white/80">Cost Reduction</div>
                      <div className="text-xs text-white/70">vs GPU instances</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 md:p-8">
                {/* Impact Statement */}
                <div className="bg-gray-50 dark:bg-gray-900/30 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Innovation in AI-Powered Organization
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Built a complete 3-tier microservices architecture that automatically organizes image collections using Meta's DINOv3
                    vision transformer. The platform intelligently groups similar images without manual sorting, featuring hierarchical
                    re-clustering with cached embeddings for instant analysis. Designed a cost-optimized cloud infrastructure running on
                    CPU instances (~$30/month) instead of expensive GPU instances (~$550/month), achieving 95% cost reduction while
                    maintaining full functionality.
                  </p>
                </div>

                {/* Architecture Overview */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Frontend */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Frontend</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Next.js PWA</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Next.js + TypeScript</strong> with Tailwind CSS
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Drag-and-drop</strong> interface
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Real-time progress</strong> tracking
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Backend API */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Backend API</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">FastAPI</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Azure Blob Storage</strong> integration
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>MongoDB + Redis</strong> for data & caching
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>RESTful API</strong> with session management
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ML Service */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">ML Service</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PyTorch + DINOv3</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>DINOv3 vision transformer</strong>
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>K-Means, HDBSCAN</strong> clustering
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Embedding caching</strong> for instant re-clustering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-4">Key Features & Innovations</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Hierarchical Re-clustering</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Cached embeddings enable instant re-clustering without recomputing AI</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Cost-Optimized Cloud</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">CPU-based architecture reduces costs by 95% vs GPU instances</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Session-Based Processing</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">UUID sessions with data isolation for concurrent users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Scalable Storage</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Azure Blob Storage with SAS tokens for horizontal scaling</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack and Links */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['PyTorch', 'DINOv3', 'FastAPI', 'Next.js', 'TypeScript', 'Azure', 'Docker', 'MongoDB', 'Redis'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a
                      href="https://dinov3-storyboard-app.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      Try Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Thesis Project Showcase - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Header with Grade Badge */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">
                        Bachelor Thesis
                      </span>
                      <span className="px-3 py-1 bg-yellow-400/20 backdrop-blur rounded-full text-sm font-semibold flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        Grade: 9/10
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      AI-Powered Aviation Contrail Monitoring System
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      EUROCONTROL MUAC • Feb 2025 - July 2025
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-center">
                      <div className="text-3xl font-bold">40%</div>
                      <div className="text-sm text-white/80">of aviation warming</div>
                      <div className="text-xs text-white/70">from contrail-cirrus</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 md:p-8">
                {/* Impact Statement */}
                <div className="bg-gray-50 dark:bg-gray-900/30 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Breakthrough Achievement
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Engineered the first validated end-to-end AI pipeline for ground-based contrail monitoring, combining computer vision, 
                    multi-object tracking, and flight data correlation. This pioneering prototype transforms ground-camera imagery into 
                    flight-resolved contrail datasets with 71.75% attribution accuracy, a major leap beyond prior work. The system enables 
                    real-time monitoring and mitigation strategies for aviation's hidden climate footprint, where contrails contribute 
                    ~40% of aviation's total warming effect.
                  </p>
                  {/* Download Thesis Button */}
                  <div className="flex justify-center">
                    <a
                      href="/Thesis_AchilleasLeivadiotis.pdf"
                      download="Thesis_AchilleasLeivadiotis.pdf"
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Full Thesis (PDF)
                    </a>
                  </div>
                </div>

                {/* Tracking Video - Full Width */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                    Multi-Object Tracking Demonstration
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-900 relative" style={{ minHeight: '300px' }}>
                    <video 
                      src="/MediaVid2.mp4"
                      className="w-full"
                      controls
                      muted
                      playsInline
                      autoPlay={false}
                      style={{ maxHeight: '500px', objectFit: 'contain' }}
                    >
                      <source src="/media1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
                    Norfair tracking algorithm demonstrating superior performance with MOTA: 43.3% and IDF1: 67.9%
                  </p>
                </div>

                {/* 3-Stage Pipeline */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Stage 1: Detection */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Stage 1: Detection</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Custom Detectron2 Pipeline</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Mask R-CNN (ResNet-101 FPN)</strong> optimized for contrail morphology
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>~65% mask mAP</strong> for segmentation
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>&gt;90% class accuracy</strong> for short, thin, wide, cirrus types
                        </p>
                      </div>
                    </div>
                    {/* Detection Image */}
                    <div className="mt-4 rounded-lg overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800" style={{ minHeight: '160px' }}>
                      <Image
                        src="/detection.png"
                        alt="Contrail Detection Visualization"
                        width={3524}
                        height={1958}
                        className="w-full h-40 object-cover"
                        style={{ display: 'block' }}
                        priority
                      />
                    </div>
                  </div>

                  {/* Stage 2: Tracking */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Stage 2: Tracking</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Temporal Association</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Evaluated <strong>DeepSORT vs Norfair</strong> with 15s gaps
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>MOTA: 43.3%</strong> (vs 11.3%)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>IDF1: 67.9%</strong> (vs 45.5%) - stable tracks
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stage 3: Attribution */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Stage 3: Attribution</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Flight Matching</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Novel 4D→2D Methods</strong>: Geometric & Convolution
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>71.75% overall attribution</strong>
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>95-100%</strong> for short, <strong>50-77%</strong> for thin
                        </p>
                      </div>
                    </div>
                    {/* Security Notice for Attribution */}
                    <div className="mt-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                        <div>
                          <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
                            Flight Data Protected
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            Attribution visualization restricted due to EUROCONTROL security protocols
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Python', 'Detectron2', 'DeepSORT', 'Norfair', 'Azure Databricks', 'Apache Spark', 'Computer Vision', 'PyTorch'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Equans MEP Automation Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-orange-950/30 dark:via-red-950/30 dark:to-yellow-950/30 rounded-2xl shadow-2xl overflow-hidden border border-orange-200 dark:border-orange-800">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">
                        Team Project with Equans
                      </span>
                      <span className="px-3 py-1 bg-yellow-400/20 backdrop-blur rounded-full text-sm font-semibold">
                        AI Lead Developer
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      AI-Powered MEP Component Automation
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      Revolutionizing Modular Construction with Automated MEP Placement
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-center">
                      <div className="text-3xl font-bold">&gt;50%</div>
                      <div className="text-sm text-white/80">Resource Savings</div>
                      <div className="text-xs text-white/70">in MEP modeling time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 md:p-8">
                {/* Project Overview */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                    Innovation in Construction AI
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    As AI Lead Developer, I designed and implemented a complete neural network system to automate Mechanical, 
                    Electrical, and Plumbing (MEP) component placement in modular construction projects. This proof-of-concept 
                    demonstrated how AI can drastically reduce manual MEP modeling time (currently consuming &gt;50% of project 
                    resources) while improving accuracy and supporting scalable workflows.
                  </p>
                </div>

                {/* Technical Implementation Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* AI System Architecture */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Dual Neural Network System</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PyTorch Implementation</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Type Predictor</strong>: Determines which MEP component to place
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Location Predictor</strong>: Calculates precise (x,y,z) coordinates
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>CNN Enhancement</strong>: Context window for spatial consistency
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>~70% accuracy</strong> in type prediction
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Superior Performance</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">vs Traditional Methods</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>AI System MAE: 1.1m</strong> placement error
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">→</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Expert System: ~2.3m MAE
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">→</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Random Baseline: ~4.0m MAE
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>2x improvement</strong> over expert systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pipeline Components */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-4">Complete Pipeline Implementation</h5>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-2 shadow">
                        <svg className="w-8 h-8 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Data Extraction</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Revit → JSON</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-2 shadow">
                        <svg className="w-8 h-8 mx-auto text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">AI Processing</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PyTorch NNs</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-2 shadow">
                        <svg className="w-8 h-8 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Training</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">70% Accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-2 shadow">
                        <svg className="w-8 h-8 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">3D Visualization</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">GUI Interface</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-2 shadow">
                        <svg className="w-8 h-8 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Integration</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Back to Revit</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack and Download */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['PyTorch', 'Autodesk Revit', 'CNN', 'Python', '3D Modeling', 'JSON', 'OBJ Mesh'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Download Report Button */}
                  <a
                    href="/Draft_Report__Group_1_.pdf"
                    download="Equans_MEP_Project_Report.pdf"
                    className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Project Report
                  </a>
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
      

      {/* Technology Stack Section - Enhanced Design */}
      <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-950/50 dark:to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6"
            >
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                TECHNOLOGY STACK
              </span>
              <span className="text-orange-500">⚡</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Technology </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge technologies to deliver exceptional solutions
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-2">
              A carefully curated toolkit spanning modern frontend frameworks, resilient backend systems, AI research, and cloud infrastructure.
            </p>
          </motion.div>

          {/* Technology Categories Grid with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {techCategories.map((category, index) => {
              const gradients = [
                'from-blue-500 to-cyan-600',
                'from-emerald-500 to-green-600',
                'from-purple-500 to-pink-600',
                'from-orange-500 to-red-600'
              ];
              const bgGradients = [
                'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
                'from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20',
                'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
                'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20'
              ];
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30, rotateY: -30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  {/* Card glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  
                  <div className={`relative bg-gradient-to-br ${bgGradients[index]} backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                    {/* Animated gradient header */}
                    <div className={`h-2 bg-gradient-to-r ${gradients[index]}`}></div>
                    
                    <div className="px-6 py-5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} shadow-lg`}
                          >
                            <div className="text-white">{category.icon}</div>
                          </motion.div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
                            <span className="text-xs text-gray-500 dark:text-gray-400"></span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors group/item"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md group-hover/item:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                              <img
                                src={`https://cdn.simpleicons.org/${item.slug}`}
                                alt={item.name}
                                className="h-6 w-6"
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  if (e.currentTarget.nextElementSibling) {
                                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                              <span className="hidden text-xs font-bold text-gray-600 dark:text-gray-400 items-center justify-center">
                                {item.name.slice(0, 3).toUpperCase()}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                              {item.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technologies We Master - Bottom Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Technologies I Master
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Hands-on experience with production deployments, research prototypes, and collaborative engineering environments.
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {masteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
                    
                    <div className="relative">
                      <div className="h-14 w-14 mx-auto mb-3 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        <img
                          src={`https://cdn.simpleicons.org/${tech.slug}`}
                          alt={tech.name}
                          className="h-8 w-8"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.nextElementSibling) {
                              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                            }
                          }}
                        />
                        <span className="hidden text-lg font-bold text-gray-600 dark:text-gray-400">
                          {tech.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <p className="text-center text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Space-Themed CTA Section */}
      <section className="py-6 md:py-10 relative overflow-hidden">
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
    </main>
  );
}
