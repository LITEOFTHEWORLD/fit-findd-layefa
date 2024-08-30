import React from "react";
import styles from "./womenSize.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.bg}>
      {/* FIRST SECTION */}
      <section className={styles.first_section}>
        <Link href="searchedWomen">
          <Image
            src="/assets/closesmall.svg"
            alt=""
            width={9.32}
            height={9.32}
            className={styles.first_section_img}
          />
        </Link>
      </section>
      {/* .............. */}

      {/* SECOND SECTION */}
      <section className={styles.second_section}>
        <div className={styles.second_inner_one}>
          <p>Size type</p>
        </div>

        <div className={styles.second_inner_two}>
          <p className={styles.second_write}>XS</p>
          <p className={styles.second_write}>S</p>
          <p className={styles.second_write}>M</p>
          <p className={styles.second_write}>L</p>
          <p className={styles.second_write}>XL</p>
          <p className={styles.second_write}>XXL</p>
          <p className={styles.second_write}>3XL</p>
          <p className={styles.second_write}>4XL</p>
        </div>
      </section>
      {/* ............. */}

      {/* THIRD SECTION */}
      <section className={styles.third_section}>
        <div className={styles.third_inner_one}>
          <p>Cloth type</p>
        </div>

        <div className={styles.third_inner_two}>
          <p>UK</p>
          <p>US</p>
        </div>
      </section>
      {/* ............. */}

      {/* FOURTH SECTION */}
      <section className={styles.fourth_section}>
        <div className={styles.fourth_inner_one}>
          <p>Category</p>
        </div>

        <div className={styles.fourth_inner_two}>
          <p className={styles.fourth_write}>Men</p>
          <p className={styles.fourth_write}>Women</p>
          <p className={styles.fourth_write}>Accessories</p>
          <p className={styles.fourth_write}>Shoes</p>
          <p className={styles.fourth_write}>Sleep wear</p>
          <p className={styles.fourth_write}>Kids</p>
        </div>
      </section>
      {/* ............. */}

      {/* FIFTH SECTION */}
      <section className={styles.fifth_section}>
        <div className={styles.fifth_inner_one}>
          <p>Price Range</p>
        </div>

        <Image
          src="/assets/range.svg"
          alt=""
          width={248.43}
          height={22.92}
          className={styles.fifth_img}
        />
      </section>
      {/* ............. */}
    </div>
  );
};

export default page;
