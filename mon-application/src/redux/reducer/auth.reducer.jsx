const savedAuthState = JSON.parse(localStorage.getItem("authState")) || {}; 
const savedUserName = localStorage.getItem("UserName") || null; 

const initialState = {
  token: savedAuthState.token || null,
  isConnected: savedAuthState.isConnected || false,
  user: savedAuthState.user || (savedUserName ? { userName: savedUserName } : null), 
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    
    case "LOGIN_SUCCESS":
      const updatedState = {
        ...state,
        isConnected: true,
        user: { userName: action.payload.userName },
        token: action.payload.token,
        loading: false,
      };

      localStorage.setItem("authState", JSON.stringify(updatedState)); 
      localStorage.setItem("UserName", action.payload.userName); 

      return updatedState;

    case "UPDATE_USERNAME":  // 🔥 Nouvelle action pour modifier le `userName`
      const newState = {
        ...state,
        user: { userName: action.payload },
      };

      localStorage.setItem("authState", JSON.stringify(newState));
      localStorage.setItem("UserName", action.payload);

      return newState;

    case "LOGIN_FAIL":
      return { ...state, loading: false, isConnected: false, error: action.payload };
    
    case "LOGOUT":
      localStorage.removeItem("authState");
      localStorage.removeItem("UserName");
      return {
        token: null,
        isConnected: false,
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
