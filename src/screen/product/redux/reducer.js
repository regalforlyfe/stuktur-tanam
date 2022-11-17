import { SET_LIST_PRODUCT, SET_SHOW_ADD_PRODUCT } from "./action";

const initData = {
  listProduct: [],
  showAddProduct: false,
};

export const reducerProduct = (state = initData, action) => {
  switch (action.type) {
    case SET_LIST_PRODUCT:
      console.log("SET_LIST_PRODUCT");
      return { ...state, listProduct: action.data };
    case SET_SHOW_ADD_PRODUCT:
      console.log("SET_SHOW_ADD_PRODUCT");
      return { ...state, showAddProduct: action.data };
    default:
      return state;
  }
};
