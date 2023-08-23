import { FC } from "react";
import { Formik, Form } from "formik";
import { CatFact } from "@components/CatFact/CatFact";
import { Input } from "@components/core/Input/Input";
import { ListBox } from "@components/core/ListBox/ListBox";
import { Modal } from "@components/core/Modal/Modal";
import { ExpenseCategories } from "@constants/ExpenseCategories";
import { ModalName } from "@constants/Modal";
import { Expense } from "@models/Expense";
import { Button } from "@components/core/Button/Button";
import { useModalContext } from "@hooks/useModalContext";
import { Schema } from "./schema";
import { getExpenseItem } from "./mapper";

interface Props {
  onCreate: (expense: Expense) => void;
}

export const ExpenseModal: FC<Props> = (props) => {
  const { closeModal } = useModalContext(ModalName.Expense);
  return (
    <Modal name={ModalName.Expense} title="Add Expense">
      <Formik
        initialValues={{
          name: "",
          category: ExpenseCategories[0].value,
          amount: 0,
        }}
        validateOnChange
        validateOnBlur
        validationSchema={Schema}
        onSubmit={(values) => {
          props.onCreate(
            getExpenseItem({
              name: values.name,
              amount: values.amount,
              category: values.category,
            })
          );
          closeModal();
        }}
      >
        {({ errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <div className="flex flex-col md:flex-row md:space-x-8 w-full items-center md:items-start">
              <div className="flex flex-col flex-1 space-y-2 w-full">
                <Input
                  name="name"
                  placeholder="Item Name"
                  type="text"
                  onChange={handleChange}
                  data-testid="item-name"
                />
                <div className="text-xs text-red-500">
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <ListBox
                  items={ExpenseCategories}
                  onChange={(value: string) => setFieldValue("category", value)}
                />
                <Input
                  name="amount"
                  placeholder="Amount"
                  type="number"
                  onChange={handleChange}
                  data-testid="item-amount"
                />
                <div className="text-xs text-red-500">
                  {errors.amount && touched.amount ? (
                    <div>{errors.amount}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex py-4 md:py-0 flex-1 w-full">
                <CatFact />
              </div>
            </div>
            <Button variant="primary" type="submit" data-testid="submit-button">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
