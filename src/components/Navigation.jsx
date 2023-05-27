import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="w-[20rem] bg-Light-blue mx-auto mt-4 rounded-md shadow-2xl">
      <nav>
        <ul className="flex gap-4 justify-center p-1 text-Marine-blue">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
