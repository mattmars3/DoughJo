import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function Dashboard() {
  const [creditScore, setCreditScore] = useState(null);

  useEffect(() => {
    const storedScore = localStorage.getItem("creditScore");
    if (storedScore) {
      setCreditScore(storedScore);
    }
  }, []);

  // sunburst data
  const sunburstData = {
    type: "sunburst",
    labels: ["Budget", "Savings and Debt Payments", "Needs", "Wants", "Transportation", "Rent and Utilities", "Food", "Debt Payments", "Entertainment", "Travel", "Personal Care", "General Merchendise", "Savings and Investments"],
    parents: ["", "Budget", "Budget", "Budget", "Needs", "Needs", "Needs", "Savings and Debt Payments", "Wants", "Wants", "Wants", "Wants", "Savings and Debt Payments"],
    values: [0, 0, 0, 0, 10, 30, 10, 5, 5, 5, 10, 20, 15],
    hoverinfo: "label+value+percent entry", // Display more information when hovering
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="absolute left-10 top-20 bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
        
        {creditScore ? (
          <p className="text-xl mt-6 font-medium">
            Your Credit Score based on your current habits would be about: 
            <span className="font-bold text-blue-600 block text-5xl mt-2">{creditScore}</span>
          </p>
        ) : (
          <p className="text-lg mt-4">No credit score available. Please complete the questionnaire.</p>
        )}
      </div>

      {/* Plotly Sunburst Diagram */}
      <div className="absolute right-60 top-20 w-96">
        <Plot
          data={[sunburstData]}
          layout={{
            title: "Sunburst Chart",
            autosize: true,
            margin: { t: 40, l: 40, r: 40, b: 40 },
            sunburstcolorway: ["#2ca02c", "#ff7f0e", "#1f77b4", "#d62728", "#9467bd", "#8c564b"],
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;

