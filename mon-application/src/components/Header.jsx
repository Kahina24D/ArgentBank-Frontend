import React from "react";
import { Link } from "react-router-dom";
import { authReducer } from "../redux/reducer/auth.reducer"
import logo from "../assets/logo.png"; // Chemin du logo, ajustez selon votre projet
import { useSelector, useDispatch } from "react-redux"; // Accéder au store
import { logout } from "../redux/action/auth.actions";
const Header = () => {
  const dispatch = useDispatch(); // Pour envoyer des actions
  const isConnected = useSelector((state) => state.isConnected); // Lire l'état

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img src={logo} alt="Argent Bank Logo" />
          <h1 className="main-nav-title">Argent Bank</h1>
        </Link>
        <div>
          {isConnected ? (
            <div className="connected">
              <Link to="/profile">
                <i className="fa-solid fa-arrow-right-from-bracket">{()=>dispatch(logout())}Logout</i>
                <p>Sign out</p>
              </Link>
            </div>
          ) : (
            <div className="not-connected">
              <Link to="/login">
                <p>Sign in</p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;






