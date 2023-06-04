import React, { useState } from 'react';
import styles from './Project.module.css';
import githubIcon from '../assets/icons/github.png';

function Project({ project }) {
  const [activePic, setActivePic] = useState(project.pictures[0]);

  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}>
        <div className={styles.projectTitle}>
          <h2>{project.name}</h2>
          <h3>{project.period}</h3>
        </div>
        <div className={styles.projectStacks}>
          {project.stacksIcons.map((icon) => <img key={icon.alt} className={styles.stackImg} src={icon.src} alt={icon.alt} />)}
        </div>
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectText}>
          {project.paragraphs.map((paragraph) => <p>{paragraph}</p>)}
        </div>
        <div className={styles.projectGallery}>
          <img className={styles.activePic} src={activePic} alt="Animalz Screenshot" />
          {project.pictures.map((picture) => <button className={styles.imgButton} type="button" onClick={() => setActivePic(picture)}><img className={styles.projectPic} src={picture} alt={`${project.name} screenshot`} /></button>)}
        </div>
      </div>
      <div className={styles.projectsLinks}>
        <a className={styles.githubLink} target="blank" href={project.links.github}>
          <img className={styles.iconImg} src={githubIcon} alt="Github Icon" />
        </a>
        {project.links.deployed ? (
          <a className={styles.projectLink} target="blank" href={project.links.deployed}>
            <button className={styles.seeMore} type="button">See more</button>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
