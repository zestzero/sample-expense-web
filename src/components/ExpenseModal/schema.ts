import * as Yup from "yup";

export const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .required("Item name is required"),
    amount: Yup.number()
        .moreThan(0, "Amount must be greater than 0")
        .required("Expense amount is required"),
});