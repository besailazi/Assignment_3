import React from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense }) => {

  
  return (
    // Container for the list of expenses
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;