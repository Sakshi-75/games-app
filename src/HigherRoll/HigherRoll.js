import React, { useState } from "react";
import styles from "./HigherRoll.module.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const HigherRoll = () => {
  const [userDice, setUserDice] = useState();
  const [compDice, setCompDice] = useState();
  const options = [
    { value: "dice1", label: "Dice 1 (3, 4, 8)" },
    { value: "dice2", label: "Dice 2 (1, 5, 9)" },
    { value: "dice3", label: "Dice 3 (2, 6, 7)" },
  ];
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
          onChange={(e) => {
            const val = e.value;
            console.log(val);
            setUserDice(val);
          }}
        />
      </div>
    </div>
  );
};

export default HigherRoll;
