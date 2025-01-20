// reducers/auth.reducer.js
const initialState = {
  token: null,
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, token: action.payload, loading: false };
    case "LOGIN_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, token: null };
    default:
      return state;
  }
}