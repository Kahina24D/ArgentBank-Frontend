import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action/auth.actions";
import "./header.scss";
import logo from "../../img/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isConnected = useSelector((state) => state.auth.isConnected);
  const userName = useSelector((state) => state.profile.user?.userName); // Accède au nom d'utilisateur du profil

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("authToken");
    navigate('/');  // Redirige vers la page d'accueil après la déconnexion
  };

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
                <p>{userName}</p> 
                <i className="fa fa-user-circle"></i>
              </Link>
              <button className="logout-button" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
              </button>
              <span>Sign out</span>
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
