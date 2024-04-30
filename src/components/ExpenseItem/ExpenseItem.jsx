import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    // Container for each expense item
    <div>
      <table>
        <tbody>
          <tr>
            <td>Title:</td>
            <td>{expense.title}</td>
          </tr>
          <tr>
            <td>Amount:</td>
            <td>${expense.amount}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{expense.category}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{expense.date}</td>
          </tr>
          <tr>
            <td>Action:</td>
            <td>
              <button className='delete-button' onClick={() => deleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseItem;
