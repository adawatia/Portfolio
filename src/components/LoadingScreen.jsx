import React, { useState, useEffect, useCallback, useMemo } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  const fullText = "adawatia";
  
  // Define loading phases with custom speeds
  const phases = useMemo(() => [
    { target: 30, speed: 1.2 }, // Initial phase - slightly faster
    { target: 60, speed: 0.8 }, // Middle phase - slightly slower
    { target: 90, speed: 1 },   // Near completion - normal speed
    { target: 100, speed: 1.5 } // Final burst to completion - faster
  ], []);
  
  // Enhanced particle system with different types - reduced glitter effect and added space clouds
  const generateParticles = useCallback((progress) => {
    const particles = [];
    // Reduce base count for less glitter
    const baseCount = Math.floor(progress / 5); // Reduced from /3 to /5
    
    // Background ambient particles (reduced count)
    for (let i = 0; i < baseCount; i++) {
      particles.push({
        id: `bg-${i}`,
        type: 'ambient',
        size: Math.random() * 2 + 0.6, // Slightly smaller
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 6,
        opacity: 0.2 + (Math.random() * 0.2) // Reduced opacity
      });
    }
    
    // Add special foreground particles at certain thresholds (fewer)
    if (progress > 30) {
      for (let i = 0; i < 2; i++) { // Reduced from 3 to 2
        particles.push({
          id: `fg-${i}`,
          type: 'foreground',
          size: Math.random() * 3 + 1, // Slightly smaller
          x: 35 + (Math.random() * 30),
          y: 40 + (Math.random() * 20),
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 3,
          opacity: 0.4 + (Math.random() * 0.3) // Reduced opacity
        });
      }
    }
    
    // Add space cloud-like particles
    if (progress > 10) {
      const cloudCount = Math.min(3, Math.floor(progress / 25));
      for (let i = 0; i < cloudCount; i++) {
        particles.push({
          id: `cloud-${i}`,
          type: 'cloud',
          size: Math.random() * 60 + 30, // Larger size for clouds
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 10 + Math.random() * 15, // Slower movement
          opacity: 0.05 + (Math.random() * 0.08) // Very subtle opacity
        });
      }
    }
    
    return particles;
  }, []);
  
  // Generate dynamic particles
  const particles = useMemo(() => 
    generateParticles(loadingProgress), 
    [generateParticles, loadingProgress]
  );
  
  // Easing function for smoother progress
  const easeOutQuad = (t) => t * (2 - t);
  
  useEffect(() => {
    const totalDuration = 4200; // 4.2 seconds
    const charTypingTime = totalDuration / (fullText.length + 2);
    
    // Character typing effect
    let index = 0;
    const charInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(charInterval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, charTypingTime);
    
    // Improved cursor blink with variable timing
    let blinkSpeed = 500;
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
      // Cursor blinks faster as loading progresses
      if (loadingProgress > 75) blinkSpeed = 350;
    }, blinkSpeed);
    
    // Phase-based loading progress with dynamic speed
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) return 100;
        
        // Determine current phase
        let phase = 0;
        for (let i = 0; i < phases.length; i++) {
          if (prev < phases[i].target) {
            phase = i;
            break;
          }
        }
        
        // Update phase if needed
        if (phase !== currentPhase) {
          setCurrentPhase(phase);
        }
        
        // Calculate increment based on current phase speed and remaining distance
        const targetValue = phases[phase].target;
        const speed = phases[phase].speed;
        const remaining = targetValue - prev;
        const increment = Math.max(0.3, remaining * 0.05 * speed);
        
        return Math.min(targetValue, prev + increment);
      });
    }, 100);
    
    // Safety fallback
    const maxTimeoutId = setTimeout(() => {
      setText(fullText);
      setLoadingProgress(100);
      setTimeout(onComplete, 300);
    }, totalDuration + 500);
    
    return () => {
      clearInterval(charInterval);
      clearInterval(cursorInterval);
      clearInterval(progressInterval);
      clearTimeout(maxTimeoutId);
    };
  }, [fullText, onComplete, phases, currentPhase]);
  
  // Dynamic status messages with more detail
  const statusMessages = useMemo(() => [
    { threshold: 0, text: "initializing system", color: "text-blue-300" },
    { threshold: 25, text: "loading portfolio", color: "text-blue-300" },
    { threshold: 50, text: "preparing experience", color: "text-cyan-300" },
    { threshold: 75, text: "welcome", color: "text-cyan-300", suffix: "onboard" }
  ], []);
  
  const currentStatus = useMemo(() => {
    for (let i = statusMessages.length - 1; i >= 0; i--) {
      if (loadingProgress >= statusMessages[i].threshold) {
        return statusMessages[i];
      }
    }
    return statusMessages[0];
  }, [statusMessages, loadingProgress]);
  
  // Calculate dynamic glitch effect intensity (reduced)
  const glitchIntensity = useMemo(() => {
    // Reduced glitch effect overall
    if (loadingProgress > 90) return 0.4; // Reduced from 0.6
    if (loadingProgress > 70) return 0.2; // Reduced from 0.3
    if (loadingProgress > 40) return 0.1; // Reduced from 0.15
    return 0;
  }, [loadingProgress]);
  
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced background with space-like effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep space gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-gray-900/10" />
        
        {/* Subtle nebula-like glow */}
        <div 
          className="absolute inset-0 opacity-6 animate-pulse" 
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 45%)",
            animation: "pulse 12s infinite ease-in-out"
          }}
        />
        
        {/* Space dust - reduced star field */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => ( // Reduced from 50 to 35
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 1.5 + 0.5}px`, // Slightly smaller
                height: `${Math.random() * 1.5 + 0.5}px`, // Slightly smaller
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.2, // Reduced opacity
                animation: `twinkle ${Math.random() * 4 + 4}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Space clouds */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={`space-cloud-${i}`}
              className="absolute rounded-full bg-gradient-to-br from-blue-900/5 to-indigo-900/5"
              style={{
                width: `${150 + Math.random() * 200}px`,
                height: `${120 + Math.random() * 150}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.05 + (Math.random() * 0.1),
                filter: 'blur(30px)',
                transform: 'translate(-50%, -50%)',
                animation: `floatCloud ${15 + Math.random() * 20}s infinite ease-in-out ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced flowing particles with different behavior based on type */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute rounded-full ${
                particle.type === 'foreground' ? 'bg-cyan-400' : 
                particle.type === 'cloud' ? 'bg-gradient-to-br from-blue-900/10 to-purple-900/10' : 
                'bg-blue-400'
              }`}
              style={{
                width: `${particle.size}px`,
                height: particle.type === 'cloud' ? `${particle.size * 0.8}px` : `${particle.size}px`,
                top: `${particle.y}%`,
                left: `${particle.x}%`,
                opacity: particle.opacity,
                filter: particle.type === 'cloud' ? 'blur(15px)' : 
                       particle.type === 'foreground' ? 'blur(0.5px)' : 'none',
                animation: particle.type === 'cloud' ? 
                  `floatCloud ${particle.duration}s infinite ease-in-out ${particle.delay}s` :
                  particle.type === 'foreground' ? 
                  `floatForeground ${particle.duration}s infinite ease-in-out ${particle.delay}s` : 
                  `floatAmbient ${particle.duration}s infinite ease-in-out ${particle.delay}s`,
                boxShadow: particle.type === 'foreground' ? 
                  '0 0 3px rgba(56, 189, 248, 0.5)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main content with enhanced text effects */}
      <div className="mb-16 text-6xl font-bold relative flex items-center select-none">
        {/* Subtle glitch effect layer (only visible during transitions) */}
        {glitchIntensity > 0 && (
          <div 
            className="absolute z-20 text-red-500 opacity-0"
            style={{
              left: `${Math.random() * glitchIntensity - glitchIntensity/2}em`,
              top: `${Math.random() * glitchIntensity - glitchIntensity/2}em`,
              opacity: Math.random() > 0.8 ? 0.3 : 0,
              clipPath: "inset(0 0 0 0)"
            }}
          >
            {text || fullText.substring(0, 1)}
          </div>
        )}
        
        {/* Main text with enhanced gradient */}
        <span 
          className="relative z-10 bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #38bdf8 50%, #3b82f6 100%)",
            backgroundSize: "200% 100%",
            animation: "gradientShift 3s infinite ease-in-out"
          }}
        >
          {text}
        </span>
        
        {/* Enhanced block cursor with animation */}
        <div 
          className={`ml-1 h-12 w-5 relative z-10 transition-all duration-200 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            animation: cursorVisible ? 'pulse 1.5s infinite' : 'none',
            transform: cursorVisible ? 'scaleY(1)' : 'scaleY(0.92)'
          }}
        >
          <div className="absolute inset-0 bg-blue-400 opacity-60"></div>
          <div className="absolute inset-0 border border-blue-300"></div>
          <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-gradient-to-b from-white via-transparent to-transparent"></div>
        </div>
        
        {/* Minimal text glow effect */}
        <div className="absolute -inset-1 blur-sm opacity-15 bg-blue-500 rounded-lg -z-10 animate-pulse"></div>
      </div>
      
      {/* Enhanced loading bar with premium effects */}
      <div className="w-72 h-1.5 bg-gray-800/40 rounded-full relative overflow-hidden mb-8 backdrop-blur-sm">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-20 bg-noise"></div>
        
        {/* Progress indicator with dynamic gradient */}
        <div 
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{ 
            width: `${loadingProgress}%`,
            backgroundImage: "linear-gradient(90deg, #1e40af 0%, #38bdf8 50%, #3b82f6 100%)",
            boxShadow: "0 0 8px rgba(56, 189, 248, 0.3), inset 0 0 2px rgba(255, 255, 255, 0.5)",
            transition: "width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
        />
        
        {/* Enhanced particles with dynamic behavior */}
        {loadingProgress > 5 && (
          [...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 -translate-y-1/2 h-3 w-0.5 bg-blue-200/70 rounded-full"
              style={{
                left: `${Math.min(100, loadingProgress - (i * 5))}%`,
                opacity: 0.6 - (i * 0.15),
                filter: 'blur(0.5px)',
                transform: 'translate(-50%, -50%) rotate(15deg)',
                boxShadow: '0 0 4px rgba(59, 130, 246, 0.3)',
                animation: `particlePulse ${1 + i * 0.2}s infinite alternate ease-in-out`
              }}
            />
          ))
        )}
      </div>
      
      {/* Enhanced percentage indicator with animation */}
      <div className="mb-6 relative">
        <div 
          className="text-lg font-light tracking-widest bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #38bdf8 100%)",
            transition: "opacity 0.3s ease"
          }}
        >
          {Math.round(loadingProgress)}%
        </div>
        <div className="absolute inset-0 blur-md opacity-15 bg-blue-500 rounded-full -z-10"></div>
      </div>
      
      {/* Enhanced status text with dynamic color transition */}
      <div className="text-sm font-light tracking-wide h-6 overflow-hidden relative">
        <div className="flex items-center transition-all duration-500">
          <span className={currentStatus.color + " transition-colors duration-500"}>
            {currentStatus.text}
          </span>
          <span className="animate-ellipsis text-blue-400 ml-1">...</span>
          {currentStatus.suffix && (
            <span 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-1 animate-fadeIn"
              style={{
                animation: "fadeIn 0.8s forwards, pulse 2s infinite ease-in-out"
              }}
            >
              {currentStatus.suffix}
            </span>
          )}
        </div>
      </div>
      
      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.5; }
        }
        
        @keyframes floatAmbient {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          25% { transform: translate(10px, -10px) scale(1.1); opacity: 0.4; }
          50% { transform: translate(20px, 0) scale(1); opacity: 0.2; }
          75% { transform: translate(10px, 10px) scale(1.1); opacity: 0.4; }
        }
        
        @keyframes floatForeground {
          0%, 100% { transform: translate(0, 0) scale(1); filter: blur(0.5px); }
          50% { transform: translate(5px, -5px) scale(1.3); filter: blur(1px); }
        }
        
        @keyframes floatCloud {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -5px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
        }
        
        @keyframes ellipsis {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes particlePulse {
          0% { height: 3px; opacity: 0.5; }
          100% { height: 4px; opacity: 0.8; }
        }
        
        .animate-ellipsis {
          animation: ellipsis 1.2s infinite;
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};