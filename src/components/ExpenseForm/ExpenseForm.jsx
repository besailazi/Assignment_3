import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('-'); 
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: 'Title is required',
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: '',
      }));
    }

    if (!amount.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: 'Amount is required',
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: '',
      }));
    }

    if (!date.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: 'Date is required',
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: '',
      }));
    }

    addExpense({ title, amount, category, date });

    setTitle('');
    setAmount('');
    setCategory('-');
    setDate('');
    setErrors({});
  };

  // Function to handle title input change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      title: '',
    }));
  };

  // Function to handle amount input change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
   
    setErrors((prevErrors) => ({
      ...prevErrors,
      amount: '',
    }));
  };

  // Function to handle date input change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      date: '',
    }));
  };

  // Function to handle category input change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      category: '',
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange} 
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div>
        <label>Add Amount</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange} 
        />
        {errors.amount && <span className="error">{errors.amount}</span>}
      </div>
      <div>
        <label>Choose a Category</label>
        <select
          value={category}
          onChange={handleCategoryChange} 
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
          onChange={handleDateChange} 
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>
      <button className='submit-button' type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
