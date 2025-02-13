import React, { useEffect, useState } from "react";
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
  const userNameFromState = useSelector((state) => state.profile.user?.userName);
  
  const [userName, setUserName] = useState(userNameFromState || "Utilisateur");

  useEffect(() => {
    // Lors du premier chargement, vérifier si l'utilisateur est connecté dans le localStorage
    const storedUserName = localStorage.getItem("UserName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [isConnected, userNameFromState]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header>
      <nav className={`main-nav ${location.pathname === "/profile" ? "profile-header" : ""}`}>
        <div className="main-nav-logo">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
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
