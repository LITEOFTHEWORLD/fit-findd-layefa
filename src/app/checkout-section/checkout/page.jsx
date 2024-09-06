import React from "react";
import styles from "./checkout.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        {/* FIRST SECTION */}
        <section className={styles.first_section}>
          <Image
            src="/assets/arrowback.svg"
            alt=""
            width={9.92}
            height={18.48}
            className={styles.first_section_img}
          />

          <p>Checkout</p>

          <p></p>
        </section>
        {/* ............... */}

        {/* SECOND SECTION */}
        <section className={styles.second_section}>
          <Image
            src="/assets/location.svg"
            alt=""
            width={10.06}
            height={12.67}
            className={styles.second_img}
          />
          <div className={styles.second_inner_inner}>
            <p>Delivery Location</p>
            <p>Home</p>
          </div>
        </section>

        {/* .................... */}

        {/* THIRD PART */}
        <section className={styles.third_section}>
          <p className={styles.writeup}>
            3,elizabeth street off nathan road
            <br /> ojuelegba Lagos
          </p>

          <Image
            src="/assets/forward.svg"
            alt=""
            width={5.49}
            height={10.22}
            className={styles.second_img}
          />
        </section>
        {/* .................... */}

        {/* FOURTH PART */}
        <section className={styles.fourth_section}>
          <div className={styles.fourth_first_inner}>
            <Image
              src="/assets/billing.svg"
              alt=""
              width={16}
              height={16}
              className={styles.second_img}
            />
            <p>Billing</p>
          </div>

          <div className={styles.fourth_second_inner}>
            <div className={styles.inner_inner}>
              <p>Sub Total </p>
              <p className={styles.write}>#19000</p>
            </div>

            <div className={styles.inner_inner}>
              <p>Discount </p>
              <p className={styles.different}>#2,000</p>
            </div>

            <div className={styles.inner_inner}>
              <p>Delivery fees </p>
              <p className={styles.write}>#1,000</p>
            </div>

            <hr />

            <div className={styles.inner_inner}>
              <p>Total Cost </p>
              <p className={styles.write}>#18,000</p>
            </div>
          </div>

          <div className={styles.fourth_third_inner}>
            <Image
              src="/assets/card2.svg"
              alt=""
              width={16}
              height={16}
              className={styles.third_img}
            />
            <p>Payment method</p>
          </div>

          <div className={styles.fourth_fourth_inner}>
            <div className={styles.inner_inner_two}>
              <Image
                src="/assets/card2.svg"
                alt=""
                width={16}
                height={16}
                className={styles.fourth_img}
              />
              <div className={styles.inner_inner_three}>
                <p>Credit Card</p>
                <p>**** **** **** 2345</p>
              </div>
            </div>

            <Image
              src="/assets/plaincircle.svg"
              alt=""
              width={15}
              height={15}
              className={styles.fifth_img}
            />
          </div>
        </section>
        {/* .................... */}

        {/* FIFTH SECTION */}
        <section className={styles.fifth_section}>
          <Link href="add-card" className={styles.fifth_link}>
            Proceed
          </Link>
        </section>

        {/* .................... */}
      </div>
    </div>
  );
};

export default page;
