import React from "react";
import styles from "./searchedWomen.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.bg}>
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
      <section className={styles.third_part}>
        <div className={styles.grid}>
          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/blackpolo.svg"
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
                <p>N800</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={10.26}
                    height={9.78}
                  />
                  3.5
                </p>
                <Image
                  src="/assets/cart2.svg"
                  alt=""
                  width={32.53}
                  height={27}
                />
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/bluebag.svg"
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
                <p>Shoulder bag</p>
                <p>Lisa stores</p>
                <p>N800</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={10.26}
                    height={9.78}
                  />
                  3.5
                </p>
                <Image
                  src="/assets/cart2.svg"
                  alt=""
                  width={32.53}
                  height={27}
                />
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/jean.svg"
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
                <p>Trousers</p>
                <p>Lisa stores</p>
                <p>N800</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={10.26}
                    height={9.78}
                  />
                  3.5
                </p>
                <Image
                  src="/assets/cart2.svg"
                  alt=""
                  width={32.53}
                  height={27}
                />
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/chairjean.svg"
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
                <p>Chair Trousers</p>
                <p>Lisa stores</p>
                <p>N800</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={10.26}
                    height={9.78}
                  />
                  3.5
                </p>
                <Image
                  src="/assets/cart2.svg"
                  alt=""
                  width={32.53}
                  height={27}
                />
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/nike.svg"
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
                <p>Nike Shoes</p>
                <p>Lisa stores</p>
                <p>N800</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={10.26}
                    height={9.78}
                  />
                  3.5
                </p>
                <Image
                  src="/assets/cart2.svg"
                  alt=""
                  width={32.53}
                  height={27}
                />
              </div>
            </div>
          </div>

          <div className={styles.grid_inner}>
            <div className={styles.fifth_img}>
              <Image
                src="/assets/bangles.svg"
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
                <p>Bangles</p>
                <p>Lisa stores</p>
                <p>N800</p>
              </div>

              <div className={styles.fifth_inner_two}>
                <p>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={10.26}
                    height={9.78}
                  />
                  3.5
                </p>
                <Image
                  src="/assets/cart2.svg"
                  alt=""
                  width={32.53}
                  height={27}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <Image src="/assets/shoppingcart.svg" alt="" width={24} height={24} />
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
  );
};

export default page;
