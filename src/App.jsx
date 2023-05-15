import styles from './App.css'
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Menu from "./components/Menu"
import Experience from "./components/Experiences"
import Projects from "./components/Projects"
import Next from "./components/Next"
import Contact from "./components/Contact"
import Social from "./components/Social"
import Separation from './components/Separation'

function App() {

  const parts = ["About me", "Experience", "Projects", "What's Next", "Contact"]

  return (
    <div className="styles.app">
      <Navbar parts={parts}/>
      <div id='portfolio'>
        <Introduction />
        <Separation />
        <span id='aboutme'></span>
        <About />
        <Separation />
        <span id='experience'></span>
        <Experience />
        <Separation />
        <span id='projects'></span>
        <Projects />
        <Separation />
        <span id='whatsnext'></span>
        <Next />
        <Separation />
        <span id='contact'></span>
        <Contact />
        <Separation />
        <Social />
      </div>
    </div>
  )
}

export default App
