import React, { useEffect, useState } from "react";

function Dashboard() {
  const [creditScore, setCreditScore] = useState(null);

  useEffect(() => {
    const storedScore = localStorage.getItem("creditScore");
    if (storedScore) {
      setCreditScore(storedScore);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
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
    </div>
  );
}

export default Dashboard;
