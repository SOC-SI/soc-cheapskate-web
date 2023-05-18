import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResultsPage from "./pages/ResultsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddListPage from "./pages/AddListPage";
import PrivateRoute from "./services/private-route";
import LogoutPage from "./pages/LogoutPage";

//TODO: some kind of routing ex. react-router

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/logout",
      element: <LogoutPage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/results",
      element: <PrivateRoute><ResultsPage /></PrivateRoute>,
    },
    {
      path: "/",
      element: <PrivateRoute><HomePage /></PrivateRoute>
    },
    {
      path: "/addList",
      element: <PrivateRoute><AddListPage /></PrivateRoute>,
    }
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
