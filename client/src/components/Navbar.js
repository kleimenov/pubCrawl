import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <nav>
      <div className="header-custom">
        <div className="d-flex flex-row justify-content-between px-5 pt-2">
          <a className="text-secondary" href="/">
            pubCrawl
          </a>
          <ul className="d-flex flex-row align-items-center list-unstyled">
          <li className="mx-2">
              <NavLink className="text-secondary h6" to="/search">
                Search
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink className="text-secondary h6" to="/create">
                Create
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink className="text-secondary h6" to="/barslist">
                Bars list
              </NavLink>
            </li>
            <li className="mx-2">
              <a onClick={logoutHandler} className="text-secondary h5" href="/">
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
