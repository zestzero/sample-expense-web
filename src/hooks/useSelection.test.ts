import { renderHook, act } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import { useSelection } from "./useSelection";

describe("useSelection", () => {
    it("should toggle selction correctly", () => {
        const { result } = renderHook(() => useSelection());

        act(() => {
            result.current.toggleSelect("1");
        });

        expect(result.current.selecting).toEqual(["1"]);

        act(() => {
            result.current.toggleSelect("1");
        });

        expect(result.current.selecting).toEqual([]);
    });

    it("should toggle all correctly", () => {
        const { result } = renderHook(() => useSelection());

        act(() => {
            result.current.toggleAll(["1", "2"]);
        });

        expect(result.current.selecting).toEqual(["1", "2"]);
    });

    it("should toggle all and resetSelection correctly", () => {
        const { result } = renderHook(() => useSelection());

        act(() => {
            result.current.toggleAll(["1", "2"]);
        });

        expect(result.current.selecting).toEqual(["1", "2"]);

        act(() => {
            result.current.resetSelection();
        });

        expect(result.current.selecting).toEqual([]);
    });
});
