import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";

//TODO: some kind of routing ex. react-router

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(118.47deg, #E9EDF0 0.61%, #E9EDF0 100%)",
        width: "100%",
        minHeight: "100vh",
      }}
      className="App"
    >
      <LoginPage />
    </div>
  );
}

export default App;
