import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOMEPAGE</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
