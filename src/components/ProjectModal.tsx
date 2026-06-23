import React from 'react';
import { X, CheckCircle2, Cpu, Globe } from 'lucide-react';

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu className="asterisk-icon" style={{ animation: 'none' }} size={20} />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }} className="serif-text">{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-text-content">
            <p className="text-secondary" style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '24px' }}>
              {project.tagline}
            </p>

            <div className="modal-section">
              <h4 className="modal-section-title">Overview</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-color)', marginBottom: '0' }}>
                {project.desc}
              </p>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">Key Features</h4>
              <ul className="modal-features-list" style={{ paddingLeft: '0', listStyle: 'none', margin: '0' }}>
                {project.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} className="term-success" style={{ marginTop: '4px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">System & Integration Workflow</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '0' }}>
                {project.workflow}
              </p>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">Tech Stack</h4>
              <div className="project-tags" style={{ margin: '0' }}>
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tag" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-section modal-links-container" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', marginTop: '12px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="theme-toggle-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span>Open GitHub Repository</span>
                </a>
                
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="theme-toggle-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', fontSize: '0.9rem', borderColor: 'var(--terminal-green)' }}>
                    <Globe size={16} style={{ color: 'var(--terminal-green)' }} />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
