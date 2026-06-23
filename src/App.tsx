import { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';

interface Project {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  theme: string;
  tags: string[];
  techStack: string[];
  features: string[];
  workflow: string;
  dirStructure: string;
  githubUrl: string;
  localPath: string;
  demoUrl?: string;
}

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync mode with HTML class
  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
  }, [isLightMode]);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="header-nav">
        <div className="brand-asterisk">
          <Sparkles className="asterisk-icon" />
          <span>Muhammad Putra</span>
        </div>
        
        <button 
          className="theme-toggle-btn" 
          onClick={() => setIsLightMode(!isLightMode)}
          aria-label="Toggle Theme"
        >
          {isLightMode ? (
            <>
              <Moon size={16} /> Dark Claude
            </>
          ) : (
            <>
              <Sun size={16} /> Light Mode
            </>
          )}
        </button>
      </header>

      <main>
        <Hero onScrollToProjects={scrollToProjects} />
        <BentoGrid />
        
        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,120 1440,60 L1440,120 L0,120 Z" />
        </svg>

        <Philosophy />
        
        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M1440,60 C1080,120 360,0 0,60 L0,0 L1440,0 Z" />
        </svg>

        <Projects onOpenModal={setSelectedProject} />
        
        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,120 1440,60 L1440,120 L0,120 Z" />
        </svg>

        <Contact />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
