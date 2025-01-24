export const login = (email, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    console.log("Payload envoyé :", { email, password });

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Réponse complète du backend :", data);

    if (response.ok && data.body?.token) {
      const token = data.body.token;
      localStorage.setItem("authToken", token);
      console.log("Token saved:", token);
      dispatch({ type: "LOGIN_SUCCESS", payload: token });
    } else {
      const errorMessage = data.message || "Login failed";
      console.error("Login failed:", errorMessage);
      dispatch({ type: "LOGIN_FAIL", payload: errorMessage });
    }
  } catch (error) {
    console.error("Erreur pendant la connexion :", error);
    dispatch({ type: "LOGIN_FAIL", payload: error.message });
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem("authToken");
  dispatch({ type: "LOGOUT" });
};

export const signUp = (firstName, lastName, userName, email, password) => async (dispatch) => {
  dispatch({ type: "SIGNUP_REQUEST" }); // Démarre le processus d'inscription
  try {
    console.log("Payload envoyé :", { firstName, lastName, userName, email, password });

    const response = await fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, userName, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "SIGNUP_SUCCESS", payload: data.token }); // Inscription réussie
    } else {
      throw new Error(data.message || "Signup failed");
    }
  } catch (error) {
    console.error("Erreur pendant le chargement des données :", error);
    dispatch({ type: "SIGNUP_FAIL", payload: error.message }); // En cas d'erreur
  }
};
