import React from "react";
import styles from "./verification.module.css";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className={styles.success_wrapper}>
        <div className={styles.success_icon_wrapper}>
          <FaCheck className={styles.success_icon} />
        </div>
        <h3 className={styles.success_title}>Verification Successful</h3>
        <p className={styles.success_text}>
          Your phone number has been successfully verified, continue to sign in.
        </p>
        <button className={styles.success_button}>Continue to Sign in</button>
      </div>
    </>
  );
};

export default page;
