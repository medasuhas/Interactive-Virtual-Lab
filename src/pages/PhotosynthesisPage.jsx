import React, { useState, useEffect, useRef } from "react";
import photosynthesisImage from "../assets/photosynthesis.png";

export default function PhotosynthesisPage() {
  const [lightIntensity, setLightIntensity] = useState("");
  const [time, setTime] = useState("");
  const [glucoseProduced, setGlucoseProduced] = useState(null);
  const canvasRef = useRef(null);

  const calculateGlucose = () => {
    if (lightIntensity && time) {
      const glucose = lightIntensity * time * 0.5; // Simplified calculation
      setGlucoseProduced(glucose.toFixed(2));
    } else {
      alert("Please enter valid values for light intensity and time.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, 300, 200);

      // Draw leaf
      ctx.beginPath();
      ctx.moveTo(150, 100);
      ctx.bezierCurveTo(120, 50, 180, 50, 150, 100);
      ctx.bezierCurveTo(180, 150, 120, 150, 150, 100);
      ctx.fillStyle = "rgba(34, 197, 94, 0.5)";
      ctx.fill();
      ctx.strokeStyle = "#065f46";
      ctx.stroke();

      // Draw rotating sunlight rays
      for (let i = 0; i < 12; i++) {
        const rayAngle = angle + (i * Math.PI) / 6;
        const x1 = 150 + Math.cos(rayAngle) * 50;
        const y1 = 100 + Math.sin(rayAngle) * 50;
        const x2 = 150 + Math.cos(rayAngle) * 70;
        const y2 = 100 + Math.sin(rayAngle) * 70;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(253, 224, 71, 0.6)"; // Yellow sun rays
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      angle += 0.01; // Control rotation speed
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-50 to-green-100">
      <h2 className="text-2xl font-bold mb-4">Photosynthesis Experiment</h2>

      {/* Experiment Image */}
      <img
        src={photosynthesisImage}
        alt="Photosynthesis"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border rounded shadow mb-4 bg-white"
      />

      {/* User Inputs */}
      <input
        type="number"
        placeholder="Light Intensity (lux)"
        value={lightIntensity}
        onChange={(e) => setLightIntensity(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Time (minutes)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculateGlucose}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
      >
        Calculate Glucose Produced
      </button>

      {/* Output */}
      {glucoseProduced && (
        <p className="mt-4 text-lg font-semibold">
          Glucose Produced: {glucoseProduced} mg
        </p>
      )}
    </div>
  );
}
