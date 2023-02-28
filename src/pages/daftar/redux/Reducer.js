import { createSlice } from '@reduxjs/toolkit'

const reducerSlice = createSlice({
    name: 'listDaftar',
    initialState: {
        listDaftar:[],
        validateStatus: false,
        edit: {},
        addDaftar: {
            id: "",
            name: "",
            email: "",
            gender: "",
            status: "",
        },
        errorAddDaftar: {},
        page: "",

    },
    reducers: {
        
        setListDaftar: (state,action) => {
            state.listDaftar = action.payload;
        },
        setAddDaftar: (state, action) => {
            state.addDaftar = action.payload;
        },
        setErrorAddDaftar: (state, action) => {
            state.errorAddDaftar = action.payload;
        },
        setValidateStatus: (state, action) => {
            state.validateStatus = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setEdit: (state, action) => {
            state.edit = action.payload;
        }
    },
})

export const { setListDaftar, setAddDaftar, setErrorAddDaftar, setValidateStatus, setPage, setEdit } = reducerSlice.actions
export default reducerSlice;