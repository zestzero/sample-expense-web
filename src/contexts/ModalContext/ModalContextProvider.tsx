import { FC, PropsWithChildren, useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});

  const closeModal = (modalName: string) =>
    setIsOpen((prevState) => {
      return {
        ...prevState,
        [modalName]: false,
      };
    });

  const openModal = (modalName: string) =>
    setIsOpen((prevState) => {
      return {
        ...prevState,
        [modalName]: true,
      };
    });

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
