import React from "react";
import styles from "./Card.module.css";

const Card = (props) => (
  <div className={styles.Card}>
    <div className={styles.Popup}>{props.children}</div>
  </div>
);

export default Card;
