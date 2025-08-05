import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Projects from '@/components/Sections/Projects';
import Skills from '@/components/Sections/Skills';
import Playground from '@/components/Sections/Playground';
import Contact from '@/components/Sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Playground />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
