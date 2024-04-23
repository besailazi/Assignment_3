import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    // Container for each expense item
    <ul className='add-expense-container'>
      <li>{expense.title}</li>
      <li>{expense.amount}</li>
      <li>{expense.category}</li>
      <li>{expense.date}</li>
      <button className='delete-button' onClick={() => deleteExpense(expense.id)}>Delete</button>
    </ul>
  );
};

export default ExpenseItem;
