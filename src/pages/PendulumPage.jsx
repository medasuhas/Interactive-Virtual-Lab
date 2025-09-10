import React, { useState, useEffect, useRef } from "react";
import pendulumImage from "../assets/pendulum.png";

export default function PendulumPage() {
  const [length, setLength] = useState("");
  const [timePeriod, setTimePeriod] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (length > 0) {
      const T = 2 * Math.PI * Math.sqrt(length / 9.8);
      setTimePeriod(T.toFixed(2));
    } else {
      alert("Enter a valid length in meters");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let angle = Math.PI / 6;
    let direction = 1;
    const originX = 100;
    const originY = 20;
    const stringLength = 80;

    function draw() {
      ctx.clearRect(0, 0, 200, 200);
      const bobX = originX + stringLength * Math.sin(angle);
      const bobY = originY + stringLength * Math.cos(angle);

      // Draw string
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(bobX, bobY);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw bob
      ctx.beginPath();
      ctx.arc(bobX, bobY, 10, 0, 2 * Math.PI);
      ctx.fillStyle = "orange";
      ctx.fill();
      ctx.stroke();

      // Animate swing
      angle += direction * 0.02;
      if (angle > Math.PI / 6 || angle < -Math.PI / 6) {
        direction *= -1;
      }

      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <h2 className="text-2xl font-bold mb-4">Pendulum Experiment</h2>

      {/* Pendulum Image */}
      <img
        src={pendulumImage}
        alt="Pendulum"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="border rounded shadow mb-4"
      />

      {/* Input */}
      <input
        type="number"
        placeholder="Length (m)"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Time Period
      </button>

      {/* Result */}
      {timePeriod && (
        <p className="mt-4 text-lg font-semibold">
          Time Period: {timePeriod} s
        </p>
      )}
    </div>
  );
}
