import React, { FC, ReactNode, useEffect } from "react";

import "./modal.scss";

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  closeHandler: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  title,
  isOpen,
  closeHandler
}) => {
  useEffect(() => {
    isOpen
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal__overlay" onClick={closeHandler} />
      <div className={isOpen ? "modal__body open" : "modal__body"}>
        <div className="modal__header d-flex align-items-center justify-content-between">
          <h2>{title}</h2>
        </div>
        <div className="modal__content d-flex flex-column justify-content-center">
          {children}
        </div>
      </div>
    </div>
  );
};
