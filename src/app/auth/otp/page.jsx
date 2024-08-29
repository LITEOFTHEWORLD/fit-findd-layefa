import React from "react";
import styles from "./otp.module.css";
import { IoChevronBack } from "react-icons/io5";

const OTPPage = () => {
  return (
    <>
      <div>
        <div className={styles.otp_wrapper}>
          <div className={styles.otp_back_button}>
            <IoChevronBack className={styles.otp_icon} />
          </div>

          <h1 className={styles.otp_title}>OTP Verification</h1>
          <p className={styles.otp_subtitle}>
            Enter the 6 digit code sent to this email fabariagbora@gmail.com
          </p>
          <div className={styles.otp_boxes}>
            <div className={styles.otp_box}></div>
            <div className={styles.otp_box}></div>
            <div className={styles.otp_box}></div>
            <div className={styles.otp_box}></div>
            <div className={styles.otp_box}></div>
            <div className={styles.otp_box}></div>
          </div>
          <button className={styles.otp_button}>Verify OTP</button>
          <p className={styles.otp_footer}>
            Didnt get a code?{" "}
            <a href="/login" className={styles.signup_login_link}>
              Resend code
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default OTPPage;
