export enum Category {
    Food = "Food",
    Furniture = "Furniture",
    Accessory = "Accessory",
}

export type Expense = {
    id: string;
    name: string;
    amount: number;
    category: Category;
    date: Date;
}
