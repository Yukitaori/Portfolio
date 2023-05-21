import React, { useState } from 'react'
import MenuBurger from './MenuBurger'
import styles from './Navbar.module.css'
import Menu from './Menu'
import Logo from './Logo'

function Navbar({parts}) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav>
      <div className={styles.header}>
        <Logo />
        <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      {showMenu ? <Menu parts={parts} setShowMenu={setShowMenu}/> : null}
    </nav>
  )
}

export default Navbar