import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import findDog from "./helper";
import DogList from "./DogList";
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import whiskey from "./assets/whiskey.jpg";
import tubby from "./assets/tubby.jpg";
import duke from "./assets/duke.jpg";
import perry from "./assets/perry.jpg";

const App = ({ dogs }) => {
  const names = dogs.map(dog => dog.name);
  //the above line looks out of place. How can I improve it?
  return (
    <BrowserRouter>
      <Nav names={names} />
      <Switch>
        <Route exact path="/dogs">
          <DogList list={names} />
        </Route>
        <Route
          exact
          path="/dogs/:dogName"
          render={props => (
            <DogDetails
              dog={findDog(dogs, props.match.params.dogName)}
              //How can I destructure props.match.params.dogName?
            />
          )}
        ></Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  );
};

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
      pic: "./assets/duke.jpg",
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
      pic: "./assets/perry.jpg",
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
      pic: "./assets/tubby.jpg",
    },
  ],
};

export default App;
