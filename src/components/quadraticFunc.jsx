import React, { useState } from "react";
import Plot from "react-plotly.js";

// Komponen QuadraticFunctionGraph untuk menampilkan grafik fungsi kuadrat.
const QuadraticFunctionGraph = () => {
  // State untuk menyimpan nilai koefisien a, b, c dan hasil fungsi yang sudah di-parse.
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [parsedFunction, setParsedFunction] = useState(null);

  // Fungsi untuk meng-generate data plot berdasarkan fungsi kuadrat.
  const generateData = () => {
    if (parsedFunction) {
      const xValues = Array.from({ length: 41 }, (_, i) => i - 20);
      const yValues = xValues.map(
        (x) =>
          parsedFunction.a * x ** 2 + parsedFunction.b * x + parsedFunction.c
      );

      return [
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          line: { color: "#20cd8d", shape: "spline" },
        },
      ];
    }
    return [];
  };

  // Fungsi untuk meng-handle klik tombol submit dan meng-update nilai parsedFunction.
  const handleGenerateChart = () => {
    setParsedFunction({
      a: parseFloat(a),
      b: parseFloat(b),
      c: parseFloat(c),
    });
  };

  // Fungsi untuk meng-handle tombol enter pada input.
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGenerateChart();
    }
  };

  // Fungsi untuk mereset nilai a, b, c, dan parsedFunction.
  const handleReset = () => {
    setA("");
    setB("");
    setC("");
    setParsedFunction(null);
  };

  return (
    <div className="container mx-auto md:py-8 md:px-16 p-12 max-w-screen-md bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-bold mb-6">
        Grafik Fungsi Kuadrat
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {/* Input untuk koefisien a */}
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Koefisien a
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={a}
            onChange={(e) => setA(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>

        {/* Input untuk koefisien b */}
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Koefisien b
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={b}
            onChange={(e) => setB(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>

        {/* Input untuk konstanta c */}
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Konstanta c
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={c}
            onChange={(e) => setC(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>

        {/* Tombol submit dan reset */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
          <button
            className="bg-primary text-white rounded-md mt-4 px-6 py-2 hover:bg-slate-700 w-full md:w-auto"
            onClick={handleGenerateChart}
          >
            Submit
          </button>
          <button
            className="bg-pink-500 text-gray-100 rounded-md mt-4 px-6 py-2 hover:bg-gray-400 w-full md:w-auto"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Menampilkan grafik fungsi kuadrat */}
      {parsedFunction && (
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <div className="plot-container">
              <Plot
                data={generateData()}
                layout={{
                  title: `Fungsi Kuadrat: y = ${parsedFunction.a}x^2 + ${parsedFunction.b}x + ${parsedFunction.c}`,
                  xaxis: {
                    title: "x",
                  },
                  yaxis: {
                    title: "y",
                    range: [-100, 100],
                  },
                  margin: { t: 50, b: 50, l: 50, r: 50 },
                  autosize: true,
                  useResizeHandler: true,
                  dragmode: "pan",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                config={{
                  responsive: true,
                  scrollZoom: true,
                  displayModeBar: true,
                  displaylogo: false,
                  modeBarButtonsToRemove: [
                    "toImage",
                    "sendDataToCloud",
                    "select2d",
                    "lasso2d",
                  ],
                  modeBarMode: "pan",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuadraticFunctionGraph;
