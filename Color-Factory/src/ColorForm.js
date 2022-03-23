import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { INITIAL_STATE, WARNING } from "./constants";
import { createInput } from "./helpers";
import "./ColorForm.css";

const ColorForm = ({ addColor }) => {
  const history = useHistory();
  const [colorData, setColorData] = useState(INITIAL_STATE);
  const [isInvalid, setInvalid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setColorData(colorData => ({
      ...colorData,
      [name]: value,
    }));
    setIsTouched(true);
    e.target.value === "" ? setInvalid(true) : setInvalid(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isInvalid) {
      setColorData(INITIAL_STATE);
      addColor(colorData);
      history.push("/colors");
    }
  };

  return (
    <div className="ColorForm">
      <div className="ColorForm-container">
        <form onSubmit={handleSubmit} className="ColorForm-form">
          <label htmlFor="name" className="Colorform-lebel">
            Color Name:
          </label>
          {createInput("text", "name", colorData.name, handleChange)}
          {isInvalid && isTouched && <span>{WARNING}</span>}
          <label htmlFor="color" className="Colorform-lebel">
            Color:
          </label>
          {createInput("color", "color", colorData.color, handleChange)}
          <button className="ColorForm-btn">Add new color</button>
        </form>
      </div>
    </div>
  );
};

export default ColorForm;
