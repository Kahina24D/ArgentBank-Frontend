export const login = (email, password) => async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.body.token) {
        console.log("Login successful, token received:", data.body.token);
        localStorage.setItem("authToken", data.body.token); // Sauvegarde du token
        dispatch({ type: "LOGIN_SUCCESS", payload: data.body.token });
      } else {
        // Afficher un message d'erreur détaillé
        const errorMessage = data.message || "Login failed";
        console.error("Login failed, message:", errorMessage);
        dispatch({ type: "LOGIN_FAIL", payload: errorMessage });
      }
    } catch (error) {
      console.error("Error during login:", error);
      dispatch({ type: "LOGIN_FAIL", payload: error.message });
    }
  };
  
  export const logout = () => (dispatch) => {
    localStorage.removeItem("authToken");
    dispatch({ type: "LOGOUT" });
  };
  