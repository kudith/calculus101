import React, { useState } from "react";
import Plot from "react-plotly.js";

const FunctionGraph = () => {
  // State untuk kemiringan (m), konstanta (b), dan fungsi yang sudah di-parse
  const [m, setM] = useState("");
  const [b, setB] = useState("");
  const [parsedFunction, setParsedFunction] = useState(null);

  // Fungsi untuk menghasilkan data untuk grafik Plotly berdasarkan fungsi yang sudah di-parse
  const generateData = () => {
    if (parsedFunction) {
      const xValues = Array.from({ length: 21 }, (_, i) => i - 10);
      const yValues = xValues.map(
        (x) => parsedFunction.m * x + parsedFunction.b
      );

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

  // Penanganan klik tombol "Submit" untuk menghasilkan grafik
  const handleGenerateChart = () => {
    setParsedFunction({ m: parseFloat(m), b: parseFloat(b) });
  };

  // Penanganan tombol Enter untuk menghasilkan grafik
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGenerateChart();
    }
  };

  // Penanganan klik tombol "Reset" untuk mengembalikan formulir ke nilai awal
  const handleReset = () => {
    setM("");
    setB("");
    setParsedFunction(null);
  };

  return (
    <div className="container mx-auto md:px-32 md:py-8 p-12 max-w-screen-md bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-bold mb-6">
        Grafik Fungsi Linear
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {/* Input untuk kemiringan (m) */}
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Kemiringan (m)
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={m}
            onChange={(e) => setM(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
        {/* Input untuk konstanta (b) */}
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Konstanta (b)
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={b}
            onChange={(e) => setB(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
        {/* Tombol untuk mengirim dan mereset */}
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
      {/* Menampilkan grafik jika fungsi sudah di-parse */}
      {parsedFunction && (
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <div className="plot-container">
              {/* Grafik Plotly */}
              <Plot
                data={generateData()}
                layout={{
                  title: `Fungsi Linear: y = ${parsedFunction.m}x + ${parsedFunction.b}`,
                  xaxis: {
                    title: "x",
                  },
                  yaxis: {
                    title: "y",
                  },
                  margin: { t: 50, b: 50, l: 50, r: 50 },
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

export default FunctionGraph;
