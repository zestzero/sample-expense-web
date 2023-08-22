import { Category, Expense } from "@models/Expense";
import { v4 as uuidv4 } from "uuid";

export const getExpenseItem = ({ name, amount, category }: { name: string, amount: number, category: string }): Expense => ({
    id: uuidv4(),
    name: name,
    amount: amount,
    category: category as Category,
    date: new Date(),
})