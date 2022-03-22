import React from "react";
import { Link } from "react-router-dom";
import ColorList from "./ColorList";

const Home = ({colors}) => {
  return (
    <div>
      <div>Welcome to the color factory</div>
      <div><Link to="colors/new">Add a new color</Link></div>
      <ColorList colors={colors}/>
    </div>
  );
};

export default Home;
