import "./App.css";
import { useState, useCallback } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {!isLoaded ? (
        <LoadingScreen onComplete={handleComplete} />
      ) : (
        <div className="text-gray-100 p-4">
          {/* Your main application content here */}
          <h1 className="text-2xl font-bold">Application Loaded</h1>
        </div>
      )}
    </div>
  );
}

export default App;