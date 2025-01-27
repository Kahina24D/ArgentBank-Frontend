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
  const [rememberMe, setRememberMe] = useState(false);
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
       
        
        <i className="fa fa-user-circle"></i>
  
          <p className="signIn">Sign In</p>
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
        <div className='input-remember'>
                    <input 
                        id='remember-me' 
                        type='checkbox' 
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    <p className="helo" >Remember me</p>
                </div>
         {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div className="btn-submit">
      <button  type="submit">Sign In</button>
      </div>
      
      </div>
      </div>
    </form>
  );
};

export default Form;