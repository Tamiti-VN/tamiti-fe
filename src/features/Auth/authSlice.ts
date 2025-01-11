import { apiSlice } from "@app/apiSlice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: "POST",
        body: body,
      }),
    }),
    register: build.mutation({
      query: (body) => ({
        url: `/auth/register`,
        method: "POST",
        body: body,
      }),
    }),
    Logout: build.mutation({
      query: (body) => ({
        url: `/auth/logout`,
        method: "POST",
        body: body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  extendedApi;
