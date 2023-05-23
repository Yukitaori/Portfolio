import React, { useState } from 'react'
import styles from './Projects.module.css'
import githubIcon from "../assets/icons/github.png"
import htmlicon from "../assets/icons/html-5.png"
import cssicon from "../assets/icons/css-3.png"
import jsicon from "../assets/icons/js.png"
import reacticon from "../assets/icons/react.png"
import wildkedin1 from "../assets/images/wildkedin-1.png"
import wildkedin2 from "../assets/images/wildkedin-2.png"
import wildkedin3 from "../assets/images/wildkedin-3.png"
import tradinimpact1 from "../assets/images/tradinimpact-1.png"
import tradinimpact2 from "../assets/images/tradinimpact-2.png"
import tradinimpact3 from "../assets/images/tradinimpact-3.png"
import mastermind from "../assets/images/mastermind-1.png"

function Projects() {
  const [activePic1, setActivePic1] = useState(mastermind);
  const [activePic2, setActivePic2] = useState(wildkedin1);
  const [activePic3, setActivePic3] = useState(tradinimpact1);

  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.project}>
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            <h2>Tradin Impact</h2>
            <h3>Apr 2023 - May 2023</h3>
          </div>
          <div className={styles.projectStacks}>
            <img className={styles.stackImg} src={htmlicon} alt="HTML icon" />
            <img className={styles.stackImg} src={cssicon} alt="CSS icon" />
            <img className={styles.stackImg} src={jsicon} alt="JavaScript icon" />
            <img className={styles.stackImg} src={reacticon} alt="React icon" />
          </div>
        </div>
        <div className={styles.projectBody}>
          <div className={styles.projectText}>
            <p>Our second group projects is a video game that takes place in the Genshin Impact universe.</p>
            <p>We had two constraints for this project : working with React and working with APIs.</p>
            <p>We were three persons on this project and we worked for three weeks, building 3 mini-games using different algorithms. That was a lot of fun.</p>
          </div>
          <div className={styles.projectGallery}>
            <img className={styles.activePic3} src={activePic3} alt="Pickin Impact Screenshot" />
            <img className={styles.projectPic1} type='button' onClick={() => setActivePic3(tradinimpact1)} src={tradinimpact1} alt="Pickin Impact Screenshot" />
            <img className={styles.projectPic2} type='button' onClick={() => setActivePic3(tradinimpact2)} src={tradinimpact2} alt="Pickin Impact Screenshot" />
            <img className={styles.projectPic3} type='button' onClick={() => setActivePic3(tradinimpact3)} src={tradinimpact3} alt="Pickin Impact Screenshot" />
          </div>
        </div>
        <div className={styles.projectsLinks}>
          <a className={styles.projectLink} target="blank" href="">
            <button className={styles.seeMore} type='button'>See more</button>
          </a>
          <a className={styles.githubLink} target="blank" href="https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P2-TradinImpact">
            <img className={styles.iconImg} src={githubIcon} alt="Github Icon" />
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
            <img className={styles.stackImg} src={htmlicon} alt="HTML icon" />
            <img className={styles.stackImg} src={cssicon} alt="CSS icon" />
            <img className={styles.stackImg} src={jsicon} alt="JavaScript icon" />
          </div>
        </div>
        <div className={styles.projectBody}>
          <div className={styles.projectText}>
            <p>My first group project during the formation.</p>
            <p>Four of us worked on this project for two weeks, that takes the form of a portfolio presenting the persons from the class, with a filters system.</p>
            <p>Versioning with Git and Github were a bit of an intellectual challenge at first, but we survived it.</p>
          </div>
          <div className={styles.projectGallery}>
            <img className={styles.activePic2} src={activePic2} alt="Wildked'in Screenshot" />
            <img className={styles.projectPic1} type='button' onClick={() => setActivePic2(wildkedin1)} src={wildkedin1} alt="Wildked'in Screenshot"  />
            <img className={styles.projectPic2} type='button' onClick={() => setActivePic2(wildkedin2)} src={wildkedin2} alt="Wildked'in Screenshot"  />
            <img className={styles.projectPic3} type='button' onClick={() => setActivePic2(wildkedin3)} src={wildkedin3} alt="Wildked'in Screenshot"  />
          </div>
        </div>
        <div className={styles.projectsLinks}>
          <a className={styles.projectLink} target="blank" href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/">
            <button className={styles.seeMore} type='button'>See more</button>
          </a>
          <a className={styles.githubLink} target="blank" href="https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WeWildin">
            <img className={styles.iconImg} src={githubIcon} alt="Github Icon" />
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
            <img className={styles.stackImg} src={htmlicon} alt="HTML icon" />
            <img className={styles.stackImg} src={cssicon} alt="CSS icon" />
            <img className={styles.stackImg} src={jsicon} alt="JavaScript icon" />
          </div>
        </div>
        <div className={styles.projectBody}>
          <div className={styles.projectText}>
            <p>A board games classic.</p>
            <p>I started this project (my very first personal one) before my formation to test JavaScript and DOM manipulation.</p>
            <p>I had quite a hard time with the algorithm in charge of verifying the user's guess but I eventually made it.</p>
          </div>
          <div className={styles.projectGallery}>
            <img className={styles.activePic1} src={activePic1} alt="Mastermind Screenshot" />
            <img className={styles.projectPic1} type='button' onClick={() => setActivePic1(mastermind)} alt="Mastermind Screenshot" src={mastermind} />
          </div>
        </div>
        <div className={styles.projectsLinks}>
          <a className={styles.projectLink} target="blank" href="https://yukitaori.github.io/Mastermind/">
            <button className={styles.seeMore} type='button'>See more</button>
          </a>
          <a className={styles.githubLink} target="blank" href="https://github.com/Yukitaori/Mastermind">
            <img className={styles.iconImg} src={githubIcon} alt="Github Icon" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Projects