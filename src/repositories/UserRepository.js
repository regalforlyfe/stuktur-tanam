import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API;

const getResource = async () => {
  const url = BASE_API + Endpoint.listResource;
  const response = await CallApi({ url, method: "GET" });
  return response.data.data;
};

const getAuth = async (data) => {
  const url = BASE_API + Endpoint.login;
  const response = await CallApi({ url, method: "POST", data });
  console.log("user", response.data);
  return response.data;
};

const UserRepository = {
  getResource,
  getAuth,
};

export default UserRepository;
