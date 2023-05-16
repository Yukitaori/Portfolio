import React from 'react'
import styles from './Experiences.module.css';

function Experience() {
  return (
    <div>
      <h1>Experiences</h1>
      <div className={styles.experience}>
        <div className={styles.experienceHeader}>
          <div className={styles.experienceTitle}>
            <h2>Wild Code School</h2>
            <h3>Feb 2023 - Jul 2023</h3>
          </div>
          <div className={styles.experienceStacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>REACT</p>
            <p>MySQL</p>
          </div>
        </div>
        <p>Wild Code School has taught me the basics of HTML and CSS, but also JavaScript and React.</p>
        <p>Group projets were fun to work on (meanwhile pretty challenging), and I had a great time during the hackathon.</p>
      </div>
    </div>
    
  )
}

export default Experience