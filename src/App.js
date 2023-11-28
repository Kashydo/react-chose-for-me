// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieRec from "./pages/MovieRec";
import ErrorBoundary from "./ErrorBoundary";
import LoadingScreen from "./pages/LoadingPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {loading ? (
              <Route index element={<LoadingScreen />} />
            ) : (
              <Route index element={<MovieRec />} />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
