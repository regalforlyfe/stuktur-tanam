import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "management",
  initialState: {
    list: [],
    loading: true,
    currentPage: 1,
    postPerPage: "",
    total: 0,
    totalPage: 0,
    search: "",
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPostPerPage: (state, action) => {
      state.postPerPage = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  setList,
  setLoading,
  setCurrentPage,
  setPostPerPage,
  setTotal,
  setTotalPage,
  setSearch,
} = reducerSlice.actions;

export default reducerSlice;
