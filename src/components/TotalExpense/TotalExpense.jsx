import React from 'react';

// Calculating and displaying total expenses
const TotalExpense = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return <h2>Total Expenses: ${total}</h2>;
};

export default TotalExpense;
