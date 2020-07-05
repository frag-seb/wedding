import React from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

function MainNavigation() {
  return (
    <div className="HeaderStyles">
      <ul className={`MainNavigation-navi`}>
        <li>
          <Link to="/">Wedding Day</Link>
        </li>
        <li>
          <Link to="/hotel">Hotel</Link>
        </li>
        <li>
          <Link to="/infos">Information</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
