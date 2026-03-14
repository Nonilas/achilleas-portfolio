'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import BookPage from './BookPage';

export default function MissivePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <BookPage pageNumber={5}>
      {/* Title */}
      <h2 className="text-2xl md:text-3xl text-[#8B0000] font-display pb-3 mb-4 border-b border-[#D4AF37]/40">
        Send a Missive
      </h2>

      {/* Intro text */}
      <p className="text-[#2C1A12] leading-relaxed mb-6 text-sm md:text-base">
        Should you seek counsel in the realms of Artificial Intelligence, Data Science, or the
        construction of robust systems, the channels of communication await.
      </p>

      {/* Contact links */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a
          href="mailto:achilleasleiv@gmail.com"
          className="flex items-center justify-center gap-2 py-2.5 px-4 border border-[#D4AF37]/50 bg-[#8B0000]/5 hover:bg-[#8B0000]/10 text-[#2C1A12] transition-colors rounded-sm group flex-1"
        >
          <Mail className="w-4 h-4 text-[#8B0000] group-hover:scale-110 transition-transform" />
          <span className="font-semibold tracking-wide text-sm">Email</span>
        </a>

        <a
          href="https://github.com/Nonilas"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 border border-[#D4AF37]/50 bg-[#8B0000]/5 hover:bg-[#8B0000]/10 text-[#2C1A12] transition-colors rounded-sm group flex-1"
        >
          <Github className="w-4 h-4 text-[#8B0000] group-hover:scale-110 transition-transform" />
          <span className="font-semibold tracking-wide text-sm">GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/achilleas-leivadiotis"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 border border-[#D4AF37]/50 bg-[#8B0000]/5 hover:bg-[#8B0000]/10 text-[#2C1A12] transition-colors rounded-sm group flex-1"
        >
          <Linkedin className="w-4 h-4 text-[#8B0000] group-hover:scale-110 transition-transform" />
          <span className="font-semibold tracking-wide text-sm">LinkedIn</span>
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#f5e6ce] border border-[#D4AF37]/40 rounded-sm text-[#2C1A12] placeholder:text-[#4A3A32]/50 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#f5e6ce] border border-[#D4AF37]/40 rounded-sm text-[#2C1A12] placeholder:text-[#4A3A32]/50 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-[#f5e6ce] border border-[#D4AF37]/40 rounded-sm text-[#2C1A12] placeholder:text-[#4A3A32]/50 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-[#f5e6ce] border border-[#D4AF37]/40 rounded-sm text-[#2C1A12] placeholder:text-[#4A3A32]/50 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 bg-[#8B0000] text-[#f5e6ce] font-display font-bold tracking-widest uppercase text-sm rounded-sm border border-[#D4AF37]/40 hover:bg-[#6e0000] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Dispatching...' : 'Send Missive'}
        </button>

        {/* Status messages */}
        {submitStatus === 'success' && (
          <div className="text-center text-sm text-[#2C1A12] bg-[#D4AF37]/20 border border-[#D4AF37]/40 py-2 rounded-sm">
            Your missive has been dispatched successfully.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="text-center text-sm text-[#8B0000] bg-[#8B0000]/10 border border-[#8B0000]/30 py-2 rounded-sm">
            The raven could not deliver your message. Please try again.
          </div>
        )}
      </form>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-[#4A3A32] opacity-50 font-display">
        Explicitly Coded by Achilleas Leivadiotis
      </div>
    </BookPage>
  );
}
