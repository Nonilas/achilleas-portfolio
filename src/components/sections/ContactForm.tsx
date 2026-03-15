'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Error response:', data.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputClass =
    'w-full px-4 py-2.5 text-sm border-2 border-black bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:ring-offset-1';

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider mb-1.5">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClass}
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center px-6 py-2.5 text-sm font-medium border-2 border-black transition-colors ${
            isSubmitting
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-black text-white hover:bg-[var(--color-accent-lime)] hover:text-black'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={14} className="ml-2" />
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 border-2 border-green-600 bg-green-50 text-green-800 text-sm">
          Your message has been sent successfully. I&apos;ll get back to you soon!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 border-2 border-red-600 bg-red-50 text-red-800 text-sm">
          There was an error sending your message. Please try again later.
        </div>
      )}
    </form>
  );
}
