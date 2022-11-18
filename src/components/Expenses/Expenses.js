// import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
// import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [selectedExpenseYear, setSelectedExpenseYear] = useState("");
  const selectedYear = (event) => {
    setSelectedExpenseYear(event);
    function datacheck() {
      console.log(selectedExpenseYear);
    }
    datacheck();
  };
  const filteredExpense = props.items.filter((item) => {
    return selectedExpenseYear === item.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedExpenseYear}
          selectedDataHandler={selectedYear}
        />
        <ExpenseChart expenses={filteredExpense}></ExpenseChart>
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}
export default Expenses;
