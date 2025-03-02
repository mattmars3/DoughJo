import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DoughJo</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/budget-tips" className="hover:underline">Budget Tips</Link>
          <Link to="/credit-tips" className="hover:underline">Credit Tips</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
