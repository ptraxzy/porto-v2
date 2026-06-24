import { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { ActivityLog } from './components/ActivityLog';
import { LiveClock } from './components/LiveClock';
import { StatsCounter } from './components/StatsCounter';
import { TechStackLogos } from './components/TechStackLogos';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';

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
        <div className="header-left">
          <div className="brand-asterisk">
            <Sparkles className="asterisk-icon" />
            <span>Muhammad Putra</span>
          </div>
          <LiveClock />
        </div>
        
        <button 
          className="theme-toggle-btn" 
          onClick={() => setIsLightMode(!isLightMode)}
          aria-label="Toggle Theme"
        >
          {isLightMode ? (
            <>
              <Moon size={16} /> Dark Mode
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

        {/* Stats Counter Section */}
        <StatsCounter />
        
        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M1440,60 C1080,120 360,0 0,60 L0,0 L1440,0 Z" />
        </svg>

        <Philosophy />
        
        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,120 1440,60 L1440,120 L0,120 Z" />
        </svg>

        {/* Tech Stack Logos */}
        <TechStackLogos />

        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M1440,60 C1080,120 360,0 0,60 L0,0 L1440,0 Z" />
        </svg>

        {/* Process / How I Work */}
        <Process />

        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,120 1440,60 L1440,120 L0,120 Z" />
        </svg>

        <Projects onOpenModal={setSelectedProject} />
        
        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M1440,60 C1080,120 360,0 0,60 L0,0 L1440,0 Z" />
        </svg>

        {/* Testimonials */}
        <Testimonials />

        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M1440,60 C1080,120 360,0 0,60 L0,0 L1440,0 Z" />
        </svg>

        <ActivityLog />

        <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,120 1440,60 L1440,120 L0,120 Z" />
        </svg>

        <Contact />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
