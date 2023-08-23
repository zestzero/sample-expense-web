import { Category, Expense } from "@models/Expense";

export const groupByCategory = (expenses: Expense[]): Map<Category, number> => {
    return expenses.reduce((acc: Map<Category, number>, curr: Expense) => {
        acc.set(
            curr.category,
            acc.get(curr.category)
                ? (acc.get(curr.category) || 0) + curr.amount
                : curr.amount
        );
        return acc;
    }, new Map<Category, number>());
};

export const sortAmountByDesending = (
    groupedByCategory: Map<Category, number>
): [Category, number][] => {
    return Array.from(groupedByCategory).sort((a, b) => b[1] - a[1]);
};
