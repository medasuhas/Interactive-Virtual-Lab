import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChemistrySelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-6 text-green-700">Chemistry Experiments</h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/chemistry/acidbase")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transform hover:scale-105 transition"
        >
          Acid-Base Neutralization
        </button>
        <button
          onClick={() => navigate("/chemistry/titration")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transform hover:scale-105 transition"
        >
          Titration
        </button>
        <button
          onClick={() => navigate("/chemistry/reactionrate")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transform hover:scale-105 transition"
        >
          Reaction Rate
        </button>
        <button
          onClick={() => navigate("/chemistry/electrolysis")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transform hover:scale-105 transition"
        >
          Electrolysis
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
