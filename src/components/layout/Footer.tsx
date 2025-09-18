'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Nonilas',
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/achilleas-leivadiotis',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'Email',
      href: 'mailto:achilleasleiv@gmail.com',
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const techStack = [
    'Python', 'TypeScript', 'C#', 'React', 'Next.js', '.NET MAUI', 'PyTorch', 'TensorFlow'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Achilleas Leivadiotis</h3>
            <p className="text-sm text-gray-400">
              Data Science & AI Student specializing in machine learning, computer vision, and full-stack development.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tech Stack */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Contact & Social */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Open to opportunities and collaborations
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-500 mb-4 md:mb-0">
              <span>© {currentYear} Achilleas Leivadiotis. All rights reserved.</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center">
                Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js & TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}