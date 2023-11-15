import React from 'react';
import customLogo from './images/logo192.png'; 

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={customLogo} className="App-logo" alt="logo" /> {}
                <p>
                    Welcome to ChooseForMe
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

