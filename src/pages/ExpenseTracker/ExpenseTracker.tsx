import { ExpenseModal } from "@components/ExpenseModal/ExpenseModal";
import { Button } from "@components/core/Button/Button";
import { ModalName } from "@constants/Modal";
import { useExpenseTracker } from "@hooks/useExpenseTracker";
import { useModalContext } from "@hooks/useModalContext";

export const ExpenseTracker = () => {
  const { openModal } = useModalContext(ModalName.Expense);
  const { expenses } = useExpenseTracker();
  return (
    <>
      <div className="flex space-x-2">
        <Button variant="primary" onClick={openModal}>
          Add Expense
        </Button>
        <Button variant="secondary" onClick={openModal}>
          Delete Expense
        </Button>
      </div>
      {expenses && expenses.length > 0 ? (
        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      <ExpenseModal onCreate={() => {}} />
    </>
  );
};
