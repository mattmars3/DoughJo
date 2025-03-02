import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionnairePage = () => {
  const navigate = useNavigate();
  const [amountOwed, setAmountOwed] = useState('');
  const [newCredit, setNewCredit] = useState('');
  const [paymentHistory, setPaymentHistory] = useState('');
  const [creditHistoryLength, setCreditHistoryLength] = useState('');
  const [creditMix, setCreditMix] = useState('');

  const calculateCreditScore = () => {
    let score = 600;

    if (paymentHistory >= 95) score += 100;
    else if (paymentHistory >= 80) score += 50;
    else if (paymentHistory >= 60) score -= 50;
    else score -= 150;

    if (amountOwed < 10) score += 80;
    else if (amountOwed < 30) score += 40;
    else if (amountOwed < 50) score -= 30;
    else if (amountOwed < 75) score -= 80;
    else score -= 150;

    if (creditHistoryLength > 15) score += 70;
    else if (creditHistoryLength > 8) score += 50;
    else if (creditHistoryLength > 3) score += 20;
    else if (creditHistoryLength > 1) score -= 50;
    else score -= 100;

    if (newCredit === 0) score += 30;
    else if (newCredit <= 2) score += 10;
    else if (newCredit <= 5) score -= 30;
    else score -= 70;

    if (creditMix >= 3) score += 40;
    else if (creditMix === 2) score += 20;
    else if (creditMix === 1) score += 5;
    else score -= 30;

    return Math.max(350, Math.min(850, score));
  };

  const handleConfirmRegistration = () => {
    const finalScore = calculateCreditScore();
    console.log("Final Credit Score:", finalScore);
    localStorage.setItem("creditScore", finalScore);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Financial Questionnaire</h2>

        <div className="space-y-3">
          <label className="block font-medium">Amount Owed (% of credit limit used):</label>
          <input type="number" value={amountOwed} onChange={(e) => setAmountOwed(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />

          <label className="block font-medium">New Credit (recently opened accounts):</label>
          <input type="number" value={newCredit} onChange={(e) => setNewCredit(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />

          <label className="block font-medium">Payment History (% on-time payments):</label>
          <input type="number" value={paymentHistory} onChange={(e) => setPaymentHistory(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />

          <label className="block font-medium">Credit History Length (Years):</label>
          <input type="number" value={creditHistoryLength} onChange={(e) => setCreditHistoryLength(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />

          <label className="block font-medium">Credit Mix (variety of credit types):</label>
          <input type="number" value={creditMix} onChange={(e) => setCreditMix(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />

          <button onClick={handleConfirmRegistration} 
            className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Confirm Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;
