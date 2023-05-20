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
        <img className={styles.socialIcon} src={github} alt="github icon" />
        <img className={styles.socialIcon} src={linkedin} alt="linkedin icon" />
        <img className={styles.socialIcon} src={mail} alt="mail icon" />
      </div>
    </div>
  )
}

export default Social