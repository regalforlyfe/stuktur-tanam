import ProductRepository from "../../../repositories/product-repository";

export const SET_LIST_PRODUCT = "SET_LIST_PRODUCT";
export const SET_SHOW_ADD_PRODUCT = "SET_SHOW_ADD_PRODUCT";

const getListProduct = async(dispatch) => {
    var respDataProduct = await ProductRepository.getProduct();
    dispatch({type:SET_LIST_PRODUCT, data:respDataProduct});
}

const deleteProduct = async(dispatch, {id,listProduct}) => {
    await ProductRepository.deleteProduct(id);
    getListProduct(dispatch);
}

const updateProduct = async(dispatch) => {
    
}

const saveProduct = async(dispatch, {formData}) => {
    await ProductRepository.saveProduct(formData);
    getListProduct(dispatch);
    showAddProduct(dispatch,{status:false});
}

const showAddProduct = (dispatch,{status}) => {
    dispatch({type:SET_SHOW_ADD_PRODUCT, data:status});
}

const Action = {
    getListProduct,
    deleteProduct,
    showAddProduct,
    updateProduct,
    saveProduct
}

export default Action;