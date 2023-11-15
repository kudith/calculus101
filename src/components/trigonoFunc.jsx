import React, { useState } from "react";
import { Chart } from "react-google-charts";

const CosineGraph = () => {
  const [amplitude, setAmplitude] = useState("");
  const [frequency, setFrequency] = useState("");
  const [phase, setPhase] = useState("");
  const [zoomFactor, setZoomFactor] = useState(1);

  const generateData = () => {
    if (amplitude && frequency && phase) {
      const data = [["x", "y"]];
      for (let x = 0; x <= 2 * Math.PI; x += 0.1) {
        const y =
          parseFloat(amplitude) *
          Math.cos(parseFloat(frequency) * x + parseFloat(phase));
        data.push([x, y]);
      }
      return data;
    }
    return [];
  };

  const handleGenerateChart = () => {
    setAmplitude(parseFloat(amplitude));
    setFrequency(parseFloat(frequency));
    setPhase(parseFloat(phase));
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGenerateChart();
    }
  };

  const handleZoomIn = () => {
    setZoomFactor(zoomFactor * 1.2);
  };

  const handleZoomOut = () => {
    setZoomFactor(zoomFactor * 0.8);
  };

  const handleReset = () => {
    setAmplitude("");
    setFrequency("");
    setPhase("");
    setZoomFactor(1);
  };

  return (
    <div className="container mx-auto p-8 max-w-screen-md bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-bold mb-6">
        Grafik Fungsi Kosinus
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Amplitudo
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={amplitude}
            onChange={(e) => setAmplitude(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Frekuensi
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Fase
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
          <button
            className="bg-primary text-white rounded-md mt-4 px-6 py-2 hover:bg-slate-700 w-full md:w-auto"
            onClick={handleGenerateChart}
          >
            Submit
          </button>
          <button
            className="bg-cyan-400 text-gray-700 rounded-md mt-4 px-6 py-2 hover:bg-gray-400 w-full md:w-auto"
            onClick={handleZoomIn}
          >
            Zoom In
          </button>
          <button
            className="bg-slate-800 text-gray-100 rounded-md mt-4 px-6 py-2 hover:bg-gray-400 w-full md:w-auto"
            onClick={handleZoomOut}
          >
            Zoom Out
          </button>
          <button
            className="bg-pink-500 text-gray-100 rounded-md mt-4 px-6 py-2 hover:bg-gray-400 w-full md:w-auto"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      {amplitude !== "" && frequency !== "" && phase !== "" && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={generateData()}
            options={{
              title: `Grafik Fungsi Kosinus: ${amplitude} * cos(${frequency} * x + ${phase})`,
              legend: { position: "none" },
              width: "100%",
              height: 400,
              hAxis: {
                title: "x",
                gridlines: {
                  count: 11,
                },
                minValue: 0,
                maxValue: 2 * Math.PI,
              },
              vAxis: {
                title: "y",
                gridlines: {
                  count: 11,
                },
                minValue: -10 / zoomFactor,
                maxValue: 10 / zoomFactor,
              },
              explorer: {
                actions: ["dragToZoom", "rightClickToReset"],
                axis: "horizontal",
                keepInBounds: true,
                maxZoomIn: 4.0,
              },
              curveType: "function",
              animation: {
                startup: true,
                easing: "out",
                duration: 1000,
              },
              colors: ["#20cd8d"],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CosineGraph;
