import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import { whatsapp } from "./assets";

function App() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      {/* Navbar section  */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* hero Section  */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* main section  */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
      <a
        href="https://wa.me/+917573988915"
        target="_blank"
        className="fixed right-5 bottom-5 z-50"
      >
        <img
          src={whatsapp}
          alt="WhastApp"
          className="object-contain  w-[50px] h-[50px]"
        />
      </a>
    </main>
  );
}

export default App;
