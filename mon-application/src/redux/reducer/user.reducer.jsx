import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',  // Nom du slice
  initialState,
  reducers: {
    fetchProfileRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateProfileRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    fetchProfileFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateProfileSuccess: (state) => {
      state.loading = false;
    },
    updateProfileFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Exporter les actions
export const {
  fetchProfileRequest,
  updateProfileRequest,
  fetchProfileSuccess,
  fetchProfileFail,
  updateProfileSuccess,
  updateProfileFail,
} = profileSlice.actions;

// Exporter le réducteur pour l'ajouter à ton store
export default profileSlice.reducer;
