import React from "react";

function CreditPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        What is a Credit Score?
      </h1>

      {/* Section: Your Financial GPA */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        Your Financial GPA
      </h2>
      <p className="text-lg text-gray-700">
        A credit score is a **3-digit number (300-850)** that tells lenders how risky it is to lend you money. 
        Think of it as your **financial GPA**—the higher the score, the more trustworthy you appear to banks.
      </p>

      {/* Section: It’s All About Trust */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        It’s All About Trust
      </h2>
      <p className="text-lg text-gray-700">
        A **higher credit score** means banks trust you more, leading to **better loans and lower interest rates**. 
        A **lower score** makes it harder to get approvals and increases the cost of borrowing.
      </p>

      {/* Section: What Makes Up Your Score? */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        What Makes Up Your Score?
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><span className="font-bold">Payment History (35%):</span> Do you pay your bills on time?</li>
        <li><span className="font-bold">Amounts Owed (30%):</span> How much debt are you carrying?</li>
        <li><span className="font-bold">Credit History Length (15%):</span> How long have you been using credit?</li>
        <li><span className="font-bold">New Credit (10%):</span> How often do you apply for new credit?</li>
        <li><span className="font-bold">Credit Mix (10%):</span> Do you have a mix of credit cards, loans, and other accounts?</li>
      </ul>

      {/* Section: Why Does It Matter? */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        Why Does It Matter?
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><span className="font-bold">Low score:</span> High interest rates, fewer loan approvals.</li>
        <li><span className="font-bold">High score:</span> Lower interest rates, easier approvals, better financial opportunities.</li>
      </ul>

      {/* Section: Credit Score Ranges */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        Credit Score Ranges Explained
      </h2>
      <div className="bg-white shadow-md p-4 rounded-md">
        <ul className="list-none space-y-3 text-gray-700">
          <li><span className="font-bold text-red-600">300-579:</span> Poor</li>
          <li><span className="font-bold text-orange-500">580-669:</span> Fair</li>
          <li><span className="font-bold text-yellow-500">670-739:</span> Good</li>
          <li><span className="font-bold text-green-500">740-799:</span> Very Good</li>
          <li><span className="font-bold text-blue-700">800-850:</span> Excellent</li>
        </ul>
      </div>

      {/* Section: It’s Not Just About Credit Cards */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        It’s Not Just About Credit Cards
      </h2>
      <p className="text-lg text-gray-700">
        Your credit score affects more than just credit cards. It can impact **loans, utility bills, 
        even renting an apartment.** Landlords and lenders often check your score before approving you.
      </p>

      {/* Section: You Have More Than One */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        You Have More Than One Score
      </h2>
      <p className="text-lg text-gray-700">
        There isn’t just one credit score. Different models, such as **FICO and VantageScore**, may 
        give you slightly different scores, but they all measure the same financial behaviors.
      </p>
    </div>
  );
}

export default CreditPage;
