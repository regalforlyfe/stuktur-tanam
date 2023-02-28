import { createSlice } from '@reduxjs/toolkit'

const reducerSlice = createSlice({
    name:"listUserData",
    initialState: {
        listUsers: [],
        listResource: [],
        listBuku:[],
        listUserData: [],
    },
    reducers: {
        setListUserData: (state,action) => {
            state.listUserData = action.payload
        }
    }
})

export const { setListUserData } = reducerSlice.actions
export default reducerSlice;