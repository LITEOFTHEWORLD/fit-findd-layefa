import React from "react";
import styles from "./paymentConfirmation.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        {/* FIRST SECTION */}
        <section className={styles.first_section}>
          <Image src="/assets/successicon.svg" alt="" width={56} height={56} />

          <p>Payment Successful!</p>
        </section>
        {/* .............. */}

        {/* SECOND SECTION */}
        <section className={styles.second_section}>
          <div className={styles.second_inner}>
            <p>Reference Number</p>
            <p>000085752257</p>
          </div>

          <div className={styles.second_inner}>
            <p>Date</p>
            <p>Mar 22, 2023</p>
          </div>

          <div className={styles.second_inner}>
            <p>Time</p>
            <p>07:80 AM</p>
          </div>

          <div className={styles.second_inner2}>
            <p> Payment Method</p>
            <p>Credit Card</p>
          </div>

          <div className={styles.second_inner}>
            <p>Amount</p>
            <p>₦12,600</p>
          </div>

          <div className={styles.second_inner}>
            <p>Payment status</p>
            <p className={styles.different}>Successful</p>
          </div>
          <hr />

          <p className={styles.last}>Download as PDF</p>

          <Link href="/homepage" className={styles.second_link}>
            Continue Shopping
          </Link>
        </section>
        {/* .............. */}
      </div>
    </div>
  );
};

export default page;
