import React from "react";
import styles from "./deliveryAddress.module.css";
import Image from "next/image";
import Link from "next/link";

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

          <p>Delivery Address</p>

          <p></p>
        </section>
        {/* ................. */}

        {/* SECOND SECTION */}
        <section className={styles.second_section}>
          <div className={styles.second_first_inner}>
            <Image
              src="/assets/location.svg"
              alt=""
              width={10.06}
              height={12.67}
              // className={styles.first_section_img}
            />

            <div>
              <p>Home</p>
              <p>3,elizabeth street off nathan road ojuelegba Lagos</p>
            </div>
          </div>

          <div className={styles.second_second_inner}>
            <Image
              src="/assets/arrowback.svg"
              alt=""
              width={9.92}
              height={18.48}
              // className={styles.first_section_img}
            />
          </div>
        </section>
        {/* ................. */}
      </div>
    </div>
  );
};

export default page;
