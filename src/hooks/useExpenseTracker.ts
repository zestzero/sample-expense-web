import { Category, Expense } from "@models/Expense";
import { groupByCategory, sortAmountByDesending } from "@utils/groupAndSort";
import { useCallback, useEffect, useState } from "react";

export const useExpenseTracker = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [topCategoriesExpense, setTopCategoriesExpenses] = useState<Category[]>([]);

    useEffect(() => {
        if (expenses.length > 0) {
            const [first, second] = sortAmountByDesending(groupByCategory(expenses));
            const result =
                first && second && first[1] === second[1]
                    ? [first[0]].concat(second[0])
                    : [first[0]];

            setTopCategoriesExpenses(result);
        }
    }, [expenses]);

    const addExpense = useCallback((expense: Expense) => {
        setExpenses((prevState) => [...prevState, expense]);
    }, []);

    const deleteExpenses = useCallback((deleteExpenses: string[]) => {
        setExpenses((prevState) =>
            prevState.filter((e) => !deleteExpenses.some((del) => del === e.id))
        );
    }, []);

    return {
        expenses,
        addExpense,
        deleteExpenses,
        isInTopCategoryExpense: (category: Category) =>
            topCategoriesExpense.some((c) => c === category),
    };
};
