import React, { useState } from "react";
import styles from "./GuessTheNumber.module.css";
import { Link } from "react-router-dom";

const GuessTheNumber = () => {
  const [rolledNumber, updateRolledNumber] = useState(1);
  const [gameStatus, updateGameStatus] = useState("start");
  const [gameResult, updateGameResult] = useState("");
  const rollDice = () => {
    if (document.getElementById("userInput").value !== "") {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      updateRolledNumber(randomNumber);
      updateGameResult(
        +document.getElementById("userInput").value === randomNumber
          ? "win"
          : "lose"
      );
      document.getElementById("userInput").value = "";
      updateGameStatus("end");
    }
  };
  return (
    <div className={styles.GuessTheNumber}>
      <div className={styles.gameHeader}>
        <Link to="/" className={styles.backButton}>
          Back
        </Link>
        <h2 className={styles.gameTitle}>Guess The Number</h2>
      </div>
      <div className={styles.rollDice}>
        <input
          id="userInput"
          type="number"
          min={1}
          max={6}
          onChange={(e) => {
            const val = e.target.value;
            if (val !== "") e.target.value = val < 1 ? 1 : val > 6 ? 6 : val;
            updateGameStatus("start");
          }}
        ></input>
        <img
          src={"../assets/dice.png"}
          alt="Roll Dice"
          onClick={() => rollDice()}
        ></img>
      </div>
      {gameStatus === "end" && (
        <>
          <h3 className={styles.rolledNumber}>
            The Rolled Number is <span>{rolledNumber}</span>
          </h3>
          <div>
            {gameResult === "win" && (
              <h1 className={styles.wonGame}>You WON!!!!!</h1>
            )}
            {gameResult === "lose" && (
              <h1 className={styles.loseGame}>You Lose!!!!!</h1>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GuessTheNumber;
