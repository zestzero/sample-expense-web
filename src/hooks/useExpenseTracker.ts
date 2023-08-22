import { Category, Expense } from "@models/Expense";
import { useCallback, useEffect, useState } from "react";

export const useExpenseTracker = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [topCategoryExpense, setTopCategoryExpenses] = useState<Category[]>([]);

    useEffect(() => {
        if (expenses.length > 0) {
            const groupExpenseByCategory = expenses.reduce((acc: Map<Category, number>, curr: Expense) => {
                acc.set(curr.category, acc.get(curr.category) ? (acc.get(curr.category) || 0) + curr.amount : curr.amount);
                return acc;
            }, new Map<Category, number>());
            const [first, second] = Array.from(groupExpenseByCategory).sort((a, b) => b[1] - a[1]);
            const result = expenses.length > 1 && first[1] === second[1] ? [first[0]].concat(second[0]) : [first[0]];
            setTopCategoryExpenses(result);
        }
    }, [expenses]);

    const addExpense = useCallback((expense: Expense) => {
        setExpenses(prevState => [...prevState, expense]);
    }, []);

    const deleteExpenses = useCallback((deleteExpenses: string[]) => {
        setExpenses(prevState => prevState.filter(e => !deleteExpenses.some((del) => del === e.id)));
    }, []);

    return {
        expenses,
        addExpense,
        deleteExpenses,
        isInTopCategoryExpense: (category: Category) => topCategoryExpense.some((c) => c === category),
    }
};
