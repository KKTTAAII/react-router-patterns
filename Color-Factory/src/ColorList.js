import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  const allColors = colors.map(color => {
    return (
      <div key={uuidv4()}>
        <Link to={`/colors/${color.name}`} className="ColorList-link">
          {color.name}
        </Link>
      </div>
    );
  });

  return (
    <div className="ColorList">
      <div className="ColorList-header">Please select a color</div>
      <div>{allColors}</div>
    </div>
  );
};

export default ColorList;
