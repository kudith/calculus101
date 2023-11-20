import React, { useState } from "react";
import Plot from "react-plotly.js";

// Komponen TrigonometricGraph untuk menampilkan grafik fungsi trigonometri.
const TrigonometricGraph = () => {
  // State untuk menyimpan nilai amplitudo, frekuensi, fase, fungsi terpilih, dan hasil fungsi yang sudah di-parse.
  const [amplitude, setAmplitude] = useState("");
  const [frequency, setFrequency] = useState("");
  const [phase, setPhase] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("sin");
  const [parsedFunction, setParsedFunction] = useState(null);

  // Fungsi untuk meng-generate data plot berdasarkan fungsi trigonometri.
  const generateData = () => {
    if (parsedFunction) {
      const xValues = Array.from({ length: 360 }, (_, i) => i);
      const yValues = xValues.map(
        (x) =>
          parsedFunction.amplitude *
          (selectedFunction === "sin"
            ? Math.sin(
                (parsedFunction.frequency * x + parsedFunction.phase) *
                  (Math.PI / 180)
              )
            : Math.cos(
                (parsedFunction.frequency * x + parsedFunction.phase) *
                  (Math.PI / 180)
              ))
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

  // Fungsi untuk meng-handle klik tombol submit dan meng-update nilai parsedFunction.
  const handleGenerateChart = () => {
    const amp = parseFloat(amplitude);
    const freq = parseFloat(frequency);
    const ph = parseFloat(phase);

    if (!isNaN(amp) && !isNaN(freq) && !isNaN(ph)) {
      setParsedFunction({
        amplitude: amp,
        frequency: freq,
        phase: ph,
      });
    }
  };

  // Fungsi untuk meng-handle tombol enter pada input.
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGenerateChart();
    }
  };

  // Fungsi untuk mereset nilai amplitudo, frekuensi, fase, dan parsedFunction.
  const handleReset = () => {
    setAmplitude("");
    setFrequency("");
    setPhase("");
    setParsedFunction(null);
  };

  return (
    <div className="container mx-auto p-8 md:py-8 md:px-16 max-w-screen-md bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-bold mb-6">
        Grafik Fungsi Trigonometri
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {/* Input untuk amplitudo, frekuensi, dan fase */}
        {["Amplitudo", "Frekuensi", "Fase"].map((label) => (
          <div key={label} className="mb-4 md:mb-0">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              {label}
            </label>
            <input
              type="number"
              className="border rounded-md p-2 w-full md:w-24"
              value={
                label === "Amplitudo"
                  ? amplitude
                  : label === "Frekuensi"
                  ? frequency
                  : phase
              }
              onChange={(e) =>
                label === "Amplitudo"
                  ? setAmplitude(e.target.value)
                  : label === "Frekuensi"
                  ? setFrequency(e.target.value)
                  : setPhase(e.target.value)
              }
              onKeyDown={handleInputKeyDown}
            />
          </div>
        ))}

        {/* Dropdown untuk memilih fungsi sin atau cos */}
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Pilih Fungsi
          </label>
          <select
            className="border rounded-md p-2 w-full md:w-24"
            value={selectedFunction}
            onChange={(e) => setSelectedFunction(e.target.value)}
          >
            <option value="sin">sin</option>
            <option value="cos">cos</option>
          </select>
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

      {/* Menampilkan grafik fungsi trigonometri */}
      {parsedFunction && (
        <div className="bg-white rounded-lg shadow-lg">
          <Plot
            data={generateData()}
            layout={{
              title: `Grafik Fungsi Trigonometri: y = ${parsedFunction.amplitude} * ${selectedFunction}(${parsedFunction.frequency} * x + ${parsedFunction.phase})`,
              xaxis: {
                title: "x",
                range: [0, 360],
              },
              yaxis: {
                title: "y",
                autorange: true,
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

export default TrigonometricGraph;
