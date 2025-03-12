import { useEffect, useState } from "react";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
    >
      {/* Background effect - animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-black" />
        <div className="absolute inset-0 opacity-10 animate-pulse bg-[radial-gradient(circle,rgba(59,130,246,0.3)_10%,transparent_40%)]" />
      </div>
      
      <div
        className={`text-center z-10 px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1
          className={`text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent leading-tight drop-shadow-lg transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Hey! I'm Devansh Sharma.✨
        </h1>
        <p
          className={`text-gray-300 text-lg mb-8 max-w-lg mx-auto font-light tracking-wide transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          A passionate Software Developer, avid Book Enthusiast, and Tech Reviewer.
        </p>
        <div
          className={`flex justify-center space-x-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 relative overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/70 text-blue-400 py-3 px-8 rounded-full font-semibold transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-500/20 hover:text-blue-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};