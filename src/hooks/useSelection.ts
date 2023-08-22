import { useCallback, useState } from "react";

export const useSelection = () => {
    const [selecting, setSelecting] = useState<string[]>([]);

    const toggleAll = useCallback((ids: string[]) => {
        if (ids.length === selecting.length) {
            setSelecting([]);
        } else {
            setSelecting(ids);
        }
    }, [selecting]);

    const toggleSelect = useCallback((id: string) => {
        !selecting.includes(id)
            ? setSelecting((prevState) => [...prevState, id])
            : setSelecting((prevState) =>
                prevState.filter((selectingId) => selectingId !== id)
            );
    }, [selecting]);

    const resetSelection = useCallback(() => setSelecting([]), []);

    return {
        selecting,
        toggleSelect,
        toggleAll,
        resetSelection,
    };
};
