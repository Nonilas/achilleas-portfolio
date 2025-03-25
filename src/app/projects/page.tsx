import React from 'react';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/utils/github';
import ProjectCard from '@/components/ui/ProjectCard';

export default async function ProjectsPage() {
  // Get projects from GitHub
  const projects = await getFeaturedProjects('Nonilas');

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
            A collection of my work, side projects, and experiments.
          </p>
        </motion.div>

        {/* Filter options */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white">
              All Projects
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              Frontend
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              Backend
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              Full Stack
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}