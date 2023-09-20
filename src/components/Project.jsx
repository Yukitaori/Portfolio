import React, { useState } from "react";
import styles from "./Project.module.css";
import githubIcon from "../assets/icons/github.png";

function Project({ project, openModal, setOpenModal }) {
  const [activePic, setActivePic] = useState(project.pictures[0]);
  const [activePicClass, setActivePicClass] = useState(styles.activePic);

  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}>
        <div className={styles.projectTitle}>
          <h2>{project.name}</h2>
          <h3>{project.period}</h3>
        </div>
        <div aria-label="Project stacks" className={styles.projectStacks}>
          {project.stacksIcons.map((icon) => (
            <img
              key={icon.alt}
              className={styles.stackImg}
              src={icon.src}
              alt={icon.alt}
            />
          ))}
        </div>
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectText}>
          {project.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.projectGallery}>
          {openModal ? (
            <div className={styles.blur}>
              <button
                className={styles.picButton}
                type="button"
                onClick={() => setOpenModal(false)}
              >
                <img
                  className={styles.modalPic}
                  src={activePic}
                  alt={`${project.name} screenshot`}
                />
              </button>
            </div>
          ) : null}
          <button
            type="button"
            className={styles.picButton}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img
              className={styles.activePic}
              src={activePic}
              alt={`${project.name} screenshot`}
            />
          </button>
          <div className={styles.galleryButtons}>
            {project.pictures.map((picture, index) => (
              <button
                key={`${project.name} picture ${index}`}
                className={styles.imgButton}
                type="button"
                onClick={() => setActivePic(picture)}
              >
                <img
                  className={styles.projectPic}
                  src={picture}
                  alt={`${project.name} screenshot`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.projectsLinks}>
        {project.links.github ? (
          <a
            className={styles.githubLink}
            target="blank"
            href={project.links.github}
          >
            <img
              className={styles.iconImg}
              src={githubIcon}
              alt="Github Icon"
            />
          </a>
        ) : null}
        {project.links.deployed ? (
          <a
            className={styles.projectLink}
            target="blank"
            href={project.links.deployed}
          >
            <button className={styles.seeMore} type="button">
              See more
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Project;

