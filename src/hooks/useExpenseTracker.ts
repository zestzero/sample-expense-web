import { Expense } from "@models/Expense";
import { useState } from "react";

export const useExpenseTracker = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const addExpense = (expense: Expense) => {
        setExpenses(prevState => [...prevState, expense]);
    };

    const deleteExpenses = (expense: Expense[]) => {
        setExpenses(prevState => prevState.filter(e => !expense.includes(e)));
    };

    return {
        expenses,
        addExpense,
        deleteExpenses,
    }
};
