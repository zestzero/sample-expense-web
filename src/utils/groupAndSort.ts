import { Category, Expense } from "@models/Expense";

export const groupAndSort = (expenses: Expense[]): [Category, number][] => {
    const groupByCategory = expenses.reduce(
        (acc: Map<Category, number>, curr: Expense) => {
            acc.set(
                curr.category,
                acc.get(curr.category)
                    ? (acc.get(curr.category) || 0) + curr.amount
                    : curr.amount
            );
            return acc;
        },
        new Map<Category, number>()
    );
    return Array.from(groupByCategory).sort((a, b) => b[1] - a[1]);
};
