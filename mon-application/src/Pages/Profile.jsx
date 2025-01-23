import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile, updateProfile } from '../redux/action/profile.actions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/profile');
    } else {
      dispatch(fetchProfile());
    }
  }, [dispatch, navigate]);

  const handleUpdate = () => {
    dispatch(updateProfile(userName));
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Profil utilisateur</h1>
      {user && (
        <div>
          <p>{user.firstName}</p>
          <p>{user.userName}</p>
            
          <p><strong>firstName:{user.firstName}</strong> </p>
          <p><strong>lastName :{user.lastName}</strong> </p>
          <p><strong>pppD :{user.userName}</strong> </p>
          <p><strong>Email :</strong> {user.email}</p>
        </div>
      )}

      <div>
        <h2>Mettre à jour le profil</h2>
        <input
          type="text"
          placeholder="Nouveau nom d'utilisateur"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUpdate}>Mettre à jour</button>
      </div>
    </div>
  );
};

export default Profile;
