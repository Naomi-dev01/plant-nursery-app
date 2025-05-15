import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  //starts with empty array
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

// יצירת selector ממומור עם טרנספורמציה
export const selectCartItems = createSelector(
  state => state.cart.items,
  items => items
);

// selector חדש שמחזיר את הכמות של מוצר ספציפי
export const selectProductQuantity = (productId) => createSelector(
  state => state.cart.items,
  items => {
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 1;
  }
);

export default cartSlice.reducer;