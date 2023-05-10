import React, { useState }from 'react'
import MenuBurger from './MenuBurger'
import Menu from './Menu'
import Logo from './Logo'

function Navbar({parts}) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav>
      <Logo />
      <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? <Menu parts={parts}/> : null}
    </nav>
  )
}

export default Navbar