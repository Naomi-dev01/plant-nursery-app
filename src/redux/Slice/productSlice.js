import { createSlice } from "@reduxjs/toolkit";

//האתחול הראשוני של הסטייטס
const initialState={
    products:[],
    isLoading: false,
    cart: 0,
}

//עדכוני הסטייטס
const productSlice=createSlice({
    name: "product",
    initialState,
    reducers:{
        //עדכון המוצרים
setProducts: (state, action)=>{
    state.products=action.payload;},

    //עדכון טעינה
    setIsLoading: (state, action) => {
        state.isLoading = action.payload;
    },

      //עדכון סל קניות
setCart:(state, action)=>{
    state.cart=action.payload
},


      

        
    }
})

export const { setProducts, setIsLoading, setCart } = productSlice.actions;
export default productSlice.reducer;