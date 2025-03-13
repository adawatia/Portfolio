import { useEffect, useRef, useState } from "react";

/**
 * RevealOnScroll - Animates children when they scroll into view
 * 
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Content to be revealed
 * @param {number} props.threshold Visibility threshold (0-1), defaults to 0.2
 * @param {string} props.rootMargin Margin around root, defaults to "0px 0px -50px 0px"
 * @param {string} props.animationType Animation type: "fade-up", "fade-left", "fade-right", "zoom", defaults to "fade-up"
 * @param {number} props.delay Animation delay in ms, defaults to 0
 * @param {string} props.className Additional classes for the container
 * @returns {JSX.Element} Reveal container with children
 */
const RevealOnScroll = ({ 
  children,
  threshold = 0.2,
  rootMargin = "0px 0px -50px 0px",
  animationType = "fade-up",
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Check if IntersectionObserver is available (for SSR compatibility)
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsRevealed(true);
      return;
    }

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isRevealed) {
        setIsRevealed(true);
      }
    };

    const options = {
      threshold,
      rootMargin,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, isRevealed]);

  // Determine animation classes based on animation type
  const getAnimationClass = () => {
    switch (animationType) {
      case "fade-left":
        return "reveal-fade-left";
      case "fade-right":
        return "reveal-fade-right";
      case "zoom":
        return "reveal-zoom";
      case "fade-up":
      default:
        return "reveal-fade-up";
    }
  };

  return (
    <div 
      ref={ref} 
      className={`reveal ${getAnimationClass()} ${isRevealed ? 'visible' : ''} ${className}`}
      style={{ 
        transitionDelay: delay ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;

// Add these CSS classes to your global styles or component styles:
/* 
.reveal {
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.26, 0.54, 0.32, 1);
  transition-property: opacity, transform;
  will-change: opacity, transform;
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

.reveal-fade-up {
  transform: translateY(30px);
}

.reveal-fade-left {
  transform: translateX(-30px);
}

.reveal-fade-right {
  transform: translateX(30px);
}

.reveal-zoom {
  transform: scale(0.9);
}
*/