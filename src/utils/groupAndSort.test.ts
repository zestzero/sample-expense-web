import { describe, expect, it } from "vitest";
import { Category, Expense } from "@models/Expense";
import { groupByCategory, sortAmountByDesending } from "./groupAndSort";

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

describe("groupAndSort", () => {
    it("should groupByCategory correctly", () => {
        expect(groupByCategory(expenses)).toEqual(
            new Map<Category, number>([
                [Category.Food, 220],
                [Category.Furniture, 5000],
                [Category.Accessory, 100],
            ])
        );
    });

    it("should sortAmountByDesending correctly", () => {
        const groupedByCategory = groupByCategory(expenses);
        expect(sortAmountByDesending(groupedByCategory)).toEqual([
            [Category.Furniture, 5000],
            [Category.Food, 220],
            [Category.Accessory, 100],
        ]);
    });
});
