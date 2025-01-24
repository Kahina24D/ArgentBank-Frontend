import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../redux/action/profile.actions';
import { useNavigate } from 'react-router-dom';
import EditModal from '../../components/EditModal/EditModal';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // État pour gérer l'ouverture de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sélectionner les informations du profil depuis le store
  const { user, loading, error } = useSelector((state) => state.profile || {});

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    } else {
      dispatch(fetchProfile());
    }
  }, [dispatch, navigate]);

  // Vérification si les données sont en cours de chargement ou si une erreur se produit
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  // Fonction pour ouvrir et fermer la modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {user ? (
        <div className="user-profile">
          <h1>Welcome back, {user.firstName}!</h1>
          <button className="edit-button" onClick={openModal}>
            Edit Profile
          </button>
          {/* La modal ne s'affiche que si `isModalOpen` est vrai */}
          {isModalOpen && (
            <EditModal isOpen={isModalOpen} onRequestClose={closeModal} />
          )}
        </div>
      ) : (
        <p>Utilisateur non trouvé</p>
      )}
    </div>
  );
};

export default Profile;
