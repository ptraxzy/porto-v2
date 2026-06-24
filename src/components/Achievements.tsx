import { useEffect, useRef } from 'react';
import { Award, Trophy, Medal, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Trophy,
    title: 'Top Rated Developer',
    org: 'Upwork Clone',
    year: '2025',
    desc: 'Consistently rated 5 stars by clients with 90% job success rate'
  },
  {
    icon: Award,
    title: 'Hackathon Finalist',
    org: 'Indonesia Tech Challenge',
    year: '2024',
    desc: 'Built an AI-powered waste management system in 48 hours'
  },
  {
    icon: Medal,
    title: 'Google IT Support',
    org: 'Google',
    year: '2024',
    desc: 'Professional certificate in IT support and system administration'
  },
  {
    icon: Zap,
    title: 'Bot Built for 10K+ Users',
    org: 'Freelance Project',
    year: '2025',
    desc: 'WhatsApp bot serving 10,000+ active monthly users'
  }
];

export const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.achievement-card', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="achievements-section" ref={sectionRef}>
      <h2 className="serif-text">Achievements</h2>
      <p className="text-secondary" style={{ marginBottom: '40px' }}>
        Milestones and recognitions along the journey
      </p>

      <div className="achievements-grid">
        {achievements.map((item, idx) => (
          <div key={idx} className="achievement-card">
            <div className="achievement-icon-wrapper">
              <item.icon size={24} />
            </div>
            <div className="achievement-content">
              <div className="achievement-year">{item.year}</div>
              <h3 className="achievement-title">{item.title}</h3>
              <div className="achievement-org">{item.org}</div>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
