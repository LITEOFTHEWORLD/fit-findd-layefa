import React from "react";
import styles from "./womenSize.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
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

          <input
            className={styles.input}
            type="range"
            id="priceRange"
            name="priceRange"
            min="0"
            max="500000"
            value="250000"
          />

          <div className={styles.last_inner}>
            <p>0</p>
            <p>500k</p>
          </div>
        </section>
        {/* ............. */}

        {/* SIXTH PART */}
        <section className={styles.sixth_section}>
          <Footer />
        </section>
        {/* ............. */}
      </div>
    </div>
  );
};

export default page;
