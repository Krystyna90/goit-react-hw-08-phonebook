import { createSlice } from "@reduxjs/toolkit";
import usersApi from "./user-query";

const initialState = {
  currentUser: {},
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = {};
      state.errorMessage = "";
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        state.currentUser = action.payload;
        state.isLogin = true;
      }
    );
    builder.addMatcher(
      usersApi.endpoints.registerUser.matchFulfilled,
      (state, action) => {
        state.currentUser = action.payload;
        state.isLogin = true;
      }
    );
    builder.addMatcher(
      usersApi.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.currentUser = {};
        state.isLogin = false;
      }
    );
  },
});

// Export actions
export const { logout } = userSlice.actions;

// Select state currentUser from slice
export const selectUser = (state) => state.user.currentUser;
// Export reducer
export default userSlice.reducer;
