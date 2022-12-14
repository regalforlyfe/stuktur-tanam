import ProductRepository from "../../../repositories/ProductRepository";
import { setListProduct, setShowAddProduct } from "./Reducer";

const getListProduct = async (store) => {
  var respDataProduct = await ProductRepository.getProduct();
  store.dispatch(setListProduct(respDataProduct));
};

const deleteProduct = async (store, { id }) => {
  await ProductRepository.deleteProduct(id);
  getListProduct(store);
};

const updateProduct = async (store) => {};

const saveProduct = async (store, { formData }) => {
  await ProductRepository.saveProduct(formData);
  getListProduct(store);
  showAddProduct(store, { status: false });
};

const showAddProduct = (dispatch, { status }) => {
  dispatch(setShowAddProduct(status));
};

const Action = {
  getListProduct,
  deleteProduct,
  showAddProduct,
  updateProduct,
  saveProduct,
};

export default Action;
