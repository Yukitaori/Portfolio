import React from 'react';
import styles from "./Menu.module.css";

function Menu({parts}) {

  const mapMenu = (arr) => {
    return arr.map((element) => {
      return <li key={element} className={styles.navLinks}>
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