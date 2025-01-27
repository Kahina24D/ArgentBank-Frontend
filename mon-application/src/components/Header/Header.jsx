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

  const isConnected = useSelector((state) => state.auth.isConnected);
  const userName = useSelector((state) => state.profile.user?.userName); // Accède au nom d'utilisateur du profil
const location=useLocation();
const isprofilePage=location.pathname==="/profile"
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("authToken");
    navigate('/');  // Redirige vers la page d'accueil après la déconnexion
  };

  return (
    <header>
      <nav  className={`main-nav ${isprofilePage ?"profile-header" :""} `}>
        <div to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </div>
        <div className="main-nav__connect">
  {isConnected ? (
    <div className="connected">
      <div className="left-section">
      <div className="username-section">
        <p>{userName}</p>
        <Link to="/profile" className="profile-link">
        
          <i className="fa fa-user-circle"></i>
        </Link>
      </div>
        
        <Link to="/settings" className="settings-link">
          <i className="fa fa-gear"></i>
        </Link>
        <button className="logout-button" onClick={handleLogout}>
          <i className="fa fa-power-off"></i>
        </button>
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
