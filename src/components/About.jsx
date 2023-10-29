import React from "react";
import styles from "./About.module.css";
import photo from "../assets/images/photo.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="aboutme">
      <h1>About me</h1>
      <div className={styles.aboutBody}>
        <div className={styles.aboutText}>
          <p>I'm a guy from Villeurbanne, France.</p>
          <p>
            I've worked for years in the field of audiovisual production and
            cultural events organization, and then for ten years in the field of
            social administration.
          </p>
          <p>
            I've been studying development languages since february 2023, and
            I'm today proud to be a junior developer with some projects to show.
          </p>
          <p>Hope you enjoy.</p>
        </div>
        <div className={styles.picBlock}>
          {" "}
          <img
            src={photo}
            className={styles.profilePic}
            alt="Portrait of François"
          />
          <Link to="https://www.codewars.com/users/Yukitaori" target="_blank">
            <img
              src="https://www.codewars.com/users/Yukitaori/badges/large"
              alt="CodeWars Badge"
              className={styles.badge}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
