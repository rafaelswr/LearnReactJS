import React from "react";

const ExpenseDate= ()=>{
    const todayDate = new Date();
    const day = todayDate.getDate(); 
    const month = todayDate.toLocaleDateString("pt-PT",{month:"long"});
    const year = todayDate.getFullYear();

    return (
        <div>
            {day+"/"+month+"/"+year}
        </div>
    );
}

export default ExpenseDate; 