import { describe, expect, it } from "vitest";
import { PriceFormatter } from "./priceFormatter";

describe("priceFormatter", () => {
    it.each([
        ["en-US", "USD", 100, "$100.00"],
        ["en-US", "USD", 1000, "$1,000.00"],
        ["jp-JP", "JPY", 1000, "¥1,000"],
        ["de-DE", "EUR", 1000, "1.000,00\xa0€"],
    ])(
        "should format price correctly for locale as %s and currency as %s",
        (
            locale: string,
            currency: string,
            amount: number,
            expectedResult: string
        ) => {
            const formatter = new PriceFormatter(locale, currency);
            expect(formatter.format(amount)).toEqual(expectedResult);
        }
    );
});
