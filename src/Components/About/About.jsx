import React from "react";
import styles from "./about.module.css"; // Import corresponding CSS module
import profile_photo from "../../assets/images/profile_photo.jpg";

function About() {
  return (
    <section className={styles.about} id="about">
      {/* <h3>Who am I?</h3> */}
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={profile_photo} alt="About me" className={styles.image} />
        </div>
        <div className={styles.right}>
          <p>
            I hold a degree in Business Administration and Information Systems,
            and I’ve recently completed a Full-stack web development program at
            Evangadi. I'm well-versed in front-end development and I excel at
            using Node.js and Express for backend development, along with
            databases. My expertise extends to creating responsive and dynamic
            applications using React. I’m passionate about crafting full-fledged
            web solutions that are both aesthetically pleasing and highly
            functional.
          </p>
          <p>
            Beyond my technical skills in web development, I bring a strategic
            approach gained from my experience in digital marketing. This means
            I create websites that are not only aesthetically pleasing but also
            designed to effectively engage users and help businesses succeed.
            I'm skilled at creating engaging online content and optimizing
            websites to rank well in search results, which drives real results
            for businesses.
          </p>
          <p>
            I am a hard-working and driven person who enjoys working with
            others. I am a good communicator and I get along well with people. I
            am eager to learn and help the team succeed by sharing my ideas and
            learning from others, working towards our shared goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
