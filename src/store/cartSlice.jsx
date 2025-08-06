import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    
    // ✅ NEW REDUCER TO SET QUANTITY DIRECTLY
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (quantity <= 0) {
        // remove if quantity is 0 or less
        state.items = state.items.filter(item => item.id !== id);
      } else if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },
  }
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setQuantity // ✅ Export it
} = cartSlice.actions;

export default cartSlice.reducer;
