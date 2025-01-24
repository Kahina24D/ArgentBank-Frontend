const initialProfileState = {
  user: null, // Données de l'utilisateur
  loading: false, // Indicateur de chargement
  error: null, // Message d'erreur en cas d'échec
};

export default function profileReducer(state = initialProfileState, action) {
  switch (action.type) {
    case "FETCH_PROFILE_REQUEST":
      return { ...state, loading: true, error: null }; // Démarre le chargement

    case "FETCH_PROFILE_SUCCESS":
      return { ...state, user: action.payload, loading: false }; // Sauvegarde les données de l'utilisateur

    case "FETCH_PROFILE_FAIL":
      return { ...state, loading: false, error: action.payload }; // Gère l'erreur de l'API

    case "UPDATE_PROFILE_REQUEST":
      return { ...state, loading: true }; // Met l'état en "chargement" lors de la mise à jour

    case "UPDATE_PROFILE_SUCCESS":
      return { ...state, loading: false }; // Après la mise à jour, on arrête le chargement

    case "UPDATE_PROFILE_FAIL":
      return { ...state, loading: false, error: action.payload }; // En cas d'erreur lors de la mise à jour

    default:
      return state; // Retourne l'état actuel si aucune action correspond
  }
}
