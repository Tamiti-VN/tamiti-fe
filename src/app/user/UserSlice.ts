import { createSlice } from "@reduxjs/toolkit";
// import { updateUserThunk } from './authThunk';
import { User } from "../../share/@types/user";

type UserState = {
  users: User[];
  currentPage: number;
  totalPages: number;
};

const initialState: UserState = {
  users: [],
  currentPage: 1,
  totalPages: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    GetListSuccess: (state, action) => {
      state.users = action.payload.data;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPage;
    },
    UpdatedListSuccess: (state, action) => {
      state.users = [...state.users, action.payload.data];
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPage;
    },
    DeletedListSuccess: (state, action) => {
      state.users = state.users.filter(
        (user) => user._id !== action.payload.data._id
      );
    },
    UpdatedUserSuccess: (state, action) => {
      const currentUser = state.users.find(
        (u) => u._id === action.payload.data._id
      );
      const updateUser = action.payload.data;
      const index = state.users.findIndex((u) => u._id === updateUser._id);
      if (currentUser) {
        state.users[index] = updateUser;
      }
    },
  },
});

export const {
  GetListSuccess,
  UpdatedListSuccess,
  DeletedListSuccess,
  UpdatedUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
