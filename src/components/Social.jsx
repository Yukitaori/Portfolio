import React from 'react';
import styles from "./Social.module.css";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.png";


function Social() {
  return (
    <div>
      <h1>Social</h1>
      <div className={styles.socialIcons}>
        <a href="https://github.com/Yukitaori">
          <img className={styles.socialIcon} src={github} alt="github icon" />
        </a>
        <a href="https://linkedin.com/in/francoischavallard">
          <img className={styles.socialIcon} src={linkedin} alt="linkedin icon" />
        </a>
        <a href="mailto:francois.chavallard@gmail.com">
          <img className={styles.socialIcon} src={mail} alt="mail icon" />
        </a>
      </div>
    </div>
  )
}

export default Social