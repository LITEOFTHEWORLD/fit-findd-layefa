import React from "react";
import styles from "./onboard1.module.css";
import Image from "next/image";
import { TbOvalVerticalFilled } from "react-icons/tb";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        {/* FIRST SECTION */}
        <section className={styles.first_section}>
          <Image src="/assets/group1.svg" alt="" width={315} height={427} />
        </section>
        {/* .................... */}
      </div>
    </div>
  );
};

export default page;
