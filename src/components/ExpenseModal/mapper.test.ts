import { expect, test } from "vitest";
import { getExpenseItem } from "./mapper";

test("should map expense item correctly", () => {
    expect(getExpenseItem({
        name: "test",
        amount: 1,
        category: "Food"
    })).toEqual({
        amount: 1,
        category: "Food",
        date: expect.any(Date),
        id: expect.any(String),
        name: "test",
    });
});