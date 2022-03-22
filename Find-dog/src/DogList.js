import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./DogList.css";

const DogList = ({ list }) => {
  const dogNames = list.map(name => {
    return (
      <li key={uuidv4()}>
        <Link to={`/dogs/${name}`} className={"DogList-link"}>
          {name}
        </Link>
      </li>
    );
  });

  return (
    <div className="DogList">
      <div className="DogList-header">All the dogs</div>
      <ul className="DogList-list">{dogNames}</ul>
    </div>
  );
};

export default DogList;
