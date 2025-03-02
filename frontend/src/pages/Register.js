import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SERVER_IP_ADDR = "http://3.145.180.241:3333"; // Replace with actual backend IP

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const registerUser = async () => {
    console.log("Register button clicked", name, password);

    try {
      const response = await axios.post(`${SERVER_IP_ADDR}/user/create`, {
        email: name,
        plaintext_password: password,
      });

      console.log("User registered successfully!", response.data);
      navigate("/questionnaire"); 
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Register</h2>
        
        <input 
          type="text"
          placeholder="Enter your name"
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
          onClick={registerUser} 
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
