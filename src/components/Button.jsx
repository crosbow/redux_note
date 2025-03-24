import styles from "./counter.module.css";

const Button = ({ children, type, ...res }) => {
  let style = type === "danger" ? styles.dander : styles.ghost;

  return (
    <button className={`${style} ${styles.btn}`} {...res}>
      {children}{" "}
    </button>
  );
};

export { Button };
