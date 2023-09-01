import { describe, expect, it, vitest } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ExpenseTable } from "./ExpenseTable";
import { Category, Expense } from "@models/Expense";

describe("ExpenseTable", () => {
  const defaultProps = {
    items: [],
    onToggleAll: vitest.fn(),
    renderRow: vitest.fn(),
  };

  it("should handle selection correctly", async () => {
    render(<ExpenseTable {...defaultProps} />);

    fireEvent.click(screen.getByTestId("select-all"));

    await waitFor(() => {
      expect(defaultProps.onToggleAll).toHaveBeenCalledTimes(1);
    });
  });

  it("should render table correctly", () => {
    const items: Expense[] = [
      {
        id: "1",
        name: "test",
        category: Category.Accessory,
        amount: 1,
        date: new Date("2023-01-01"),
      },
    ];
    const props = {
      ...defaultProps,
      items,
    };
    render(<ExpenseTable {...props} />);

    expect(screen.getByTestId("select-all")).toBeInTheDocument();
    expect(screen.getByText("Item")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(defaultProps.renderRow).toHaveBeenCalledTimes(1);
  });
});
