"use client";
import styles from "./Button.module.css";

const Button = ({ title, onClick, type, className }) => {
  return (
    <button className={`${styles.button} ${className || ""}`} onClick={onClick} type={type}>
      {title}
    </button>
  );
};

export default Button;
