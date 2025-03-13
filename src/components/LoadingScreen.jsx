import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false); // State for fade-out animation
  const fullText = "<adawatia/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Start fade-out animation
        setIsFadingOut(true);

        // Call onComplete after fade-out animation finishes
        setTimeout(() => {
          onComplete();
        }, 500); // Match this duration with the fade-out animation duration
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-gray-100 transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-black" />
        <div className="absolute inset-0 opacity-10 animate-pulse bg-[radial-gradient(circle,rgba(59,130,246,0.3)_10%,transparent_40%)]" />

        {/* Subtle particle animation */}
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

      {/* Text with thicker cursor and glass effect */}
      <div className="mb-4 text-4xl font-mono font-bold relative z-10">
        {text}
        <span className="inline-block w-[6px] h-8 bg-white/80 ml-1 animate-blink shadow-[0_0_10px_#ffffff]"></span>
      </div>

      {/* Loading bar with improved animation */}
      <div className="w-[200px] h-[4px] bg-gray-800 rounded-full relative overflow-hidden z-10">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar rounded-full"></div>
      </div>
    </div>
  );
};