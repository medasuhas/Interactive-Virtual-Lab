import React, { useState, useEffect, useRef } from "react";
import reactionRateImage from "../assets/reactionrate.png";

export default function ReactionRatePage() {
  const [initialConc, setInitialConc] = useState("");
  const [rateConst, setRateConst] = useState("");
  const [time, setTime] = useState("");
  const [conc, setConc] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (initialConc && rateConst && time) {
      const C = initialConc * Math.exp(-rateConst * time);
      setConc(C.toFixed(4));
    } else {
      alert("Enter valid values.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let frame = 0;
    let animationId;

    function draw() {
      ctx.clearRect(0, 0, 300, 150);

      const numBars = 10;
      const barWidth = 20;
      const spacing = 10;
      const maxHeight = 100;

      for (let i = 0; i < numBars; i++) {
        const decay = Math.exp(-0.05 * (frame + i));
        const height = maxHeight * decay;
        ctx.fillStyle = `rgba(30, 144, 255, ${decay})`; // Blue fade with decay
        ctx.fillRect(i * (barWidth + spacing) + 30, 130 - height, barWidth, height);
      }

      frame += 1;
      if (frame < 40) { // animate for ~2 sec
        animationId = requestAnimationFrame(draw);
      } else {
        setTimeout(() => {
          frame = 0; // reset
          animationId = requestAnimationFrame(draw);
        }, 2000); // 2-sec pause
      }
    }
    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-cyan-50 to-cyan-100">
      <h2 className="text-2xl font-bold mb-4">Reaction Rate Simulation</h2>

      {/* Experiment Image */}
      <img
        src={reactionRateImage}
        alt="Reaction Rate"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Animation Canvas */}
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        className="border rounded shadow mb-4"
      />

      {/* Inputs */}
      <input
        type="number"
        placeholder="Initial Conc (mol/L)"
        value={initialConc}
        onChange={(e) => setInitialConc(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Rate Constant (s⁻¹)"
        value={rateConst}
        onChange={(e) => setRateConst(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Time (s)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Concentration
      </button>

      {/* Output */}
      {conc && (
        <p className="mt-4 text-lg font-semibold">
          Concentration after {time}s: {conc} mol/L
        </p>
      )}
    </div>
  );
}
