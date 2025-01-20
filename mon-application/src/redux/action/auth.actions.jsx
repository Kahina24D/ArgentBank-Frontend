// actions/auth.actions.js
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        ethod: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'user@example.com',
          password: 'yourPassword'
        })
    });

    const data = await response.json();
    console.log(data); // Vérifiez ici si le token est dans `data.body.token`
    if (response.ok) {
      localStorage.setItem("authToken", data.body.token);
      console.log("Token saved:", data.body.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: data.body.token });
      console.log("Token saved:", data.body.token);
    } else {
      dispatch({ type: "LOGIN_FAIL", payload: data.message || "Login failed" });
    }
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("authToken");
  dispatch({ type: "LOGOUT" });
};