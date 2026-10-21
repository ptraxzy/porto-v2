import { useLayoutEffect, useRef } from 'react';
import { ArrowDownRight, ArrowUpRight, Braces, Code2, Globe2, Layers3, Mail, MonitorCog, Send, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TechStackLogos } from './TechStackLogos';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  ['01', 'Developer tool / Documentation', 'DocForge', 'A focused documentation workflow that turns project knowledge into usable, well-structured output.', ['TypeScript', 'React', 'Node.js'], '</>'],
  ['02', 'Desktop experience / Open source', 'Hyprland Slate', 'A considered Linux desktop environment with a tailored interface, system components, and clear visual language.', ['QML', 'Quickshell', 'Linux'], '↗'],
  ['03', 'Web products / Experiments', 'Product Systems', 'Practical web applications and tools designed around the people, teams, and workflows using them.', ['React', 'PHP', 'PostgreSQL'], '+'],
] as const;

export function EditorialSections() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.editorial-reveal').forEach((element) => {
        gsap.fromTo(element, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });
    }, scope);
    return () => context.revert();
  }, []);

  return <div className="editorial-page" ref={root}>
    <section className="editorial-section editorial-work" id="projects">
      <div className="editorial-section-heading editorial-reveal"><p className="editorial-kicker">Selected work / 2024—2026</p><h2>BUILT WITH<br /><em>INTENT.</em></h2><p className="editorial-heading-copy">A selection of tools, environments, and web products made to be useful beyond the first click.</p></div>
      <div className="editorial-work-list">{projects.map(([number, type, title, description, stack, mark]) => <article className="editorial-project editorial-reveal" key={number}><div className="editorial-project-topline"><span>{number}</span><span>{type}</span></div><div className="editorial-project-core"><div className="editorial-project-mark">{mark}</div><div><h3>{title}</h3><p>{description}</p></div></div><div className="editorial-project-footer"><ul>{stack.map(item => <li key={item}>{item}</li>)}</ul><a className="editorial-project-link" href="https://github.com/ptraxzy" target="_blank" rel="noreferrer">Open on GitHub <ArrowUpRight size={19} /></a></div></article>)}</div>
    </section>
    <section className="editorial-section editorial-capabilities"><div className="editorial-capability-intro editorial-reveal"><p className="editorial-kicker">What I build</p><h2>SOFTWARE WITH<br />A CLEAR <em>REASON</em><br />TO EXIST.</h2></div><div className="editorial-capability-list">{[['01','Web products','Interfaces and full-stack products that feel direct, structured, and fast.',<Layers3 />],['02','Developer tools','Tools, workflows, and utilities that remove friction for builders.',<Braces />],['03','Desktop experiences','Focused Linux and desktop interfaces with a strong system-level point of view.',<MonitorCog />]].map(([number,title,copy,icon])=><article className="editorial-capability editorial-reveal" key={number as string}><span className="editorial-capability-number">{number as string}</span><div className="editorial-capability-icon">{icon as React.ReactNode}</div><h3>{title as string}</h3><p>{copy as string}</p></article>)}</div></section>
    <section className="editorial-tech-wrap" id="stack"><TechStackLogos /></section>
    <section className="editorial-section editorial-about" id="about"><p className="editorial-kicker editorial-reveal">A short note / Based in Malang, Indonesia</p><div className="editorial-about-layout"><h2 className="editorial-reveal">I LIKE SOFTWARE<br />THAT MAKES <em>THE NEXT<br />STEP OBVIOUS.</em></h2><div className="editorial-about-copy editorial-reveal"><p>I am a software developer building across the web, desktop, and developer tooling. I care about systems that are clear to use, maintainable to extend, and honest about what they do.</p><a className="editorial-text-link" href="https://github.com/ptraxzy" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={17} /></a></div></div></section>
    <section className="editorial-section editorial-process"><div className="editorial-process-header editorial-reveal"><p className="editorial-kicker">How I work</p><h2>FROM A GOOD<br />QUESTION TO A<br /><em>USEFUL RELEASE.</em></h2></div><ol className="editorial-process-list">{[['01','Understand','Map the actual problem, the people using it, and the context around it.'],['02','Make the system','Turn the clearest idea into a focused interface and reliable implementation.'],['03','Refine in reality','Test the details, remove friction, and ship something worth returning to.']].map(([number,title,copy])=><li className="editorial-reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowDownRight /></li>)}</ol></section>
    <section className="editorial-contact" id="contact"><div className="editorial-contact-top editorial-reveal"><span>Available for selected work</span><span>Let’s make something useful.</span></div><h2 className="editorial-reveal">HAVE A PROJECT<br /><em>IN MIND?</em></h2><a className="editorial-contact-link editorial-reveal" href="mailto:putraagifary12@gmail.com">LET’S TALK <ArrowUpRight size={28} /></a><div className="editorial-contact-links editorial-reveal"><a href="https://github.com/ptraxzy" target="_blank" rel="noreferrer"><Code2 size={18} /> github.com/ptraxzy <ArrowUpRight size={15} /></a><a href="https://xputra.dev" target="_blank" rel="noreferrer"><Globe2 size={18} /> xputra.dev <ArrowUpRight size={15} /></a><a href="mailto:putraagifary12@gmail.com"><Mail size={18} /> putraagifary12@gmail.com <ArrowUpRight size={15} /></a></div><footer className="editorial-footer editorial-reveal"><span>© {new Date().getFullYear()} Putra</span><div><a href="https://github.com/ptraxzy" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a><a href="mailto:putraagifary12@gmail.com"><Mail size={16} /> Email</a><a href="#top"><Send size={16} /> Back to top</a></div><span>Built in Indonesia <Sparkles size={13} /></span></footer></section>
  </div>;
}
