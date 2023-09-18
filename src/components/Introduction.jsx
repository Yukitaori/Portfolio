import React from "react";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div id="introduction">
      <h1 className={styles.salutations}>Hi, I'm François</h1>
      <div>
        <p>I write code, and it turns into stuff since 2023.</p>
        <p>
          I develop websites using stacks like HTML, CSS, JavaScript and
          React.js.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
