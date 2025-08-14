import Card from '../components/Card.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import { projects } from '../data/projects.ts';
import type { Project } from '../interfaces/projectObject.ts';

function Projects() {
  return (
    <section className="bg-[#012169] w-full relative">
      <div className="min-h-fit md:min-h-screen max-w-6xl mx-auto flex items-center justify-center px-4 py-16 md:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-6 -mt-0 md:-mt-8 w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0">
          {projects.map((project: Project) => (
            <Card project={project} key={project.title} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 md:bottom-0 left-2 hidden md:block">
        <SectionTitle section="projects" />
      </div>
    </section>
  );
}

export default Projects;