import type { Project } from "../interfaces/projectObject";
const Card: React.FC<{ project: Project }> = ({ project }) => {
    
    return (
      <div className="font-alexandria">
        <div className="w-80 bg-[#f6f5ef] backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/50 hover:shadow-2xl cursor-pointer"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
        >
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url("${project.backgroundImage}")` }}
              role="img"
              aria-label={project.altText}
            />
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl text-gray-800">{project.title}</h3>
                <span className="bg-[#012169] text-[#F3F2F1] px-2 py-1 text-xs">
                  {project.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        </div>
      </div>
    );
};

export default Card;