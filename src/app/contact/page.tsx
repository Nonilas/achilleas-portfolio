'use client';

import React from 'react';
import ContactForm from '@/components/sections/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "achilleasleiv@gmail.com",
      link: "mailto:achilleasleiv@gmail.com",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      content: "github.com/Nonilas",
      link: "https://github.com/Nonilas",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      content: "Achilleas Leivadiotis",
      link: "https://linkedin.com/in/achilleas-leivadiotis",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    }
  ];

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you have a project in mind, need technical expertise, or just want to discuss ideas, 
            I'm always excited to hear from you.
          </p>
        </motion.div>

        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Contact cards with gradient backgrounds */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : undefined}
                rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`block group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} ${item.hoverColor} transition-all duration-300`}></div>
                <div className="relative p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      {item.icon}
                    </div>
                    <Send className="h-5 w-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.content}</p>
                </div>
              </motion.a>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Response Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                I typically respond to messages within 24-48 hours. For urgent matters, please mention it in your message.
              </p>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Currently available</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Enhanced Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send Me a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Looking for my resume?
              </h3>
              <p className="mb-6 opacity-95">
                Download my CV to learn more about my experience and qualifications.
              </p>
              <a
                href="/Achilleas_Leivadiotis_Resume.pdf"
                download="Achilleas_Leivadiotis_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}