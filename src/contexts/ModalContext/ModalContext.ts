import { createContext } from "react";

export interface ModalContextProps {
    isOpen: Record<string, boolean>;
    openModal: (modalName: string) => void;
    closeModal: (modalName: string) => void;
}

export const ModalContext = createContext<ModalContextProps>({
    isOpen: {},
    openModal: () => { },
    closeModal: () => { },
});
