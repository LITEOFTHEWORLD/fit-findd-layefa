import React from "react";
import styles from "./email.module.css";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <>
      <div className={styles.verify_wrapper}>
        <div className={styles.verify_back_button}>
          <IoChevronBack className={styles.verify_icon} />
        </div>
        <h1 className={styles.verify_title}>Verify Your Email</h1>
        <p className={styles.verify_text}>
          A verification code has been sent to the email{" "}
          <strong>fabariagbora@gmail.com</strong>, please enter this code to
          verify.
        </p>
        <form className={styles.verify_form}>
          <input
            type="text"
            placeholder="Email Verification Code"
            className={styles.verify_input}
          />
          <button type="submit" className={styles.verify_button}>
            Verify
          </button>
        </form>
        <p className={styles.verify_footer}>
          Didn't get a code?{" "}
          <a href="#" className={styles.resend_link}>
            Resend code
          </a>
        </p>
      </div>
    </>
  );
};

export default page;
