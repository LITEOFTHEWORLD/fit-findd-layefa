import React from "react";
import styles from "./cardDetails.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        {/* FIRST SECTION */}
        <section className={styles.first_section}>
          <Link href="add-card">
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
        {/* ............... */}

        {/* SECOND SECTION */}
        <section className={styles.second_section}>
          <div className={styles.second_inner_one}>
            <Image
              src="/assets/blackcard.svg"
              alt=""
              width={16}
              height={16}
              className={styles.second_img}
            />
            <p>Card Details</p>
          </div>

          <div className={styles.second_inner_two}>
            <p>Name on Card</p>

            <input
              type="card details"
              id="card details"
              placeholder="Cardholder Name"
              className={styles.second_input}
            />

            <p>Card Number</p>

            <input
              type="card details"
              id="card details"
              placeholder="0000 0000 0000 2456"
              className={styles.second_input}
            />

            <div className={styles.second_inner_three}>
              <div>
                <p>Expiry Date</p>

                <input
                  type="card details"
                  id="card details"
                  placeholder="mm/yy"
                  className={styles.second_input_two}
                />
              </div>

              <div>
                <p>CVV</p>

                <div className={styles.inner_inner}>
                  <input
                    type="card details"
                    id="card details"
                    placeholder="0000"
                    className={styles.second_input_three}
                  />

                  <Image src="/assets/info.svg" alt="" width={16} height={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ............... */}

        {/* THIRD SECTION */}
        <section className={styles.third_section}>
          <div className={styles.third_first_inner}>
            <p>Save this card details</p>
            <Image
              src="/assets/toggle.svg"
              alt=""
              width={40.37}
              height={20.19}
              className={styles.third_img}
            />
          </div>

          <div className={styles.third_second_inner}>
            <Link href="delivery-address" className={styles.third_link}>
              Proceed to pay
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
