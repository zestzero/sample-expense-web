import { renderHook, act } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import { useExpenseTracker } from "./useExpenseTracker";
import { Category } from "@models/Expense";

describe("useExpenseTracker", () => {
    it("should handle add expense correctly", () => {
        const { result } = renderHook(() => useExpenseTracker());

        expect(result.current.expenses).toEqual([]);

        act(() => {
            result.current.addExpense({
                id: "1",
                name: "Food1",
                amount: 100,
                category: Category.Food,
                date: new Date("2023-01-01T00:00:00"),
            });
        });

        expect(result.current.expenses).toEqual([
            {
                id: "1",
                name: "Food1",
                amount: 100,
                category: Category.Food,
                date: new Date("2023-01-01T00:00:00"),
            },
        ]);
    });

    it("should handle delete expense correctly", () => {
        const { result } = renderHook(() => useExpenseTracker());

        expect(result.current.expenses).toEqual([]);

        act(() => {
            result.current.addExpense({
                id: "1",
                name: "Food1",
                amount: 100,
                category: Category.Food,
                date: new Date("2023-01-01T00:00:00"),
            });
            result.current.addExpense({
                id: "2",
                name: "Food2",
                amount: 100,
                category: Category.Food,
                date: new Date("2023-01-01T00:00:00"),
            });
        });

        expect(result.current.expenses).toHaveLength(2);

        act(() => {
            result.current.deleteExpenses(["1"]);
        });

        expect(result.current.expenses).toEqual([
            {
                id: "2",
                name: "Food2",
                amount: 100,
                category: Category.Food,
                date: new Date("2023-01-01T00:00:00"),
            },
        ]);
    });

    it("should handle calculate top expense correctly", () => {
        const { result } = renderHook(() => useExpenseTracker());

        expect(result.current.expenses).toEqual([]);

        act(() => {
            result.current.addExpense({
                id: "1",
                name: "Food1",
                amount: 100,
                category: Category.Food,
                date: new Date("2023-01-01T00:00:00"),
            });

            result.current.addExpense({
                id: "2",
                name: "Food2",
                amount: 200,
                category: Category.Food,
                date: new Date("2023-01-01T00:00:00"),
            });

            result.current.addExpense({
                id: "3",
                name: "Furniture1",
                amount: 200,
                category: Category.Furniture,
                date: new Date("2023-01-01T00:00:00"),
            });
        });

        expect(result.current.isInTopCategoryExpense(Category.Food)).toBeTruthy();
        expect(
            result.current.isInTopCategoryExpense(Category.Furniture)
        ).toBeFalsy();
    });
});
