import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  keepUnusedDataFor: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.currentUser?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchUserInfo: builder.query({
      query: () => "/users/current",
      invalidatesTags: ["Users"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/users/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    loginUser: builder.mutation({
      query(body) {
        return {
          url: "users/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Users"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "users/logout",
        method: "POST",
      }),
      invalidatesTags: ["Users"],
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
