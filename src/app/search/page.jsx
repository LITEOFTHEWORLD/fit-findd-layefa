import React from "react";
import styles from "./search.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.bg}>
      <section className={styles.first_part}>
        <Link href="homepage">
          <Image
            src="/assets/arrowback.svg"
            alt=""
            width={9.92}
            height={18.48}
            className={styles.first_img}
          />
        </Link>

        <div className={styles.search_bar}>
          <Image
            src="/assets/search.svg"
            alt="Search Icon"
            width={16.18}
            height={16.19}
          />
          <input type="text" placeholder="Search" />
        </div>

        <div className={styles.search_part}>
          <Link href="search" className={styles.second_btn}>
            Search
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
