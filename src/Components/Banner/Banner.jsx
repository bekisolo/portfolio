import React from "react";
import styles from "./banner.module.css"; // Import corresponding CSS module
import ParticlesBg from "particles-bg";

function Banner() {
  return (
    <>
      <section className={styles.banner} id="banner">
        <ParticlesBg type="circle" bg={true} />
        <div className={styles.bannerContent}>
          <h2>Hi!</h2>
          <h1>I am Bereket Solomon</h1>
          <h3>Full-stack Web developer</h3>
        </div>
      </section>
    </>
  );
}

export default Banner;
