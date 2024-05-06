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
    
    const newExpenses = [...expenses, { ...expense, id: expenses.length + 1 }];
    setExpenses(newExpenses);
   
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  useEffect(() => {
    
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []); 

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
