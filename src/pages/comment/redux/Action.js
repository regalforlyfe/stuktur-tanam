import CommentRepository from "../../../repositories/CommentRepository";
import { setListComment } from "./Reducer";

const getListComment = async (store) => {
    var respDataComment = await CommentRepository.getComment();
    store.dispatch(setListComment(respDataComment));
}

const Action = {
    getListComment
}

export default Action;