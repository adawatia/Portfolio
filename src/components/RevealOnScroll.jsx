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

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, isRevealed]);

  // Determine animation classes based on animation type
  const animationClasses = {
    "fade-up": "reveal-fade-up",
    "fade-left": "reveal-fade-left",
    "fade-right": "reveal-fade-right",
    "zoom": "reveal-zoom",
  };

  const animationClass = animationClasses[animationType] || "reveal-fade-up";

  return (
    <div 
      ref={ref} 
      className={`reveal ${animationClass} ${isRevealed ? 'visible' : ''} ${className}`}
      style={{ 
        transitionDelay: delay ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
