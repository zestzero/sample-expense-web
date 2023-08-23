import { Expense } from "@models/Expense";
import { FC } from "react";

interface Props {
  onToggleAll: () => void;
  items: Expense[];
  renderRow: (expense: Expense, index: number) => JSX.Element;
}

export const ExpenseTable: FC<Props> = (props) => {
  return (
    <table className="table-auto border-collapse border border-slate-500 text-left">
      <thead>
        <tr>
          <th className="border border-slate-600 p-2">
            <input
              type="checkbox"
              onChange={props.onToggleAll}
              data-testid="select-all"
            />
          </th>
          <th className="border border-slate-600 p-2">Item</th>
          <th className="border border-slate-600 p-2">Category</th>
          <th className="border border-slate-600 p-2">Amount</th>
        </tr>
      </thead>
      <tbody>{props.items.map(props.renderRow)}</tbody>
    </table>
  );
};
