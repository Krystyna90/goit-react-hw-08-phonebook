import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filter-slice";
import contactsApi from "./contacts/contacts-query";
import usersApi from "./user/user-query";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,

    user: userReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(contactsApi.middleware, usersApi.middleware),
});
