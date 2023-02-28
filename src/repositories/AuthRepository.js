import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API_V4;

const getLogin = async(data) => {
    const url = BASE_API + Endpoint.login;
    const response = await CallApi({ url, method: 'POST', data });
    console.log('user', response.data);
    return response.data    
}


const AuthRepository = {
    getLogin
}

export default AuthRepository;