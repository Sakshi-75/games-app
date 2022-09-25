import React, { useState } from "react";
import styles from "./HigherRoll.module.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const HigherRoll = () => {
  const [userDice, setUserDice] = useState();
  const [compDice, setCompDice] = useState();
  const [hasSubmitted, updateHasSubmitted] = useState(false);

  const options = [
    { value: "dice1", label: "Dice 1 (3, 4, 8)" },
    { value: "dice2", label: "Dice 2 (1, 5, 9)" },
    { value: "dice3", label: "Dice 3 (2, 6, 7)" },
  ];

  const checkForDisabled = () => {
    if (!hasSubmitted && userDice !== undefined) {
      return false;
    }
    return true;
  };
  return (
    <div className={styles.HigherRoll}>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <div>
        <Select
          id="userInput"
          options={options}
          getOptionValue={(option) => `$(option.value)`}
          disabled={hasSubmitted}
          onChange={(e) => {
            const val = e.value;
            console.log(val);
            setUserDice(val);
          }}
        />
        <button
          type="submit"
          disabled={checkForDisabled()}
          onClick={() => {
            updateHasSubmitted(true);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HigherRoll;
