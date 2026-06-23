import { useEffect, useRef } from 'react';
import { Sparkles, Terminal, Code } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const BentoGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bento-card', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bento-grid" ref={gridRef}>
      <div className="bento-card">
        <div>
          <Code className="asterisk-icon" style={{ animation: 'none', marginBottom: '15px' }} size={24} />
          <div className="bento-num">17+</div>
          <div className="bento-title">GitHub Repositories</div>
        </div>
        <div className="bento-desc">
          A collection of open-source projects, automation utilities, and codebase configurations available on GitHub.
        </div>
      </div>

      <div className="bento-card">
        <div>
          <Sparkles className="asterisk-icon" style={{ animation: 'none', marginBottom: '15px', color: 'var(--my-orange)' }} size={24} />
          <div className="bento-num" style={{ color: 'var(--my-orange)' }}>5+</div>
          <div className="bento-title">Core Technologies</div>
        </div>
        <div className="bento-desc">
          Proficient in TypeScript, PHP (Laravel), Python Scripting, JavaScript (Node.js), and relational databases.
        </div>
      </div>

      <div className="bento-card">
        <div>
          <Terminal className="asterisk-icon" style={{ animation: 'none', marginBottom: '15px', color: 'var(--terminal-green)' }} size={24} />
          <div className="bento-num" style={{ color: 'var(--terminal-green)' }}>Malang</div>
          <div className="bento-title">Location</div>
        </div>
        <div className="bento-desc">
          Based in Malang, East Java, Indonesia. Working remotely to deliver clean, scalable, and modular software.
        </div>
      </div>
    </section>
  );
};
