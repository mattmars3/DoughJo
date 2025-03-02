import React from "react";

function BudgetPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        The 50-30-20 Rule of Budgeting: Getting Your Finances Back on Track
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Okay, so your budget is a bit out of balance—how do we get it back on track? 
        In finance, there's a term called the <span className="font-semibold">50-30-20 rule</span>, 
        a helpful rule of thumb for structuring your budget and saving effectively. 
        This guide will walk you through the basics of the rule, how to implement it, 
        and what to do if you have extra savings.
      </p>

      {/* Section: What is the 50-30-20 Rule? */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        What is the 50-30-20 Rule?
      </h2>

      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>
          <span className="font-bold">50% for Needs:</span> Essential expenses—rent, 
          utilities, groceries, transportation, insurance, and minimum debt payments.
        </li>
        <li>
          <span className="font-bold">30% for Wants:</span> Non-essential expenses like 
          dining out, entertainment, hobbies, and travel.
        </li>
        <li>
          <span className="font-bold">20% for Savings and Debt Repayment:</span> 
          This portion goes toward emergency funds, retirement savings, and paying off debt.
        </li>
      </ul>

      {/* Section: Why Follow the 50-30-20 Rule? */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        Why Follow the 50-30-20 Rule?
      </h2>

      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><span className="font-bold">Simplicity:</span> A straightforward budgeting method.</li>
        <li><span className="font-bold">Flexibility:</span> Can be adjusted based on financial goals.</li>
        <li><span className="font-bold">Balanced Financial Health:</span> Helps build savings while managing expenses.</li>
      </ul>

      {/* Section: How to Implement the Rule */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        How to Implement the Rule
      </h2>

      <ol className="list-decimal list-inside space-y-3 text-gray-700">
        <li><span className="font-bold">Calculate Your After-Tax Income:</span> Base budget on post-tax earnings.</li>
        <li><span className="font-bold">Assign 50% to Needs:</span> Ensure essentials don't exceed half of your income.</li>
        <li><span className="font-bold">Assign 30% to Wants:</span> Budget for discretionary spending.</li>
        <li><span className="font-bold">Assign 20% to Savings/Debt Repayment:</span> Prioritize financial security.</li>
      </ol>

      {/* Section: What If You Have Extra Savings? */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        What If You Have Extra Savings?
      </h2>

      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><span className="font-bold">Boosting Your Savings:</span> Add to emergency funds or retirement accounts.</li>
        <li><span className="font-bold">Accelerating Debt Repayment:</span> Pay down high-interest debt faster.</li>
        <li><span className="font-bold">Investing in Your Future:</span> Consider education, side businesses, or investments.</li>
      </ul>

      {/* Section: Conclusion */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        Conclusion
      </h2>

      <p className="text-lg text-gray-700">
        The 50-30-20 rule provides a simple yet effective framework for budgeting. 
        Adjust the percentages based on your personal situation and take small steps toward financial security. 
        Happy budgeting!
      </p>
    </div>
  );
}

export default BudgetPage;
