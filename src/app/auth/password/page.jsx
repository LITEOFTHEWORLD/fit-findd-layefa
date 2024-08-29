import React from "react";
import styles from "./password.module.css";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div>
      <div className={styles.password_wrapper}>
        <div className={styles.password_back_button}>
          <IoChevronBack className={styles.password_icon} />
        </div>

        <h1 className={styles.password_title}>Forgot Password</h1>
        <p className={styles.password_subtitle}>
          Enter the email you used to sign up to receive your reset information.
        </p>
        <form className={styles.password_form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.password_input}
          />

          <button type="submit" className={styles.password_button}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
