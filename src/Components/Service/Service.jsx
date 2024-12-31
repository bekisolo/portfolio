import React from "react";
import styles from "./service.module.css"; // Import corresponding CSS module
import full_stack from "../../assets/images/fullstack1.png";

function Service() {
  const services = [
    {
      id: 1,
      title: "Building responsive websites with React framework",
      icon: "⚡",
    },
    { id: 2, title: "Building functional backend", icon: "⚡" },
    { id: 3, title: "DB Management", icon: "⚡" },
    { id: 4, title: "API Integration", icon: "⚡" },
    { id: 5, title: "Website Optimization", icon: "⚡" },
  ];

  return (
    <section className={styles.service} id="service">
      <h2 className={styles.title}>What I Do</h2>
      <div className={styles.container}>
        <div className={styles.left}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <h3>
                {service.icon} {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <img
            src={full_stack}
            alt="Web Development"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
