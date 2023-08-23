import { describe, expect, it, vitest } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as UseCatFact from "@hooks/useCatFact";
import * as UseModalContext from "@hooks/useModalContext";
import { ExpenseModal } from "./ExpenseModal";

describe("ExpenseModal", () => {
  it("should render ExpenseModal correctly", async () => {
    const onCreate = vitest.fn();
    const closeModal = vitest.fn();

    vitest.spyOn(UseCatFact, "useCatFact").mockReturnValue({
      data: { fact: "This is cat fact from mock", length: 26 },
      isError: false,
      isLoading: false,
    });
    vitest.spyOn(UseModalContext, "useModalContext").mockReturnValue({
      closeModal,
      openModal: vitest.fn(),
      isOpen: true,
    });

    render(<ExpenseModal onCreate={onCreate} />);

    expect(screen.getByTestId("item-name")).toBeInTheDocument();
    expect(screen.getByTestId("item-amount")).toBeInTheDocument();
    expect(screen.getByTestId("fact-text")).toBeInTheDocument();

    fireEvent.input(screen.getByTestId("item-name"), {
      target: { value: "test" },
    });
    fireEvent.input(screen.getByTestId("item-amount"), {
      target: { value: 100 },
    });
    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(onCreate).toHaveBeenCalledWith({
        id: expect.any(String),
        name: "test",
        amount: 100,
        category: "Food",
        date: expect.any(Date),
      });
      expect(closeModal).toHaveBeenCalledTimes(1);
    });
  });
});
