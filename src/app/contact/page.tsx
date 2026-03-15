'use client';

import ContactForm from '@/components/sections/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    title: 'Email',
    content: 'achilleasleiv@gmail.com',
    link: 'mailto:achilleasleiv@gmail.com',
  },
  {
    icon: <Github size={20} />,
    title: 'GitHub',
    content: 'github.com/Nonilas',
    link: 'https://github.com/Nonilas',
  },
  {
    icon: <Linkedin size={20} />,
    title: 'LinkedIn',
    content: 'Achilleas Leivadiotis',
    link: 'https://linkedin.com/in/achilleas-leivadiotis',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Have a project in mind, need technical expertise, or just want to
            discuss ideas? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left  - Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 border-2 border-black hover:bg-[var(--color-accent-lime)] transition-colors group"
              >
                <span className="text-[var(--color-text-secondary)] group-hover:text-black">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">
                    {item.title}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] group-hover:text-black">
                    {item.content}
                  </p>
                </div>
              </a>
            ))}

            {/* Response time */}
            <div className="border-2 border-black p-4">
              <p className="text-xs font-bold uppercase tracking-wider mb-2">
                Response Time
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                I typically respond within 24–48 hours.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-[var(--color-text-secondary)]">
                  Currently available
                </span>
              </div>
            </div>

            {/* Resume */}
            <a
              href="/Leivadiotis_Achilleas_Resume.pdf"
              download
              className="block text-center px-4 py-3 border-2 border-black text-sm font-medium hover:bg-[var(--color-bg)] transition-colors"
            >
              Download Resume (PDF)
            </a>
          </motion.div>

          {/* Right  - Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="border-2 border-black p-6 md:p-8 bg-[var(--color-surface)]">
              <h2 className="text-xl font-bold mb-1">Send a Message</h2>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                Fill out the form and I&apos;ll get back to you.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
