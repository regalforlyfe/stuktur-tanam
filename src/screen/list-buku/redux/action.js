import BukuRepository from "../../../repositories/buku-repository";
import UserRepository from "../../../repositories/user-repository";

// actions list:
export const SET_LIST_USERS = "SET_LIST_USERS";
export const SET_RESOURCE = "SET_RESOURCE";
// end of action list

const getListUsers = async(dispatch)=>{
    var respDataBuku = await BukuRepository.getDataBuku({index:1});
    var respResource = await UserRepository.getResource();
    var dat = JSON.stringify(respDataBuku)+JSON.stringify(respResource);

    dispatch({type:SET_LIST_USERS,data:respDataBuku});
    dispatch({type:SET_RESOURCE, data:respResource})
}

const resetResouce = async(dispatch)=>{
    dispatch({type:SET_RESOURCE, data:""});
}

const Action = {
    getListUsers,
    resetResouce
}

export default Action;


