import React, { useState } from "react";
import Plot from "react-plotly.js";

// Komponen untuk menampilkan grafik fungsi logaritma basis 10.
const LogarithmicGraph = () => {
  // State untuk menyimpan nilai a, b, dan fungsi yang sudah di-parse.
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [parsedFunction, setParsedFunction] = useState(null);

  // Fungsi untuk menghasilkan data yang diperlukan oleh Plotly.
  const generateData = () => {
    if (parsedFunction) {
      const xValues = [];
      const yValues = [];
      // Menghasilkan nilai y berdasarkan fungsi logaritma basis 10.
      for (let x = 0.1; x <= 10; x += 0.1) {
        xValues.push(x);
        const y = parsedFunction.a * Math.log10(x) + parsedFunction.b;
        yValues.push(y);
      }
      return [
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          line: { color: "#20cd8d" },
        },
      ];
    }
    return [];
  };

  // Fungsi untuk menangani penggunaan tombol "Submit".
  const handleGenerateChart = () => {
    setParsedFunction({
      a: parseFloat(a),
      b: parseFloat(b),
    });
  };

  // Fungsi untuk menangani kunci Enter pada input.
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGenerateChart();
    }
  };

  // Fungsi untuk mereset nilai a, b, dan fungsi.
  const handleReset = () => {
    setA("");
    setB("");
    setParsedFunction(null);
  };

  return (
    <div className="container mx-auto p-8 max-w-screen-md bg-gray-100 rounded-lg shadow-md">
      {/* Judul */}
      <h1 className="text-3xl text-center font-bold mb-6">
        Grafik Fungsi Logaritma Basis 10
      </h1>
      {/* Form input dan tombol */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
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
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Konstanta b
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={b}
            onChange={(e) => setB(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
          {/* Tombol Submit */}
          <button
            className="bg-primary text-white rounded-md mt-4 px-6 py-2 hover:bg-slate-700 w-full md:w-auto"
            onClick={handleGenerateChart}
          >
            Submit
          </button>
          {/* Tombol Reset */}
          <button
            className="bg-pink-500 text-gray-100 rounded-md mt-4 px-6 py-2 hover:bg-gray-400 w-full md:w-auto"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      {/* Menampilkan grafik jika fungsi sudah di-parse */}
      {parsedFunction && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {/* Komponen Plotly untuk menampilkan grafik */}
          <Plot
            data={generateData()}
            layout={{
              title: `Grafik Fungsi Logaritma Basis 10: y = ${parsedFunction.a} * log10(x) + ${parsedFunction.b}`,
              showlegend: false,
              xaxis: {
                title: "x",
              },
              yaxis: {
                title: "y",
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
      )}
    </div>
  );
};

export default LogarithmicGraph;
