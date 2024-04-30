import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('-'); // Default value changed to "-"
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: 'Title is required',
      }));
      return;
    }

    if (!amount.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: 'Amount is required',
      }));
      return;
    }

    if (!date.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: 'Date is required',
      }));
      return;
    }

    addExpense({ title, amount, category, date });

    setTitle('');
    setAmount('');
    setCategory('-'); // Reset category to "-"
    setDate('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div>
        <label>Add Amount</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {errors.amount && <span className="error">{errors.amount}</span>}
      </div>
      <div>
        <label>Choose a Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="-">-</option>
          <option value="housing">Housing</option>
          <option value="grocery">Grocery</option>
          <option value="transportation">Transportation</option>
          <option value="clothes">Clothes</option>
          <option value="other">Other</option>
        </select>
        {errors.category && <span className="error">{errors.category}</span>}
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>
      <button className='submit-button' type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
