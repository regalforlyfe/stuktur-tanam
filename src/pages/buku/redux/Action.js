import BukuRepository from "../../../repositories/BukuRepository";
import UserRepository from "../../../repositories/UserRepository";
import UserDataRepository from "../../../repositories/UserDataRepository";
import { setListBuku, setListResource, setListUser, setListUserData } from "./Reducer";

// const getListUsers = async (store)=>{
//     var respDataBuku = await BukuRepository.getDataBuku({index:1});
//     var respResource = await UserRepository.getResource();
//     store.dispatch(setListUser(respDataBuku));
//     store.dispatch(setListResource(respResource));
// }

const getListBuku = async (store) => {
    var respDataBuku = await BukuRepository.getBuku();
    store.dispatch(setListBuku(respDataBuku));
}

//new from dinova
const getListUserData = async (store) => {
    var respUserData = await UserDataRepository.getDataUser();
    store.dispatch(setListUserData(respUserData))
}

const Action = {
    getListBuku,
    getListUserData
}

export default Action;