import React, { useState, useEffect, useRef } from "react";
import acidbaseImage from "../assets/acidbase.png";

export default function AcidBasePage() {
  const [acidMolarity, setAcidMolarity] = useState("");
  const [acidVolume, setAcidVolume] = useState("");
  const [baseMolarity, setBaseMolarity] = useState("");
  const [baseVolume, setBaseVolume] = useState(null);
  const canvasRef = useRef(null);

  const calculateBaseVolume = () => {
    if (acidMolarity && acidVolume && baseMolarity) {
      const Vb = (acidMolarity * acidVolume) / baseMolarity;
      setBaseVolume(Vb.toFixed(2));
    } else {
      alert("Please enter all values to calculate base volume.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let drops = Array.from({ length: 10 }, () => ({
      x: 100 + Math.random() * 20 - 10,
      y: -Math.random() * 100,
      r: 5 + Math.random() * 3,
      speed: 1 + Math.random() * 1.5,
    }));

    let fillLevel = 0;
    let color = { r: 173, g: 216, b: 230 }; // light blue

    function draw() {
      ctx.clearRect(0, 0, 200, 200);

      // Draw beaker
      ctx.strokeStyle = "#555";
      ctx.lineWidth = 4;
      ctx.strokeRect(50, 50, 100, 120);

      // Draw liquid
      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
      ctx.fillRect(52, 170 - fillLevel, 96, fillLevel);

      // Draw drops
      drops.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        d.y += d.speed;
        if (d.y > 160) {
          d.y = -10;
          fillLevel = Math.min(fillLevel + 0.5, 120);

          // Gradually change color to purple (neutralization)
          if (color.r < 200) color.r += 0.2;
          if (color.b > 150) color.b -= 0.2;
        }
      });

      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-2xl font-bold mb-4">Acid-Base Neutralization</h2>
      <img
        src={acidbaseImage}
        alt="Acid-Base Reaction"
        className="w-40 h-40 rounded shadow mb-4"
      />

      {/* Animation Canvas */}
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="border rounded shadow mb-4 bg-white"
      />

      {/* Input Fields */}
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

      {/* Calculate Button */}
      <button
        onClick={calculateBaseVolume}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Base Volume
      </button>

      {/* Result */}
      {baseVolume && (
        <p className="mt-4 text-lg font-semibold">
          Required Base Volume: {baseVolume} L
        </p>
      )}
    </div>
  );
}
