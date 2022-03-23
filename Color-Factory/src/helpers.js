import React from "react";

const findColor = (colors, param) => {
  const foundColor = colors.filter(
    color => param.toLowerCase() === color.name.toLowerCase()
  );
  return foundColor.length > 0 ? foundColor[0] : [];
};

const createInput = (type, name, data, handleChange) => {
  return (
    <input
      className="ColorForm-input"
      name={name}
      id={name}
      type={type}
      value={data}
      onChange={handleChange}
    ></input>
  );
};

export { findColor, createInput };
