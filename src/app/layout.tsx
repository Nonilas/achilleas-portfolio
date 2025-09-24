// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeButton from "../components/ui/HomeButton";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achilleas Leivadiotis - AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of Achilleas Leivadiotis - Data Science & AI student specializing in machine learning, computer vision, and full-stack development with experience in .NET, TypeScript, and Python.",
  keywords: ["AI Engineer", "Machine Learning", "Full-Stack Developer", "Data Science", "Computer Vision", "Python", "TypeScript", "C#", ".NET", "React", "Next.js"],
  authors: [{ name: "Achilleas Leivadiotis" }],
  creator: "Achilleas Leivadiotis",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "Achilleas Leivadiotis - AI/ML Engineer & Full-Stack Developer",
    description: "Explore my portfolio featuring AI/ML projects, full-stack applications, and enterprise solutions.",
    url: "https://achilleasleivadiotis.com",
    siteName: "Achilleas Leivadiotis Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achilleas Leivadiotis - AI/ML Engineer & Full-Stack Developer",
    description: "Explore my portfolio featuring AI/ML projects, full-stack applications, and enterprise solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          {children}
        </div>
        <HomeButton />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}