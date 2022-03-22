import React from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./DogDetails.css";

const DogDetails = ({ doggo }) => {
  if (doggo.length === 0) {
    return <Redirect to="/dogs" />;
  }

  const { facts, age, src, name } = doggo;
  const allFacts = facts.map(fact => <li key={uuidv4()}>{fact}</li>);

  return (
    <div className="DogDetails">
      <div className="DogDetails-name">My name is : {name}</div>
      <div className="DogDetails-age">I am : {age} years old</div>
      <ol>{allFacts}</ol>
      <img src={src} alt={name} className="DogDetails-img"></img>
    </div>
  );
};

export default DogDetails;
