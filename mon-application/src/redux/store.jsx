// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/reducer/auth.reducer";
import profileReducer from "../redux/reducer/user.reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});

export default store;