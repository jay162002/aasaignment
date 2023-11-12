import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
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
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
      <div className="fixed right-5 bottom-5 z-50">
        <img
          src={whatsapp}
          alt="WhastApp"
          className="object-contain  w-[50px] h-[50px]"
        />
      </div>
    </main>
  );
}

export default App;
