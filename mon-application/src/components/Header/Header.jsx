import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import logo from "../../img/logo.png"
import { useSelector, useDispatch } from "react-redux"; // Accéder au store
import { logout } from "../../redux/action/auth.actions";
const Header = () => {
  const dispatch = useDispatch(); // Pour envoyer des actions
  const isConnected = useSelector((state) => state.isConnected); // Lire l'état

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
     
        </Link>
        <div className="main-nav__connect">
          {isConnected ? (
            <div className="connected">
              <Link to="/profile">
                <i className="fa-solid fa-arrow-right-from-bracket">{()=>dispatch(logout())}Logout</i>
                <p>Sign out</p>
              </Link>
            </div>
          ) : (
            <div className="not-connected">
            <Link to="/login" className="not-connected-link">
              <i className="fa fa-user-circle"></i>
              <span>Sign in</span>
            </Link>
          </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;






