import React, { useState, useEffect, useRef } from "react";
import projectileImage from "../assets/projectile.png";

export default function ProjectileMotionPage() {
  const [velocity, setVelocity] = useState("");
  const [angle, setAngle] = useState("");
  const [range, setRange] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (velocity && angle) {
      const rad = (angle * Math.PI) / 180;
      const R = (velocity ** 2 * Math.sin(2 * rad)) / 9.8;
      setRange(R.toFixed(2));
    } else {
      alert("Enter valid values for velocity and angle.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, 300, 200);

      const g = 9.8;
      const v = 30; // fixed for animation demonstration
      const theta = 45 * (Math.PI / 180);

      const vx = v * Math.cos(theta);
      const vy = v * Math.sin(theta);

      const x = vx * t;
      const y = vy * t - 0.5 * g * t * t;

      ctx.beginPath();
      ctx.arc(x, 180 - y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = "orange";
      ctx.fill();

      t += 0.05;
      if (x < 300 && y >= 0) {
        requestAnimationFrame(draw);
      } else {
        t = 0;
        requestAnimationFrame(draw);
      }
    }
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <h2 className="text-2xl font-bold mb-4">Projectile Motion</h2>

      {/* Image */}
      <img
        src={projectileImage}
        alt="Projectile Motion"
        className="w-40 h-40 rounded shadow mb-4 animate-pulse"
      />

      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border rounded shadow mb-4"
      />

      {/* Inputs */}
      <input
        type="number"
        placeholder="Velocity (m/s)"
        value={velocity}
        onChange={(e) => setVelocity(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Angle (deg)"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Calculate Range
      </button>

      {/* Result */}
      {range && (
        <p className="mt-4 text-lg font-semibold">
          Range: {range} m
        </p>
      )}
    </div>
  );
}
