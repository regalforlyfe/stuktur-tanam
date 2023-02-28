import DaftarRepository from "../../../repositories/DaftarRepository";
import UserRepository from "../../../repositories/UserRepository";
import UserDataRepository from "../../../repositories/UserDataRepository";
import { setListDaftar, setErrorAddDaftar, setValidateStatus, setPage, setEdit } from "./Reducer";


const getListDaftar = async (store) => {
    var respDataDaftar = await DaftarRepository.getDaftar();
    store.dispatch(setListDaftar(respDataDaftar));
}

// const saveDaftar = async (store, {formData}) => {
//     await DaftarRepository.saveDaftar(formData);
//     getListDaftar(store);
//     setShowAddDaftar(store, {status: false});

// }

const validateStep1 = (dispatch, values) => {
    const errors = {};
    if(!values.id) {
        errors.id = "id is required"
    }
    if(!values.name) {
        errors.name = "name is required"
    }
    if(!values.email) {
        errors.email = "email is required"
    }
    if(!values.gender) {
        errors.gender = "gender is required"
    }
    if(!values.status) {
        errors.status = "status is required"
    }
    dispatch(setErrorAddDaftar(errors));
    return errors;
};

const getPage = async (dispatch, page) => {
    dispatch(setPage(page));
    dispatch(setValidateStatus(false));
}


const deleteDaftar = async (store, {id}) => {
    await DaftarRepository.deleteDaftar(id);
    getListDaftar(store);
}

const handleDaftar =  async (
    addDaftar,
) => {
    let data = {
        ...addDaftar,
    };
    console.log(data);
    const daftar = await DaftarRepository.saveDaftar(data);
    console.log(daftar);
}

const onEdit = async (dispatch, page, id) => {
    let response = id;
    if (response) {
      dispatch(setPage(page));
      dispatch(setEdit(response));
    }
}

// const onDelete = async (dispatch, status, id) => {
//     let response = id;
//     console.log(response);
//     getList(dispatch, status);
//     dispatch(setPopup(false));
// }

const Action = {
    getListDaftar,
    validateStep1,
    deleteDaftar,
    handleDaftar,
    getPage,
    onEdit,
    // onDelete,
}

export default Action;