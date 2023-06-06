import React from 'react';
import Project from './Project';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "./Projects.module.css"
import htmlicon from '../assets/icons/html-5.png';
import cssicon from '../assets/icons/css-3.png';
import jsicon from '../assets/icons/js.png';
import reacticon from '../assets/icons/react.png';
import animalz1 from '../assets/images/Animalz-1.png';
import animalz2 from '../assets/images/Animalz-2.png';
import animalz3 from '../assets/images/Animalz-3.png';
import tradinimpact1 from '../assets/images/tradinimpact-1.png';
import tradinimpact2 from '../assets/images/tradinimpact-2.png';
import tradinimpact3 from '../assets/images/tradinimpact-3.png';
import wildkedin1 from '../assets/images/wildkedin-1.png';
import wildkedin2 from '../assets/images/wildkedin-2.png';
import wildkedin3 from '../assets/images/wildkedin-3.png';
import mastermind from '../assets/images/mastermind-1.png';
import triskel from "../assets/icons/triskel.png"

function Projects() {
  const projectsToDisplay = [
    {
      id: 4,
      name: 'Animalz',
      period: 'May 2023',
      stacksIcons: [
        {
          src: htmlicon,
          alt: 'HTML icon',
        },
        {
          src: cssicon,
          alt: 'CSS icon',
        },
        {
          src: jsicon,
          alt: 'JavaScript icon',
        },
        {
          src: reacticon,
          alt: 'React icon',
        },
      ],
      paragraphs: [
        'The first hackathon of our lives, during the formation.',
        'We have built a team of four to make a project on the "holidays" theme. This app is meant for people who do not want to travel alone : it\'s a way for them to meet other people to travel together.',
        'We\'ve worked hard during the 30 hours of the hackathon, and had to use tools and NPM modules that we had not used before.',
        'I had the opportunity to build my first database with JSON-server, make API fetches, and create a filters system.',
        'It was so much fun, and we eventually managed to win the hackathon with our POC.',
      ],
      pictures: [animalz1, animalz2, animalz3],
      links: {
        github: 'https://github.com/Yukitaori/Hackathon_JS_05_2023',
        deployed: null,
      },
    },
    {
      id: 3,
      name: "Tradin' Impact",
      period: 'Apr 2023 - May 2023',
      stacksIcons: [
        {
          src: htmlicon,
          alt: 'HTML icon',
        },
        {
          src: cssicon,
          alt: 'CSS icon',
        },
        {
          src: jsicon,
          alt: 'JavaScript icon',
        },
        {
          src: reacticon,
          alt: 'React icon',
        },
      ],
      paragraphs: [
        'Our second group project is a video game that takes place in the Genshin Impact universe.',
        'We had two constraints for this project : working with React and working with APIs.',
        'We were three persons on this one and we worked for three weeks, building 3 mini-games using different algorithms.',
        'We got to learn how to use states and context in React. These were both concepts that were new to us at the time.',
        'The whole experience was a lot of fun.',
      ],
      pictures: [tradinimpact1, tradinimpact2, tradinimpact3],
      links: {
        github: 'https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P2-TradinImpact',
        deployed: 'https://tradin-impact.netlify.app/',
      },
    },
    {
      id: 2,
      name: "Wildked'in",
      period: 'Mar 2023 - Apr 2023',
      stacksIcons: [
        {
          src: htmlicon,
          alt: 'HTML icon',
        },
        {
          src: cssicon,
          alt: 'CSS icon',
        },
        {
          src: jsicon,
          alt: 'JavaScript icon',
        },
      ],
      paragraphs: [
        'My first group project during the formation.',
        'Four of us have worked for two weeks on this project, that takes the form of a portfolio presenting the students from my class, with a filters system.',
        'We\'ve had the opportunity to build JavaScript objects to use to store each student\'s data.',
        'Versioning with Git and Github was a bit of an intellectual challenge at first because it was new to us, but we survived it.',
        'This first project was a pretty great occasion to lear a lot about project management and team work.',
      ],
      pictures: [wildkedin1, wildkedin2, wildkedin3],
      links: {
        github: 'https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WeWildin',
        deployed: 'https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/',
      },
    },
    {
      id: 1,
      name: "Mastermind",
      period: 'Jan 2023 - Apr 2023',
      stacksIcons: [
        {
          src: htmlicon,
          alt: 'HTML icon',
        },
        {
          src: cssicon,
          alt: 'CSS icon',
        },
        {
          src: jsicon,
          alt: 'JavaScript icon',
        },
      ],
      paragraphs: [
        'A board games classic.',
        'I started this project (my very first personal one) before my formation to test JavaScript and DOM manipulation.',
        'I\'ve learnt a lot about interactivity in JavaScript and design in CSS.',
        'I\'ve had quite a hard time with the algorithm in charge of verifying the user\'s guess but I eventually made it.',
        'I was worried the project was too ambitious for a first one, but completing it was one of my proudest moments.',
      ],
      pictures: [mastermind],
      links: {
        github: 'https://github.com/Yukitaori/Mastermind',
        deployed: 'https://yukitaori.github.io/Mastermind/',
      },
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomRightArrow = ({ onClick }) => {
    return <button onClick={() => onClick()} className={styles.rightArrow}>⮞</button>;
  };

  const CustomLeftArrow = ({ onClick} ) => {
    return <button onClick={() => onClick()} className={styles.leftArrow}>⮜</button>;
  };

  const CustomDot = ({ onClick, active }) => {
    if (active) {
      return (
        <button
          className={active ? styles.activeDot : styles.inactiveDot}
          onClick={() => onClick()}
        >
        <img src={triskel} className={styles.activeDotImage} alt="active carousel button" />
        </button>
      );
    } else {
      return (
        <button
          className={active ? styles.activeDot : styles.inactiveDot}
          onClick={() => onClick()}
        />
      );
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <Carousel responsive={responsive} showDots={true} dotListClass="custom-dot-list-style"  customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />} customDot={<CustomDot />} >
        {projectsToDisplay.map((project) => <Project key={project.name} project={project} />)}
      </Carousel>
    </div>
  );
}

export default Projects;
