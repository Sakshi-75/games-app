import { Switch, Route } from "react-router-dom";
import "./App.css";
import GuessTheNumber from "./GuessTheNumber/GuessTheNumber";
import Header from "./Header/Header.js";
import Home from "./Home/Home";
import ThreeDiceThrow from "./ThreeDiceThrow/ThreeDiceThrow";
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
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
