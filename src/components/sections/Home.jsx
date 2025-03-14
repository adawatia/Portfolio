import { useEffect, useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeLink = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Devansh_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Hide banner after download
    setShowBanner(false);
  };

  // Social and coding platform links
  const platformLinks = [
    {
      name: "GitHub",
      icon: (
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
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      url: "https://github.com/adawatia",
      color: "hover:text-blue-400",
    },
    {
      name: "LeetCode",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-3.85-1.759 4.9 4.9 0 0 0-3.775 1.736l-4.356 4.356c-1.08 1.08-1.6 2.52-1.6 3.945s.52 2.916 1.6 3.996l4.356 4.354c1.08 1.08 2.52 1.6 3.944 1.6s2.885-.52 3.965-1.6l2.608-2.636c.514-.514.496-1.366-.039-1.901s-1.386-.553-1.899-.038zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
        </svg>
      ),
      url: "https://leetcode.com/adawatia",
      color: "hover:text-yellow-500",
    },
    {
      name: "Codeforces",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
        </svg>
      ),
      url: "https://codeforces.com/profile/devsansh",
      color: "hover:text-red-500",
    },
    {
      name: "HackerRank",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.021-.107-.034-.166-.034s-.115.013-.166.034L7.11 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.044.101.044.165.044.065 0 .124-.014.171-.038l1.677-1.515c.073-.043.12-.124.12-.221 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z" />
        </svg>
      ),
      url: "https://www.hackerrank.com/adawatia",
      color: "hover:text-green-500",
    },
    {
      name: "LinkedIn",
      icon: (
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
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "https://www.linkedin.com/in/adawatia",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
    >
      {/* Enhanced background effect - animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-black" />
        <div className="absolute inset-0 opacity-10 animate-pulse bg-[radial-gradient(circle,rgba(59,130,246,0.3)_10%,transparent_40%)]" />

        {/* Additional subtle particle animation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Open to Work Banner - Positioned at Left Bottom */}
      {showBanner && (
        <div className="absolute bottom-6 left-6 z-20">
          <RevealOnScroll animationType="fade-right" threshold={0.1}>
            <div 
              onClick={handleDownloadResume}
              className="group cursor-pointer flex items-center gap-2 p-3 pr-5 rounded-lg backdrop-blur-md border border-blue-500/50 bg-blue-900/30 hover:bg-blue-800/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 animate-pulse hover:animate-none"
            >
              <div className="relative flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                <span className="text-blue-300 font-medium group-hover:text-blue-200">Open to Work</span>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBanner(false);
                }}
                className="ml-4 text-gray-400 hover:text-gray-200 transition-colors"
                aria-label="Close banner"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      )}

      <RevealOnScroll animationType="fade-up" threshold={0.1} className="w-full">
        <div className="text-center z-10 px-6">
          <RevealOnScroll animationType="fade-up" delay={200}>
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent leading-tight drop-shadow-lg">
              Hey! I'm Devansh Sharma.✨
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll animationType="fade-up" delay={400}>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto font-light tracking-wide">
              A passionate Software Developer, avid Book Enthusiast.
            </p>
          </RevealOnScroll>

          {/* Social & Coding Platform Links - Centered Below Text */}
          <RevealOnScroll animationType="fade-up" delay={600}>
            <div className="flex justify-center space-x-6 mb-8">
              {platformLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 p-3 rounded-lg backdrop-blur-sm border border-gray-700/50 bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300 ${platform.color}`}
                  aria-label={platform.name}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <span className="text-gray-400 group-hover:text-current">
                    {platform.icon}
                  </span>
                </a>
              ))}
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll animationType="fade-up" delay={800}>
            <div className="flex justify-center space-x-6">
              <a
                href="#projects"
                className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 relative overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:bg-blue-700 group"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a
                href="#contact"
                className="border border-blue-500/70 text-blue-400 py-3 px-8 rounded-full font-semibold transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-500/20 hover:text-blue-300 group"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;