import React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ColorForm from "./ColorForm";
import Color from "./Color";
import useColor from "./hook";
import { findColor } from "./helpers";

const App = () => {
  const [colors, addColor] = useColor();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <Home colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        <Route
          exact
          path="/colors/:color"
          render={props => (
            <Color color={findColor(colors, props.match.params.color)} />
          )}
        ></Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
