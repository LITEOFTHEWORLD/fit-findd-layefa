import React from "react";
import styles from "./reset.module.css";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className={styles.reset_wrapper}>
        <div className={styles.reset_icon_wrapper}>
          <FaCheck className={styles.reset_icon} />
        </div>
        <h3 className={styles.reset_title}>Reset Successful</h3>
        <p className={styles.reset_text}>
          Your password reset was successful, continue to login.
        </p>
        <button className={styles.reset_button}>Go to Home</button>
      </div>
    </>
  );
};

export default page;
