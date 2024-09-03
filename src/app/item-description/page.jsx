import React from "react";
import styles from "./itemDescription.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        {/* FIRST SECTION */}
        <section className={styles.first_section}>
          <Link href="searchedWomen">
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
            <input type="text" placeholder="Elegance Ball Gown" />
          </div>

          <div className={styles.search_part}>
            <Image
              src="/assets/cart3.svg"
              alt=""
              width={19.45}
              height={20}
              className={styles.second_btn}
            />

            <Image
              src="/assets/share.svg"
              alt=""
              width={19.45}
              height={20}
              className={styles.second_btn}
            />

            <Image
              src="/assets/more.svg"
              alt=""
              width={19.45}
              height={20}
              className={styles.second_btn}
            />
          </div>
        </section>
        {/* ............. */}

        {/* SECOND SECTION */}
        <section className={styles.second_section}>
          <Image
            src="/assets/greengown.svg"
            alt=""
            width={353}
            height={384}
            className={styles.first_btn}
          />
          <Image
            src="/assets/whiteheart.svg"
            alt=""
            width={24.33}
            height={19.1}
            className={styles.second_btnn}
          />
        </section>
        {/* ............... */}

        {/* THIRD SECTION */}
        <section className={styles.third_section}>
          <Image src="/assets/browncircle.svg" alt="" width={14} height={14} />

          <Image src="/assets/circle.svg" alt="" width={14} height={14} />

          <Image src="/assets/circle.svg" alt="" width={14} height={14} />

          <Image src="/assets/circle.svg" alt="" width={14} height={14} />
        </section>
        {/* ............... */}

        {/* FOURTH SECTION */}
        <section className={styles.fourth_section}>
          <div className={styles.fourth_first_inner}>
            <p>N50,000</p>
            <p>
              <Image
                src="/assets/star.svg"
                alt=""
                width={10.26}
                height={9.78}
              />
              3.5
            </p>
          </div>

          <div className={styles.fourth_second_inner}>
            <p>
              White jumper made with cotton rose
              <br /> material
            </p>
            <p>Description</p>
            <p>
              White, vintage, floral dress, long sleeve with <br /> smooth
              manufacturing process{" "}
            </p>
          </div>

          <div className={styles.fourth_third_inner}>
            <p>Colour</p>
            <div className={styles.fourth_img}>
              <Image src="/assets/red.svg" alt="" width={51} height={36} />
              <Image src="/assets/blue.svg" alt="" width={51} height={36} />
              <Image src="/assets/green.svg" alt="" width={51} height={36} />
            </div>
          </div>
        </section>
        {/* ............... */}

        {/* FIFTH SECTION */}
        <section className={styles.fifth_section}></section>
        {/* ............... */}
      </div>
    </div>
  );
};

export default page;
