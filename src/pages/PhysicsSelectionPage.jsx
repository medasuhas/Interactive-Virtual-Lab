import React from "react";
import { useNavigate } from "react-router-dom";

export default function PhysicsSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-700">Physics Experiments</h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/physics/pendulum")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transform hover:scale-105 transition"
        >
          Simple Pendulum
        </button>
        <button
          onClick={() => navigate("/physics/ohmslaw")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transform hover:scale-105 transition"
        >
          Ohm's Law
        </button>
        <button
          onClick={() => navigate("/physics/projectile")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transform hover:scale-105 transition"
        >
          Projectile Motion
        </button>
        <button
          onClick={() => navigate("/physics/lens")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transform hover:scale-105 transition"
        >
          Lens Simulation
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
