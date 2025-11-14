import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <GraduationCap size={32} className="text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            {portfolioData.education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-all transform hover:scale-[1.02]"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-blue-400 text-lg mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center text-gray-400 text-sm mb-3">
                  {edu.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {edu.location}
                    </span>
                  )}
                  <span>{edu.years}</span>
                </div>
                <p className="text-gray-300">{edu.detail}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <Briefcase size={32} className="text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-purple-500/50 transition-all transform hover:scale-[1.02]"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{exp.role}</h4>
                <p className="text-purple-400 text-lg mb-2">{exp.organization}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.date}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
