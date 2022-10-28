import React from "react";
import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({expenses}) => {
    const title = "Car Insurance";
    const expenseAmount = 298.12;
    return(
        <div>  
            {  
                expenses.map(element => {
                    return(
                        <div className="expense-item" > 
                            <ExpenseDate></ExpenseDate>
                            <div className="expense-item__description">
                                <h2>{element.title}</h2>
                                <div className="expense-item__price">${element.amount}</div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
       
    );

}

export default ExpenseItem;