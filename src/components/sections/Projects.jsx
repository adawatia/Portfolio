import RevealOnScroll from "../RevealOnScroll";
export const Projects = () => {
  // Project data with added emojis
  const projectsData = [
    {
      title: "Big Defend",
      description:
        "An open-source real-time Cybersecurity incident response system using Big Data.",
      technologies: ["NumPy", "Nmap", "Requests", "Scapy", "Scikit-learn"],
      link: "https://github.com/adawatia/BigDefend",
      icon: "🛡️", // Security shield
    },
    {
      title: "CHIP-8 Emulator",
      description:
        "Built a CHIP-8 emulator in C++ to replicate the functionality of the classic 1970s-era CHIP-8 virtual machine.",
      technologies: ["C++", "SDL2", "Low-Level Programming", "Emulation"],
      link: "#",
      icon: "🎮", // Gaming controller
    },
    {
      title: "Smart Parking & Toll Management System",
      description:
        "Engineered an automated system using IoT components, RFID sensors, and real-time data processing.",
      technologies: ["Vega Aries v3.0", "ESP8266", "RFID", "C++", "Firebase"],
      link: "#",
      icon: "🅿️", // Parking symbol
    },
    {
      title: "PaperWise 📚 - Intelligent PDF Chatbot",
      description:
        "Engineered an intelligent PDF assistant using PySide6, Ollama, and PyMuPDF for seamless document interaction, smart Q&A, and offline AI processing.",
      technologies: ["PySide6", "Ollama", "PyMuPDF", "Requests"],
      link: "https://github.com/adawatia/PaperWise",
      icon: "📚",
    },
  ];

  // Icon badge component for consistency (reused from About component)
  const IconBadge = ({ icon, size = "md", bgColor = "blue" }) => {
    const sizeClasses = {
      sm: "w-8 h-8 text-xl",
      md: "w-10 h-10 text-2xl",
      lg: "w-12 h-12 text-3xl",
    };

    return (
      <div
        className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-${bgColor}-500/10 text-${bgColor}-500`}
      >
        {icon}
      </div>
    );
  };

  // GitHub icon component
  const GitHubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-400 hover:text-blue-300 transition-colors"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Hierarchical headings - Main title with subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center mt-4">
              <IconBadge icon="🚀" size="lg" />
              <p className="text-xl text-gray-400 ml-3">My Creations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, key) => (
              <div
                key={key}
                className="p-6 border rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                {/* Project header with icon and title */}
                <div className="flex items-center mb-3">
                  <IconBadge icon={project.icon} size="sm" />
                  <h3 className="text-xl font-bold ml-3">{project.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Technologies tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link with icon */}
                <div className="flex justify-end items-center mt-6">
                  <a
                    href={project.link}
                    className="group flex items-center gap-2 p-2 bg-blue-500/5 hover:bg-blue-500/10 rounded-lg transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project on GitHub"
                  >
                    <GitHubIcon />
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-medium">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
