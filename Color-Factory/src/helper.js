const findColor = (colors, param) => {
  const foundColor = colors.filter(
    color => param.toLowerCase() === color.name.toLowerCase()
  );
  return foundColor.length > 0 ? foundColor[0] : [];
};

export default findColor;
