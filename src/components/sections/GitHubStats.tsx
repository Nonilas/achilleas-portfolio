'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Calendar, Code, Activity, TrendingUp, Users, Zap } from 'lucide-react';

// Mock enhanced stats based on your actual profile
const enhancedStats = {
  totalRepos: 12,
  totalStars: 8,
  totalForks: 3,
  totalCommits: 156,
  contributionsThisYear: 89,
  longestStreak: 12,
  currentStreak: 5,
  mostUsedLanguages: {
    'TypeScript': 35,
    'Python': 25,
    'JavaScript': 20,
    'CSS': 12,
    'HTML': 8
  },
  recentActivity: '2025-01-19',
  topProjects: [
    { name: 'achilleas-portfolio', stars: 2, language: 'TypeScript' },
    { name: 'BuildCraft', stars: 3, language: 'Next.js' },
    { name: 'AI-Image-Detector', stars: 1, language: 'Python' }
  ]
};

export default function GitHubStatsSection() {
  const topLanguages = Object.entries(enhancedStats.mostUsedLanguages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': 'from-blue-500 to-blue-600',
      'Python': 'from-yellow-500 to-yellow-600', 
      'JavaScript': 'from-yellow-400 to-yellow-500',
      'CSS': 'from-purple-500 to-purple-600',
      'HTML': 'from-orange-500 to-orange-600',
      'Next.js': 'from-black to-gray-700'
    };
    return colors[language] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
            <Github className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            GitHub Developer Profile
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my coding journey, contributions, and technical expertise across various projects.
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Public Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Public Repositories
              </p>
              <motion.p
                className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {enhancedStats.totalRepos}
              </motion.p>
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +2 this month
              </p>
            </div>
          </motion.div>

          {/* Total Stars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 dark:from-yellow-400/10 dark:to-orange-400/10" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="h-4 w-4 text-yellow-500" />
                </motion.div>
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Total Stars Earned
              </p>
              <motion.p
                className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {enhancedStats.totalStars}
              </motion.p>
              <p className="text-xs text-blue-600 dark:text-blue-400 flex items-center">
                <Star className="h-3 w-3 mr-1" /> Across {enhancedStats.totalRepos} projects
              </p>
            </div>
          </motion.div>

          {/* Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 dark:from-green-400/10 dark:to-emerald-400/10" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-6 bg-green-400 rounded-full"
                      animate={{ height: [6, Math.random() * 20 + 6, 6] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Contributions (2025)
              </p>
              <motion.p
                className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {enhancedStats.contributionsThisYear}
              </motion.p>
              <p className="text-xs text-purple-600 dark:text-purple-400 flex items-center">
                <Users className="h-3 w-3 mr-1" /> Current streak: {enhancedStats.currentStreak} days
              </p>
            </div>
          </motion.div>

          {/* Commits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-400/10 dark:to-pink-400/10" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <GitFork className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <Calendar className="h-4 w-4 text-purple-500" />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Total Commits
              </p>
              <motion.p
                className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {enhancedStats.totalCommits}
              </motion.p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Last push: {formatDate(enhancedStats.recentActivity)}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Languages & Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-3">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technology Stack
              </h3>
            </div>

            <div className="space-y-4">
              {topLanguages.map(([language, percentage], index) => {
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-yellow-500 to-orange-500',
                  'from-green-500 to-emerald-500',
                  'from-purple-500 to-pink-500',
                  'from-red-500 to-rose-500'
                ];
                
                return (
                  <motion.div
                    key={language}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getLanguageColor(language)}`} />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {language}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${getLanguageColor(language)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Top Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mr-3">
                <Star className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h3>
            </div>

            <div className="space-y-4">
              {enhancedStats.topProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {project.language}
                      </p>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-3 w-3 mr-1" />
                      <span className="text-sm font-medium">{project.stars}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced GitHub Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <a
              href="https://github.com/Nonilas"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-2xl bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Github className="h-6 w-6" />
                </motion.div>
                <span className="text-lg">Explore My GitHub</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <TrendingUp className="h-5 w-5" />
                </motion.div>
              </div>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Follow my coding journey • {enhancedStats.contributionsThisYear} contributions this year
          </p>
        </motion.div>
      </div>
    </section>
  );
}