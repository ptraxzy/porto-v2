import { useLayoutEffect, useRef } from 'react';
import { ArrowDownRight, ArrowUpRight, Code2, Globe2, Mail, Menu } from 'lucide-react';
import { gsap } from 'gsap';

interface EditorialHeroProps {
  onScrollToProjects: () => void;
}

export function EditorialHero({ onScrollToProjects }: EditorialHeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .from('.editorial-frame', { y: 24, opacity: 0, duration: 0.8 })
        .from('.editorial-nav > *', { y: -12, opacity: 0, stagger: 0.08, duration: 0.45 }, '-=0.35')
        .from('.editorial-portrait', { scale: 1.08, opacity: 0, duration: 1.1 }, '-=0.4')
        .from('.editorial-name span', { yPercent: 105, stagger: 0.07, duration: 0.85 }, '-=0.8')
        .from('.editorial-meta, .editorial-socials', { y: 16, opacity: 0, stagger: 0.12, duration: 0.5 }, '-=0.45')
        .from('.editorial-statement', { y: 24, opacity: 0, duration: 0.65 }, '-=0.25');
    }, root);

    const portrait = root.querySelector<HTMLElement>('.editorial-portrait');
    const onPointerMove = (event: PointerEvent) => {
      if (!portrait) return;
      const bounds = root.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      gsap.to(portrait, { x: x * 14, y: y * 10, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
    };

    root.addEventListener('pointermove', onPointerMove);
    return () => {
      root.removeEventListener('pointermove', onPointerMove);
      context.revert();
    };
  }, []);

  return (
    <section className="editorial-hero" ref={rootRef} aria-labelledby="editorial-title">
      <div className="editorial-frame">
        <header className="editorial-nav">
          <a className="editorial-wordmark" href="#top">© PUTRA / DIGITAL WORK</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="editorial-menu" aria-label="Open navigation menu"><Menu size={20} /></button>
        </header>

        <div className="editorial-portrait-wrap" aria-hidden="true">
          <img className="editorial-portrait" src="/profile-hero.jpeg" alt="" />
          <div className="editorial-grain" />
        </div>

        <h1 className="editorial-name" id="editorial-title" aria-label="Muhammad Putra">
          <span className="editorial-first-name">MUHAMMAD</span>
          <span className="editorial-last-name">PUTRA</span>
        </h1>

        <div className="editorial-socials" aria-label="Contact links">
          <a href="https://github.com/ptraxzy" target="_blank" rel="noreferrer"><Code2 size={16} /><span>GitHub</span></a>
          <a href="mailto:putraagifary12@gmail.com"><Mail size={16} /><span>Email</span></a>
          <a href="https://xputra.dev" target="_blank" rel="noreferrer"><Globe2 size={16} /><span>Website</span></a>
        </div>

        <div className="editorial-meta">
          <p>SOFTWARE DEVELOPER</p>
          <p>BUILDING TOOLS, WEB PRODUCTS,<br />AND DEVELOPER EXPERIENCES.</p>
        </div>

        <button className="editorial-scroll-cue" onClick={onScrollToProjects}>
          <span>Selected work</span><ArrowDownRight size={18} />
        </button>
      </div>

      <div className="editorial-statement">
        <p>BUILDING USEFUL SOFTWARE<br />FOR THE WEB, THE DESKTOP,<br />AND THE PEOPLE USING IT.</p>
        <button onClick={onScrollToProjects}>Explore work <ArrowUpRight size={18} /></button>
      </div>
    </section>
  );
}
