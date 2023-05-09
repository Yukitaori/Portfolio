import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
  const [showMenu, setShowMenu] = useState(false)
  const parts = ["About me", "Experience", "Projects", "What's Next", "Contact"]

  return (
    <div className="App">
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? <Menu parts={parts}/> : null}     
      <Introduction />
      <Separation />
      <About />
      <Separation />
      <Experience />
      <Separation />
      <Projects />
      <Separation />
      <Next />
      <Separation />
      <Contact />
      <Separation />
      <Social />
    </div>
  )
}

export default App
