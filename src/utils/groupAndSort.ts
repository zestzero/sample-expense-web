import { Category, Expense } from "@models/Expense";

/**
 * Calculates the total amount spent on each category
 * @param expenses A list of expenses
 * @returns A map of category and total amount spent on that category
 */
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

/**
 * Sort the total amount spent on each category in descending order
 * @param groupedByCategory A map of category and total amount spent on that category
 * @returns Sorted list of category and total amount spent on that category in descending order
 */
export const sortAmountByDesending = (
    groupedByCategory: Map<Category, number>
): [Category, number][] => {
    return Array.from(groupedByCategory).sort((a, b) => b[1] - a[1]);
};
