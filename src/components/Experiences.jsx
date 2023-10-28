import React from "react";
import styles from "./Experiences.module.css";
import htmlicon from "../assets/icons/html-5.png";
import cssicon from "../assets/icons/css-3.png";
import jsicon from "../assets/icons/js.png";
import reacticon from "../assets/icons/react.png";
import mysqlicon from "../assets/icons/mysql.png";
import nodeicon from "../assets/icons/nodejs.png";

function Experience() {
  return (
    <section id="experience">
      <h1>Experiences</h1>
      <div className={styles.experience}>
        <div className={styles.experienceHeader}>
          <div className={styles.experienceTitle}>
            <h2>Wild Code School</h2>
            <h3>Feb 2023 - Jul 2023</h3>
          </div>
          <div
            aria-label="Experience stacks"
            className={styles.experienceStacks}
          >
            <img className={styles.iconImg} src={htmlicon} alt="HTML icon" />
            <img className={styles.iconImg} src={cssicon} alt="CSS icon" />
            <img
              className={styles.iconImg}
              src={jsicon}
              alt="JavaScript icon"
            />
            <img className={styles.iconImg} src={reacticon} alt="React icon" />
            <img className={styles.iconImg} src={mysqlicon} alt="MySQL icon" />
            <img className={styles.iconImg} src={nodeicon} alt="Node.js icon" />
          </div>
        </div>
        <div className={styles.experienceBody}>
          <div>
            {" "}
            <p>
              Wild Code School has taught me the basics of HTML and CSS, but
              also JavaScript, React and SQL.
            </p>
            <p>
              Group projets were fun to work on (meanwhile pretty challenging),
              and I had a great time during the hackathons.
            </p>
          </div>

          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/l1yA_xsbqLs?si=dAKXlaAg4IZwnDxe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
