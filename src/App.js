import React, { useState } from "react";
import Navbar from "./components/navbar";
import FunctionSelector from "./components/functionSelector";
import About from "./components/about";
import Hero from "./components/hero";
import Member from "./components/Member";
import FunctionGraph from "./components/Lineargraph";
import QuadraticGraphComponent from "./components/quadraticFunc";
import LogarithmicGraphComponent from "./components/logaritmFunc";
import TrigonometricGraphComponent from "./components/trigonoFunc";
import CubicGraph from "./components/cubicFunc";
import Footer from "./components/footer";
import { ScrollRestoration } from "react-router-dom";

function App() {
  const [selectedFunction, setSelectedFunction] = useState("linear");

  return (
    <div className="bg-gray-100 min-h-screen" id="home-section">
      <Navbar />
      <Hero />
      <About id="about" />
      <div
        className="min-h-screen relative flex flex-col items-center justify-center py-8"
        id="calculator"
      >
        <FunctionSelector
          selectedFunction={selectedFunction}
          onSelectFunction={setSelectedFunction}
        />
        <div className="max-w-screen-md mx-auto">
          {selectedFunction === "linear" && <FunctionGraph />}
          {selectedFunction === "quadratic" && <QuadraticGraphComponent />}
          {selectedFunction === "cubic" && <CubicGraph />}
          {selectedFunction === "logarithmic" && <LogarithmicGraphComponent />}
          {selectedFunction === "trigonometric" && (
            <TrigonometricGraphComponent />
          )}
        </div>
      </div>

      <Member />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
