export const About = () => {
    const skills = {
      "🖥️ Programming Skills": ["Python", "C++"],
      "🚀 Web & Frameworks": ["FastAPI", "Streamlit", "Django"],
      "🖼️ GUI Development": ["PySide"],
      "🛠️ DevOps & Cloud": ["Docker", "Git", "AWS S3", "AWS Beanstalk"],
      "📊 Data & Machine Learning": ["PostgreSQL", "NumPy", "Pandas", "Matplotlib"],
      "💻 Areas of Interest": ["Linux", "Artificial Intelligence", "Computer Architecture"],
    };
  
    const certifications = [
      { title: "📜 Google IT Automation with Python", details: "Coursera (2025)" },
      { title: "☁️ AWS Academy Cloud Architecting", details: "AWS Academy (2024)" },
      { title: "🤖 Summer School on AI", details: "UUST, Russia & CU, India (2024)" },
      { title: "📡 NPTEL IoT", details: "IIT Kharagpur (2023) [Gold – Topper]" },
      { title: "🐧 NDG Linux Unhatched", details: "Cisco NetAcad (2023)" },
    ];
  
    return (
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          
          {/* About Me */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              A passionate software engineer with a strong problem-solving mindset and a drive for innovation. 
              Proficient in Python, C++, and modern web frameworks, with experience in scalable applications, 
              cloud computing, and artificial intelligence. Enthusiastic about leveraging my skills to build 
              impactful solutions. 🚀
            </p>
  
            {/* Technical Expertise */}
            <h3 className="text-2xl font-bold text-center mb-6">🛠️ Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech, key) => (
                      <div key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                          hover:bg-blue-500/20 hover:shadow-md transition">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Certifications - Now in 2 Columns */}
          <div className="p-6 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎓 Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="hover:text-blue-400 transition">
                  {cert.title} <br />
                  <span className="text-sm italic text-gray-400">{cert.details}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <h4 className="text-lg font-semibold text-white">BE in CSE</h4>
                  <p className="text-sm text-gray-400"><span className="text-blue-400">Chandigarh University</span> | <span className="italic">2021 - 2025</span></p>
                  <p className="text-sm"><strong>Relevant Coursework:</strong> Computer Networks, DBMS, OS, Data Structures & Algorithms, Computer Vision</p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold text-white">Intermediate – Physics, Chemistry, Mathematics, Informatics Practices</h4>
                  <p className="text-sm text-gray-400"><span className="text-blue-400">Darshan Academy, Ludhiana</span> | <span className="italic">2020 - 2021</span></p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold text-white">Matriculation</h4>
                  <p className="text-sm text-gray-400"><span className="text-blue-400">Darshan Academy, Ludhiana</span> | <span className="italic">2018 - 2019</span></p>
                </li>
              </ul>
            </div>
  
            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                
                {/* Research Intern */}
                <div>
                  <h4 className="text-lg font-semibold text-white">🔬 Research Intern – <span className="text-blue-400">IIT Guwahati</span> <span className="text-sm text-gray-400">(June - July 2023)</span></h4>
                  <p className="text-sm leading-relaxed">
                    Conducted research on Deep Neural Networks (DNN) optimization for Network-on-Chip (NoC) architectures. 
                    Focused on improving computational efficiency and identifying performance bottlenecks in AI hardware-software integration.
                  </p>
                  <p className="text-sm mt-2"><strong>Technologies Used:</strong> <span className="text-blue-400">C++, Python</span></p>
                </div>
  
                {/* ML Engineer Intern */}
                <div>
                  <h4 className="text-lg font-semibold text-white">🚀 ML Engineer Intern – <span className="text-blue-400">Growth Purple</span> <span className="text-sm text-gray-400">(June - October 2023)</span></h4>
                  <p className="text-sm leading-relaxed">
                    Developed an interactive PDF chatbot powered by Large Language Models (LLMs) to enable intelligent document interaction.  
                    Implemented advanced Natural Language Processing (NLP) techniques for seamless PDF analysis.
                  </p>
                  <p className="text-sm mt-2"><strong>Technologies Used:</strong> <span className="text-blue-400">Streamlit, LangChain, Hugging Face API</span></p>
                </div>
                
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  