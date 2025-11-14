const HeroSection = () => {
  const { name, titles, links } = portfolioData.personal;
  const typedText = useTypingEffect(titles, 80, 40, 1500);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
        <div className="mb-6 animate-fade-in">
          <span className="text-blue-400 text-lg font-mono">Hi there, I'm</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        <div className="h-20 flex items-center justify-center mb-8">
          <div className="text-2xl md:text-4xl text-gray-300 font-semibold">
            {typedText}
            <span className="inline-block w-0.5 h-8 ml-1 bg-blue-400 animate-pulse">|</span>
          </div>
        </div>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building innovative solutions with cutting-edge technologies. 
          Specializing in full-stack development and AI/ML applications.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href={links.resume}
            className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105"
          >
            <FileText size={20} />
            View Resume
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: Linkedin, href: links.linkedin, label: "LinkedIn" },
            { icon: Github, href: links.github, label: "GitHub" },
            { icon: Code, href: links.codeforces, label: "Codeforces" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};export default HeroSection;

import { FileText, ExternalLink, Mail, Linkedin, Github, Code } from 'lucide-react';
import useTypingEffect from '../hooks/useTypingEffect';
import portfolioData from '../data/portfolioData';