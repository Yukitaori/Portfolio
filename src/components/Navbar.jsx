import React, { useState } from "react";
import MenuBurger from "./MenuBurger";
import styles from "./Navbar.module.css";
import Menu from "./Menu";
import Logo from "./Logo";

function Navbar({ parts }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className={styles.header}>
        <Logo />
        <h1 className={styles.title}>MY PORTFOLIO</h1>
        <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <Menu parts={parts} showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
}

export default Navbar;
