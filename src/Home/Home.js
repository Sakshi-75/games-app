import React from "react";
import styles from "./Home.module.css";
import { gamesListData } from "../Data/GamesListData";
import { Link } from "react-router-dom";

const GamesList = gamesListData.map((item) => (
  <div>
    <Link to={item.route}>{item.name}</Link>
  </div>
));

const Home = () => {
  return <div className={styles.Home}>{GamesList}</div>;
};

export default Home;
