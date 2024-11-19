"use client";
import styles from "./Button.module.css";

const Button = ({ title, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className || ""}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
