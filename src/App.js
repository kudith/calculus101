// Import library dan komponen yang diperlukan
import React, { useState } from "react";
import Navbar from "./components/navbar";
import "./App.css";
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
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(80px)",
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

// Fungsi utama aplikasi.
function App() {
  // State untuk menyimpan fungsi matematika yang dipilih.
  const [selectedFunction, setSelectedFunction] = useState("linear");

  return (
    // Kontainer utama
    <div
      className="bg-[#F1F1F1] min-h-screen overflow-hidden"
      id="home-section"
    >
      {/* Komponen Navbar */}
      <Navbar />

      {/* Komponen Hero*/}
      <Hero />

      {/* Komponen About */}
      <About id="about" />

      {/* Bagian kalkulator, menampilkan FunctionSelector dan grafik berdasarkan fungsi matematika yang dipilih */}
      <TextAnimation>
        <div
          className="min-h-screen relative flex flex-col items-center justify-center py-8"
          id="calculator"
        >
          {/* Komponen FunctionSelector untuk memilih jenis fungsi matematika */}
          <FunctionSelector
            selectedFunction={selectedFunction}
            onSelectFunction={setSelectedFunction}
          />
          {/* Container untuk menampilkan grafik berdasarkan fungsi matematika yang dipilih */}
          <div className="ma-w-screen-md mx-auto">
            {selectedFunction === "linear" && <FunctionGraph />}
            {selectedFunction === "quadratic" && <QuadraticGraphComponent />}
            {selectedFunction === "cubic" && <CubicGraph />}
            {selectedFunction === "logarithmic" && (
              <LogarithmicGraphComponent />
            )}
            {selectedFunction === "trigonometric" && (
              <TrigonometricGraphComponent />
            )}
          </div>
        </div>
      </TextAnimation>

      {/* Komponen Member */}
      <Member />

      {/* Komponen Footer  */}
      <Footer />

      {/* Komponen ScrollRestoration */}
      <ScrollRestoration />
    </div>
  );
}
export default App;
