import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API_V2;

const getProduct = async() => {
    const url = BASE_API + Endpoint.product;
    const response = await CallApi({ url, method: 'GET' });
    return response.data;
}

const saveProduct = async(formData) => {
    const url = BASE_API + Endpoint.product;
    const response = await CallApi({ url, method: 'POST', data: formData});
    return response.data;
}

const updateProduct = async(data, id) => {
    const url = BASE_API + Endpoint.product + "/" + id;
    const response = await CallApi({ url, method: 'PATCH', data });
    return response.data;
}

const deleteProduct = async(id) => {
    const url = BASE_API + Endpoint.product + "/" + id
    await CallApi({url, method: 'DELETE'}); 
    return id;
}

const ProductRepository = {
    getProduct,
    deleteProduct,
    updateProduct,
    saveProduct
}

export default ProductRepository;