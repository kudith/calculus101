import React from "react";

const FunctionSelector = ({ onSelectFunction }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Pilih Fungsi:
      </label>
      <select
        className="border rounded-md p-2"
        onChange={(e) => onSelectFunction(e.target.value)}
      >
        <option value="linear">Linear</option>
        <option value="quadratic">Kuadrat</option>
        <option value="cubic">Kubik</option>
        <option value="logarithmic">Logaritma</option>
        <option value="trigonometric">Trigonometri</option>
      </select>
    </div>
  );
};

export default FunctionSelector;
