import React, { useEffect, useState } from "react";
import styles from "./MenuBurger.module.css";

export default function MenuBurger({ showMenu, setShowMenu }) {
  const [checkbox, setCheckBox] = useState(
    <input id={styles.toggle} type="checkbox"></input>
  );
  const handleClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  useEffect(() => {
    showMenu
      ? setCheckBox(<input id={styles.toggle} type="checkbox" checked></input>)
      : setCheckBox(<input id={styles.toggle} type="checkbox"></input>);
  }, [showMenu]);
  return (
    <div className={styles.menuBurgerDiv}>
      {checkbox}
      <label
        htmlFor={styles.toggle}
        id="menuBurger"
        className={styles.menuBurger}
        onClick={handleClick}
      >
        <div className={styles.topBun}></div>
        <div className={styles.meat}></div>
        <div className={styles.bottomBun}></div>
      </label>
    </div>
  );
}
