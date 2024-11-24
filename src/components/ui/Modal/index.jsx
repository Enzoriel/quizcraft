"use client";

import Button from "../Button";
import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  titleButton,
  activeButton = false,
  activeSecButton = false,
  titleSecButton,
}) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_button} onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <h2 className={styles.modal_title}>{title}</h2>
        {children}
        <div className={styles.modal_button}>
          {activeButton && <Button title={titleButton} onClick={onClose} />}
          {activeSecButton && <Button title={titleSecButton} onClick={onClose} />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
