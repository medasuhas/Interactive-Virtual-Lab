import React, { useState, useEffect, useRef } from "react";
import cellImage from "../assets/celldivision.png";

export default function CellDivisionPage() {
  const [initialCells, setInitialCells] = useState("");
  const [divisions, setDivisions] = useState("");
  const [totalCells, setTotalCells] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    if (initialCells > 0 && divisions >= 0) {
      const N = initialCells * Math.pow(2, divisions);
      setTotalCells(N);
    } else {
      alert("Enter valid values for initial cells and divisions.");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let angle = 0;
    const radius = 40;

    function draw() {
      ctx.clearRect(0, 0, 200, 200);
      ctx.save();
      ctx.translate(100, 100);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.arc(-radius / 2, 0, radius, 0, Math.PI * 2);
      ctx.arc(radius / 2, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(100, 200, 100, 0.6)";
      ctx.fill();
      ctx.restore();
      angle += 0.01;
      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-100 to-green-200">
      <h2 className="text-2xl font-bold mb-4">Cell Division Simulation</h2>

      {/* Cell division image */}
      <img
        src={cellImage}
        alt="Cell Division"
        className="w-40 h-40 mb-4 rounded shadow-lg animate-pulse"
      />

      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="border rounded shadow-md mb-4"
      />

      {/* Input fields */}
      <input
        type="number"
        placeholder="Initial Cells"
        value={initialCells}
        onChange={(e) => setInitialCells(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="number"
        placeholder="Number of Divisions"
        value={divisions}
        onChange={(e) => setDivisions(e.target.value)}
        className="border p-2 rounded w-64 mt-2"
      />

      {/* Calculate button */}
      <button
        onClick={calculate}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
      >
        Calculate Total Cells
      </button>

      {/* Display result */}
      {totalCells !== null && (
        <p className="mt-4 text-lg font-semibold">
          Total Cells after {divisions} divisions: {totalCells}
        </p>
      )}
    </div>
  );
}
