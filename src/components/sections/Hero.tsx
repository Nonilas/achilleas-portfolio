'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, Database, Code, Server, Braces, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  icon: ReactNode;
}

interface ParticleAnimationProps {
  width: number;
  height: number;
  particleCount: number;
}

// Separate client-only component for the canvas animation
const ParticleAnimation = ({ width, height, particleCount }: ParticleAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Create particles with seeded random numbers
    // This helps avoid hydration errors by using deterministic values
    let seed = 42; // Fixed seed for deterministic randomness
    const random = (min: number, max: number) => {
      seed = (seed * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      return min + rnd * (max - min);
    };

    type Particle = {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    };

    const particles: Particle[] = [];
    
    // Use a smaller number of particles on smaller screens
    const actualParticleCount = window.innerWidth < 768 ? Math.floor(particleCount / 2) : particleCount;
    
    for (let i = 0; i < actualParticleCount; i++) {
      const radius = 1 + Math.random();
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        vx: (Math.random() - 0.5) * 0.7, // Slower movement on mobile
        vy: (Math.random() - 0.5) * 0.7,
        color: `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, 255, ${0.3 + Math.random() * 0.4})`
      });
    }
    
    // Animation loop with rate limiting for mobile
    let lastTime = 0;
    const fps = window.innerWidth < 768 ? 30 : 60; // Lower FPS on mobile
    const fpsInterval = 1000 / fps;
    
    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime;
      
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        
        ctx.clearRect(0, 0, width, height);
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          // Move particles
          p.x += p.vx;
          p.y += p.vy;
          
          // Bounce off edges
          if (p.x < 0 || p.x > width) p.vx = -p.vx;
          if (p.y < 0 || p.y > height) p.vy = -p.vy;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          
          // Draw connections - limit connection checks on mobile
          const connectionLimit = window.innerWidth < 768 ? 5 : particles.length;
          for (let j = i + 1; j < Math.min(i + connectionLimit, particles.length); j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const connectionDistance = window.innerWidth < 768 ? 70 : 100;
            if (distance < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              const opacity = 0.15 * (1 - distance / connectionDistance);
              ctx.strokeStyle = `rgba(150, 180, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    let animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, particleCount]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
    />
  );
};

// Main Hero Visualization Component with client-side only features
const HeroVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isClient, setIsClient] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  
  const titles = ["MLEngineer", "AIResearcher", "DataScientist", "DevOPS", "FullStackDev", ".NETDeveloper"];
  
  const skills: Skill[] = [
    { name: "Machine Learning", icon: <Cpu className="h-5 w-5 text-purple-400" /> },
    { name: "Computer Vision", icon: <Code className="h-5 w-5 text-yellow-400" /> },
    { name: "Data Science", icon: <Database className="h-5 w-5 text-blue-400" /> },
    { name: "Cloud Computing", icon: <Server className="h-5 w-5 text-green-400" /> },
    { name: "Full-Stack Dev", icon: <Braces className="h-5 w-5 text-pink-400" /> },
    { name: ".NET/C# Dev", icon: <Code className="h-5 w-5 text-cyan-400" /> }
  ];
  
  // Rotating code snippets - Keep shorter for better mobile display
  const codeSnippets = [
    `# AI model training
model = Sequential([
  Dense(128, activation='relu'),
  Dropout(0.2),
  Dense(10, activation='softmax')
])`,
    `# Computer vision
cv2.CascadeClassifier()
face = cv2.detectMultiScale(
  gray, 1.3, 5)`,
    `# Data analysis
df = pd.read_csv('data.csv')
df.groupby('category').mean()`,
    `# Cloud deployment
terraform {
  required_providers {
    aws = { source = "aws" }
  }
}`,
    `// React component
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
}`,
    `// C# .NET MAUI
public class AppointmentService {
  private readonly IRepository _repo;
  public async Task<Booking> 
    CreateAsync(BookingRequest req)
}`
  ];

  // Client-side only code
  useEffect(() => {
    setIsClient(true);
    
    // Update dimensions based on container size
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Set intervals for animations
    const skillInterval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length);
    }, 5000);
    
    const titleInterval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearInterval(skillInterval);
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg shadow-2xl overflow-hidden"
    >
      {/* Neural network background - only render on client */}
      {isClient && (
        <ParticleAnimation 
          width={dimensions.width} 
          height={dimensions.height}
          particleCount={60}
        />
      )}
      
      {/* Glowing accents - fixed positions to avoid hydration issues */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500 opacity-30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500 opacity-30 blur-3xl" />
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Glowing data scientist tag with color gradient */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 30px rgba(124, 58, 237, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-4 md:mb-6 px-4 py-2 md:px-5 md:py-3 bg-opacity-20 bg-gray-900 backdrop-blur-md rounded-lg border border-blue-800"
        >
          <motion.div
            className="font-mono text-2xl md:text-3xl"
            animate={{ color: ["#60a5fa", "#8b5cf6", "#3b82f6"] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {isClient ? `<${titles[titleIndex]} />` : '<DataScientist />'}
          </motion.div>
        </motion.div>
        
        {/* Rotating skill badges */}
        <motion.div
          key={isClient ? currentSkill : 0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full gap-2 text-sm md:text-base text-white"
          style={{ 
            background: 'linear-gradient(90deg, rgba(30,30,50,0.6) 0%, rgba(60,60,90,0.6) 100%)',
            borderLeft: `3px solid ${
              !isClient || currentSkill === 0 ? '#a78bfa' : 
              currentSkill === 1 ? '#fbbf24' :
              currentSkill === 2 ? '#60a5fa' :
              currentSkill === 3 ? '#6ee7b7' :
              '#f472b6'
            }`
          }}
        >
          {isClient ? skills[currentSkill].icon : skills[0].icon}
          <span>{isClient ? skills[currentSkill].name : skills[0].name}</span>
        </motion.div>
        
        {/* Terminal with adaptive height and scrolling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 md:mt-6 w-11/12 md:w-4/5 max-w-md bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-lg overflow-hidden border border-gray-800"
        >
          {/* Terminal header */}
          <div className="bg-gray-800 px-2 py-1 md:px-4 md:py-2 flex items-center justify-between">
            <div className="flex space-x-1 md:space-x-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"/>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"/>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"/>
            </div>
            <div className="ml-2 text-xs text-gray-400 font-mono flex-1">code-editor</div>
            <div className="text-xs text-gray-500 hidden md:block">{currentSkill === 0 ? 'Python' : currentSkill === 1 ? 'Python' : currentSkill === 2 ? 'Python' : currentSkill === 3 ? 'HCL' : currentSkill === 4 ? 'JavaScript' : 'C#'}</div>
          </div>
          
          {/* Terminal body with adaptive height and scrolling */}
          <div className="px-2 py-2 md:px-4 md:py-3 font-mono text-xs md:text-sm text-green-400 overflow-y-auto custom-scrollbar" style={{ height: '125px' }}>
            <motion.div
              key={isClient ? currentSkill : 0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="whitespace-pre-wrap"
            >
              {(isClient ? codeSnippets[currentSkill] : codeSnippets[0]).split('\n').map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 w-5 md:w-6 flex-shrink-0 text-right pr-1">{index + 1}</span>
                  <span className="break-words pl-2">{line}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side: Text content */}
          <div className="lg:w-1/2 lg:pr-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              <span className="block">Hi, I&apos;m </span>
              <span className="block text-blue-600 dark:text-blue-400">Achilleas Leivadiotis</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8"
            >
              A passionate Data Science & AI student specializing in machine learning, computer vision, full-stack development, and .NET/C# applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <Link href="/projects" className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-gray-300 dark:border-gray-600 text-sm md:text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                About Me
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-gray-300 dark:border-gray-600 text-sm md:text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                Contact Me
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4"
            >
              <Link 
                href="https://github.com/Nonilas" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://linkedin.com/in/achilleas-leivadiotis" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="mailto:achilleasleiv@gmail.com" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
          
          {/* Right side: Modern visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:w-1/2 mt-8 md:mt-10 lg:mt-0 w-full"
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
}