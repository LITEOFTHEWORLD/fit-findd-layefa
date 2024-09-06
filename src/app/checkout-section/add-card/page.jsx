import React from "react";
import styles from "./addCard.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        {/* FIRST SECTION */}
        <section className={styles.first_section}>
          <Link href="checkout">
            <Image
              src="/assets/arrowback.svg"
              alt=""
              width={9.92}
              height={18.48}
              className={styles.first_section_img}
            />
          </Link>

          <p>Add Card</p>

          <p></p>
        </section>
        {/* ............. */}

        {/* SECOND SECTION */}
        <section className={styles.second_section}>
          <div className={styles.first_inner}>
            <Image
              src="/assets/blackcard.svg"
              alt=""
              width={16}
              height={16}
              className={styles.second_section_img}
            />
            <p>Add Credit Card</p>
          </div>

          <Link href="card-details">
            {" "}
            <Image
              src="/assets/forward.svg"
              alt=""
              width={5.49}
              height={10.22}
              className={styles.second_section_img2}
            />
          </Link>
        </section>
        {/* ............. */}
      </div>
    </div>
  );
};

export default page;
