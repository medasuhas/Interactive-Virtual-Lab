import React, { useState, useEffect, useRef } from "react";
import respirationImage from "../assets/respiration.png";

export default function RespirationPage() {
  const [glucoseMoles, setGlucoseMoles] = useState("");
  const [atpProduced, setAtpProduced] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (glucoseMoles && glucoseMoles >= 0) {
      const ATP = glucoseMoles * 38;
      setAtpProduced(ATP);
    } else {
      alert("Enter valid glucose moles");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let scale = 1;
    let growing = true;

    function draw() {
      ctx.clearRect(0, 0, 300, 200);

      ctx.save();
      ctx.translate(150, 100);
      ctx.scale(scale, scale);

      // Draw lungs
      ctx.beginPath();
      ctx.moveTo(-30, 0);
      ctx.bezierCurveTo(-60, -40, -20, -80, 0, -40);
      ctx.bezierCurveTo(20, -80, 60, -40, 30, 0);
      ctx.bezierCurveTo(20, 40, -20, 40, -30, 0);
      ctx.closePath();
      ctx.fillStyle = "rgba(34, 197, 94, 0.5)";
      ctx.fill();
      ctx.restore();

      if (growing) {
        scale += 0.005;
        if (scale >= 1.1) growing = false;
      } else {
        scale -= 0.005;
        if (scale <= 0.9) growing = true;
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-50 to-green-100">
      <h2 className="text-2xl font-bold mb-4">Respiration Experiment</h2>

      {/* Experiment Image */}
      <img
        src={respirationImage}
        alt="Respiration"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border rounded shadow mb-4 bg-white"
      />

      {/* Input */}
      <input
        type="number"
        placeholder="Glucose Moles"
        value={glucoseMoles}
        onChange={(e) => setGlucoseMoles(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
      >
        Calculate ATP Produced
      </button>

      {/* Output */}
      {atpProduced && (
        <p className="mt-4 text-lg font-semibold">
          ATP Produced: {atpProduced} moles
        </p>
      )}
    </div>
  );
}
