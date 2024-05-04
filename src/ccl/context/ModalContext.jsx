import { createContext } from "react";
import { useState } from "react";

export const modalContext = createContext();

export function ModalContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <modalContext.Provider value={{ isModalOpen, setIsModalOpen, toggleModal }}>
      {children}
    </modalContext.Provider>
  );
}
