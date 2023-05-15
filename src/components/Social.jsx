import React from 'react';
import styles from "./Social.module.css";
import github from "../assets/icons/github_nr_64px.png";
import linkedin from "../assets/icons/linkedin_nr_64px.png";
import mail from "../assets/icons/mail_nr_64px.png";


function Social() {
  return (
    <div>
      <h1>Social</h1>
      <div className={styles.socialIcons}>
        <img src={github} alt="github icon" />
        <img src={linkedin} alt="linkedin icon" />
        <img src={mail} alt="mail icon" />
      </div>
    </div>
  )
}

export default Social