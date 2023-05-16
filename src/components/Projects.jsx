import React from 'react'
import styles from './Projects.module.css'
import githubIcon from "../assets/icons/github_nr_64px.png"

function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      <div className={styles.project}>
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            <h2>Pickin Impact</h2>
            <h3>Apr 2023 - May 2023</h3>
          </div>
          <div className={styles.projectStacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </div>
        <div className={styles.projectText}>
          <p>Our second group projects is a video game that takes place in the Genshin Impact universe.</p>
          <p>We had two constraints for this project : working with React and working with APIs.</p>
          <p>We were three persons on this project and we worked for three weeks, building 3 mini-games using different algorithms. That was a lot of fun.</p>
          </div>
        <img src="" alt="Pickin Impact Screenshot" />
        <div className={styles.projectsLinks}>
          <a className={styles.projectLink} href="">
            <p>See more</p>
          </a>
          <a className={styles.githubLink} href="">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            <h2>Wildked'in</h2>
            <h3>Mar 2023 - Apr 2023</h3>
          </div>
          <div className={styles.projectStacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div className={styles.projectText}>
          <p>My first group project during the formation.</p>
          <p>Four of us worked on this project for two weeks, that takes the form of a portfolio presenting the persons from the class, with a filters system.</p>
          <p>Versioning with Git and Github were a bit of an intellectual challenge at first, but we survived it.</p>
          </div>
        <img src="" alt="Wildked'in Screenshot" />
        <div className={styles.projectsLinks}>
          <a className={styles.projectLink} href="">
            <p>See more</p>
          </a>
          <a className={styles.githubLink} href="">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            <h2>Mastermind</h2>
            <h3>Jan 2023 - Apr 2023</h3>
          </div>
          <div className={styles.projectStacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div className={styles.projectText}>
          <p>A board games classic.</p>
          <p>I started this project (my very first personal one) before my formation to test JavaScript and DOM manipulation.</p>
          <p>I had quite a hard time with the algorithm in charge of verifying the user's guess but I eventually made it.</p>
          </div>
        <img src="" alt="Mastermind Screenshot" />
        <div className={styles.projectsLinks}>
          <a className={styles.projectLink} href="">
            <p>See more</p>
          </a>
          <a className={styles.githubLink} href="">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Projects