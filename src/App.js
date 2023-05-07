import React, {useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title:"school fee",
    amount:232,
    date:new Date(2023, 4, 9)
  },
  {
    id: 'e2',
    title:"school fee",
    amount:232,
    date:new Date(2023, 4, 9)
  },
  {
    id: 'e3',
    title:"school fee",
    amount:232,
    date:new Date(2023, 4, 9)
  },
  {
    id: 'e4',
    title:"school fee",
    amount:232,
    date:new Date(2023, 4, 9)
  },
];

const App = () => {
  
  const[expenses, setExpenses]=useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
        <div>
          <h1 className="tracker">Expense Traicker</h1>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses item={expenses}/>
         
        </div>    
    );
}

export default App;