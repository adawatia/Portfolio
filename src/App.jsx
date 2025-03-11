import "./App.css";
import { useState, useCallback } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Use useCallback to prevent unnecessary re-renders
  const handleComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleComplete} />}
    </>
  );
}

export default App;
