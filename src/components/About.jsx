import React from 'react'
import styles from "./About.module.css"
import photo from "../assets/images/photo.png"

function About() {
  return (
    <div>
      <h1>About</h1>
      <div className={styles.aboutBody}>
        <div className={styles.aboutText}>
          <p>I'm a guy from Villeurbanne, France.</p>
          <p>I've worked for years in the field of audiovisual production and cultural events organization, and then for ten years in the field of social administration.</p>
          <p>I've studied development languages from february to july 2023, and I'm today proud to be a junior developer with some projects to show.</p>
          <p>Hope you enjoy.</p>
        </div>
        <img src={photo} className={styles.profilePic} alt="portrait of François" />
      </div>
    </div>
  )
}

export default About