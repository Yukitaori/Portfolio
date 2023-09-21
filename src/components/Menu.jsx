import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Menu.module.css";

function Menu({ parts, showMenu, setShowMenu }) {
  const mapMenu = (arr) => {
    return arr.map((element) => {
      return (
        <HashLink
          key={element}
          smooth
          to={`#${element
            .toLowerCase()
            .replaceAll(" ", "")
            .replaceAll("'", "")}`}
        >
          <li className={styles.navLinks} onClick={() => setShowMenu(false)}>
            {`${element}`}
          </li>
        </HashLink>
      );
    });
  };

  return (
    <nav className={showMenu ? styles.menuBar : styles.hiddenMenuBar}>
      <ul className={styles.menuList}>{mapMenu(parts)}</ul>
    </nav>
  );
}

export default Menu;
