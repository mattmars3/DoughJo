const QuestionnairePage = () => {
  return (
    <div>
      <h2>Financial Questionnaire</h2>
      <form>
        <label>State:</label>
        <select>
          <option value="IL">Illinois</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          {/* Add all states here */}
        </select>

        <label>County:</label>
        <input type="text" placeholder="Enter your county" />

        <label>Annual Salary:</label>
        <input type="number" placeholder="Enter your salary" />

        <label>Savings Amount:</label>
        <input type="number" placeholder="Enter your savings" />

        <label>Debt Amount:</label>
        <input type="number" placeholder="Enter your debt amount" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionnairePage;
