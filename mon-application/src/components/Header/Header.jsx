import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action/auth.actions";
import "./header.scss";
import logo from "../../img/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isConnected = useSelector((state) => state.auth.isConnected);
  const userName = useSelector((state) => state.profile.user?.userName || "Utilisateur");

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <header>
      <nav className={`main-nav ${location.pathname === "/profile" ? "profile-header" : ""}`}>
        <div className="main-nav-logo">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" onClick={goToHome} />
        </div>
        <div className="main-nav__connect">
          {isConnected ? (
            <div className="connected">
              <div className="left-section">
                <div className="username-section">
                  <Link to="/profile" className="profile-link">
                    <i className="fa fa-user-circle"></i>
                  </Link>
                  <p>{userName}</p> 
                  <button className="logout-button" onClick={handleLogout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <p>Sign Out</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="not-connected">
              <Link to="/login" className="not-connected-link">
                <i className="fa fa-user-circle"></i>
                <span className="sign-in">Sign in</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
