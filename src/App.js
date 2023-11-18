// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import MainPage from "./main-page/MainPage";
import ErrorBoundary from "./ErrorBoundary";
import LoadingScreen from "./loading-page/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        {loading ? (
          <LoadingScreen />
        ) : (
          <header className="App">
            <MainPage />
          </header>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
