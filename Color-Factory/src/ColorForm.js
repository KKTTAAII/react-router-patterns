import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const WARNING = "This field can't be blank";
const INITIAL_STATE = {
  name: "",
  color: "#ffffff",
};

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
    setColorData(INITIAL_STATE);
    addColor(colorData);
    history.push("/colors");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Name</label>
        <input
          name="name"
          id="name"
          placeholder="lightgreen"
          type="text"
          value={colorData.name}
          onChange={handleChange}
        ></input>
        {isInvalid && isTouched && <span>{WARNING}</span>}
        <label htmlFor="color">Color</label>
        <input
          name="color"
          id="color"
          type="color"
          value={colorData.color}
          onChange={handleChange}
        ></input>
        <button>Add new color</button>
      </form>
    </div>
  );
};

export default ColorForm;
