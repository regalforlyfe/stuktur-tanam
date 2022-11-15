import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API

const getResource = async() => {
    const url = BASE_API + Endpoint.listResource;
    const response = await CallApi({ url, method: 'GET' });
    return response;
}

const UserRepository = {
    getResource
}

export default UserRepository;