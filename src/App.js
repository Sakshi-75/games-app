import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import GuessTheNumber from "./GuessTheNumber/GuessTheNumber";
import Header from "./Header/Header.js";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/guessthenumber"}>
          <GuessTheNumber />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
