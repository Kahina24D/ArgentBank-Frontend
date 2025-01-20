import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, isValidPassword } from "../utiles/regex.jsx";
import { login } from '../redux/action/auth.actions';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errormessage, setErrormessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fonction asynchrone pour la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = [];

    // Validation de l'email
    if (!isValidEmail(email)) {
      errors.push("Invalid email address");
    }

    // Validation du mot de passe
    if (!isValidPassword(password)) {
      errors.push("Invalid password");
    }

    // Si des erreurs, les afficher
    if (errors.length > 0) {
      setErrormessage(errors.join(", "));
      return;
    }

    try {
      // Envoi de la requête de connexion
      await dispatch(login(email, password));
      if (rememberMe) {
        localStorage.setItem("email", email);
      }
      navigate("/profile");
    } catch (error) {
      console.error("Error during login:", error);
      setErrormessage(error.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
      </div>
      {errormessage && <p style={{ color: "red" }}>{errormessage}</p>}
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Form;
