import React, { useState } from "react";
import styles from "./ThreeDiceThrow.module.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const ThreeDiceThrow = () => {
  const [userNum1, setUserNum1] = useState();
  const [userNum2, setUserNum2] = useState();
  const [userNum3, setUserNum3] = useState();
  const [hasSubmitted, updateHasSubmitted] = useState(false);

  const options = [
    { value: "low", label: "Low (1, 2, 3)" },
    { value: "high", label: "High (4, 5, 6)" },
  ];

  const checkForDisabled = () => {
    if (
      userNum1 === undefined ||
      userNum2 === undefined ||
      userNum3 === undefined ||
      hasSubmitted
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className={styles.ThreeDiceThrow}>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <div>
        <div className={styles.rollDice}>
          <Select
            id="userInput1"
            options={options}
            getOptionValue={(option) => `$(option.value)`}
            onChange={(e) => {
              const val = e.value;
              console.log(val);
              setUserNum1(val);
            }}
          />
          <Select
            id="userNum2"
            options={options}
            onChange={(e) => {
              const val = e.value;
              console.log(val);
              setUserNum2(val);
            }}
          />
          <Select
            id="userNum3"
            options={options}
            onChange={(e) => {
              const val = e.value;
              console.log(val);
              setUserNum3(val);
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
          <button disabled={!hasSubmitted} onClick={() => {}}>
            <img src={"../assets/dice.png"} alt="Roll Dice"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeDiceThrow;
