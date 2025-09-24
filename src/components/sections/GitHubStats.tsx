'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiAngular,
  SiNodedotjs, SiPython, SiJupyter, SiExpress, SiFastapi, SiPostgresql,
  SiTensorflow, SiPytorch, SiOpenaigym, SiScikitlearn,
  SiAmazon, SiGooglecloud, SiDocker, SiKubernetes, SiMongodb, SiVercel,
  SiJavascript, SiHtml5, SiCss3, SiFirebase, SiSupabase, SiPrisma
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { BiLogoFlutter } from 'react-icons/bi';

export default function GitHubStats() {
  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Technology <span className="text-orange-500">Stack</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Leveraging cutting-edge technologies to deliver exceptional solutions
            </p>
          </div>

          {/* Technology Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Frontend */}
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                Frontend
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SiReact className="text-2xl text-[#61DAFB]" />
                  <span className="text-gray-700 dark:text-gray-300">React</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiNextdotjs className="text-2xl text-black dark:text-white" />
                  <span className="text-gray-700 dark:text-gray-300">Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiTypescript className="text-2xl text-[#3178C6]" />
                  <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiTailwindcss className="text-2xl text-[#06B6D4]" />
                  <span className="text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiVuedotjs className="text-2xl text-[#4FC08D]" />
                  <span className="text-gray-700 dark:text-gray-300">Vue.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiAngular className="text-2xl text-[#DD0031]" />
                  <span className="text-gray-700 dark:text-gray-300">Angular</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                Backend
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SiNodedotjs className="text-2xl text-[#339933]" />
                  <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiPython className="text-2xl text-[#3776AB]" />
                  <span className="text-gray-700 dark:text-gray-300">Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiJupyter className="text-2xl text-[#F37626]" />
                  <span className="text-gray-700 dark:text-gray-300">Jupyter</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiExpress className="text-2xl text-gray-700 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">Express.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiFastapi className="text-2xl text-[#009688]" />
                  <span className="text-gray-700 dark:text-gray-300">FastAPI</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiPostgresql className="text-2xl text-[#4169E1]" />
                  <span className="text-gray-700 dark:text-gray-300">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                AI & Machine Learning
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SiTensorflow className="text-2xl text-[#FF6F00]" />
                  <span className="text-gray-700 dark:text-gray-300">TensorFlow</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiPytorch className="text-2xl text-[#EE4C2C]" />
                  <span className="text-gray-700 dark:text-gray-300">PyTorch</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiOpenaigym className="text-2xl text-gray-700 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">OpenAI API</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiScikitlearn className="text-2xl text-[#F7931E]" />
                  <span className="text-gray-700 dark:text-gray-300">Scikit-learn</span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                Cloud & DevOps
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SiAmazon className="text-2xl text-[#FF9900]" />
                  <span className="text-gray-700 dark:text-gray-300">AWS</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiGooglecloud className="text-2xl text-[#4285F4]" />
                  <span className="text-gray-700 dark:text-gray-300">Google Cloud</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiDocker className="text-2xl text-[#2496ED]" />
                  <span className="text-gray-700 dark:text-gray-300">Docker</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiKubernetes className="text-2xl text-[#326CE5]" />
                  <span className="text-gray-700 dark:text-gray-300">Kubernetes</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiMongodb className="text-2xl text-[#47A248]" />
                  <span className="text-gray-700 dark:text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiVercel className="text-2xl text-black dark:text-white" />
                  <span className="text-gray-700 dark:text-gray-300">Vercel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies We Master */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technologies We Master
            </h3>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiReact className="text-4xl text-[#61DAFB]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">React</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiNextdotjs className="text-4xl text-black dark:text-white" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiPython className="text-4xl text-[#3776AB]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiTypescript className="text-4xl text-[#3178C6]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiPytorch className="text-4xl text-[#EE4C2C]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">PyTorch</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiAmazon className="text-4xl text-[#FF9900]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">AWS</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiNodedotjs className="text-4xl text-[#339933]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiMongodb className="text-4xl text-[#47A248]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiPostgresql className="text-4xl text-[#4169E1]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiDocker className="text-4xl text-[#2496ED]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiTailwindcss className="text-4xl text-[#06B6D4]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <SiJupyter className="text-4xl text-[#F37626]" />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Jupyter</span>
              </div>
            </div>
            <p className="mt-8 text-gray-600 dark:text-gray-400">
              Don't see your technology? No problem! We're always learning and adapting to new tools.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Discuss Your Tech Requirements
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}