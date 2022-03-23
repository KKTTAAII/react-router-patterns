import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./Color.css";

const Color = ({ color }) => {
  if (color.length === 0) {
    return <Redirect to="/colors" />;
  }

  return (
    <div
      className="Color"
      style={{
        backgroundColor: color.color,
      }}
    >
      <div className="Color-description">This is color {color.name}</div>
      <Link to="/colors" className={"Color-back-btn"}>
        Go Back
      </Link>
    </div>
  );
};

export default Color;
