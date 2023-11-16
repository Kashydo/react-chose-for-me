
import "./App.css";
import MainPage from "./main-page/MainPage";
import ErrorBoundary from "./ErrorBoundary";
import customLogo from './images/logo192.png'; 

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
     <header className="App-header">
                <img src={customLogo} className="App-logo" alt="logo" /> {}
                <p>
                    Welcome to ChooseForMe
                </p>
      </header>
      <MainPage />
      </div>
    </ErrorBoundary>
  );

export default App;

