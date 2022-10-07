import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {routes} from './routes'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Ahtasham
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          {routes.map((prop, key) => {
            return(
                <li className="nav-item" key={key}>
                <NavLink
                  exact
                  to={prop.to}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {prop.name}
                </NavLink>
              </li>
            );
        })}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;