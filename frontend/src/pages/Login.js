import React, { useState } from "react";
import { loginUser } from "../api"; // Import the function

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!name || !password) {
      alert("Please enter a username and password.");
      return;
    }

    try {
      const response = await loginUser(name, password);
      if (response) {
        alert("Login successful! Redirecting...");
        window.location.href = "/dashboard"; // Redirect to dashboard
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Login</h2>
        
        <input 
          type="text"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input 
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button 
          onClick={handleLogin} 
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
