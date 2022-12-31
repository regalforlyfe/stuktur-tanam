import ManagementRepository from "../../../repositories/ManagementRepository";
import {
  setList,
  setLoading,
  setPostPerPage,
  setTotal,
  setTotalPage,
} from "./Reducer";

const getList = async (store, { page }) => {
  var response = await ManagementRepository.getUsers(page);
  if (response) {
    store.dispatch(setLoading(false));
    store.dispatch(setList(response.data));
    store.dispatch(setPostPerPage(response.per_page));
    store.dispatch(setTotal(response.total));
    store.dispatch(setTotalPage(response.total_pages));
  }
};

const Action = {
  getList,
};

export default Action;
