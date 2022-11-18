import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  let newExpensevalues = {};
  function submitbuttonHandler(event) {
    newExpensevalues = {
      ...event,
      id: Math.random().toString(),
    };
    props.newExpenseData(newExpensevalues);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={submitbuttonHandler} />
    </div>
  );
}
export default NewExpense;
