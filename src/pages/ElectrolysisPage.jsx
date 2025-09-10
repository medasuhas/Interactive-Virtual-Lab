import React, { useState, useEffect, useRef } from "react";
import electrolysisImage from "../assets/electrolysis.png";

export default function ElectrolysisPage() {
  const [current, setCurrent] = useState("");
  const [time, setTime] = useState("");
  const [molarMass, setMolarMass] = useState("");
  const [nElectrons, setNElectrons] = useState("");
  const [massDeposited, setMassDeposited] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (current && time && molarMass && nElectrons) {
      const Q = current * time; // Charge
      const F = 96485; // Faraday's constant
      const m = (Q * molarMass) / (nElectrons * F); // Mass deposited
      setMassDeposited(m.toFixed(4));
    } else {
      alert("Please enter valid values for all fields.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let cations = Array.from({ length: 10 }, () => ({
      x: 80 + Math.random() * 60,
      y: Math.random() * 200,
      speed: 0.5 + Math.random(),
      r: 5 + Math.random() * 2,
    }));

    let anions = Array.from({ length: 10 }, () => ({
      x: 160 + Math.random() * 60,
      y: Math.random() * 200,
      speed: 0.5 + Math.random(),
      r: 5 + Math.random() * 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, 300, 200);

      // Cations (blue) moving down
      cations.forEach((ion) => {
        ctx.beginPath();
        ctx.arc(ion.x, ion.y, ion.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fill();
        ion.y += ion.speed;
        if (ion.y > 200) {
          ion.y = -10;
          ion.x = 80 + Math.random() * 60;
        }
      });

      // Anions (red) moving up
      anions.forEach((ion) => {
        ctx.beginPath();
        ctx.arc(ion.x, ion.y, ion.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(239, 68, 68, 0.6)";
        ctx.fill();
        ion.y -= ion.speed;
        if (ion.y < -10) {
          ion.y = 200;
          ion.x = 160 + Math.random() * 60;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-2xl font-bold mb-4">Electrolysis Experiment</h2>

      {/* Electrolysis Image */}
      <img
        src={electrolysisImage}
        alt="Electrolysis"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border rounded shadow mb-4 bg-white"
      />

      {/* User Input Fields */}
      <input
        type="number"
        placeholder="Current (A)"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Time (s)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Molar Mass (g/mol)"
        value={molarMass}
        onChange={(e) => setMolarMass(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="No. of Electrons"
        value={nElectrons}
        onChange={(e) => setNElectrons(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Mass Deposited
      </button>

      {/* Display Result */}
      {massDeposited && (
        <p className="mt-4 text-lg font-semibold">
          Mass Deposited: {massDeposited} g
        </p>
      )}
    </div>
  );
}
