import React, { useEffect, useState } from 'react';
import { Calendar, GitCommit, Activity, RefreshCw } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GitHubCommit {
  repo: string;
  message: string;
  time: string;
  url: string;
}

const STATIC_CHANGELOG = [
  {
    date: 'June 23, 2026',
    title: 'Custom Domain & Deployment',
    desc: 'Successfully connected and verified custom domain xputra.dev on Vercel Edge CDN with zero-compute static caching.'
  },
  {
    date: 'June 22, 2026',
    title: 'Modal Redesign & Privacy Refactor',
    desc: 'Completely removed IDE-sidebar simulation from project modals. Retired local path variables and integrated the public bot-downloader codebase.'
  },
  {
    date: 'May 2026',
    title: 'UltramaxoBuilder Pipeline',
    desc: 'Integrated dynamic Vercel deployment webhooks and static asset compiler scripts to generate visual layout configurations.'
  },
  {
    date: 'April 2026',
    title: 'WhatsApp Bot Session Handling',
    desc: 'Refactored session credentials persistence and handler routing in UltramaxoMD for improved Baileys Web socket reconnects.'
  }
];

const FALLBACK_COMMITS: GitHubCommit[] = [
  {
    repo: 'porto-v2',
    message: 'feat: portfolio redesign with formal zine aesthetics and clean modal layout',
    time: 'Recently',
    url: 'https://github.com/ptraxzy/porto-v2'
  },
  {
    repo: 'bot-downloader',
    message: 'refactor: optimize video extraction pipeline and watermark removal',
    time: 'Recently',
    url: 'https://github.com/ptraxzy/bot-downloader'
  },
  {
    repo: 'UltramaxoMD',
    message: 'feat: add session persistence state storage',
    time: 'Recently',
    url: 'https://github.com/ptraxzy/UltramaxoMD'
  }
];

export const ActivityLog: React.FC = () => {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch GitHub events
    fetch('https://api.github.com/users/ptraxzy/events')
      .then((res) => {
        if (!res.ok) throw new Error('API Rate Limit or Error');
        return res.json();
      })
      .then((data: any[]) => {
        // Filter for PushEvents (commits)
        const pushEvents = data.filter((e) => e.type === 'PushEvent');
        
        if (pushEvents.length === 0) {
          setCommits(FALLBACK_COMMITS);
          setLoading(false);
          return;
        }

        const formattedCommits: GitHubCommit[] = [];
        pushEvents.slice(0, 4).forEach((event) => {
          const repoName = event.repo.name;
          const commitsList = event.payload.commits || [];
          const timeString = new Date(event.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          });
          const repoUrl = `https://github.com/${repoName}`;

          if (commitsList.length === 0) {
            formattedCommits.push({
              repo: repoName.replace('ptraxzy/', ''),
              message: 'Pushed updates to repository',
              time: timeString,
              url: repoUrl
            });
          } else {
            commitsList.forEach((c: any) => {
              formattedCommits.push({
                repo: repoName.replace('ptraxzy/', ''),
                message: c.message,
                time: timeString,
                url: repoUrl
              });
            });
          }
        });

        setCommits(formattedCommits.slice(0, 4));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setCommits(FALLBACK_COMMITS);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.activity-card', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
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
    <section className="activity-section" ref={sectionRef} id="activity">
      <div className="activity-grid">
        {/* Column 1: Curated Changelog */}
        <div className="activity-card changelog-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Calendar className="asterisk-icon" style={{ animation: 'none' }} size={20} />
            <h3 style={{ margin: 0 }} className="serif-text">Changelog Logbook</h3>
          </div>
          
          <div className="changelog-list">
            {STATIC_CHANGELOG.map((item, idx) => (
              <div key={idx} className="changelog-item">
                <div className="changelog-meta">
                  <span className="changelog-date">{item.date}</span>
                </div>
                <h4 className="changelog-title">{item.title}</h4>
                <p className="changelog-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Live GitHub Dispatch */}
        <div className="activity-card github-feed-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity className="asterisk-icon" style={{ animation: 'none', color: 'var(--terminal-green)' }} size={20} />
              <h3 style={{ margin: 0 }} className="serif-text">GitHub Live Dispatch</h3>
            </div>
            {loading && <RefreshCw size={14} className="animate-spin" style={{ opacity: 0.6 }} />}
          </div>

          <p className="text-secondary" style={{ fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.5' }}>
            Real-time pushes and commits retrieved directly from my open-source profile repository timeline.
          </p>

          <div className="github-feed-list">
            {commits.map((commit, idx) => (
              <div key={idx} className="feed-item">
                <div className="feed-header">
                  <a href={commit.url} target="_blank" rel="noreferrer" className="feed-repo">
                    {commit.repo}
                  </a>
                  <span className="feed-time">{commit.time}</span>
                </div>
                <div className="feed-body">
                  <GitCommit size={14} style={{ color: 'var(--my-orange)', flexShrink: 0, marginTop: '4px' }} />
                  <span className="feed-message">{commit.message}</span>
                </div>
              </div>
            ))}
            
            {error && (
              <div className="feed-notice">
                Displaying fallback history (GitHub API rate limit exceeded or connection offline).
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
