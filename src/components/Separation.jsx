import React from "react";
import triskele from "../assets/icons/triskele.png";
import styles from "./Separation.module.css";
function Separation() {
  const separationLine = [];

  for (let i = 1; i <= 10; i++) {
    separationLine.push(
      <img key={i} src={triskele} className={styles.triskele} />
    );
  }

  return (
    <div className={styles.separationLine}>
      {separationLine.map((logo) => logo)}
    </div>
  );
}

export default Separation;
