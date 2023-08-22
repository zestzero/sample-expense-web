import { Category } from "@models/Expense";
import { Item } from "@models/ListItem";

export const ExpenseCategories: Item[] = [
    {
        value: Category.Food,
        name: "Food",
    },
    {
        value: Category.Furniture,
        name: "Furniture",
    },
    {
        value: Category.Accessory,
        name: "Accessory",
    },
];