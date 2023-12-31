import React, { useState } from "react";
import { Chart } from "react-google-charts";

const CubicGraph = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [parsedFunction, setParsedFunction] = useState(null);
  const [zoomFactor, setZoomFactor] = useState(1);

  const generateData = () => {
    if (parsedFunction) {
      const data = [["x", "y"]];
      for (let x = -10; x <= 10; x++) {
        const y =
          parsedFunction.a * x ** 3 +
          parsedFunction.b * x ** 2 +
          parsedFunction.c * x +
          parsedFunction.d;
        data.push([x, y]);
      }
      return data;
    }
    return [];
  };

  const handleGenerateChart = () => {
    setParsedFunction({
      a: parseFloat(a),
      b: parseFloat(b),
      c: parseFloat(c),
      d: parseFloat(d),
    });
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
    setA("");
    setB("");
    setC("");
    setD("");
    setParsedFunction(null);
    setZoomFactor(1);
  };

  return (
    <div className="container mx-auto p-8 max-w-screen-md bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-bold mb-6">
        Grafik Fungsi Kubik
      </h1>
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
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Koefisien c
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={c}
            onChange={(e) => setC(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Konstanta d
          </label>
          <input
            type="number"
            className="border rounded-md p-2 w-full md:w-24"
            value={d}
            onChange={(e) => setD(e.target.value)}
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
      {parsedFunction && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={generateData()}
            options={{
              title: `Grafik Fungsi Kubik: y = ${parsedFunction.a}x^3 + ${parsedFunction.b}x^2 + ${parsedFunction.c}x + ${parsedFunction.d}`,
              legend: { position: "none" },
              width: "100%",
              height: 400,
              hAxis: {
                title: "x",
                gridlines: {
                  count: 11,
                },
                minValue: -10 / zoomFactor,
                maxValue: 10 / zoomFactor,
              },
              vAxis: {
                title: "y",
                gridlines: {
                  count: 11,
                },
                minValue: -100 / zoomFactor,
                maxValue: 100 / zoomFactor,
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

export default CubicGraph;
