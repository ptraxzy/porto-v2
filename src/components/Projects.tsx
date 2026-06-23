import { useEffect, useRef } from 'react';
import { Download, Sparkles, MessageSquare, Code, BookOpen, ExternalLink, Wrench } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

const PROJECTS_DATA: Project[] = [
  {
    id: 'botdownloader',
    title: 'Video Downloader Bot',
    tagline: 'Watermark-Free Media Processing & Downloader',
    desc: 'An automated Python bot built to fetch, process, and download watermark-free media from social video platforms using asynchronous scraping libraries.',
    theme: 'danao-theme',
    tags: ['Python', 'Telegram API', 'Automation'],
    techStack: ['Python 3', 'Asyncio', 'yt-dlp', 'Telegram Bot API'],
    features: [
      'Asynchronous media scraping and extraction pipeline',
      'Watermark removal preprocessing rules',
      'Queue-based media processing to handle multiple user requests',
      'Direct integration with Telegram chat interfaces'
    ],
    workflow: 'Listens for incoming URL links via a Telegram bot interface, forwards them to media extraction subprocesses, removes watermarks, and streams the finished media back to the user.',
    dirStructure: `bot-downloader/\n├── bot.py (Main Script)\n├── utils/\n│   ├── scraper.py (Media extraction)\n│   └── watermark.py (Post-processing)\n├── requirements.txt\n└── config.json`,
    githubUrl: 'https://github.com/ptraxzy/bot-downloader',
    localPath: '/home/putra/Projects/bot-downloader'
  },
  {
    id: 'ultramaxomd',
    title: 'UltramaxoMD (WhatsApp Bot)',
    tagline: 'Multi-Device WhatsApp Automation System',
    desc: 'A TypeScript and Baileys Web API powered WhatsApp multi-device bot built to handle automatic responses, chat command parsing, and administrative group tasks.',
    theme: 'ultramaxo-theme',
    tags: ['TypeScript', 'Node.js', 'Baileys API', 'Automation'],
    techStack: ['TypeScript', 'Node.js', 'Baileys MD API', 'JSON Storage'],
    features: [
      'Multi-device session persistence and handling',
      'Media converter commands (image to sticker, text parsing)',
      'Automated group coordination and event logging',
      'Secure credential state storage'
    ],
    workflow: 'Runs as a background Node.js service listening to WhatsApp Web socket events and evaluating incoming messages asynchronously via custom handlers.',
    dirStructure: `UltramaxoMD/\n├── src/ (Command handlers)\n├── config.json (Settings)\n├── session/ (Baileys MD Auth)\n└── package.json`,
    githubUrl: 'https://github.com/ptraxzy/UltramaxoMD',
    localPath: '/home/putra/Projects/UltramaxoV2'
  },
  {
    id: 'tonbot',
    title: 'TON Price Telegram Bot',
    tagline: 'Real-Time Cryptocurrency Monitoring Bot',
    desc: 'An automated Python bot that queries cryptocurrency exchanges to track TON (The Open Network) coin prices, warning users of market deviances.',
    theme: 'telebot-theme',
    tags: ['Python', 'Telegram API', 'Automation'],
    techStack: ['Python 3', 'Requests Library', 'Telegram Bot API', 'JSON Config'],
    features: [
      'Real-time price queries for the TON token',
      'Cron-like checks to monitor significant market fluctuations',
      'Interactive chat commands (/price, /stats)',
      'Auto-recovery connection logic and logging'
    ],
    workflow: 'Asynchronous Python scripts query price APIs, evaluate deviations against local state, and push structured updates to configured Telegram channels.',
    dirStructure: `telegram-bot/\n├── bot.py (Script Utama)\n├── requirements.txt\n└── config.json`,
    githubUrl: 'https://github.com/ptraxzy/telegram-bot',
    localPath: '/home/putra/Projects/linux-voice-assistant'
  },
  {
    id: 'ppob',
    title: 'PPOB Digital Platform (Laravel)',
    tagline: 'Digital Credits & Bill Payments Platform',
    desc: 'A billing and Payment Point Online Bank (PPOB) application for buying mobile credits, data packages, and utility tokens.',
    theme: 'laravel-theme',
    tags: ['Laravel', 'PHP', 'Inertia.js', 'MySQL'],
    techStack: ['Laravel 11', 'PHP 8.3', 'React / Inertia.js', 'MySQL Database'],
    features: [
      'Digital credit transaction processing engine',
      'Interactive user dashboard and administrative logs',
      'Built-in session authentication',
      'Wallet history tracking and ledger records'
    ],
    workflow: 'Laravel manages database structures, transactional APIs, and authorization routes, while React (via Inertia) serves the frontend client.',
    dirStructure: `ppob-new/\n├── app/ (Controller & Billing Logic)\n├── resources/js/ (Inertia Pages)\n├── routes/web.php\n└── database/migrations/`,
    githubUrl: 'https://github.com/ptraxzy/ppob-new',
    localPath: '/home/putra/Projects/myproject'
  },
  {
    id: 'upkrestoran',
    title: 'Restaurant Cashier System (UPK)',
    tagline: 'Web-Based Cashier & Restaurant Management',
    desc: 'A vocational school competency exam (UPK) project implementing a server-side web application for cashier desks and menu management.',
    theme: 'upk-theme',
    tags: ['PHP Native', 'MySQL', 'Bootstrap', 'School Exam'],
    techStack: ['PHP Native', 'MySQLi Database', 'Bootstrap 5', 'Session Auth'],
    features: [
      'Menu item CRUD operations (food, beverages)',
      'Cashier computation interface for fast checkouts',
      'Historical income reporting logs',
      'Responsive interface optimized for cashier tablets'
    ],
    workflow: 'Native PHP handles database querying, session structures, and page templates, rendering clean server-generated HTML pages.',
    dirStructure: `upk-restoran/\n├── index.php (Dashboard Kasir)\n├── menu.php (CRUD Menu)\n├── transaksi.php\n└── database.sql`,
    githubUrl: 'https://github.com/ptraxzy/upk-restoran',
    localPath: '/home/putra/Projects/tugasdpk'
  },
  {
    id: 'ultramaxobuilder',
    title: 'UltramaxoBuilder',
    tagline: 'Automated Site Builder & Deployment Engine',
    desc: 'An automated web development tool designed to streamline static site configuration, assemble visual web elements, and trigger automated deployment webhooks.',
    theme: 'ultramaxo-theme',
    tags: ['TypeScript', 'Node.js', 'Vite', 'Automation'],
    techStack: ['TypeScript', 'Node.js', 'Vite', 'Vercel API'],
    features: [
      'Visual template selector and customization properties',
      'Automated build bundling and asset compression pipeline',
      'One-click Vercel deployment webhooks integration',
      'Unified configuration file parser'
    ],
    workflow: 'Assembles web layout parameters, compiles raw code blocks into optimized build chunks, and dispatches them via API hooks to direct cloud hosts.',
    dirStructure: `ultramaxobuilder/\n├── src/ (Builder Core)\n├── config/\n│   └── config.json\n├── templates/\n└── package.json`,
    githubUrl: 'https://github.com/ptraxzy',
    localPath: '/home/putra/Projects/ultramaxobuilder',
    demoUrl: 'https://ultramaxo.tech'
  }
];

interface ProjectsProps {
  onOpenModal: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={containerRef}>
      <h2 className="serif-text">Featured Projects</h2>
      <p className="text-secondary" style={{ marginBottom: '20px' }}>
        A selection of full-stack applications and automation tools developed to optimize workflows and systems.
      </p>
      
      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className={`project-card ${project.theme}`}>
            <div>
              <div className="project-header">
                <div className="project-icon-box">
                  {project.id === 'botdownloader' && <Download size={20} />}
                  {project.id === 'ultramaxomd' && <Sparkles size={20} />}
                  {project.id === 'tonbot' && <MessageSquare size={20} />}
                  {project.id === 'ppob' && <Code size={20} />}
                  {project.id === 'upkrestoran' && <BookOpen size={20} />}
                  {project.id === 'ultramaxobuilder' && <Wrench size={20} />}
                </div>
                <span className="mono-text" style={{ fontSize: '0.75rem', opacity: 0.6 }}>PORTFOLIO</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <button className="project-action-btn" onClick={() => onOpenModal(project)}>
              Lihat Detail <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
