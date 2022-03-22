import React from "react";
import { Redirect } from "react-router-dom";

const Color = ({ color }) => {
  if (color.length === 0) {
    return <Redirect to="/colors" />;
  }
  return (
    <div
      style={{
        backgroundColor: color.color,
      }}
    >
      <div>This is color {color.name}</div>
      <div>Isn't this a cool {color.name} color</div>
    </div>
  );
};

export default Color;
