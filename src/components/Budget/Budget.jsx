import React, { useRef } from 'react';

// Displaying the budget
const Budget = ({ initialBudget }) => {
  const budgetRef = useRef(initialBudget);

  return <h2>Budget: ${budgetRef.current}</h2>;
};

export default Budget;
