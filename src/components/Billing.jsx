import React from "react";
import { bill, google, apple } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Bills" className="w-full h-full relative z-10" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient opacity-30"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Esaily Control your <br className="sm:block hidden" /> Billing and ifn
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          dolores? Ducimus iusto optio dolor labore voluptate dicta doloribus
          sit perferendis, quas debitis, unde illum, nostrum nobis modi
          consequatur maxime nulla!
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
