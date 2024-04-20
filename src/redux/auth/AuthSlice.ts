import { createSlice } from '@reduxjs/toolkit';
// import { updateUserThunk } from './authThunk';
import { AuthState } from '../../@types/user';

const initialState: AuthState = {
  currentUser: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.data;
      state.isAuth = true;
    },
    logOutSuccess: (state) => {
      state.currentUser = null;
      state.isAuth = false;
    },
  },
});

export const { logOutSuccess, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
