import React from "react";
import { Link } from "react-router-dom";
import ColorList from "./ColorList";
import "./Home.css";

const Home = ({ colors }) => {
  return (
    <div className="Home">
      <div className="Home-header">Welcome to the color factory</div>
      <div className="Home-new-color-link-container">
        <Link to="colors/new" className="Home-new-color-link">
          Add a new color
        </Link>
      </div>
      <ColorList colors={colors} />
    </div>
  );
};

export default Home;
