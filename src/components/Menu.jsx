import React from 'react';
import styles from "./Menu.module.css";

function Menu({parts, setShowMenu}) {

  const mapMenu = (arr) => {
    return arr.map((element) => {
      return <li key={element} className={styles.navLinks} onClick={() => setShowMenu(false)}>
        <a href={`#${element.toLowerCase().replaceAll(" ", "").replaceAll("'", "")}`}>
        {`${element}`}
        </a>
        </li>
    });
  }
  return(
    <ul className={styles.menu}>
     {mapMenu(parts)}
   </ul>
  )
}

export default Menu