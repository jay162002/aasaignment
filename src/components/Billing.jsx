import React from "react";
import { bill, google, apple } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section className={layout.sectionReverse} id="service">
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Bills" className="w-full h-full relative z-10" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient opacity-30"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easliy Get Awesome <br className="sm:block hidden" />
          Grades and best Prices.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          we offer the best prices in the market without compromising on the
          quality of your assignments. With our affordable rates, you can now
          access premium writing assistance that not only meets but exceeds your
          expectations. Trust us with your assignments, and let academic success
          become your new norm.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="Buton"
            className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"
          />
          <img
            src={google}
            alt="Buton"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
