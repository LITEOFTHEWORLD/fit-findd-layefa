import React from "react";
import styles from "./homePage.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.bg}>
      {/* FIRST SECTION */}
      <section className={styles.first_section}>
        <p>Hello Fabari,</p>
        <Image
          className={styles.first_section_img}
          src="/assets/notifications.svg"
          alt=""
          width={15}
          height={19.19}
        />
      </section>
      {/* ............... */}

      {/* SECOND SECTION */}
      <section className={styles.second_section}>
        <div className={styles.search_bar}>
          <Image
            src="/assets/search.svg"
            alt="Search Icon"
            width={16.18}
            height={16.19}
          />
          <input type="text" placeholder="Crocheted Women's hat" />
        </div>

        <div>
          <button className={styles.second_btn}>Search</button>
        </div>
      </section>
      {/* ............... */}

      {/* THIRD SECTION */}
      <section className={styles.third_section}>
        <div className={styles.third_first_inner}>
          <div>
            <p>New Collection</p>
            <p>
              Get 25% discount on
              <br /> your first purchase
            </p>
          </div>
          <div>
            <Image
              className={styles.third_img}
              src="/assets/orangeshoe.svg"
              alt=""
              width={98}
              height={100}
            />
          </div>
        </div>

        <div className={styles.third_second_inner}>
          <button>Shop Now</button>
        </div>
      </section>
      {/* ............... */}

      {/* FOURTH SECTION */}
      <section className={styles.fourth_section}>
        <div className={styles.fourth_first_inner}>
          <p>Category</p>
          <Link href="#" className={styles.fourth_link}>
            See All
          </Link>
        </div>

        <div fourth_second_inner>
          <div>
            <Image src="/assets/gown.svg" alt="" width={28} height={28} />
            <p>Women</p>
          </div>

          <div>
            <Image src="/assets/trouser.svg" alt="" width={28} height={28} />
            <p>Men</p>
          </div>

          <div>
            <Image src="/assets/teddy.svg" alt="" width={28} height={28} />
            <p>Kids</p>
          </div>

          <div>
            <Image src="/assets/necklace.svg" alt="" width={28} height={28} />
            <p>Accessories</p>
          </div>

          <div>
            <Image src="/assets/shoe.svg" alt="" width={28} height={28} />
            <p>Shoes</p>
          </div>
        </div>
      </section>
      {/* ............... */}

      {/* FIFTH SECTION */}
      <section className={styles.fifth_section}>
        <p>Trending Now</p>

        <div className={styles.grid}>
          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/gown2.svg"
                alt=""
                width={151}
                height={98}
                className={styles.fifth_inner_img_one}
              />
              <Image
                src="/assets/favourite.svg"
                alt=""
                width={13.75}
                height={11.75}
                className={styles.fifth_inner_img_two}
              />
            </div>

            <div className={styles.fifth_second_inner}>
              <div className={styles.fifth_inner_one}>
                <p>White jumper</p>
                <p>Lisa stores</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>N800</p>
                <p>3.5</p>
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/gown2.svg"
                alt=""
                width={151}
                height={98}
                className={styles.fifth_inner_img_one}
              />
              <Image
                src="/assets/favourite.svg"
                alt=""
                width={13.75}
                height={11.75}
                className={styles.fifth_inner_img_two}
              />
            </div>

            <div className={styles.fifth_second_inner}>
              <div className={styles.fifth_inner_one}>
                <p>White jumper</p>
                <p>Lisa stores</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>N800</p>
                <p>3.5</p>
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/gown2.svg"
                alt=""
                width={151}
                height={98}
                className={styles.fifth_inner_img_one}
              />
              <Image
                src="/assets/favourite.svg"
                alt=""
                width={13.75}
                height={11.75}
                className={styles.fifth_inner_img_two}
              />
            </div>

            <div className={styles.fifth_second_inner}>
              <div className={styles.fifth_inner_one}>
                <p>White jumper</p>
                <p>Lisa stores</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>N800</p>
                <p>3.5</p>
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/gown2.svg"
                alt=""
                width={151}
                height={98}
                className={styles.fifth_inner_img_one}
              />
              <Image
                src="/assets/favourite.svg"
                alt=""
                width={13.75}
                height={11.75}
                className={styles.fifth_inner_img_two}
              />
            </div>

            <div className={styles.fifth_second_inner}>
              <div className={styles.fifth_inner_one}>
                <p>White jumper</p>
                <p>Lisa stores</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>N800</p>
                <p>3.5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ............... */}
    </div>
  );
};

export default page;
