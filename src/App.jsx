import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import TotalExpense from './components/TotalExpense/TotalExpense';
import Budget from './components/Budget/Budget';
import './App.module.css';

function App() {
  // State for expenses
  const [expenses, setExpenses] = useState([]);

  // Function to add an expense
  const addExpense = (expense) => {
    // Update expenses state
    const newExpenses = [...expenses, { ...expense, id: expenses.length + 1 }];
    setExpenses(newExpenses);
    // Update localStorage
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    // Update expenses state
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    // Update localStorage
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  useEffect(() => {
    // Load expenses from localStorage when component mounts
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []); // Empty dependency array ensures this effect only runs once, on component mount

  return (
    <>
      <div className="App">
        <div>
          <h1>Expense Tracker App</h1>
        </div>
        <div>
          <ExpenseForm addExpense={addExpense} />
          <TotalExpense expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          <Budget initialBudget={1000} />
        </div>
      </div>
    </>
  );
}

export default App;
