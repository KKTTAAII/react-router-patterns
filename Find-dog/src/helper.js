const findDog = (dogs, param) => {
  const foundDog = dogs.filter(
    dog => param.toLowerCase() === dog.name.toLowerCase()
  );
  return foundDog.length > 0 ? foundDog[0] : [];
};

export default findDog;
