import { expect, test } from "vitest";
import { Category, Expense } from "@models/Expense";
import { groupAndSort } from "./groupAndSort";

test("should group and sort correctly", () => {
    const expenses: Expense[] = [
        {
            id: "1",
            name: "Food1",
            amount: 100,
            category: Category.Food,
            date: new Date("2023-01-01T00:00:00"),
        },
        {
            id: "2",
            name: "Food2",
            amount: 120,
            category: Category.Food,
            date: new Date("2023-01-01T00:00:00"),
        },
        {
            id: "3",
            name: "Furniture1",
            amount: 5000,
            category: Category.Furniture,
            date: new Date("2023-01-01T00:00:00"),
        },
        {
            id: "4",
            name: "Accessory1",
            amount: 100,
            category: Category.Accessory,
            date: new Date("2023-01-01T00:00:00"),
        },
    ];
    expect(groupAndSort(expenses)).toEqual([[Category.Furniture, 5000], [Category.Food, 220], [Category.Accessory, 100]]);
});

