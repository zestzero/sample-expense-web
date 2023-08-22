import { expect, test } from "vitest";
import { Schema } from "./schema";

test("should have error when title is empty", () => {
    expect(() =>
        Schema.validateSync({
            name: "",
            amount: 1,
        }).name
    ).toThrowError(/Too Short!/);
});

test("should have error when title contain numeric", () => {
    expect(() =>
        Schema.validateSync({
            name: "123",
            amount: 1,
        }).name
    ).toThrowError(/Only alphabets are allowed for this field/);
});

test("should have error when amount less than 0", () => {
    expect(() =>
        Schema.validateSync({
            name: "123",
            amount: -1,
        }).name
    ).toThrowError(/Amount must be greater than 0/);
});

test("should pass when all values are valid", () => {
    expect(
        Schema.validateSync({
            name: "test",
            amount: 1,
        })
    ).toEqual({
        name: "test",
        amount: 1,
    });
});