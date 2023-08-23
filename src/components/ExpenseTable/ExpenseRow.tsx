import { FC } from "react";

interface Props {
  active?: boolean;
  selected?: boolean;
  onSelected: () => void;
  name: string;
  category: string;
  amount: string;
}

export const ExpenseRow: FC<Props> = (props) => {
  return (
    <tr className={props.active ? "bg-green-200" : ""} data-testid="row-item">
      <td className="border border-slate-700 p-2">
        <input
          type="checkbox"
          checked={props.selected}
          onChange={props.onSelected}
          data-testid="row-select"
        />
      </td>
      <td className="border border-slate-700 p-2">{props.name}</td>
      <td className="border border-slate-700 p-2">{props.category}</td>
      <td className="border border-slate-700 p-2">{props.amount}</td>
    </tr>
  );
};
