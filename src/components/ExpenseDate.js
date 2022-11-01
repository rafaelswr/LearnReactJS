import React from "react";
import "../css/ExpenseDates.css";
const ExpenseDate= ({date})=>{
    const day = date.getDate(); 
    const month = date.toLocaleDateString("pt-PT",{month:"long"});
    const year = date.getFullYear();

    return (
        <div className="principal">
            <div className="day">
                { day}
            </div>
            <div className="month">
               { month}
            </div>
            <div className="year">
                {year}
            </div>
        </div>
    );
}

export default ExpenseDate; 