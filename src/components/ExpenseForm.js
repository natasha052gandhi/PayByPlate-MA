import React from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  return (
    <div className="expense-form">
      <h2>Add Expense</h2>
      <input placeholder="Enter amount" />
      <button>Add</button>
    </div>
  );
}
