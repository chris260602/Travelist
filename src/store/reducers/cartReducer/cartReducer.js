import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProduct: 0,
  products: [
    {
      productPicture: "",
      productName: "",
      productAmount: "",
      productPrice: 0,
    },
  ],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData: (state, action) => {
      state.totalProduct = action.payload.totalData;
      state.products = action.payload.cartHeaderData;
    },
    resetCartData: (state, action) => {
      state.totalProduct = 0;
      state.products = initialState.products;
    },
  },
});

export const { setCartData, resetCartData } = cartReducer.actions;

export default cartReducer.reducer;
