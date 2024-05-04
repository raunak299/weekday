import { ModalContextProvider, modalContext } from "../context/ModalContext";
import { useContext } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal(props) {
    const { modalCloseBtn } = props;
  return (
    <ModalContextProvider>
      <ModalTrigger>{props.modalButton()}</ModalTrigger>
      <ModalOverlay modalCloseBtn={modalCloseBtn}>{props.modalContent()}</ModalOverlay>
    </ModalContextProvider>
  );
}

function ModalTrigger({ children }) {
  const { toggleModal } = useContext(modalContext);
  return <div onClick={toggleModal}>{children}</div>;
}

function ModalOverlay({ children,modalCloseBtn}) {
  const { isModalOpen, toggleModal } = useContext(modalContext);
  return (
    isModalOpen &&
    createPortal(
      <div className="modalOverlay" onClick={toggleModal}>
        <div className="modalWrapper" onClick={(e) => e.stopPropagation()}>
          <div className="modalHeader" onClick={toggleModal}>
            <h3 className="close-modal-btn">{modalCloseBtn ? modalCloseBtn : 'close'}</h3>
          </div>
          <div className="modalContent">{children}</div>
        </div>
      </div>,
      document.body,
    )
  );
}
