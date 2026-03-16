export interface NewsItem {
  title: string;
  description: string;
  category: 'ai-ml' | 'aviation' | 'software' | 'science' | 'greek' | 'general';
  categoryLabel: string;
  categoryColor: string;
  date: string;
  sourceUrl?: string;
  sourceName?: string;
}

export const news: NewsItem[] = [
  // 2026
  {
    title: 'Ancient DNA is rewriting human history',
    description:
      'The Allen Ancient DNA Resource (AADR) now has thousands of ancient genomes. I used AADR v54+ in my Byzantine DNA Analyzer to trace my own Greek ancestry back to Byzantine-era populations.',
    category: 'science',
    categoryLabel: 'Science',
    categoryColor: '#f59e0b',
    date: '2026-03',
  },
  {
    title: 'Byzantine heritage deserves more visibility',
    description:
      'The Byzantine Empire (330-1453 CE) shaped European civilization but is often overlooked. I built the Byzantine DNA Analyzer partly to spotlight this heritage through the lens of genomics.',
    category: 'greek',
    categoryLabel: 'Greece',
    categoryColor: '#0284c7',
    date: '2026-02',
  },

  // 2025
  {
    title: 'Claude 4 family released by Anthropic',
    description:
      'Anthropic launched the Claude 4 model family including Opus, Sonnet, and Haiku. Major leap in reasoning, coding, and agentic capabilities. The model I use daily for development.',
    category: 'ai-ml',
    categoryLabel: 'AI / ML',
    categoryColor: '#8b5cf6',
    date: '2025-12',
    sourceUrl: 'https://www.anthropic.com',
    sourceName: 'Anthropic',
  },
  {
    title: 'Expo SDK 54 makes cross-platform mobile seamless',
    description:
      'Expo Router, Reanimated 4, and the new architecture make React Native feel truly native. Built two production mobile apps on this stack this year.',
    category: 'software',
    categoryLabel: 'Software',
    categoryColor: '#2563eb',
    date: '2025-10',
  },
  {
    title: 'Open-source AI models are closing the gap',
    description:
      'Meta\'s Llama, Mistral, and DeepSeek are pushing open-weight models closer to frontier performance. Great for the ecosystem and for researchers who want to fine-tune on their own data.',
    category: 'ai-ml',
    categoryLabel: 'AI / ML',
    categoryColor: '#8b5cf6',
    date: '2025-09',
  },
  {
    title: 'AI code assistants are reshaping software engineering',
    description:
      'Tools like Claude Code, GitHub Copilot, and Cursor are changing how engineers write software. The focus is shifting from writing boilerplate to higher-level system design and review.',
    category: 'ai-ml',
    categoryLabel: 'AI / ML',
    categoryColor: '#8b5cf6',
    date: '2025-08',
  },
  {
    title: 'React Server Components are production-ready',
    description:
      'Next.js App Router with RSC has matured. Server-first rendering with selective client hydration is the new default. My portfolio and most Vadiotech projects are built on this stack.',
    category: 'software',
    categoryLabel: 'Software',
    categoryColor: '#2563eb',
    date: '2025-07',
  },
  {
    title: 'Contrails account for ~40% of aviation warming',
    description:
      'Research continues to confirm that contrails and contrail-cirrus have a larger climate forcing effect than CO2 from fuel burn alone. This is exactly what we work on at EUROCONTROL with the COAV system.',
    category: 'aviation',
    categoryLabel: 'Aviation',
    categoryColor: '#0ea5e9',
    date: '2025-06',
  },
  {
    title: 'Consumer genomics meets population genetics',
    description:
      'Affordable DNA kits (23andMe, MyHeritage) combined with open tools like PLINK, ADMIXTURE, and smartPCA let anyone do real population genetics. I built a full pipeline around this.',
    category: 'science',
    categoryLabel: 'Science',
    categoryColor: '#f59e0b',
    date: '2025-04',
  },
  {
    title: 'Edge computing and serverless keep maturing',
    description:
      'Vercel, Cloudflare Workers, and Supabase Edge Functions are making it easy to deploy fast, globally distributed apps without managing infrastructure.',
    category: 'software',
    categoryLabel: 'Software',
    categoryColor: '#2563eb',
    date: '2025-03',
  },
  {
    title: 'Greece\'s tech scene is growing',
    description:
      'Athens and Thessaloniki are becoming real tech hubs. More startups, better infrastructure, and a growing community of engineers working on international projects from Greece.',
    category: 'greek',
    categoryLabel: 'Greece',
    categoryColor: '#0284c7',
    date: '2025-01',
  },
];

export const newsCategories = [
  { value: 'all', label: 'All' },
  { value: 'ai-ml', label: 'AI / ML' },
  { value: 'aviation', label: 'Aviation' },
  { value: 'software', label: 'Software' },
  { value: 'science', label: 'Science' },
  { value: 'greek', label: 'Greece' },
] as const;
