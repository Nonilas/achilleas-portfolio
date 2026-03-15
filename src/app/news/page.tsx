'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { news, newsCategories } from '@/data/news';
import { motion } from 'framer-motion';

function formatDate(date: string) {
  const [year, month] = date.split('-');
  if (!month) return year;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = (
    activeCategory === 'all'
      ? [...news]
      : news.filter((n) => n.category === activeCategory)
  ).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            News I Like
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Topics I follow, things that excite me, and stories from the
            industries I work in.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {newsCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-black transition-colors ${
                activeCategory === cat.value
                  ? 'bg-black text-white'
                  : 'hover:bg-[var(--color-accent-lime)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News items */}
        <div className="space-y-0">
          {filtered.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="border-t-2 border-black py-6"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border border-black"
                    style={{ backgroundColor: item.categoryColor + '20', borderColor: item.categoryColor }}
                  >
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {formatDate(item.date)}
                  </span>
                </div>
              </div>

              <h2 className="text-lg font-bold tracking-tight mb-2">
                {item.title}
              </h2>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                {item.description}
              </p>

              {item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-[var(--color-accent-blue)] hover:underline"
                >
                  {item.sourceName || 'Source'}
                  <ExternalLink size={12} className="ml-1" />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        {/* Footer note */}
        <div className="border-t-2 border-black pt-6 mt-2">
          <p className="text-xs text-[var(--color-text-secondary)]">
            These are topics and stories I find interesting. Updated whenever
            something catches my eye.
          </p>
        </div>
      </div>
    </main>
  );
}
