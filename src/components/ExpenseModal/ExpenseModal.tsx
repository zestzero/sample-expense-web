import { CatFact } from "@components/CatFact/CatFact";
import { Input } from "@components/core/Input/Input";
import { ListBox } from "@components/core/ListBox/ListBox";
import { Modal } from "@components/core/Modal/Modal";
import { ExpenseCategories } from "@constants/ExpenseCategories";
import { ModalName } from "@constants/Modal";
import { Expense } from "@models/Expense";
import { FC } from "react";

interface Props {
  onCreate: (expense: Expense) => void;
}

export const ExpenseModal: FC<Props> = () => {
  return (
    <Modal name={ModalName.Expense} title="Add Expense">
      <div className="flex flex-row space-x-8 w-full">
        <div className="flex flex-col flex-1 space-y-4">
          <Input placeholder="Item Name" type="text" />
          <ListBox items={ExpenseCategories} />
          <Input placeholder="Amount" type="number" min={0} />
        </div>
        <div className="flex flex-1">
          <CatFact />
        </div>
      </div>
      <input type="submit" />
    </Modal>
  );
};
