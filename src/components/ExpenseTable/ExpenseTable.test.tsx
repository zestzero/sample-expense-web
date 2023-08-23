import { describe, expect, it, vitest } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ExpenseTable } from "./ExpenseTable";

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
});
