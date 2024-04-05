import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import TotalExpense from './components/TotalExpense/TotalExpense';
import './App.module.css'

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

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
    </div>
    </div>
    </>
  );
}
  

export default App
