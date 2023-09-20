import React from "react";
import styles from "./Logo.module.css";
import logo from "../assets/icons/triskel.png";

export default function Logo() {
  return <img className={styles.logo} src={logo} alt="Triskel spinning" />;
}
