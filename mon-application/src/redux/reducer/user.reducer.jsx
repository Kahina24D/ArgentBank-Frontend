// reducers/profile.reducer.js
const initialProfileState = {
  user: null,
  loading: false,
  error: null,
};

export default function profileReducer(state = initialProfileState, action) {
  switch (action.type) {
    case "FETCH_PROFILE_REQUEST":
      return {   ...state,
        userData: action.payload,
        loading: false, };
    case "FETCH_PROFILE_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "FETCH_PROFILE_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_PROFILE_REQUEST":
      return { ...state, loading: true };
    case "UPDATE_PROFILE_SUCCESS":
      return { ...state, loading: false };
    case "UPDATE_PROFILE_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}