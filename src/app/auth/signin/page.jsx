import React from "react";
import styles from "./signin.module.css";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div className={styles.signin_wrapper}>
      <div className={styles.signin_back_button}>
        <IoChevronBack className={styles.signin_icon} />
      </div>
      <div className={styles.signin_logo}>Ff</div>
      <h1 className={styles.signin_title}>Sign in</h1>
      <p className={styles.signin_subtitle}>
        Fill in your details to get continue
      </p>
      <form className={styles.signin_form}>
        <input
          type="email"
          placeholder="Email"
          className={styles.signin_input}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.signin_input}
        />

        <button type="submit" className={styles.signin_button}>
          Sign up
        </button>
      </form>
      <p className={styles.signin_footer}>
        Already have an account?{" "}
        <a href="/login" className={styles.signin_login_link}>
          sign up
        </a>
      </p>
    </div>
  );
};

export default page;
