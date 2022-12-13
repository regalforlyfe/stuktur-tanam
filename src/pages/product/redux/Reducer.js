import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "product",
  initialState: {
    listProduct: [],
    addProduct: false,
  },
  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    setShowAddProduct: (state, action) => {
      state.addProduct = action.payload;
    },
  },
});

export const { setListProduct, setShowAddProduct } = reducerSlice.actions;
export default reducerSlice;
