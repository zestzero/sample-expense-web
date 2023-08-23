import { ExpenseModal } from "@components/ExpenseModal/ExpenseModal";
import { ExpenseRow } from "@components/ExpenseTable/ExpenseRow";
import { ExpenseTable } from "@components/ExpenseTable/ExpenseTable";
import { Button } from "@components/core/Button/Button";
import { ModalName } from "@constants/Modal";
import { PlusIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useExpenseTracker } from "@hooks/useExpenseTracker";
import { useModalContext } from "@hooks/useModalContext";
import { useSelection } from "@hooks/useSelection";
import { PriceFormatter } from "@utils/priceFormatter";

export const ExpenseTracker = () => {
  const formatter = new PriceFormatter("en-US", "USD");
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
          <ExpenseTable
            items={expenses}
            onToggleAll={onToggleAll}
            renderRow={(expense, index) => (
              <ExpenseRow
                key={index}
                active={isInTopCategoryExpense(expense.category)}
                selected={selecting.includes(expense.id)}
                onSelected={onToggleSelect(expense.id)}
                name={expense.name}
                category={expense.category}
                amount={formatter.format(expense.amount)}
              />
            )}
          />
        </div>
      ) : null}
      <ExpenseModal onCreate={addExpense} />
    </>
  );
};
