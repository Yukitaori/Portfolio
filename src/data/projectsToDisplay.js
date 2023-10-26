import htmlicon from "../assets/icons/html-5.png";
import cssicon from "../assets/icons/css-3.png";
import jsicon from "../assets/icons/js.png";
import reacticon from "../assets/icons/react.png";
import nodeicon from "../assets/icons/nodejs.png";
import sqlicon from "../assets/icons/sql.png";
import feteduclip1 from "../assets/images/feteduclip-1.jpg";
import feteduclip2 from "../assets/images/feteduclip-2.jpg";
import feteduclip3 from "../assets/images/feteduclip-3.jpg";
import cultural1 from "../assets/images/cultural-1.jpg";
import cultural2 from "../assets/images/cultural-2.jpg";
import cultural3 from "../assets/images/cultural-3.jpg";
import babyplace1 from "../assets/images/babyplace-1.jpg";
import babyplace2 from "../assets/images/babyplace-2.jpg";
import babyplace3 from "../assets/images/babyplace-3.jpg";
import animalz1 from "../assets/images/Animalz-1.jpg";
import animalz2 from "../assets/images/Animalz-2.jpg";
import animalz3 from "../assets/images/Animalz-3.jpg";
import tradinimpact1 from "../assets/images/tradinimpact-1.jpg";
import tradinimpact2 from "../assets/images/tradinimpact-2.jpg";
import tradinimpact3 from "../assets/images/tradinimpact-3.jpg";
import wildkedin1 from "../assets/images/wildkedin-1.jpg";
import wildkedin2 from "../assets/images/wildkedin-2.jpg";
import wildkedin3 from "../assets/images/wildkedin-3.jpg";
import mastermind from "../assets/images/mastermind-1.jpg";

