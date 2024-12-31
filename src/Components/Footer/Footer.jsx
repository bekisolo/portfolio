import React from "react";
import styles from "./footer.module.css"; // Import corresponding CSS module
import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter"; // Replace with X logo
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.separator} />
      <div className={styles.socialMedia}>
        <a
          href="https://github.com/bekisolo" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://twitter.com/https://x.com/BereketSol40997?t=S49swquPQrUmOl0lupzZ7w&s=09" // Replace with your Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <XIcon />
        </a>
        <a
          href="https://linkedin.com/in/bereket-solomon-6bbb84128" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
