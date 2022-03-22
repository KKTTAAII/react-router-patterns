import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Nav.css";

const Nav = ({ names }) => {
  const allDogsLinks = names.map(name => (
    <NavLink exact to={`/dogs/${name}`} key={uuidv4()} className={"Nav-link"}>
      {name}
    </NavLink>
  ));

  return (
    <nav className="Nav">
      <NavLink exact to="/dogs" className={"Nav-link"}>
        Home
      </NavLink>
      {allDogsLinks}
    </nav>
  );
};

export default Nav;
