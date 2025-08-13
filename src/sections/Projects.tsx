import Card from '../components/Card.tsx'
import type { Project } from '../components/Card.tsx'
import SectionTitle from '../components/SectionTitle.tsx';

function Projects() {
    const projects: Project[] = [
        {
          href: "#",
          backgroundImage: "",
          title: "Gone Fishing",
          tag: "C++",
          description: "Coming Soon",
          altText: "Coming Soon"
        },
        {
          href: "#",
          backgroundImage: "",
          title: "Bazaar",
          tag: "Java",
          description: "Coming Soon",
          altText: "Coming Soon"
        },
        

      ];

    return (
        <section className="bg-[#012169] w-full relative" >
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
    ) 
}

export default Projects