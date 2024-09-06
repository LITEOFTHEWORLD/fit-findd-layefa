import React from "react";
import styles from "./itemDescription.module.css";
import Image from "next/image";
import Link from "next/link";
import Catalogue from "@/components/catalogue/Catalogue";
import Footer from "@/components/footer/Footer";

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
        <section className={styles.fifth_section}>
          <div className={styles.fifth_first_inner}>
            <div className={styles.fifth_inner_inner}>
              <p>Size type</p>
              <select name="sizes" id="sizes" className={styles.select_part}>
                <option value="uk">UK</option>
                <option value="us">US</option>
                <option value="london">London</option>
                <option value="nigeria">Nigeria</option>
              </select>
            </div>

            <div className={styles.fifth_inner_inner2}>
              <p>Size details</p>
            </div>
          </div>

          <div className={styles.fifth_second_inner}>
            <p>XS</p>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
        </section>
        {/* ............... */}

        {/* SIXTH SECTION */}
        <section className={styles.sixth_section}>
          <p>Delivery</p>

          <div className={styles.first_sixth_inner}>
            <Image
              src="/assets/van.svg"
              alt=""
              width={24}
              height={24}
              className={styles.img_part}
            />
            <div>
              <p>Free delivery when you spend over N300,000</p>
              <p>Delivery: July 10th</p>
            </div>
          </div>

          <div className={styles.second_sixth_inner}>
            <p className={styles.write}>Our Return Policy</p>

            <div className={styles.sixth_inner_inner}>
              <Image
                src="/assets/mask.svg"
                alt=""
                width={18.75}
                height={20.83}
                className={styles.img_part2}
              />
              <p>
                Get your money back if the quality you ordered <br /> is not
                what you received
              </p>
            </div>
          </div>
        </section>
        {/* ............... */}

        {/* SEVENTH SECTION */}
        <section className={styles.seventh_section}>
          <div className={styles.seventh_first_inner}>
            <p> Customer Reviews (10)</p>
            <p>View all</p>
          </div>

          <div className={styles.seventh_second_inner}>
            <p>Overall ratings:</p>
            <div className={styles.seventh_img}>
              <Image src="/assets/star.svg" alt="" width={16.78} height={16} />
              <Image src="/assets/star.svg" alt="" width={16.78} height={16} />
              <Image src="/assets/star.svg" alt="" width={16.78} height={16} />
              <Image src="/assets/star.svg" alt="" width={16.78} height={16} />
              <Image
                src="/assets/greystar.svg"
                alt=""
                width={16.78}
                height={16}
              />
            </div>
            <p>4.5</p>
          </div>

          <div className={styles.seventh_third_inner}>
            <div className={styles.seventh_fifth_inner}>
              <p className={styles.write2}>Debbie A</p>
              <div className={styles.seventh_fourth_inner}>
                <div className={styles.seventh_second_img}>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/greystar.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                </div>
                <p>4.5</p>
              </div>
            </div>

            <p className={styles.write3}>06/06/2024</p>
          </div>

          <div className={styles.seventh_last_inner}>
            <p>I really love my white jumper a lot, the quality is nice</p>
          </div>

          <div className={styles.seventh_third_inner}>
            <div className={styles.seventh_fifth_inner}>
              <p className={styles.write2}>Debbie A</p>
              <div className={styles.seventh_fourth_inner}>
                <div className={styles.seventh_second_img}>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/greystar.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                </div>
                <p>4.5</p>
              </div>
            </div>

            <p className={styles.write3}>06/06/2024</p>
          </div>

          <div className={styles.seventh_last_inner}>
            <p>I really love my white jumper a lot, the quality is nice</p>
          </div>

          <div className={styles.seventh_third_inner}>
            <div className={styles.seventh_fifth_inner}>
              <p className={styles.write2}>Debbie A</p>
              <div className={styles.seventh_fourth_inner}>
                <div className={styles.seventh_second_img}>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/greystar.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                </div>
                <p>4.5</p>
              </div>
            </div>

            <p className={styles.write3}>06/06/2024</p>
          </div>

          <div className={styles.seventh_last_inner2}>
            <p>I really love my white jumper a lot, the quality is nice</p>

            <Image
              src="/assets/littlegown.svg"
              alt=""
              width={29}
              height={23}
              className={styles.image_part}
            />
          </div>

          <div className={styles.seventh_third_inner}>
            <div className={styles.seventh_fifth_inner}>
              <p className={styles.write2}>Debbie A</p>
              <div className={styles.seventh_fourth_inner}>
                <div className={styles.seventh_second_img}>
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/star.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                  <Image
                    src="/assets/greystar.svg"
                    alt=""
                    width={16.78}
                    height={16}
                  />
                </div>
                <p>4.5</p>
              </div>
            </div>

            <p className={styles.write3}>06/06/2024</p>
          </div>

          <div className={styles.seventh_last_inner2}>
            <p>I really love my white jumper a lot, the quality is nice</p>

            <Image
              src="/assets/littlegown.svg"
              alt=""
              width={29}
              height={23}
              className={styles.image_part}
            />
          </div>
        </section>
        {/* ............... */}

        {/* EIGHT SECTION */}
        <section className={styles.eight_section}>
          <p>You may also like</p>
          <Catalogue />
        </section>
        {/* ............... */}

        <Footer />
      </div>
    </div>
  );
};

export default page;
