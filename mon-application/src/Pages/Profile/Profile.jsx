import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../redux/action/profile.actions';
import { updateUserName } from '../../redux/action/auth.actions';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../components/EiditProfile/EditProfile';
import { AccountCardData } from '../../data/AccountCardData';
import Account from '../../components/Account/Account';
import './profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayForm, setDisplayForm] = useState(false);
  const [displayButton, setDisplayButton] = useState(true);


  const { user, loading, error } = useSelector((state) => state.profile || {});

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    } else {
      dispatch(fetchProfile());
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (displayForm) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
  }, [displayForm]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!user) return <p>Utilisateur non trouvé</p>;

  const handleUserNameChange = (newUserName) => {
    dispatch(updateUserName(newUserName));
  };

  return (
    <div className='container-profile'>
      {displayForm && (
        <EditProfile
          onClose={() => setDisplayForm(false)}
          onUserNameChange={handleUserNameChange} // Ajout de la mise à jour du userName
        />
      )}

      <div className="user-profile">
        {displayButton && (
          <>
            <p>Welcome back<br />{user.firstName} {user.lastName}!</p>
            <button className="edit-button" onClick={() => setDisplayForm(true)}>Edit Name</button>
          </>
        )}
      </div>

      {AccountCardData.map((data) => (
        <Account key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Profile;
