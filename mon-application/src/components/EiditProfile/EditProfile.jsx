import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import "../Form/form.scss";
import { updateProfile } from "../../redux/action/profile.actions";
import "./EditProfile.scss";

const EditProfile = ({ onClose }) => {
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useSelector((state) => state.profile || {});
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!userName) {
        setErrorMessage("Username cannot be empty");
        return;
      }

      // Met à jour le profil
      await dispatch(updateProfile(userName));

      // Ferme le formulaire après succès
      onClose();
    } catch (error) {
      setErrorMessage(error.message || "Update failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-connect">
        <div><h2>Edit user info</h2></div>
        <div className="form-connect-input">
          <label>Username: </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder={user.userName}
          />
        </div>
        <div className="form-connect-input">
          <label>First Name: </label>
          <input type="text" value={user?.firstName || ""} disabled placeholder="First Name" />
        </div>
        <div className="form-connect-input">
          <label>Last Name: </label>
          <input type="text" value={user?.lastName || ""} disabled placeholder="Last Name" />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-connect-bt">
          <button type="submit" className="submit-button">Save </button>
          <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;


