import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <Link href="onboarding/onboard-01" className={styles.link}>
          {" "}
          <h2>FIT FIND</h2>
        </Link>
      </div>
    </div>
  );
};

export default page;
