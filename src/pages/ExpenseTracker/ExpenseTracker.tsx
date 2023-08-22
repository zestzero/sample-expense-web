import { ExpenseModal } from "@components/ExpenseModal/ExpenseModal";
import { Button } from "@components/core/Button/Button";
import { ModalName } from "@constants/Modal";
import { PlusIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useExpenseTracker } from "@hooks/useExpenseTracker";
import { useModalContext } from "@hooks/useModalContext";
import { useSelection } from "@hooks/useSelection";

export const ExpenseTracker = () => {
  const { openModal } = useModalContext(ModalName.Expense);
  const { expenses, addExpense, deleteExpenses, isInTopCategoryExpense } =
    useExpenseTracker();
  const { selecting, toggleSelect, toggleAll, resetSelection } = useSelection();

  const onDelete = () => {
    deleteExpenses(selecting);
    resetSelection();
  };

  const onToggleSelect = (id: string) => () => toggleSelect(id);
  const onToggleAll = () => toggleAll(expenses.map((expense) => expense.id));

  const shouldDisableDeleteButton = selecting.length === 0;

  return (
    <>
      <div className="flex space-x-2">
        <Button
          variant="primary"
          onClick={openModal}
          icon={<PlusIcon width={16} />}
        >
          Add Expense
        </Button>
        <Button
          variant="danger"
          onClick={onDelete}
          disabled={shouldDisableDeleteButton}
          icon={<TrashIcon width={16} />}
        >
          Delete Expense
        </Button>
      </div>
      {expenses && expenses.length > 0 ? (
        <div className="py-4">
          <table className="table-auto border-collapse border border-slate-500 text-left">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">
                  <input type="checkbox" onChange={onToggleAll} />
                </th>
                <th className="border border-slate-600 p-2">Item</th>
                <th className="border border-slate-600 p-2">Category</th>
                <th className="border border-slate-600 p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr
                  key={index}
                  className={
                    isInTopCategoryExpense(expense.category)
                      ? "bg-green-200"
                      : ""
                  }
                >
                  <td className="border border-slate-700 p-2">
                    <input
                      type="checkbox"
                      checked={selecting.includes(expense.id)}
                      onChange={onToggleSelect(expense.id)}
                    />
                  </td>
                  <td className="border border-slate-700 p-2">
                    {expense.name}
                  </td>
                  <td className="border border-slate-700 p-2">
                    {expense.category}
                  </td>
                  <td className="border border-slate-700 p-2">
                    {expense.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      <ExpenseModal onCreate={addExpense} />
    </>
  );
};
