import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import QuestionnairePage from "./pages/QuestionnairePage";
import BudgetTips from "./pages/BudgetTips"; // ✅ Fixed import
import CreditTips from "./pages/CreditTips"; // ✅ Fixed import

// Import Components
import Navbar from "./Components/Navbar"; // ✅ Ensure correct capitalization

// Import Tailwind CSS
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
        <Route path="/budget-tips" element={<BudgetTips />} /> {/* ✅ Fixed */}
        <Route path="/credit-tips" element={<CreditTips />} /> {/* ✅ Fixed */}
      </Routes>
    </Router>
  );
}

export default App;
