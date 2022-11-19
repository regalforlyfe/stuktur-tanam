import BukuRepository from "../../../repositories/buku-repository";
import UserRepository from "../../../repositories/user-repository";
import { decremented, incremented, setListResource, setListUser } from "./reducer";

const getListUsers = async (store)=>{
    var respDataBuku = await BukuRepository.getDataBuku({index:1});
    var respResource = await UserRepository.getResource();
    store.dispatch(setListUser(respDataBuku));
    store.dispatch(setListResource(respResource));
}

const Action = {
    getListUsers
}

export default Action;