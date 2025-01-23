// components/Form.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/action/auth.actions"
import "./form.css"
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(login(email, password));
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-connect">
        <div className="form-connect-connect">
      <div  className="form-connect-Username">
        <label>Username</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-connect-passeword">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button type="submit">Sign In</button>
      </div>
      </div>
    </form>
  );
};

export default Form;