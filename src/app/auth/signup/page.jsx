import React from "react";
import styles from "./signup.module.css";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div className={styles.signup_wrapper}>
      <div className={styles.signup_back_button}>
        <IoChevronBack className={styles.signup_icon} />
      </div>
      <div className={styles.signup_logo}>Ff</div>
      <h1 className={styles.signup_title}>Welcome Fashionista</h1>
      <p className={styles.signup_subtitle}>
        Fill in your details to get started
      </p>
      <form className={styles.signup_form}>
        <input
          type="text"
          placeholder="Full Name"
          className={styles.signup_input}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.signup_input}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.signup_input}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.signup_input}
        />
        <button type="submit" className={styles.signup_button}>
          Sign up
        </button>
      </form>
      <p className={styles.signup_footer}>
        Already have an account?{" "}
        <a href="/login" className={styles.signup_login_link}>
          Login
        </a>
      </p>
    </div>
  );
};

export default page;
