import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MateriKalkulus from "./components/materiKalkulus.jsx";

const router = createBrowserRouter([
  {
    path: "/calculus101",
    element: <App />,
  },
  {
    path: "/MateriKalkulus",
    element: <MateriKalkulus />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
