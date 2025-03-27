// src/app/contact/page.tsx
import ContactForm from '@/components/sections/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side - Contact info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
              </div>
              <a href="mailto:achilleasleiv@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                achilleasleiv@gmail.com
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Github className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h3>
              </div>
              <a href="https://github.com/Nonilas" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                github.com/Nonilas
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Linkedin className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
              </div>
              <a href="https://linkedin.com/in/achilleas-leivadiotis" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                linkedin.com/in/achilleas-leivadiotis
              </a>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}