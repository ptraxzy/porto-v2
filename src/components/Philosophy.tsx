import { useEffect, useRef } from 'react';
import { CheckCircle2, Bot } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philosophy-section-card', {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from('.philosophy-item', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.philosophy-list',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
      
      gsap.from('.handwritten-note', {
        scale: 0,
        rotation: 15,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="philosophy-section philosophy-section-card">
        <div className="handwritten-note handwritten">
          * focus on clean implementation and direct solutions
        </div>
        <h2 className="serif-text">Simplifying Software Development</h2>
        <p className="text-secondary">
          I believe software development is most impactful when it focuses on clean, readable, and highly maintainable code. My development philosophy prioritizes straightforward, practical implementations that address technical requirements directly and efficiently.
        </p>
        
        <ul className="philosophy-list">
          <li className="philosophy-item">
            <CheckCircle2 className="term-success" size={20} />
            <div>
              <strong>Efficiency First:</strong> Software should be lightweight. I prioritize optimizing 
              resource usage, rendering fast pages, and maintaining a structured codebase.
            </div>
          </li>
          <li className="philosophy-item">
            <Bot className="term-blue" size={20} />
            <div>
              <strong>Process Automation:</strong> I specialize in building custom automation utilities 
              (Telegram and WhatsApp bots) to streamline data operations and eliminate redundant manual tasks.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
