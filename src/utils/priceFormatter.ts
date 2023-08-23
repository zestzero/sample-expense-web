export class PriceFormatter {
    private formatter: Intl.NumberFormat;
    constructor(locale: string, currency: string) {
        this.formatter = new Intl.NumberFormat(locale, {
            currency,
            style: "currency",
        });
    }

    format(price: number) {
        return this.formatter.format(price);
    }
}
