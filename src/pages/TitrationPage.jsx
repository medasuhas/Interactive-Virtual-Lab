import React, { useState, useRef } from "react";
import titrationImage from "../assets/titration.png";

export default function TitrationPage() {
  const [acidMolarity, setAcidMolarity] = useState("");
  const [acidVolume, setAcidVolume] = useState("");
  const [baseMolarity, setBaseMolarity] = useState("");
  const [baseVolume, setBaseVolume] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (acidMolarity && acidVolume && baseMolarity) {
      const Va = acidMolarity * acidVolume;
      const Vb = Va / baseMolarity;
      setBaseVolume(Vb.toFixed(2));
      animateFill();
    } else {
      alert("Enter valid values for calculation.");
    }
  };

  const animateFill = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let height = 0;
    const maxFill = 100;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw beaker outline
      ctx.strokeStyle = "#1e40af"; // Indigo color
      ctx.lineWidth = 3;
      ctx.strokeRect(50, 20, 60, 100);

      // Draw filling liquid
      ctx.fillStyle = "rgba(59, 130, 246, 0.6)"; // blue fill
      ctx.fillRect(51, 120 - height, 58, height);

      if (height < maxFill) {
        height += 2;
        requestAnimationFrame(draw);
      }
    };

    draw();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-cyan-50 to-cyan-100">
      <h2 className="text-2xl font-bold mb-4">Titration Experiment</h2>

      <img
        src={titrationImage}
        alt="Titration"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      <canvas
        ref={canvasRef}
        width={160}
        height={140}
        className="border rounded shadow mb-4 bg-white"
      />

      <input
        type="number"
        placeholder="Acid Molarity (M)"
        value={acidMolarity}
        onChange={(e) => setAcidMolarity(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Acid Volume (L)"
        value={acidVolume}
        onChange={(e) => setAcidVolume(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Base Molarity (M)"
        value={baseMolarity}
        onChange={(e) => setBaseMolarity(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Base Volume
      </button>

      {baseVolume && (
        <p className="mt-4 text-lg font-semibold">
          Required Base Volume: {baseVolume} L
        </p>
      )}
    </div>
  );
}
