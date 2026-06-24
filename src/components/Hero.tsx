import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Coffee, Bug, Code2, Zap, Send } from 'lucide-react';
import { Badge } from './Badge';
import { gsap } from 'gsap';

interface HeroProps {
  onScrollToProjects: () => void;
}

const funFacts = [
  { icon: Bug, text: 'I fix bugs faster than I find them' },
  { icon: Coffee, text: 'Powered by 3 cups of coffee daily' },
  { icon: Code2, text: 'Console.log is my best friend' },
  { icon: Zap, text: 'Deploying on Fridays since 2023' }
];

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [quickMsg, setQuickMsg] = useState('');
  const [isQuickSent, setIsQuickSent] = useState(false);
  const [showFunFact, setShowFunFact] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.badge-top-row', {
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
      }, '-=0.4')
      .from('.fun-facts-row', {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4')
      .from('.quick-contact', {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Rotate fun facts
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFunFact(prev => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.trim()) return;
    setIsQuickSent(true);
    setTimeout(() => {
      setIsQuickSent(false);
      setQuickMsg('');
    }, 3000);
  };

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

      {/* Fun Facts Row */}
      <div className="fun-facts-row">
        {funFacts.map((fact, idx) => (
          <div 
            key={idx} 
            className={`fun-fact-badge ${idx === showFunFact ? 'active' : ''}`}
            onClick={() => setShowFunFact(idx)}
          >
            <fact.icon size={12} />
            <span>{fact.text}</span>
          </div>
        ))}
      </div>
      
      <div className="hero-cta-row">
        <button className="cta-button" onClick={onScrollToProjects}>
          Explore Portfolio <ArrowRight size={18} />
        </button>
        
        {/* Hire Me CTA with urgency */}
        <a href="#contact" className="hire-me-btn">
          <Sparkles size={16} />
          Hire Me — 2 Slots Open
        </a>
      </div>

      {/* Quick Contact Form in Hero */}
      <div className="quick-contact">
        <div className="quick-contact-header">
          <span className="quick-contact-title">Quick Message</span>
          <span className="quick-contact-subtitle">Get a response within 24h</span>
        </div>
        
        {isQuickSent ? (
          <div className="quick-sent-msg">
            <span>✓ Message sent! I'll get back to you soon.</span>
          </div>
        ) : (
          <form className="quick-form" onSubmit={handleQuickSubmit}>
            <input
              type="text"
              placeholder="Quick message or project idea..."
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              className="quick-input"
            />
            <button type="submit" className="quick-submit">
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
