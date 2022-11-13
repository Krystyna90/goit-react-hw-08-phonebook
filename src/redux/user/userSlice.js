import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import usersApi from "./user-query";

const dataObject = JSON.parse(window.localStorage.getItem("data"));

const initialState = {
  currentUser: dataObject ? dataObject : {},
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload;
        state.isLogin = true;
      }
    );
    builder.addMatcher(
      usersApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload;
        state.isLogin = true;
      }
    );
    builder.addMatcher(usersApi.endpoints.logout.matchFulfilled, (state, _) => {
      state.currentUser = {};
      state.isLogin = false;
    });
    builder.addMatcher(
      usersApi.endpoints.fetchUserInfo.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload;
        state.isLogin = true;
      }
    );
  },
});

// const persistConfig = {
//   key: "token",
//   storage,
//   whitelist: ["token"],
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   userSlice.reducer
// );

// export const { setCredentials } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
