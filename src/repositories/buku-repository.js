import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper"

const BASE_API = process.env.REACT_APP_BASE_API

const getDataBuku = async ({index}) => {
    const url = BASE_API + Endpoint.listUsers + "?page=" + index;
    const response = await CallApi({ url, method: 'GET' });
    return response.data.data;
}

const BukuRepository = {
    getDataBuku
}

export default BukuRepository;