import React from 'react';
import styles from "./MenuBurger.module.css";

export default function MenuBurger({showMenu, setShowMenu}) {
  const handleClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }
  return (
      <button className={styles.menuBurger} type="button" id="menuBurger" onClick={handleClick}>
        Menu Burger
      </button>
  )
}
