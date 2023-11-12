import React from "react";
import { stats } from "../constant";
import styles from "../style";

const Stats = () => {
  return (
    <section className="flex-row flex justify-start items-center flex-wrap sm:mb-20 mb-6">
      {stats.map((s, index) => (
        <div key={index} className={`flex-1 ${styles.flexCenter} flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {s.value}
          </h4>
          <p className="font-poppins xs:text-[20] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {s.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
