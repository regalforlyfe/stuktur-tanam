import CommentModel from "../pages/comment/models/CommentModel";
import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API_V3;

const getComment = async() => {
  const url = BASE_API + Endpoint.listComment;
  const response = await CallApi({ url, method: 'GET' });
  return response.data;
}


const CommentRepository = {
    getComment,
}

export default CommentRepository;