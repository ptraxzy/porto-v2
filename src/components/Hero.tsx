import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from './Badge';
import { gsap } from 'gsap';

interface HeroProps {
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.badge-wrapper', {
        y: -30,
        opacity: 0,
        rotation: -15,
        duration: 0.8
      })
      .from('.hero-profile-tag', {
        x: -20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4')
      .from('.hero-headline-card', {
        scale: 0.9,
        rotation: -5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=0.4')
      .from('.text-secondary', {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
      .from('.cta-button', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)'
      }, '-=0.6')
      .from('.handwritten', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(2)'
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={containerRef}>
      <Badge />
      
      <div className="hero-profile-tag">
        MUHAMMAD PUTRA — FULL-STACK DEVELOPER & AUTOMATION ENGINEER
      </div>
      
      <div className="hero-headline-card">
        <h1 className="serif-text">
          Code built with <span className="marker-highlight">precision</span>,<br />
          engineered for <span className="marker-highlight">efficiency & scale</span>.
        </h1>
        
        <div 
          className="handwritten" 
          style={{ 
            position: 'absolute', 
            bottom: '-25px', 
            right: '40px', 
            transform: 'rotate(-3deg)',
            opacity: 0.8
          }}
        >
          * handcrafted in malang, indonesia
        </div>
      </div>
      
      <p className="text-secondary" style={{ maxWidth: '600px', fontSize: '1.1rem', marginTop: '10px' }}>
        I am a Full-Stack Developer dedicated to engineering clean web applications, 
        automated messaging integrations, and high-performance databases that optimize operations.
      </p>
      
      <button className="cta-button" onClick={onScrollToProjects}>
        Explore Portfolio <ArrowRight size={18} />
      </button>
    </section>
  );
};