const projectsToDisplay = [
  {
    id: 7,
    name: "La Fête du Clip",
    period: "Aug 2023 - Oct 2023",
    stacksIcons: [
      {
        src: htmlicon,
        alt: "HTML icon",
      },
      {
        src: cssicon,
        alt: "CSS icon",
      },
      {
        src: jsicon,
        alt: "JavaScript icon",
      },
      {
        src: reacticon,
        alt: "React icon",
      },
    ],
    paragraphs: [
      "During my internship, I had the opportunity to build a website.",
      "La Fête du Clip is a music video festival in Lyon, and the association needed a fresh site to talk about their actions, the event itself and its program.",
      "I've worked with the members of the association to design the website (design surely is not an easy thing) and then figured out the precise content of the website day after day.",
      "I put my hands on the Instagram Basic Display API for this project, which was pretty simple to use. I also discovered and used CSS framework Tailwind. In the end, the website is really reactive and I think it's really nice to browse.",
      "I'm glad I had the chance to work on this project because I like this festival, and I'm becoming more and more invested in it.",
    ],
    pictures: [feteduclip1, feteduclip2, feteduclip3],
    links: {
      github: null,
      deployed: "https://feteduclip.com/",
    },
  },
  {
    id: 6,
    name: "Cultural Log App",
    period: "Jul 2023",
    stacksIcons: [
      {
        src: htmlicon,
        alt: "HTML icon",
      },
      {
        src: cssicon,
        alt: "CSS icon",
      },
      {
        src: jsicon,
        alt: "JavaScript icon",
      },
      {
        src: reacticon,
        alt: "React icon",
      },
      {
        src: nodeicon,
        alt: "Node.js icon",
      },
      {
        src: sqlicon,
        alt: "SQL icon",
      },
    ],
    paragraphs: [
      "This project is a personal one that I had to work on for the end of our training course, to test my skills and make sure I was able to design and develop an app from end to end.",
      "I decided to work on an app designed to track all the cultural products I consume or the ones I want to, and add some informations like a personal rating, if I own the product, if I've lent it, to whom, etc.",
      "The goal was to develop the app in two days (we could begin a few days ahead for the design).",
      "I put everything I got in this app, at the time, and I'm pretty proud of the result.",
      "The experience was awesome (like a personal hackathon), and I can't wait to work on this app again to improve it.",
    ],
    pictures: [cultural1, cultural2, cultural3],
    links: {
      github: "https://github.com/Yukitaori/Cultural_Log-App",
      deployed: null,
    },
  },
  {
    id: 5,
    name: "Babyplace",
    period: "May 2023 - Jul 2023",
    stacksIcons: [
      {
        src: htmlicon,
        alt: "HTML icon",
      },
      {
        src: cssicon,
        alt: "CSS icon",
      },
      {
        src: jsicon,
        alt: "JavaScript icon",
      },
      {
        src: reacticon,
        alt: "React icon",
      },
      {
        src: nodeicon,
        alt: "Node.js icon",
      },
      {
        src: sqlicon,
        alt: "SQL icon",
      },
    ],
    paragraphs: [
      "Our third group project, during the training course.",
      "The point of the project was to develop a dynamic app for parents who want to make a reservation for the care of their child, and for the professionals of child care to manage the places and reservations in their structure.",
      "We've had two months to build this app, and put into practice EVERYTHING that we've learnt during the training course.",
      "I had the opportunity to work on an authentication feature, a register form, and the user course for making a reservation.",
      "It was a lot of work and a great experience in teamwork.",
    ],
    pictures: [babyplace1, babyplace2, babyplace3],
    links: {
      github:
        "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P3-Babyplace",
      deployed: null,
    },
  },
  {
    id: 4,
    name: "Animalz",
    period: "May 2023",
    stacksIcons: [
      {
        src: htmlicon,
        alt: "HTML icon",
      },
      {
        src: cssicon,
        alt: "CSS icon",
      },
      {
        src: jsicon,
        alt: "JavaScript icon",
      },
      {
        src: reacticon,
        alt: "React icon",
      },
      {
        src: nodeicon,
        alt: "Node.js icon",
      },
    ],
    paragraphs: [
      "The first hackathon of our lives, during the training course.",
      'We have built a team of four to make a project on the "holidays" theme. This app is meant for people who do not want to travel alone : it\'s a way for them to meet other people to travel together.',
      "We've worked hard during the 30 hours of the hackathon, and had to use tools and NPM modules that we had not used before.",
      "I had the opportunity to build my first database with JSON-server, make API fetches, and create a filters system.",
      "It was so much fun, and we eventually managed to win the hackathon with our POC.",
    ],
    pictures: [animalz1, animalz2, animalz3],
    links: {
      github: "https://github.com/Yukitaori/Hackathon_JS_05_2023",
      deployed: null,
    },
  },
  {
    id: 3,
    name: "Tradin' Impact",
    period: "Apr 2023 - May 2023",
    stacksIcons: [
      {
        src: htmlicon,
        alt: "HTML icon",
      },
      {
        src: cssicon,
        alt: "CSS icon",
      },
      {
        src: jsicon,
        alt: "JavaScript icon",
      },
      {
        src: reacticon,
        alt: "React icon",
      },
    ],
    paragraphs: [
      "Our second group project is a video game that takes place in the Genshin Impact universe.",
      "We had two constraints for this project : working with React and working with APIs.",
      "We were three persons on this one and we worked for three weeks, building 3 mini-games using different algorithms.",
      "We got to learn how to use states and context in React. These were both concepts that were new to us at the time.",
      "The whole experience was a lot of fun.",
    ],
    pictures: [tradinimpact1, tradinimpact2, tradinimpact3],
    links: {
      github:
        "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P2-TradinImpact",
      deployed: "https://tradin-impact.netlify.app/",
    },
  },
  {
    id: 2,
    name: "Wildked'in",
    period: "Mar 2023 - Apr 2023",
    stacksIcons: [
      {
        src: htmlicon,
        alt: "HTML icon",
      },
      {
        src: cssicon,
        alt: "CSS icon",
      },
      {
        src: jsicon,
        alt: "JavaScript icon",
      },
    ],
    paragraphs: [
      "My first group project during the training course.",
      "Four of us have worked for two weeks on this project, that takes the form of a portfolio presenting the students from my class, with a filters system.",
      "We've had the opportunity to build JavaScript objects to store each student's data.",
      "Versioning with Git and Github was a bit of an intellectual challenge at first because it was new to us, but we survived it.",
      "This first project was a pretty great occasion to learn a lot about project management and team work.",
    ],
    pictures: [wildkedin1, wildkedin2, wildkedin3],
    links: {
      github:
        "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WeWildin",
      deployed:
        "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/",
    },
  },
  {
    id: 1,
    name: "Mastermind",
    period: "Jan 2023 - Apr 2023",
    stacksIcons: [
      {
        src: htmlicon,
        alt: "HTML icon",
      },
      {
        src: cssicon,
        alt: "CSS icon",
      },
      {
        src: jsicon,
        alt: "JavaScript icon",
      },
    ],
    paragraphs: [
      "A board games classic.",
      "I started this project (my very first personal one) before my training course to test JavaScript and DOM manipulation.",
      "I've learnt a lot about interactivity in JavaScript and design in CSS.",
      "I've had quite a hard time with the algorithm in charge of verifying the user's guess but I eventually made it.",
      "I was worried the project was too ambitious for a first one, but completing it was one of my proudest moments.",
    ],
    pictures: [mastermind],
    links: {
      github: "https://github.com/Yukitaori/Mastermind",
      deployed: "https://yukitaori.github.io/Mastermind/",
    },
  },
];

export default projectsToDisplay;
