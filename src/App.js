import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResultsPage from "./pages/ResultsPage";

//TODO: some kind of routing ex. react-router

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(118.47deg, #E9EDF0 0.61%, #E9EDF0 100%)",
        width: "100%",
        minHeight: "100vh",
        fontFamily: "'Lato', sans-serif",
      }}
      className="App"
    >
      <LoginPage />
      {/* <RegistrationPage /> */}
      {/* <ResultsPage /> */}
    </div>
  );
}

export default App;
