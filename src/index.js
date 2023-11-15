import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MateriKalkulus from "./components/materiKalkulus.jsx";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/calculus101",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/calculus101/MateriKalkulus",
    element: <MateriKalkulus />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
