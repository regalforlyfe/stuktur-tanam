import BukuRepository from "../../../repositories/BukuRepository";
import UserRepository from "../../../repositories/UserRepository";
import { setListBuku, setListResource, setListUser } from "./Reducer";

const getListUsers = async (store)=>{
    var respDataBuku = await BukuRepository.getDataBuku({index:1});
    var respResource = await UserRepository.getResource();
    store.dispatch(setListUser(respDataBuku));
    store.dispatch(setListResource(respResource));
}

const getListBuku = async (store) => {
    var respDataBuku = await BukuRepository.getBuku();
    store.dispatch(setListBuku(respDataBuku));
}

const Action = {
    getListUsers,
    getListBuku
}

export default Action;