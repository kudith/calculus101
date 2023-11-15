import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import MateriKalkulus from "./components/materiKalkulus.jsx";

const Root = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/calculus101" element={<App />} />
        <Route
          path="/calculus101/MateriKalkulus"
          element={<MateriKalkulus />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
