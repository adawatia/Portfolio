import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
  const skills = {
    Programming: ["Python", "C++"],
    "Web & Frameworks": ["FastAPI", "Streamlit", "Django"],
    "GUI Development": ["PySide"],
    "DevOps & Cloud": ["Docker", "Git", "AWS S3", "AWS Beanstalk"],
    "Data & ML": ["PostgreSQL", "NumPy", "Pandas", "Matplotlib"],
    "Interests": ["Linux", "Artificial Intelligence", "Computer Architecture"],
  };

  const skillIcons = {
    Programming: "💻",
    "Web & Frameworks": "🌐",
    "GUI Development": "🖱️",
    "DevOps & Cloud": "☁️",
    "Data & ML": "📊",
    "Interests": "🔍",
  };

  const certifications = [
    {
      name: "Google IT Automation with Python",
      issuer: "Coursera, Google",
      year: "2025",
      icon: "🔐",
    },
    {
      name: "AWS Academy Cloud Architecting",
      issuer: "AWS Academy",
      year: "2024",
      icon: "☁️",
      docLink: "https://www.credly.com/badges/58dea7e2-0252-4a7d-a7a0-c0ea93233cdb/public_url",
    },
    {
      name: "Summer School on AI",
      issuer: "UUST, Russia",
      year: "2024",
      icon: "🤖",
      docLink: "https://drive.google.com/file/d/1Bi50y5u0QkPqCE0L7Q7h7TMyapZ4HWrB/view?usp=sharing", // Example link
    },
    {
      name: "NPTEL IoT",
      issuer: "IIT Kharagpur",
      year: "2023",
      achievement: "Gold – Topper",
      icon: "📡",
      docLink: "https://drive.google.com/file/d/1C1AcTR_zuIxx3MXtgpRsETNUKX6hzhdM/view?usp=sharing",
    },
    {
      name: "NDG Linux Unhatched",
      issuer: "Cisco NetAcad",
      year: "2023",
      icon: "🐧",
      docLink: "https://drive.google.com/file/d/1Ef0Z039zqq9hXZaf1cxhWzHA0eyyq6cj/view?usp=sharing"
    },
    {
      name: "Vega Processor Ecosystem",
      issuer: "C-DAC, IEEE India Council",
      year: "2023",
      icon: "⚙️",
      docLink: "https://drive.google.com/file/d/17nWpdo5XYTxOBUH-CoYzPnHeZNkcd806/view?usp=sharing", // Example link
    },
    {
      name: "C++ Coding Bootcamp",
      issuer: "Chandigarh University",
      year: "2023",
      icon: "🧑‍💻",
      docLink: "https://drive.google.com/file/d/1nk05mYFWiiMCp15dIkqNmqPfcixg2AXt/view?usp=sharing",
    },
    {
      name: "Code Vipassana S7",
      issuer: "Google Developers Group",
      year: "2024",
      icon: "⌨️",
      docLink: "https://drive.google.com/file/d/17yOb_ndzyLhgdUEkAtgF0cnlJOLRGc9j/view?usp=sharing",
    },

  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Chandigarh University",
      period: "2021-2025",
      grade: "CGPA: 7.76",
      coursework: "CN, DBMS, OS, DSA, CV, Big Data Analytics, AI",
      icon: "🎓",
    },
    {
      degree: "Intermediate",
      institution: "Darshan Academy, Ludhiana",
      period: "2020-2021",
      grade: "Percentage: 81.4%",
      icon: "🏫",
    },
    {
      degree: "Matriculation",
      institution: "Darshan Academy, Ludhiana",
      period: "2018-2019",
      grade: "Percentage: 83.6%",
      icon: "📚",
    },
  ];

  const experience = [
    {
      role: "Research Intern",
      company: "IIT Guwahati",
      period: "June-July 2023",
      description:
        "Optimized Deep Neural Networks (DNN) on Network-on-Chip (NoC) architectures using C++ & Python. Identified performance bottlenecks and contributed to AI hardware-software co-design principles.",
      icon: "🔬",
    },
    {
      role: "ML Engineer Intern",
      company: "Growth Purple",
      period: "June-October 2023",
      description:
        "Developed an interactive PDF chatbot powered by Large Language Models (LLMs), leveraging Streamlit, LangChain, and Hugging Face APIs for intelligent document interaction.",
      icon: "🧠",
    },
  ];

  const publications = [
    {
      title: "A Cloud-Based Telemedicine Platform: Enhancing Healthcare Accessibility through Technology",
      details: [
        "International Conference on Progressive Innovations in Intelligent Systems and Data Science",
        "Published by IEEE Computer Society on IEEE Xplore",
      ],
      date: "December 2024",
      type: "Conference",
      icon: "🏥",
      docLink: "https://drafts.icpids.com/pdfs/ICPIDS2024-1HzVgPgxdlBrv8gckLTbgg/346900a382/346900a382.pdf", // Example link
    },
    {
      title: "Efficient Parking & Toll Management: A RFID-Enabled Approach with Vega Aries Development Board",
      details: [
        "International Journal of Innovative Science and Research Technology (Volume 8, Issue 11)",
      ],
      date: "November 2023",
      type: "Journal",
      icon: "🚗",
      docLink: "https://zenodo.org/records/10251059",
    },
  ];

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

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-10 md:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* About Me Header */}
        <RevealOnScroll threshold={0.1} rootMargin="0px" animationType="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
        </RevealOnScroll>

        {/* About Me Content */}
        <RevealOnScroll
          threshold={0.1}
          rootMargin="0px"
          animationType="fade-up"
          delay={100}
        >
          <div className="rounded-xl p-6 md:p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
              A passionate software engineer with a strong problem-solving
              mindset and a drive for innovation. Proficient in Python, C++, and
              modern web frameworks, with experience in scalable applications,
              cloud computing, and artificial intelligence. Enthusiastic about
              leveraging my skills to build impactful solutions.
            </p>

            {/* Technical Expertise */}
            <div className="flex items-center justify-center mb-6">
              <IconBadge icon="🛠️" size="lg" />
              <h3 className="text-xl sm:text-2xl font-bold ml-3">Technical Expertise</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div
                  key={category} // Use category as key for uniqueness
                  className="rounded-xl p-4 sm:p-6 border border-white/10 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <IconBadge icon={skillIcons[category]} size="sm" />
                    <h3 className="text-lg sm:text-xl font-bold ml-3">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech, key) => (
                      <div
                        key={tech} // Use tech as key for uniqueness
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}
          <RevealOnScroll
            threshold={0.1}
            rootMargin="0px"
            animationType="fade-left"
            delay={200}
          >
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all h-full">
              <div className="flex items-center justify-center mb-6">
                <IconBadge icon="🎓" size="md" />
                <h3 className="text-xl font-bold ml-3">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={item.degree} // Use degree as key for uniqueness
                    className="border-l-2 border-blue-500/50 pl-4 relative hover:border-blue-500 transition-all"
                  >
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-7px] top-1.5"></div>
                    <div className="flex items-center">
                      <IconBadge icon={item.icon} size="sm" />
                      <h4 className="font-bold text-white ml-2">{item.degree}</h4>
                    </div>
                    <p className="text-blue-500 mt-1">
                      {item.institution} | {item.period}
                    </p>
                    <p className="text-gray-300 text-sm">{item.grade}</p>
                    {item.coursework && (
                      <p className="text-gray-300 text-sm mt-1">
                        Coursework: {item.coursework}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Work Experience */}
          <RevealOnScroll
            threshold={0.1}
            rootMargin="0px"
            animationType="fade-right"
            delay={200}
          >
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all h-full">
              <div className="flex items-center justify-center mb-6">
                <IconBadge icon="💼" size="md" />
                <h3 className="text-xl font-bold ml-3">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={job.role} // Use role as key for uniqueness
                    className="border-l-2 border-blue-500/50 pl-4 relative hover:border-blue-500 transition-all"
                  >
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-7px] top-1.5"></div>
                    <div className="flex items-center">
                      <IconBadge icon={job.icon} size="sm" />
                      <h4 className="font-bold text-white ml-2">
                        {job.role} at {job.company}
                      </h4>
                    </div>
                    <p className="text-blue-500 mt-1">{job.period}</p>
                    <p className="text-gray-300 text-sm mt-1">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Publications Section */}
        <RevealOnScroll
          threshold={0.1}
          rootMargin="0px"
          animationType="fade-up"
          delay={300}
        >
          <div className="p-6 md:p-8 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-center mb-8">
              <IconBadge icon="📝" size="lg" />
              <h3 className="text-xl font-bold ml-3">Publications</h3>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={pub.title} // Use title as key for uniqueness
                  className="flex items-start p-4 rounded-lg border border-white/10 hover:-translate-y-1 transition-all"
                >
                  <IconBadge icon={pub.icon} size="md" />
                  <div className="flex-1 ml-4">
                    <div className="relative">
                      <h4 className="font-bold text-white text-lg pr-14">{pub.title}</h4>
                      {pub.docLink && (
                        <div className="absolute right-0 top-0">
                          <a
                            href={pub.docLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Read publication: ${pub.title}`}
                            className="inline-flex items-center bg-blue-500/10 text-blue-500 py-0.5 px-2 rounded-md text-xs hover:bg-blue-500/20 transition-all"
                          >
                            <span className="mr-1">📄</span>
                            Read
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 text-sm">
                      <ul className="list-disc list-inside text-gray-400">
                        {pub.details.map((detail, i) => (
                          <li key={i} className="ml-2 mt-1">
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between items-center mt-3">
                        <span className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-md transition">
                          {pub.type}
                        </span>
                        <p className="text-gray-400">{pub.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Certifications */}
        <RevealOnScroll
          threshold={0.1}
          rootMargin="0px"
          animationType="fade-up"
          delay={400}
        >
          <div className="p-6 md:p-8 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-center mb-8">
              <IconBadge icon="🏆" size="lg" />
              <h3 className="text-xl font-bold ml-3">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name} // Use name as key for uniqueness
                  className="flex items-start p-4 rounded-lg border border-white/10 hover:-translate-y-1 transition-all"
                >
                  <IconBadge icon={cert.icon} size="md" />
                  <div className="flex-1 ml-4">
                    <div className="relative">
                      <h4 className="font-bold text-white text-lg pr-14">{cert.name}</h4>
                      {cert.docLink && (
                        <div className="absolute right-0 top-0">
                          <a
                            href={cert.docLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Verify certification: ${cert.name}`}
                            className="inline-flex items-center bg-blue-500/10 text-blue-500 py-0.5 px-2 rounded-md text-xs hover:bg-blue-500/20 transition-all"
                          >
                            <span className="mr-1">🔗</span>
                            Verify
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-300">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm">{cert.year}</p>
                    </div>
                    {cert.achievement && (
                      <div className="mt-2">
                        <span className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-md transition">
                          {cert.achievement}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};