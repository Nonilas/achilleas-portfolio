import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GitHubProject } from '@/utils/github';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

interface ProjectCardProps {
  project: GitHubProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h3>
          <div className="flex space-x-2">
            <Link 
              href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            {project.homepage && (
              <Link 
                href={project.homepage} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <ExternalLink size={20} />
                <span className="sr-only">Live Demo</span>
              </Link>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description || 'No description provided.'}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 4).map(topic => (
            <span 
              key={topic} 
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {project.language}
          </span>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Star size={16} className="mr-1" />
              <span>{project.stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <GitFork size={16} className="mr-1" />
              <span>{project.forks_count}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}