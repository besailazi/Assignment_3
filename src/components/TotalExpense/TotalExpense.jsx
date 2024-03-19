import React from 'react';

const TotalExpense = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return <div>Total Expenses: {total};</div>;
};

export default TotalExpense;
