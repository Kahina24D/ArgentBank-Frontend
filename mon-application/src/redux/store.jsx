import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth.reducer";
import profileReducer from "./reducer/user.reducer"
const store = configureStore({
    reducer: {
        auth: authReducer, // Ajout du reducer
        profile: profileReducer, // Ajouter le profil dans l'état global
    },
});

export default store;
