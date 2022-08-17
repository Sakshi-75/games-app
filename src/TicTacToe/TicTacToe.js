import React, { useEffect, useState } from "react";
import { TicTacToeData } from "../Data/TicTacToe";
import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
  const [ticTacToeModel, updateTicTacToeModel] = useState(TicTacToeData);
  const [turn, updateTurn] = useState(0);
  let currentvalue = 0;
  // let items = [
  //   [0, 0, 0],
  //   [0, 0, 0],
  //   [0, 0, 0],
  // ];

  const checkWin = (id) => {
    if (
      rowCheck(
        Math.floor(id / 3),
        //  ticTacToeModel[id].playerName
        turn % 2 === 0 ? "X" : "O"
      ) ||
      columnCheck(
        id % 3,
        // ticTacToeModel[id].playerName
        turn % 2 === 0 ? "X" : "O"
      )
    ) {
      console.log("player win");
    } else {
      console.log("player did not win");
    }
  };

  const rowCheck = (row, player) => {
    let count = 0;
    for (let i = row * 3; i < row * 3 + 3; i++) {
      console.log("row position is " + i + " player is " + player);
      console.log(
        "players are " + ticTacToeModel[i].playerName + " and " + player
        // +" value is " +
        // ticTacToeModel[i].playerName ===
        // player
      );
      if (ticTacToeModel[i].playerName === player) {
        count++;
      }
    }
    return count === 3;
  };

  const columnCheck = (column, player) => {
    let count = 0;
    for (let i = column; i < 9; i += 3) {
      console.log("column position is " + i + " " + player);
      if (ticTacToeModel[i].playerName === player) {
        count++;
      }
    }
    return count === 3;
  };

  useEffect(() => checkWin(currentvalue));
  const clickAction = (e) => {
    const id = e.target.id;
    const jsonData = ticTacToeModel[id];
    // if (e.target.tagName !== "IMG" && e.target.childElementCount === 0)
    if (!jsonData.isClicked) {
      updateTurn(turn + 1);
      updateTicTacToeModel((data) => {
        data[id].imgName =
          turn % 2 === 0 ? "tictactoe_x.jpg" : "tictactoe_o.jpg";
        data[id].playerName = turn % 2 === 0 ? "X" : "O";
        data[id].isClicked = true;
        return data;
      });
      currentvalue = id;
      // items[Math.floor(e.target.id / 3)][e.target.id % 3] = 1;
    }
    // console.log(items);
  };

  const boxList = ticTacToeModel.map((model) => (
    <div
      id={model.id}
      key={model.id}
      className={styles.Box}
      onClick={(e) => {
        clickAction(e);
        checkWin(e.target.id);
      }}
    >
      {model.isClicked && <img src={`./assets/${model.imgName}`} alt=""></img>}
    </div>
  ));

  // for (let index = 0; index < 9; index++) {
  //   boxList[index] = (
  //     <div id={index} className={styles.Box} onClick={clickAction}>
  //       {clickedAlreaady[index] !== 0 && (
  //         <>
  //           {trun % 2 === 0 && (
  //             <img src="./assets/tictactoe_x.jpg" alt=""></img>
  //           )}
  //           {trun % 2 === 1 && (
  //             <img src="./assets/tictactoe_o.jpg" alt=""></img>
  //           )}
  //         </>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <div className={styles.TicTacToe}>
      {boxList}
      {/* <div id="0" className={styles.Box} onClick={clickAction}>
        {clickedAlreaady[0] !== 0 && (
          <>
            {trun % 2 === 0 && (
              <img src="./assets/tictactoe_x.jpg" alt=""></img>
            )}
            {trun % 2 === 1 && (
              <img src="./assets/tictactoe_o.jpg" alt=""></img>
            )}
          </>
        )}
      </div>
      <div id="1" className={styles.Box} onClick={clickAction}>
        {clickedAlreaady[1] !== 0 && (
          <>
            {trun % 2 === 0 && (
              <img src="./assets/tictactoe_x.jpg" alt=""></img>
            )}
            {trun % 2 === 1 && (
              <img src="./assets/tictactoe_o.jpg" alt=""></img>
            )}
          </>
        )}
      </div>
      array.forEach(element => {});
      <div className={styles.Box}></div> */}
    </div>
  );
};

TicTacToe.propTypes = {};

TicTacToe.defaultProps = {};

export default TicTacToe;
