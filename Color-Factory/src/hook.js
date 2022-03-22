import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useColor = () => {
  const [colors, setColors] = useState([]);
  const addColor = color => {
    const newColor = { ...color, id: uuidv4() };
    setColors(color => [...color, newColor]);
  };

  return [colors, addColor];
};

export default useColor;