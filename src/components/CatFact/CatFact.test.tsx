import { describe, expect, it, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { CatFact } from "./CatFact";
import * as UseCatFact from "@hooks/useCatFact";

describe("CatFact", () => {
  it("should render a cat fact", () => {
    vitest.spyOn(UseCatFact, "useCatFact").mockReturnValue({
      data: { fact: "This is cat fact from mock", length: 26 },
      isError: false,
      isLoading: false,
    });
    render(<CatFact />);

    expect(screen.getByText("Random cat fact:")).toBeInTheDocument();
    expect(screen.getByTestId("fact-text")).toBeInTheDocument();
    expect(screen.getByTestId("fact-text")).toHaveTextContent(
      "This is cat fact from mock"
    );
  });

  it("should render loading state", () => {
    vitest.spyOn(UseCatFact, "useCatFact").mockReturnValue({
      data: { fact: "This is cat fact from mock", length: 26 },
      isError: false,
      isLoading: true,
    });
    render(<CatFact />);

    expect(screen.getByText("Random cat fact:")).toBeInTheDocument();
    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });
});
