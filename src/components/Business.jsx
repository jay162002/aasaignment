import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constant";

const FeaturedCard = ({ id, icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } featured-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt={title}
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You get the Grades, <br className="sm:block hidden" /> We'll handle
          the Assingment
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mr-5`}>
          while we take care of your assignments. Our team of experienced
          experts is here to deliver top-quality academic assistance, ensuring
          your success is our priority. Say goodbye to the assignment worries
          and trust us to handle it with precision and excellence
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((f, index) => (
          <FeaturedCard key={index} {...f} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
