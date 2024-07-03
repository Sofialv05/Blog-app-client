import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
      //adding navbar to every page inside the children
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gradient-to-t from-primary to-sub font-gudea">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
