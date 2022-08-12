import React, { useState } from "react";
import styles from "./GuessTheNumber.module.css";
import { Link } from "react-router-dom";

const GuessTheNumber = () => {
  const [rolledNumber, updateRolledNumber] = useState(1);
  const [gameStatus, updateGameStatus] = useState("start");
  const [gameResult, updateGameResult] = useState("");
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    updateRolledNumber(randomNumber);
    updateGameResult(
      +document.getElementById("userInput").value === randomNumber
        ? "win"
        : "lose"
    );
    updateGameStatus("end");
  };
  return (
    <div className={styles.GuessTheNumber}>
      <div className={styles.gameHeader}>
        <button className={styles.backButton}>
          <Link to="/">back</Link>
        </button>
        <h2 className={styles.GuessTheNumber}>Guess The Number</h2>
      </div>
      <div>
        <input id="userInput" type="number" min={1} max={6}></input>
        <button onClick={() => rollDice()}>Roll Dice</button>
      </div>
      {gameStatus === "end" && (
        <>
          <h1>The Rolled Number is {rolledNumber}</h1>
          <div>
            {gameResult === "win" && <h2>You WON!!!!!</h2>}
            {gameResult === "lose" && <h2>You Lose!!!!!</h2>}
          </div>
        </>
      )}
    </div>
  );
};

export default GuessTheNumber;
