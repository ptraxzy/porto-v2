import { EditorialHero } from './components/EditorialHero';
import { EditorialSections } from './components/EditorialSections';

export default function App() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main id="top">
      <EditorialHero onScrollToProjects={scrollToProjects} />
      <EditorialSections />
    </main>
  );
}
