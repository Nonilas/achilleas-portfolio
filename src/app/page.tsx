import Hero from '@/components/sections/Hero';
import FeaturedCaseStudies from '@/components/sections/FeaturedCaseStudies';
import MoreWorkGrid from '@/components/sections/MoreWorkGrid';
import TechStack from '@/components/sections/TechStack';
import AboutSnippet from '@/components/sections/AboutSnippet';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCaseStudies />
      <MoreWorkGrid />
      <TechStack />
      <AboutSnippet />
    </main>
  );
}
