import React, { useState } from "react";
import Project from "./Project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Projects.module.css";
import projectsToDisplay from "../data/projectsToDisplay";
import triskel from "../assets/icons/triskel.png";
import arrow from "../assets/icons/002-arrow.png";

function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const scrollToTop = () => {
    setTimeout(() => {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        aria-label="Next project button"
        onClick={() => {
          onClick();
          setOpenModal(false);
        }}
        className={styles.rightArrow}
      >
        <img src={arrow}></img>
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        aria-label="Previous project button"
        onClick={() => {
          onClick();
          setOpenModal(false);
        }}
        className={styles.leftArrow}
      >
        <img src={arrow}></img>
      </button>
    );
  };

  const CustomDot = ({ onClick, active }) => {
    if (active) {
      return (
        <button
          aria-label="Active project button"
          className={active ? styles.activeDot : styles.inactiveDot}
          onClick={() => {
            onClick();
            scrollToTop();
          }}
        >
          <img
            src={triskel}
            className={styles.activeDotImage}
            alt="active carousel button"
          />
        </button>
      );
    } else {
      return (
        <button
          aria-label="Inactive project button"
          className={active ? styles.activeDot : styles.inactiveDot}
          onClick={() => {
            onClick();
            setOpenModal(false);
            scrollToTop();
          }}
        />
      );
    }
  };

  return (
    <section id="projects">
      <h1>Projects</h1>
      <Carousel
        beforeChange={function (previousSlide, _ref) {
          const currentSlide = _ref.currentSlide;
          _ref.onMove;
          setOpenModal(false);
          scrollToTop();
        }}
        className={styles.carousel}
        responsive={responsive}
        showDots={true}
        dotListClass="custom-dot-list-style"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot />}
      >
        {projectsToDisplay.map((project) => (
          <Project
            key={project.name}
            project={project}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default Projects;

