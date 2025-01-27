import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../redux/action/profile.actions';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../components/EiditProfile/EditProfile';
import { AccountCardData } from '../../data/AccountCardData';
import Account from '../../components/Account/Account';
import './profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayForm, setDisplayForm] = useState(false);

  const { user, loading, error } = useSelector((state) => state.profile || {});

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    } else {
      dispatch(fetchProfile());
    }
  }, [dispatch, navigate]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className='container-profile'>
      {displayForm && <EditProfile onClose={() => setDisplayForm(false)} />}

      {user ? (
        <div className="user-profile">
          <button className="edit-button" onClick={() => setDisplayForm(true)}>
            Edit Profile
          </button>
        </div>
      ) : (
        <p>Utilisateur non trouvé</p>
      )}

      {AccountCardData.map((data) => (
        <Account
          key={data.id}
          title={data.title}
          amount={data.amount}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Profile;


