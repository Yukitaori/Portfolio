import React from 'react'
import MenuBurger from './MenuBurger'
import Logo from './Logo'

function Navbar({showMenu, setShowMenu}) {
  return (
    <nav>
      <Logo />
      <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  )
}

export default Navbar