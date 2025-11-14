import { Linkedin, Github, Code } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { links, name } = portfolioData.personal;

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            {[{ icon: Linkedin, href: links.linkedin }, { icon: Github, href: links.github }, { icon: Code, href: links.codeforces }].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
