"use client";
import styles from "./Button.module.css";

const Button = ({ title }) => {
  return (
    <button className={styles.button} onClick={() => alert("Hola")}>
      {title}
    </button>
  );
};

export default Button;
