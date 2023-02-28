import UserDataRepository from "../../../repositories/UserDataRepository"
import { setListUserData } from "../../buku/redux/Reducer"

const getListUserData = async (store) => {
    var respUserData = await UserDataRepository.getDataUser();
    store.dispatch(setListUserData(respUserData))
}

const Action = {
      getListUserData
}

export default Action