export const login = (email, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok && data.body?.token) {
      localStorage.setItem("authToken", data.body.token);
      localStorage.setItem("UserName", data.body.userName);

      dispatch({ type: "LOGIN_SUCCESS", payload: { token: data.body.token, userName: data.body.userName } });
    } else {
      dispatch({ type: "LOGIN_FAIL", payload: data.message || "Login failed" });
    }
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("UserName");
  dispatch({ type: "LOGOUT" });
};

export const updateUserName = (newUserName) => (dispatch) => {
  localStorage.setItem("UserName", newUserName);

  dispatch({
    type: "UPDATE_USERNAME",
    payload: newUserName,
  });
};
