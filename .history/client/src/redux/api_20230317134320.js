import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

  reducerPath: "adminApi",
  tagTypes: ["User", "Product"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getProduct: build.query({
      query: () => `/client/product`,
    }),
  }),
});

export const { useGetUserQuery } = api;
