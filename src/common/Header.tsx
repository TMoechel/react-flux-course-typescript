import React from "react";
import { NavLink } from "react-router-dom";

const Header = function () {
  const activeStyle = {
    color: "orange",
  };
  return (
    <>
      <h2> Header </h2>
      <nav>
        <NavLink activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>
        |
        <NavLink activeStyle={activeStyle} to="/about">
          About
        </NavLink>
        |
        <NavLink activeStyle={activeStyle} to="/courses">
          Courses
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
