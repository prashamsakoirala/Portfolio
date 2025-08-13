import Card from '../components/Card.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import { projects } from '../data/projects.ts';
import type { Project } from '../interfaces/projectObject.ts';

function Projects() {
    return (
        <section className="bg-[#012169] w-full relative">
            <div className="min-h-screen max-w-6xl mx-auto flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-8">
                    {projects.map((project: Project) => (
                        <Card project={project} key={project.title} />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-2">
                <SectionTitle section="projects" />
            </div>        
        </section>
    );
}

export default Projects;
