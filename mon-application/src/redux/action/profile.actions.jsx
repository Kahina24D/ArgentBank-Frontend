// actions/profile.actions.js

// Action pour récupérer le profil utilisateur
export const fetchProfile = () => async (dispatch) => {
  dispatch({ type: "FETCH_PROFILE_REQUEST" });

  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("Token not found. Please log in again.");
    }

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: data.body });
    } else {
      dispatch({ type: "FETCH_PROFILE_FAIL", payload: data.message || "Failed to fetch profile" });
    }
  } catch (error) {
    dispatch({ type: "FETCH_PROFILE_FAIL", payload: error.message });
  }
};

// Action pour mettre à jour le profil utilisateur
export const updateProfile = (userName) => async (dispatch) => {
  dispatch({ type: "UPDATE_PROFILE_REQUEST" });

  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("Token not found. Please log in again.");
    }

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    });

    if (response.ok) {
      dispatch({ type: "UPDATE_PROFILE_SUCCESS" });
      dispatch(fetchProfile()); // Recharger le profil après la mise à jour
    } else {
      const data = await response.json();
      dispatch({ type: "UPDATE_PROFILE_FAIL", payload: data.message || "Failed to update profile" });
    }
  } catch (error) {
    dispatch({ type: "UPDATE_PROFILE_FAIL", payload: error.message });
  }
};
