import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  keepUnusedDataFor: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.currentUser?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === REHYDRATE) {
  //     return action.payload[reducerPath];
  //   }
  // },
  endpoints: (builder) => ({
    fetchUserInfo: builder.query({
      query: () => "/users/current",
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/users/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    loginUser: builder.mutation({
      query(body) {
        return {
          url: "users/login",
          method: "POST",
          body,
        };
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "users/logout",
        method: "POST",
      }),
    }),
  }),
});
export const {
  useFetchUserInfoQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
} = usersApi;
export default usersApi;
