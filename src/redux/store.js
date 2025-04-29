import { configureStore } from "@reduxjs/toolkit";
 import productReducer from "../redux/Slice/productSlice";
 import cartReducer from "../redux/Slice/cartSlice";

const store = configureStore({
    reducer: {
        product: productReducer, 
        cart: cartReducer,
    },
});

export default store;