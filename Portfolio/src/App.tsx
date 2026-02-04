import { useState } from 'react';
import type { Section } from './types/section';
import Navigation from './components/Navigation'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
       <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
