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
      <div className="bg-primary">
        <div className="d-flex flex-row justify-content-between px-5 pt-2">
          <a className="text-white" href="/">
            Cut links
          </a>
          <ul className="d-flex flex-row align-items-center list-unstyled">
            <li className="mx-2">
              <NavLink className="text-white" to="/create">
                Create
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink className="text-white" to="/links">
                Links
              </NavLink>
            </li>
            <li className="mx-2">
              <a onClick={logoutHandler} className="text-white" href="/">
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
