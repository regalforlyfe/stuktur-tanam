import { createSlice } from '@reduxjs/toolkit'

const reducerSlice = createSlice({
    name: 'auth',
    initialState: {
        listUsers: [],
        listResource: [],
        listAuth: [],
    },
    reducers: {
        setListUser: (state,action) => {
            state.listUsers = action.payload
        },
        setListResource: (state,action) => {
            state.listResource = action.payload
        },
        setListAuth: (state,action) => {
            state.listAuth = action.payload
        }
    }
})

export const { setListUser, setListResource, setListAuth } = reducerSlice.actions
export default reducerSlice;