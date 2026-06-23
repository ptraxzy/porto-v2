import React, { useState, useEffect, useRef } from 'react';
import { XCircle, Heart, Send, Save, Mail, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.match-col', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.match-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from('.contact-box', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-box',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="match-section" ref={sectionRef}>
      <h2 className="serif-text">Project Fit & Collaborations</h2>
      <p className="text-secondary" style={{ marginBottom: '30px' }}>
        A brief overview of how my technical focus and delivery patterns align with your engineering objectives.
      </p>

      <div className="match-grid">
        <div className="match-col">
          <h4 className="yes-title">
            <Heart size={20} className="term-success" /> Optimal Alignments
          </h4>
          <ul className="match-list">
            <li>• Your project requires a developer focused on end-to-end frontend and backend integrations.</li>
            <li>• You aim to deploy automated services to optimize process workflows.</li>
            <li>• You value clean software engineering practices and organized codebase structures.</li>
          </ul>
        </div>

        <div className="match-col">
          <h4 className="no-title">
            <XCircle size={20} className="term-red" /> Sub-optimal Alignments
          </h4>
          <ul className="match-list">
            <li>• The project calls for complex, over-engineered architectures with excessive library layers.</li>
            <li>• There is no intention to leverage automated integration models.</li>
            <li>• You require a large agency structure rather than a dedicated full-stack developer.</li>
          </ul>
        </div>
      </div>

      <div className="contact-box" id="contact">
        <h3 className="serif-text" style={{ fontSize: '1.8rem' }}>Get in Touch</h3>
        <p className="text-secondary" style={{ marginBottom: '20px' }}>
          Please leave a message to discuss project collaborations, automation requests, or development inquiries.
        </p>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            <MapPin size={16} /> Malang, Indonesia
          </div>
          <a href="https://github.com/ptraxzy" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            github.com/ptraxzy
          </a>
          <a href="mailto:putraagifary12@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            <Mail size={16} /> putraagifary12@gmail.com
          </a>
        </div>

        {isSent ? (
          <div className="term-success" style={{ padding: '20px', border: '1px solid var(--terminal-green)', borderRadius: '12px', marginTop: '20px', fontFamily: 'var(--font-mono)' }}>
            [+] Message sent successfully! I will respond to your inquiry shortly.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your name..." 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="name@email.com..." 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                className="form-control" 
                placeholder="Enter your message..." 
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required 
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message <Send size={16} style={{ marginLeft: '6px', display: 'inline' }} />
            </button>
          </form>
        )}
      </div>

      <div className="footer-pen">
        <Save className="footer-icon" />
        <div className="footer-tagline">
          DELIVERING ROBUST, INTEGRATED, AND HIGH-PERFORMANCE WEB SOLUTIONS.
        </div>
        <p className="text-secondary" style={{ fontSize: '0.8rem' }}>
          © 2026 Muhammad Putra. All rights reserved.
        </p>
      </div>
    </section>
  );
};
