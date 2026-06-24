import { useEffect, useRef } from 'react';
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    desc: 'Understanding your requirements, goals, and technical constraints through detailed discussion.',
    duration: '1-2 days'
  },
  {
    icon: Lightbulb,
    title: 'Plan & Design',
    desc: 'Creating architecture blueprints, wireframes, and selecting the optimal tech stack for your project.',
    duration: '2-3 days'
  },
  {
    icon: Code,
    title: 'Build & Iterate',
    desc: 'Agile development with regular updates, code reviews, and iterative improvements based on feedback.',
    duration: '1-4 weeks'
  },
  {
    icon: Rocket,
    title: 'Deploy & Support',
    desc: 'Smooth deployment, monitoring setup, documentation handover, and ongoing maintenance support.',
    duration: 'Ongoing'
  }
];

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        x: -60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from('.process-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power2.out',
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
    <section className="process-section" ref={sectionRef}>
      <h2 className="serif-text">How I Work</h2>
      <p className="text-secondary" style={{ marginBottom: '50px' }}>
        A systematic approach to delivering high-quality solutions
      </p>

      <div className="process-grid">
        <div className="process-line"></div>
        {steps.map((step, idx) => (
          <div key={idx} className="process-step">
            <div className="process-icon-wrapper">
              <step.icon size={24} />
            </div>
            <div className="process-content">
              <div className="process-number">0{idx + 1}</div>
              <h3>{step.title}</h3>
              <p className="text-secondary">{step.desc}</p>
              <span className="process-duration">{step.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="process-cta">
        <CheckCircle size={18} className="term-success" />
        <span>Every project includes free revisions until you're 100% satisfied</span>
      </div>
    </section>
  );
};
