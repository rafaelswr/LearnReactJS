import React from "react";
import ExpenseItem from "./components/ExpensesItem";

function App() {
  const expensesArray = [
    {title:"Car Insurance", amount:294.67, date:new Date(2021,2,28)},
    {title:"Water", amount:294.67, date:new Date(2021,2,28)},
    {title:"Shoes", amount:294.67, date:new Date(2021,2,28)},
    {title:"Home", amount:294.67, date:new Date(2021,2,28)},
    {title:"Garden", amount:294.67, date:new Date(2021,2,28)},
    {title:"TV", amount:294.67, date:new Date(2021,2,28)},
  ]
  return (
    <div>
      <ExpenseItem expenses={expensesArray}></ExpenseItem>
    </div>
  );
}

export default App;
