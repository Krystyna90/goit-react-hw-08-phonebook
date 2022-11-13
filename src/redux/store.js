import { configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import { persistedReducer } from "./user/userSlice";
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

//  const persistConfig = {
//    key: "token",
//    storage,
//    whitelist: ["token"],
//    blacklist: [usersApi.reducerPath],
//  };

//  const persistedReducer = persistReducer(persistConfig, userReducer);

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     [usersApi.reducerPath]: usersApi.reducer,
//     user: persistedReducer,
//     filter: filterReducer,
//   },
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//     contactsApi.middleware,
//     usersApi.middleware,
//   ],
  // devTools: process.env.NODE_ENV === "development",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }).concat(contactsApi.middleware, usersApi.middleware),
// });

// export const persistor = persistStore(store);
