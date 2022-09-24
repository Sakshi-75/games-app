import { Switch, Route } from "react-router-dom";
import "./App.css";
import GuessTheNumber from "./GuessTheNumber/GuessTheNumber";
import Header from "./Header/Header.js";
import HigherRoll from "./HigherRoll/HigherRoll";
import Home from "./Home/Home";
import ThreeDiceThrow from "./ThreeDiceThrow/ThreeDiceThrow";
import TicTacToe from "./TicTacToe/TicTacToe";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/guessthenumber"}>
          <GuessTheNumber />
        </Route>
        <Route path={"/threedicethrow"}>
          <ThreeDiceThrow />
        </Route>
        <Route path={"/tictactoe"}>
          <TicTacToe />
        </Route>
        <Route path={"/higherroll"}>
          <HigherRoll />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
