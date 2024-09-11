import React from "react";
import styles from "./searchWomen.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        {/* FIRST SECTION */}
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
            <input type="text" placeholder="Women" />
          </div>

          <div className={styles.search_part}>
            <Link href="searchedWomen" className={styles.second_btn}>
              Search
            </Link>
          </div>
        </section>
        {/* ............... */}

        {/* SECOND SECTION */}
        <section className={styles.second_part}>
          <p>Recently Searched</p>
          <p>Clear All</p>
        </section>
        {/* ............... */}

        {/* THIRD SECTION */}

        {/* ............... */}
      </div>
    </div>
  );
};

export default page;
