import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'PT. Maju Bersama',
    role: 'CEO',
    content: 'Putra delivered our web app 2 days ahead of schedule. His code quality is exceptional and he maintains clear communication throughout the project. Highly recommended!',
    rating: 5
  },
  {
    name: 'Tech Startup Indonesia',
    role: 'Founder',
    content: 'The WhatsApp bot integration he built saved us 20+ hours per week on customer support. Clean code, fast execution, and excellent post-launch support.',
    rating: 5
  },
  {
    name: 'Digital Agency XYZ',
    role: 'Project Manager',
    content: 'First time working with Putra and exceeded expectations. He understood our requirements perfectly and delivered a scalable solution. Will definitely hire again.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[activeIndex];

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <h2 className="serif-text">What Clients Say</h2>
      <p className="text-secondary" style={{ marginBottom: '40px' }}>
        Trusted by businesses and startups across Indonesia
      </p>

      <div className="testimonial-card">
        <Quote className="quote-icon" size={40} />
        
        <div className="testimonial-content">
          <p className="testimonial-text">"{t.content}"</p>
          
          <div className="testimonial-author">
            <div className="testimonial-avatar">
              {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          </div>

          <div className="testimonial-rating">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={14} fill="var(--my-orange)" color="var(--my-orange)" />
            ))}
          </div>
        </div>

        <div className="testimonial-nav">
          <button onClick={prev} className="nav-btn">
            <ChevronLeft size={18} />
          </button>
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
          <button onClick={next} className="nav-btn">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <p className="testimonial-cta text-secondary">
        Want to be featured here? <a href="#contact">Let's work together →</a>
      </p>
    </section>
  );
};
