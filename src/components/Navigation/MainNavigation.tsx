import React from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css'

function MainNavigation() {
  return (
    <div className="HeaderStyles">
      <ul className={`MainNavigation-navi`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Hotel</Link>
          </li>
          <li>
              <Link to="/wedding">Information</Link>
          </li>
        </ul>
    </div>
  );
}


export default MainNavigation;
