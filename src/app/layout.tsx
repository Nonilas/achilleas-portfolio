import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Achilleas Leivadiotis  - Software Engineer',
  description:
    'Portfolio of Achilleas Leivadiotis  - Software Engineer, ML Engineer, and Full-Stack Developer. Currently at EUROCONTROL.',
  keywords: [
    'Software Engineer',
    'ML Engineer',
    'Full-Stack Developer',
    'AI',
    'Machine Learning',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
  ],
  icons: {
    icon: '/icon.svg',
  },
  authors: [{ name: 'Achilleas Leivadiotis' }],
  creator: 'Achilleas Leivadiotis',
  openGraph: {
    title: 'Achilleas Leivadiotis  - Software Engineer',
    description:
      'Software Engineer, ML Engineer & Full-Stack Developer. Explore my work in AI/ML, full-stack, and mobile development.',
    url: 'https://achilleasleivadiotis.com',
    siteName: 'Achilleas Leivadiotis',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achilleas Leivadiotis  - Software Engineer',
    description:
      'Software Engineer, ML Engineer & Full-Stack Developer. Explore my work.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} antialiased`}
      >
        <Navigation />
        <div className="pt-16">{children}</div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
