import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ()=> "/products",
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getProductByCategory: builder.query({
            query: category => `/products/category/${category}`
        })
    }),
});
export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetProductByCategoryQuery,
} = productApi;