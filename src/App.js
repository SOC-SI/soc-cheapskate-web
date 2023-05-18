import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResultsPage from "./pages/ResultsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddListPage from "./pages/AddListPage";

//TODO: some kind of routing ex. react-router

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
    },
    {
      path: "/results",
      element: <ResultsPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/addList",
      element: <AddListPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
