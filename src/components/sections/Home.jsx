import { useEffect, useState, useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showOpenToWork, setShowOpenToWork] = useState(true); // New state for controlling visibility
  const tooltipTimeoutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);

    // Clear timeout on component unmount
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  // Function to handle resume download
  const handleDownloadResume = (e) => {
    e.stopPropagation(); // Prevent event bubbling

    // Replace with your actual resume file path
    const resumeLink = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Devansh_Sharma_Resume.pdf";
    link.setAttribute("aria-label", "Download Devansh Sharma's Resume");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show tooltip feedback
    setShowTooltip(true);
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  // Function to close banner
  const handleCloseBanner = (e) => {
    e.stopPropagation(); // Prevent event bubbling
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

      {/* Smaller Open to Work Banner - Positioned at Left Bottom */}
      {showBanner && showOpenToWork && (
        <div className="absolute z-20 sm:bottom-6 sm:left-6 bottom-4 left-0 right-0 sm:right-auto px-4 sm:px-0">
          <RevealOnScroll animationType="fade-right" threshold={0.1}>
            <div 
              onClick={handleDownloadResume}
              className="group cursor-pointer relative flex items-center gap-1 py-2 px-3 rounded-lg backdrop-blur-lg border border-blue-500/30 bg-blue-900/10 hover:bg-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 overflow-hidden w-auto max-w-fit"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
              role="button"
              aria-label="Download resume - Open to work"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleDownloadResume(e);
                }
              }}
            >
              {/* Glass-like effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 opacity-50 rounded-lg"></div>
              
              <div className="relative flex items-center z-10">
                {/* Active status indicator with pulse effect */}
                <div className="relative">
                  <span className="absolute w-2 h-2 bg-green-400 rounded-full opacity-70 animate-ping"></span>
                  <span className="relative inline-flex w-2 h-2 bg-green-400 rounded-full mr-2 shadow-[0_0_6px_rgba(74,222,128,0.8)]"></span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-blue-200 text-sm font-medium group-hover:text-blue-100 transition-colors">Open to Work</span>
                  <span className="text-xs text-blue-300/70 text-[10px]">Click for resume</span>
                </div>
                
                {/* Download icon - smaller size */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-1 w-3 h-3 text-blue-300 group-hover:text-blue-200 transition-all duration-300 group-hover:translate-y-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Animated subtle background gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Close button - smaller */}
              <button 
                onClick={handleCloseBanner}
                className="ml-1 text-gray-400 hover:text-gray-200 hover:bg-gray-800/40 rounded-full p-0.5 transition-colors duration-300"
                aria-label="Close banner"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              {/* Tooltip for download confirmation - adjusted position */}
              {showTooltip && (
                <div className="absolute -top-8 left-0 right-0 mx-auto w-max px-2 py-1 bg-green-800/90 text-green-100 text-xs rounded-md shadow-lg backdrop-blur-sm">
                  Resume download started!
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-800/90 rotate-45"></div>
                </div>
              )}
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
