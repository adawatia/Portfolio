import "./App.css";
import { useState, useCallback } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent unnecessary re-renders of setMenuOpen
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Handle loading completion
  const handleComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleComplete} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 flex flex-col`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={toggleMenu} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={toggleMenu} />
        <Home />
        <About/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
