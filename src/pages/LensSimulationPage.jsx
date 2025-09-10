import React, { useState, useEffect, useRef } from "react";
import lensImage from "../assets/lens.png";

export default function LensSimulationPage() {
  const [u, setU] = useState("");
  const [f, setF] = useState("");
  const [v, setV] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (u && f) {
      const uVal = parseFloat(u);
      const fVal = parseFloat(f);
      const vCalc = 1 / ((1 / fVal) - (1 / uVal));
      setV(vCalc.toFixed(2));
    } else {
      alert("Enter valid object distance and focal length.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function draw() {
      ctx.clearRect(0, 0, 300, 200);

      // Draw lens
      ctx.beginPath();
      ctx.moveTo(150, 20);
      ctx.quadraticCurveTo(170, 100, 150, 180);
      ctx.quadraticCurveTo(130, 100, 150, 20);
      ctx.strokeStyle = "blue";
      ctx.stroke();

      // Rays
      ctx.strokeStyle = "orange";
      ctx.beginPath();
      ctx.moveTo(50, 80);
      ctx.lineTo(150, 100);
      ctx.lineTo(250, 100);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(50, 120);
      ctx.lineTo(150, 100);
      ctx.lineTo(250, 100);
      ctx.stroke();

      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-2xl font-bold mb-4">Lens Simulation</h2>

      {/* Lens Image */}
      <img
        src={lensImage}
        alt="Lens"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border rounded shadow mb-4"
      />

      {/* User Inputs */}
      <input
        type="number"
        placeholder="Object Distance (u) cm"
        value={u}
        onChange={(e) => setU(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Focal Length (f) cm"
        value={f}
        onChange={(e) => setF(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Image Distance
      </button>

      {/* Result */}
      {v && (
        <p className="mt-4 text-lg font-semibold">
          Image Distance: {v} cm
        </p>
      )}
    </div>
  );
}
