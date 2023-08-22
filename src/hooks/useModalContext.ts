import { useContext } from "react";
import { ModalContext } from "@contexts/ModalContext/ModalContext";

export const useModalContext = (modalName: string) => {
    const { isOpen, openModal, closeModal } = useContext(ModalContext);

    return {
        isOpen: isOpen[modalName] ?? false,
        openModal: () => openModal(modalName),
        closeModal: () => closeModal(modalName),
    };
};
