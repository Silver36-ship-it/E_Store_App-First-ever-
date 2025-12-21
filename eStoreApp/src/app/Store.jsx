import { configureStore } from "@reduxjs/toolkit"
import { productApi } from "../features/product/ProductApi"
import CartReducer from "../features/cart/CartSlice"

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        cart: CartReducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware),
})
