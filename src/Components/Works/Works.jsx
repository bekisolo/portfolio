import React, { useEffect } from "react";
import styles from "./works.module.css"; // Import corresponding CSS module
import netflix from "../../assets/images/netflix.png";
import Amazon from "../../assets/images/Amazon.jpg";
import evangadi from "../../assets/images/evan.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiJavascript, SiMysql, SiFirebase } from "react-icons/si"; // Import Firebase icon

function Works() {
  useEffect(() => {
    // Add click event listener for "Works" link
    const worksLink = document.querySelector('a[href="#Works"]');
    const worksSection = document.getElementById("Works");

    worksLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      worksSection.classList.add(styles.animateOnClick);

      // Smooth scroll to the section
      worksSection.scrollIntoView({ behavior: "smooth" });

      // Remove the animation class after it's done
      setTimeout(() => {
        worksSection.classList.remove(styles.animateOnClick);
      }, 1000); // Match this duration with the CSS animation duration
    });

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          worksSection.classList.add(styles.animateOnScroll);
          // Remove the class after animation is done
          setTimeout(() => {
            worksSection.classList.remove(styles.animateOnScroll);
          }, 1000); // Match this duration with the CSS animation duration
        }
      });
    });

    observer.observe(worksSection);
  }, []);

  return (
    <section className={styles.works} id="Works">
      <h2 className={styles.title}>Previous Works</h2>
      <div className={styles.container}>
        <div className={`${styles.project} ${styles.firstProject}`}>
          <a
            href="https://bekisolo.github.io/Netflix-Clone-2024/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Netflix Clone</h3>
              {/* <p>Short description of project 1.</p> */}
            </div>
            <img src={netflix} alt="Project 1" className={styles.image} />
            <div className={`${styles.frameworks} ${styles.addTopPadding}`}>
              <FaHtml5
                className={`${styles.icon} ${styles.html}`}
                title="HTML"
              />
              <FaCss3Alt
                className={`${styles.icon} ${styles.css}`}
                title="CSS"
              />
              <FaReact
                className={`${styles.icon} ${styles.react}`}
                title="React"
              />
              <FaNodeJs
                className={`${styles.icon} ${styles.node}`}
                title="Node.js"
              />
              <SiExpress
                className={`${styles.icon} ${styles.express}`}
                title="Express"
              />
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://beki-amazon-clone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Amazon Clone</h3>
              {/* <p>Short description of project 2.</p> */}
            </div>
            <img src={Amazon} alt="Project 2" className={styles.image} />
            <div className={`${styles.frameworks} ${styles.addTopPadding}`}>
              <FaHtml5
                className={`${styles.icon} ${styles.html}`}
                title="HTML"
              />
              <FaCss3Alt
                className={`${styles.icon} ${styles.css}`}
                title="CSS"
              />
              <SiJavascript
                className={`${styles.icon} ${styles.javascript}`}
                title="JavaScript"
              />
              <FaNodeJs
                className={`${styles.icon} ${styles.node}`}
                title="Node.js"
              />
              <SiExpress
                className={`${styles.icon} ${styles.express}`}
                title="Express"
              />
              <FaReact
                className={`${styles.icon} ${styles.react}`}
                title="React"
              />
              <SiFirebase
                className={`${styles.icon} ${styles.firebase}`}
                title="Firebase"
              />
            </div>
          </a>
        </div>
        <div className={`${styles.project} ${styles.lastProject}`}>
          <a
            href="https://beki-evangadi-forum.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Evangadi Forum</h3>
              {/* <p>Short description of project 3.</p> */}
            </div>
            <img src={evangadi} alt="Project 3" className={styles.image} />
            <div className={styles.frameworks}>
              <FaHtml5
                className={`${styles.icon} ${styles.html}`}
                title="HTML"
              />
              <FaCss3Alt
                className={`${styles.icon} ${styles.css}`}
                title="CSS"
              />
              <FaNodeJs
                className={`${styles.icon} ${styles.node}`}
                title="Node.js"
              />
              <SiExpress
                className={`${styles.icon} ${styles.express}`}
                title="Express"
              />
              <FaBootstrap
                className={`${styles.icon} ${styles.bootstrap}`}
                title="Bootstrap"
              />
              <SiMysql
                className={`${styles.icon} ${styles.mysql}`}
                title="MySQL"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Works;
