import React from "react";
import { useNavigate } from "react-router-dom";

export default function BiologySelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-6 text-pink-700">Biology Experiments</h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/biology/photosynthesis")}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transform hover:scale-105 transition"
        >
          Photosynthesis
        </button>
        <button
          onClick={() => navigate("/biology/enzyme")}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transform hover:scale-105 transition"
        >
          Enzyme Activity
        </button>
        <button
          onClick={() => navigate("/biology/celldivision")}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transform hover:scale-105 transition"
        >
          Cell Division
        </button>
        <button
          onClick={() => navigate("/biology/respiration")}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transform hover:scale-105 transition"
        >
          Respiration
        </button>
        <button
          onClick={() => navigate("/home")}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transform hover:scale-105 transition mt-4"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
