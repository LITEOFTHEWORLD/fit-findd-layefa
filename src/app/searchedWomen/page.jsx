import React from "react";
import styles from "./searchedWomen.module.css";
import Link from "next/link";
import Image from "next/image";
import Catalogue from "@/components/catalogue/Catalogue";

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
            <Image
              src="/assets/heart.svg"
              alt=""
              width={28.36}
              height={36}
              className={styles.second_btn}
            />
          </div>
        </section>
        {/* ............... */}

        {/* SECOND SECTION */}
        <section className={styles.second_part}>
          <div className={styles.second_inner_one}>
            <p className={styles.first_write}>Most Popular</p>
            <p className={styles.first_write}>On Sale</p>
          </div>

          <div className={styles.second_inner_three}>
            <Image
              src="/assets/instantmix.svg"
              alt=""
              width={24}
              height={24}
              className={styles.second_img}
            />
            <p>Filter</p>
          </div>
        </section>
        {/* ............... */}

        {/* THIRD SECTION */}
        <Catalogue />
        {/* ............... */}

        {/* FOURTH PART */}
        <section className={styles.fourth_part}>
          <div className={styles.sixth_first_inner}>
            <Image src="/assets/home2.svg" alt="" width={24} height={24} />
            <p>
              <Link href="#" className={styles.sixth_link}>
                Home
              </Link>
            </p>
          </div>
          <div className={styles.sixth_first_inner}>
            <Image src="/assets/manage.svg" alt="" width={24} height={24} />
            <p>
              {" "}
              <Link href="#" className={styles.sixth_link}>
                Shop
              </Link>
            </p>
          </div>
          <div className={styles.sixth_first_inner}>
            <Image
              src="/assets/shoppingcart.svg"
              alt=""
              width={24}
              height={24}
            />
            <p>
              <Link href="#" className={styles.sixth_link}>
                Cart
              </Link>
            </p>
          </div>
          <div className={styles.sixth_first_inner}>
            <Image src="/assets/person.svg" alt="" width={24} height={24} />
            <p>
              {" "}
              <Link href="#" className={styles.sixth_link}>
                Profile
              </Link>
            </p>
          </div>
        </section>
        {/* ............... */}
      </div>
    </div>
  );
};

export default page;
