import React, { useState } from "react";
import Card from "../Card/Card";
import { TicTacToeData } from "../Data/TicTacToe";
import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
  const [ticTacToeModel, updateTicTacToeModel] = useState(TicTacToeData);
  const [turn, updateTurn] = useState(0);
  // const [isGameOver, updateIsGameOver] = useState(false);
  const [gameResult, updateGameResult] = useState("");

  const checkWin = (id, player) => {
    // if (turn >= 9) {
    //   console.log("draw the match");
    // } else
    if (
      rowCheck(Math.floor(id / 3), id, player) ||
      columnCheck(id % 3, id, player) ||
      diagonalCheck(id, player)
    ) {
      // updateIsGameOver(true);
      updateGameResult("PLayer " + player + " WON!!!");
    } else if (turn >= 8) {
      updateGameResult("Draw the Match");
    }
  };

  const rowCheck = (row, id, player) => {
    let count = 0;
    for (let i = row * 3; i < row * 3 + 3; i++) {
      if (id === i || ticTacToeModel[i].playerName === player) {
        count++;
      }
    }
    return count === 3;
  };

  const columnCheck = (column, id, player) => {
    let count = 0;
    for (let i = column; i < 9; i += 3) {
      console.log("column position is " + i + " " + player);
      if (id === i || ticTacToeModel[i].playerName === player) {
        count++;
      }
    }
    return count === 3;
  };

  const diagonalCheck = (id, player) => {
    let count = 0;
    let startPos = id % 4 === 0 ? 0 : 2;
    let diff = id % 4 === 0 ? 4 : 2;
    for (let i = startPos; i <= 9; i += diff) {
      if (id === i || ticTacToeModel[i].playerName === player) {
        count++;
      }
    }
    return count === 3;
  };
  const clickAction = (e) => {
    const id = Number(e.target.id);
    const jsonData = ticTacToeModel[id];
    const player = turn % 2 === 0 ? "X" : "O";
    if (gameResult === "" && !jsonData.isClicked) {
      updateTurn(turn + 1);
      updateTicTacToeModel((data) => {
        data[id].imgName =
          turn % 2 === 0 ? "tictactoe_x.jpg" : "tictactoe_o.jpg";
        data[id].playerName = player;
        data[id].isClicked = true;
        return data;
      });
      checkWin(id, player);
    }
  };

  const boxList = ticTacToeModel.map((model) => (
    <div
      id={model.id}
      key={model.id}
      className={styles.Box}
      onClick={(e) => {
        clickAction(e);
      }}
    >
      {model.isClicked && <img src={`./assets/${model.imgName}`} alt=""></img>}
    </div>
  ));

  return (
    <>
      {/* <div className={`${styles.point}`}></div> */}
      <div>
        {gameResult !== "" && (
          <Card>
            <h1 className={styles.wonGame}>{gameResult}</h1>
          </Card>
        )}
      </div>
      <div className={`${styles.TicTacToe} `}>{boxList}</div>
    </>
  );
};

export default TicTacToe;
