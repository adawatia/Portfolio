import { useState, useEffect, useRef } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("default");
  const cursorRef = useRef(null);
  const fullText = "adawatia";
  
  // Cursor animation sequence
  const cursorStyles = [
    "default", "expand", "flash", "rainbow", "glitch", "pulse"
  ];
  
  useEffect(() => {
    let index = 0;
    const charInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      // Random glitch effect
      if (Math.random() > 0.8) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 100);
      }
      
      // Change cursor style every few characters
      if (index % 2 === 0) {
        const nextStyle = cursorStyles[Math.floor(Math.random() * cursorStyles.length)];
        setCursorStyle(nextStyle);
      }
      
      if (index > fullText.length) {
        clearInterval(charInterval);
        
        // Extra dramatic cursor sequence after text is complete
        let cursorIndex = 0;
        const finalCursorInterval = setInterval(() => {
          setCursorStyle(cursorStyles[cursorIndex % cursorStyles.length]);
          cursorIndex++;
          
          if (cursorIndex > 10) {
            clearInterval(finalCursorInterval);
            setCursorStyle("final");
            setTimeout(() => {
              onComplete();
            }, 1000);
          }
        }, 150);
      }
    }, 100);
    
    // Separate progress bar animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + (Math.random() * 3);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 80);
    
    return () => {
      clearInterval(charInterval);
      clearInterval(progressInterval);
    };
  }, [fullText, onComplete]);
  
  // Render the appropriate cursor based on current style
  const renderCursor = () => {
    switch(cursorStyle) {
      case "expand":
        return <span className="cursor-expand">|</span>;
      case "flash":
        return <span className="cursor-flash">|</span>;
      case "rainbow":
        return <span className="cursor-rainbow">|</span>;
      case "glitch":
        return <span className="cursor-glitch">|</span>;
      case "pulse":
        return <span className="cursor-pulse">|</span>;
      case "final":
        return <span className="cursor-final">█</span>;
      default:
        return <span className="cursor-default">|</span>;
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Enhanced background with code patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="code-rain"></div>
      </div>
      
      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="hexagon-pattern"></div>
      </div>
      
      {/* Main content */}
      <div className={`mb-4 text-5xl font-mono font-bold transition-all ${glitchEffect ? 'text-red-400 translate-x-1' : 'text-gray-100'} relative`}>
        <span className="relative z-10">{text}</span>
        <span className="ml-1 relative z-10" ref={cursorRef}>
          {renderCursor()}
        </span>
        
        {/* Text shadow effect */}
        <div className="absolute -inset-1 blur-sm opacity-50 bg-blue-500 rounded-lg -z-10 animate-pulse-slow"></div>
      </div>
      
      {/* Enhanced loading bar with pulse effect */}
      <div className="w-64 h-2 bg-gray-800 rounded-full relative overflow-hidden mb-6 p-px">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_15px_#3b82f6] transition-all duration-300 ease-out relative"
          style={{ width: `${loadingProgress}%` }}
        >
          <div className="absolute right-0 top-0 h-full w-4 bg-white opacity-30 blur-sm animate-shimmer"></div>
        </div>
      </div>
      
      {/* Status text with typewriter effect */}
      <div className="text-sm text-gray-400 font-mono h-6 overflow-hidden relative">
        <div className={`transition-transform duration-500 ease-in-out`} 
             style={{ transform: `translateY(-${Math.floor(loadingProgress / 25) * 1.5}rem)` }}>
          <div className="h-6 flex items-center">initializing system...</div>
          <div className="h-6 flex items-center">loading resources...</div>
          <div className="h-6 flex items-center">establishing connection...</div>
          <div className="h-6 flex items-center">ready to launch<span className="animate-ellipsis">...</span></div>
        </div>
      </div>
      
      {/* Tech circuit lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="circuit-lines"></div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(30).fill().map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-indigo-500'}`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${5 + Math.random() * 10}px ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#22d3ee' : '#6366f1'}`,
              animation: `float ${2 + Math.random() * 4}s infinite linear`
            }}
          ></div>
        ))}
      </div>
      
      {/* Add global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes ellipsis {
          0% { opacity: 0; }
          25% { opacity: 1; }
          50% { opacity: 0; }
          75% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        /* Amazing cursor animations */
        .cursor-default {
          animation: blink 1s infinite step-end;
        }
        
        .cursor-expand {
          animation: expand 0.8s infinite alternate;
          display: inline-block;
          transform-origin: bottom;
        }
        
        .cursor-flash {
          animation: flash 0.3s infinite alternate;
        }
        
        .cursor-rainbow {
          animation: rainbow 2s infinite linear;
        }
        
        .cursor-glitch {
          animation: glitch 0.2s infinite linear;
          position: relative;
        }
        
        .cursor-pulse {
          animation: pulse 0.6s infinite alternate;
          text-shadow: 0 0 8px #3b82f6;
        }
        
        .cursor-final {
          animation: final 1s forwards;
          font-size: 1.2em;
          color: #3b82f6;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes expand {
          0% { transform: scaleY(0.8); }
          100% { transform: scaleY(1.5); }
        }
        
        @keyframes flash {
          0% { opacity: 0.2; }
          100% { opacity: 1; text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6; }
        }
        
        @keyframes rainbow {
          0% { color: #ff0000; }
          16.6% { color: #ff8000; }
          33.3% { color: #ffff00; }
          50% { color: #00ff00; }
          66.6% { color: #0000ff; }
          83.3% { color: #8000ff; }
          100% { color: #ff0000; }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); color: #3b82f6; }
          25% { transform: translate(-2px, 1px); color: #22d3ee; }
          50% { transform: translate(1px, -1px); color: #818cf8; }
          75% { transform: translate(1px, 2px); color: #fb7185; }
          100% { transform: translate(0); color: #3b82f6; }
        }
        
        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes final {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 1; text-shadow: 0 0 20px #3b82f6; }
          100% { transform: scale(5); opacity: 0; text-shadow: 0 0 40px #3b82f6; }
        }
      `}</style>
    </div>
  );
};