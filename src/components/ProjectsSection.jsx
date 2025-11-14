const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-blue-400 text-sm">{project.subtitle}</p>
          </div>
          <div className="flex gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-700/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Here are some of my recent works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};export default ProjectsSection;

import { Github, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolioData';