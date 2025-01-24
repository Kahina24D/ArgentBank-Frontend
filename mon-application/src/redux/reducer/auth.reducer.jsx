// reducers/auth.reducer.js
const initialState = {
  token: null,
  loading: false,
  error: null,
  isConnected:false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, isConnected:true,error: null };
    case "LOGIN_SUCCESS":
      return { ...state, token: action.payload, isConnected:true,loading: false };
    case "LOGIN_FAIL":
      return { ...state, loading: false, isConnected:true,error: action.payload };
    case "LOGOUT":
      return { ...state,isConnected:false, token: null };
    default:
      return state;
  }
}