import React, { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Mobile navigation menu component with enhanced smooth animations
 * @param {Object} props - Component props
 * @param {boolean} props.menuOpen - Controls menu visibility state
 * @param {Function} props.setMenuOpen - Function to update menu state
 */
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Icon badge component with configurable size
  const IconBadge = ({ icon, size = "md" }) => {
    const sizeClasses = {
      sm: "w-8 h-8 text-xl",
      md: "w-10 h-10 text-2xl",
      lg: "w-12 h-12 text-3xl",
    };

    return (
      <div
        className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500`}
        aria-hidden="true"
      >
        {icon}
      </div>
    );
  };

  // Define prop types for IconBadge
  IconBadge.propTypes = {
    icon: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
  };

  // Navigation menu items with icons
  const menuItems = [
    { name: "Home", href: "#home", icon: "✨", ariaLabel: "Navigate to home section" },
    { name: "About", href: "#about", icon: "👋", ariaLabel: "Navigate to about section" },
    { name: "Projects", href: "#projects", icon: "🚀", ariaLabel: "Navigate to projects section" },
    { name: "Contact", href: "#contact", icon: "📧", ariaLabel: "Navigate to contact section" }
  ];

  // Close menu and navigate to section
  const handleNavigation = (e) => {
    e.preventDefault();
    
    // Get the target section ID
    const targetId = e.currentTarget.getAttribute('href');
    
    // First animate the menu closing
    setMenuOpen(false);
    
    // After menu closing animation, scroll to the section
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); // Slightly longer than the main transition duration
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-400 ease-in-out overflow-hidden
          ${
            menuOpen
              ? "h-screen opacity-100 pointer-events-auto"
              : "h-0 opacity-0 pointer-events-none"
          }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
      }}
      aria-hidden={!menuOpen}
      role="navigation"
      aria-label="Mobile navigation"
    >
      {/* Gradient background layers with staggered animations */}
      <div 
        className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ease-out ${menuOpen ? 'opacity-100' : 'opacity-0'}`} 
        style={{ transitionDelay: menuOpen ? '0ms' : '200ms' }}
      ></div>
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-black transition-opacity duration-500 ease-out ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: menuOpen ? '50ms' : '150ms' }}
      ></div>
      <div 
        className={`absolute inset-0 animate-pulse bg-[radial-gradient(circle,rgba(59,130,246,0.3)_10%,transparent_40%)] transition-opacity duration-500 ease-out ${menuOpen ? 'opacity-10' : 'opacity-0'}`}
        style={{ transitionDelay: menuOpen ? '100ms' : '100ms' }}
      ></div>
      
      {/* Animated background particles with varying animations */}
      <div className={`absolute inset-0 transition-opacity duration-500 ease-out ${menuOpen ? 'opacity-20' : 'opacity-0'}`}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 0.4s ease-out',
              transitionDelay: `${i * 20}ms`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Close button with animation */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 text-gray-300 text-3xl p-2 rounded-full border border-white/10 bg-gray-900/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer hover:text-white hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all z-50 transform 
          ${menuOpen ? 'scale-100 opacity-100 rotate-0' : 'scale-95 opacity-0 rotate-90'}`}
        style={{ 
          transitionDuration: '400ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: menuOpen ? '300ms' : '0ms'
        }}
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation container with improved animation */}
      <div 
        className={`p-8 rounded-xl bg-gray-900/20 backdrop-blur-md border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all flex flex-col items-center z-10 relative transform 
          ${menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        style={{ 
          transitionDuration: '400ms',
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          transitionDelay: menuOpen ? '200ms' : '0ms'
        }}
      >
        {menuItems.map((item, index) => (
          <a
            key={`nav-item-${item.name.toLowerCase()}`}
            href={item.href}
            onClick={handleNavigation}
            className={`flex items-center w-full my-4 p-3 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-400 transform
            ${menuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}`}
            style={{ 
              transitionDelay: menuOpen ? `${150 + index * 75}ms` : `${index * 50}ms`,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}
            aria-label={item.ariaLabel}
          >
            <IconBadge icon={item.icon} size="sm" />
            <span className={`text-xl font-semibold ml-3 ${item.name === "Home" ? "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent" : "text-gray-300"}`}>
              {item.name}
            </span>
          </a>
        ))}
        
        {/* Branding footer with improved animation */}
        <div 
          className={`w-full mt-6 p-3 border-t border-white/10 text-center transition-all duration-500 transform
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ 
            transitionDelay: menuOpen ? "500ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <p className="text-sm text-gray-400">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-medium">Devansh Sharma</span> • Developer Portfolio
          </p>
        </div>
      </div>
    </nav>
  );
};

// Define component prop types
MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};