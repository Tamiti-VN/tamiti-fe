import { apiSlice } from "@app/apiSlice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    products: build.query({
      query: ({ limit = 10, page = 1 }) => ({
        url: `/products?offset=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useProductsQuery } = extendedApi;
