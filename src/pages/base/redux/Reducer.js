import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "base",
  initialState: {
    listInsight: "",
  },
  reducers: {
    setListInsight: (state, action) => {
      state.listInsight = action.payload;
    },
  },
});

export const { setListInsight } = reducerSlice.actions;
export default reducerSlice;
