import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
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