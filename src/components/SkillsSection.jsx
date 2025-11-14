import portfolioData from "../data/portfolioData";

const SkillsSection = () => {
  const skills = portfolioData.skills;

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { items, icon: Icon }], index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl 
                         hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 
                         transition-all duration-300 transform hover:scale-[1.03]"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Icon size={28} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{category}</h3>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-3">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-700/40 text-gray-300 rounded-full text-sm 
                               font-medium border border-gray-600 hover:bg-blue-600/30 
                               hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
