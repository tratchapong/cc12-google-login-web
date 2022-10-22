import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  const hdlClick = () => {
    logout()
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        {/* {user && <span className="navbar-brand">Welcome, {user.email}</span>} */}
        <span className="navbar-brand ">Logo</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          {user ? (
            <div className="navbar-nav">
              <NavLink className="nav-link" end to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" onClick={hdlClick}>
                Logout
              </NavLink>
            </div>
          ) : (
            <div className="navbar-nav">
              <NavLink className="nav-link" end to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
