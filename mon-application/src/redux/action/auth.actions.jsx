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