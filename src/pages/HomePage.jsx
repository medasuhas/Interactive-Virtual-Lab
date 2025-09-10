import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Interactive Virtual Lab
      </h1>
      <p className="mb-6 text-lg text-gray-800">Select a subject to proceed:</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/physics")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transform hover:scale-105 transition"
        >
          Physics
        </button>
        <button
          onClick={() => navigate("/chemistry")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transform hover:scale-105 transition"
        >
          Chemistry
        </button>
        <button
          onClick={() => navigate("/biology")}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transform hover:scale-105 transition"
        >
          Biology
        </button>
      </div>
    </div>
  );
}
