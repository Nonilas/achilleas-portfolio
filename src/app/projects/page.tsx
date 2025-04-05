'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/utils/github';
import ProjectCard from '@/components/ui/ProjectCard';
import type { GitHubProject } from '@/utils/github';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getFeaturedProjects('Nonilas');
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Add custom projects not in GitHub to showcase your AI projects
  const customProjects: GitHubProject[] = [
    {
      id: 10001,
      name: "3D MEP Component Location/Type Predictor",
      description: "AI system that automatically places MEP (Mechanical, Electrical, Plumbing) components in a 3D Revit building model, predicting both (x,y,z) coordinates and type. Built with PyTorch neural networks (MLP & 1D CNN with depthwise/residual blocks).",
      html_url: "#",
      homepage: null,
      topics: ["ai", "machine-learning", "pytorch", "3d-modeling", "mep", "revit"],
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2025-02-01T00:00:00Z"
    },
    {
      id: 10002,
      name: "AI Image Detector",
      description: "Predictive modeling to identify AI-generated images. Developed Convolutional and residual neural networks with a front-end interface to upload images and view heatmaps of detection results. Grade: 9.5/10",
      html_url: "#",
      homepage: null,
      topics: ["ai", "computer-vision", "image-detection", "convolutional-neural-networks", "deep-learning"],
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2024-07-01T00:00:00Z"
    },
    {
      id: 10003,
      name: "UNO Game with AI Bots",
      description: "Recreation of the UNO card game with AI-driven bots. Implemented Monte Carlo search algorithms and neural-network-based strategy with a graphical user interface.",
      html_url: "#",
      homepage: null,
      topics: ["game-ai", "monte-carlo", "neural-networks", "uno", "card-game"],
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2024-01-15T00:00:00Z"
    }
  ];

  // Combine GitHub projects with custom projects
  const allProjects = [...customProjects, ...projects];

  // Filter projects if needed
  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(project => {
        if (filter === 'AI/ML' && (project.topics?.includes('ai') || project.topics?.includes('machine-learning'))) {
          return true;
        }
        if (filter === 'Frontend' && (project.topics?.includes('frontend') || project.language === 'JavaScript' || project.language === 'TypeScript')) {
          return true;
        }
        if (filter === 'Backend' && (project.topics?.includes('backend') || project.language === 'Python' || project.language === 'Node.js')) {
          return true;
        }
        return false;
      });

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
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A collection of my work in AI, machine learning, and software development.
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400 mt-2">
            Note: Some projects are private due to company or university restrictions.
          </p>
        </motion.div>

        {/* Filter options */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-full ${
                filter === 'All' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('AI/ML')}
              className={`px-4 py-2 rounded-full ${
                filter === 'AI/ML' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              AI & Machine Learning
            </button>
            <button 
              onClick={() => setFilter('Frontend')}
              className={`px-4 py-2 rounded-full ${
                filter === 'Frontend' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setFilter('Backend')}
              className={`px-4 py-2 rounded-full ${
                filter === 'Backend' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              Backend
            </button>
          </div>
        </div>

        {/* Projects grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Loading projects...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found with the selected filter. Try a different category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}