import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "student" && password === "virtual123") {
      navigate("/home");
    } else {
      alert("Invalid credentials. Try student / virtual123");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow">Interactive Virtual Lab Login</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition shadow"
        >
          Login
        </button>
      </div>
    </div>
  );
}
