import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.sixth_section}>
        <div className={styles.sixth_first_inner}>
          <Image src="/assets/home2.svg" alt="" width={24} height={24} />
          <Link href="#" className={styles.sixth_link}>
            Home
          </Link>
        </div>
        <div className={styles.sixth_first_inner}>
          <Image src="/assets/manage.svg" alt="" width={24} height={24} />{" "}
          <Link href="#" className={styles.sixth_link}>
            Shop
          </Link>
        </div>
        <div className={styles.sixth_first_inner}>
          <Image src="/assets/shoppingcart.svg" alt="" width={24} height={24} />
          <Link href="#" className={styles.sixth_link}>
            Cart
          </Link>
        </div>
        <div className={styles.sixth_first_inner}>
          <Image src="/assets/person.svg" alt="" width={24} height={24} />

          <Link href="#" className={styles.sixth_link}>
            Profile
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
