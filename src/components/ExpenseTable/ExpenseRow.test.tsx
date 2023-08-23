import { describe, expect, it, vitest } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ExpenseRow } from "./ExpenseRow";

describe("ExpenseRow", () => {
  const defaultProps = {
    amount: "100",
    category: "Food",
    name: "Test",
    onSelected: vitest.fn(),
  };

  it("should render when active is true correctly", () => {
    render(<ExpenseRow {...defaultProps} active />);

    expect(screen.getByTestId("row-item").className).contain("bg-green-200");
  });

  it("should render when active is false correctly", () => {
    render(<ExpenseRow {...defaultProps} />);

    expect(screen.getByTestId("row-item").className).not.contain(
      "bg-green-200"
    );
  });

  it("should handle selection correctly", async () => {
    render(<ExpenseRow {...defaultProps} />);

    fireEvent.click(screen.getByTestId("row-select"));

    await waitFor(() => {
      expect(defaultProps.onSelected).toHaveBeenCalledTimes(1);
    });
  });
});
