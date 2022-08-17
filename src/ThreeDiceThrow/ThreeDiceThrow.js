import React from "react";
import styles from "./ThreeDiceThrow.module.css";
import { Link } from "react-router-dom";

const ThreeDiceThrow = () => {
  return (
    <div className={styles.ThreeDiceThrow}>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ThreeDiceThrow;
