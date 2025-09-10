import React, { useState, useEffect, useRef } from "react";
import ohmsLawImage from "../assets/ohmslaw.png";

export default function OhmsLawPage() {
  const [voltage, setVoltage] = useState("");
  const [resistance, setResistance] = useState("");
  const [current, setCurrent] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (voltage && resistance > 0) {
      const I = voltage / resistance;
      setCurrent(I.toFixed(2));
    } else {
      alert("Enter valid voltage and resistance.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, 200, 200);

      // Draw wire
      ctx.beginPath();
      ctx.moveTo(30, 100);
      ctx.lineTo(170, 100);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw moving electron
      const x = 30 + (angle % 140);
      ctx.beginPath();
      ctx.arc(x, 100, 8, 0, 2 * Math.PI);
      ctx.fillStyle = "orange";
      ctx.fill();

      angle += 2;
      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-2xl font-bold mb-4">Ohm's Law Simulation</h2>

      {/* Ohm's Law Image */}
      <img
        src={ohmsLawImage}
        alt="Ohm's Law"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="border rounded shadow mb-4"
      />

      {/* Input Fields */}
      <input
        type="number"
        placeholder="Voltage (V)"
        value={voltage}
        onChange={(e) => setVoltage(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Resistance (Ω)"
        value={resistance}
        onChange={(e) => setResistance(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Current
      </button>

      {/* Result */}
      {current && (
        <p className="mt-4 text-lg font-semibold">
          Current: {current} A
        </p>
      )}
    </div>
  );
}
