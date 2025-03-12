export const Projects = () => {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Big Defend",
                description:
                  "An open-source real-time Cybersecurity incident response system using Big Data.",
                technologies: ["NumPy", "Nmap", "Requests", "Scapy", "Scikit-learn"],
                link: "#"
              },
              {
                title: "CHIP-8 Emulator",
                description:
                  "Built a CHIP-8 emulator in C++ to replicate the functionality of the classic 1970s-era CHIP-8 virtual machine.",
                technologies: ["C++", "SDL2", "Low-Level Programming", "Emulation"],
                link: "#"
              },
              {
                title: "Smart Parking & Toll Management System",
                description:
                  "Engineered an automated system using IoT components, RFID sensors, and real-time data processing.",
                technologies: ["Vega Aries v3.0", "ESP8266", "RFID", "C++", "Firebase"],
                link: "#"
              },
              {
                title: "Interactive PDF Chat-bot with LLM",
                description:
                  "Built a Streamlit-based PDF chatbot leveraging LangChain and Hugging Face API for intelligent, conversational PDF interactions.",
                technologies: ["Streamlit", "Langchain", "Hugging Face API", "Gemini"],
                link: "#"
              }
            ].map((project, key) => (
              <div
                key={key}
                className="p-6 border rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };