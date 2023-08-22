import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CatFact } from "@components/CatFact/CatFact";
import { Input } from "@components/core/Input/Input";
import { ListBox } from "@components/core/ListBox/ListBox";
import { Modal } from "@components/core/Modal/Modal";
import { ExpenseCategories } from "@constants/ExpenseCategories";
import { ModalName } from "@constants/Modal";
import { Category, Expense } from "@models/Expense";
import { Button } from "@components/core/Button/Button";
import { v4 as uuidv4 } from "uuid";
import { useModalContext } from "@hooks/useModalContext";

interface Props {
  onCreate: (expense: Expense) => void;
}

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Item name is required"),
  amount: Yup.number()
    .moreThan(0, "Amount must be greater than 0")
    .required("Expense amount is required"),
});

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
          props.onCreate({
            id: uuidv4(),
            name: values.name,
            amount: values.amount,
            category: values.category as Category,
            date: new Date(),
          });
          closeModal();
        }}
      >
        {({ errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <div className="flex flex-row space-x-8 w-full">
              <div className="flex flex-col flex-1 space-y-2">
                <Input
                  name="name"
                  placeholder="Item Name"
                  type="text"
                  onChange={handleChange}
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
                />
                <div className="text-xs text-red-500">
                  {errors.amount && touched.amount ? (
                    <div>{errors.amount}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-1">
                <CatFact />
              </div>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
