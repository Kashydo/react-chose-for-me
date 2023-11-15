import "./App.css";
import MainPage from "./main-page/MainPage";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <MainPage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
