import React, { useState, useEffect, useRef } from "react";
import enzymeImage from "../assets/enzyme.png";

export default function EnzymeActivityPage() {
  const [substrateConc, setSubstrateConc] = useState("");
  const [enzymeConc, setEnzymeConc] = useState("");
  const [reactionRate, setReactionRate] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (substrateConc && enzymeConc) {
      const rate = (enzymeConc * substrateConc) / (parseFloat(substrateConc) + 10);
      setReactionRate(rate.toFixed(2));
    } else {
      alert("Enter valid substrate and enzyme concentrations.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = Array.from({ length: 12 }, () => ({
      x: Math.random() * 200,
      y: Math.random() * 200,
      r: 5 + Math.random() * 3,
      dx: 1 + Math.random(),
      dy: 1 + Math.random(),
    }));

    function draw() {
      ctx.clearRect(0, 0, 200, 200);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(34,197,94,0.5)";
        ctx.fill();
        p.x += p.dx * (Math.random() < 0.5 ? 1 : -1);
        p.y += p.dy * (Math.random() < 0.5 ? 1 : -1);
        if (p.x < 0) p.x = 200;
        if (p.x > 200) p.x = 0;
        if (p.y < 0) p.y = 200;
        if (p.y > 200) p.y = 0;
      });
      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-50 to-green-100">
      <h2 className="text-2xl font-bold mb-4">Enzyme Activity Simulation</h2>

      {/* Enzyme image */}
      <img
        src={enzymeImage}
        alt="Enzyme"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Animation canvas */}
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="border rounded shadow mb-4"
      />

      {/* Input fields */}
      <input
        type="number"
        placeholder="Substrate Conc (mol/L)"
        value={substrateConc}
        onChange={(e) => setSubstrateConc(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Enzyme Conc (mol/L)"
        value={enzymeConc}
        onChange={(e) => setEnzymeConc(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate button */}
      <button
        onClick={calculate}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
      >
        Calculate Reaction Rate
      </button>

      {/* Display result */}
      {reactionRate && (
        <p className="mt-4 text-lg font-semibold">
          Reaction Rate: {reactionRate} mol/L*s
        </p>
      )}
    </div>
  );
}
