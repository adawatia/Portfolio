import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Science is elegant.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, fullText.length]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center overflow-hidden">
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

      {/* Planets and Stars */}
      <div className="absolute inset-0">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="planet planet-3"></div>
        <div className="stars">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center z-10 px-6">
        <div className="glass-effect p-6 rounded-lg backdrop-blur-md border border-gray-700/50 bg-gray-900/20">
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            {text}
            <span className="animate-blink ml-1 text-white">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
};