import React from 'react';
import styles from "./MenuBurger.module.css";

export default function MenuBurger({showMenu, setShowMenu}) {
  return (
      <button className={styles.menuBurger} id="menuBurger" onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)}>
        Menu Burger
      </button>
  )
}
