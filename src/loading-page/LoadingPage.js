// LoadingScreen.js
import React from "react";
import customLogo from "../images/logo192.png";

const LoadingScreen = () => (
  <div className="welcome-container">
    <img src={customLogo} className="App-logo" alt="logo" />
    <br />
    <br />
    <br />
    <p>Welcome to ChooseForMe</p>
  </div>
);

export default LoadingScreen;
