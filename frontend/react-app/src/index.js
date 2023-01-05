import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Single from "./Components/Single";
import Write from "./Components/Write";
import Footer from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/homepage",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Single />,
      },
      {
        path: "/publish",
        element: <Write />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
