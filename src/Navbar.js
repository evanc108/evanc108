import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1></h1>
      <div className="navlink">
        <NavLink activeClassName="active" className="link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/projects">
          Projects
        </NavLink>
      </div>
    </div>
  );
}
