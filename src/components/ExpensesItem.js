import React from "react";
import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    return(
        <div>  
            {  
                props.expenses.map(element => {
                    return(
                       /* <div className="expense-item" > 
                                <ExpenseDate date={element.date}></ExpenseDate>
                                <div className="expense-item__description">
                                    <h2>{element.title}</h2>
                                    <div className="expense-item__price">${element.amount}</div>
                                </div>
                        </div>
                        */
                        <div className="container" > 
                            <div className="blocos blocDate">
                                <ExpenseDate date={element.date}></ExpenseDate>
                            </div>
                            <div className="blocos blocTitle">
                                <h2>{element.title}</h2>
                            </div>
                            <div>
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