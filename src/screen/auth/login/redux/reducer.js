import { createSlice } from '@reduxjs/toolkit'

const reducerSlice = createSlice({
    name: 'auth',
    initialState: {
        listUsers: [],
        listResource: []
    },
    reducers: {
        setListUser: (state,action) => {
            state.listUsers = action.payload
        },
        setListResource: (state,action) => {
            state.listResource = action.payload
        }
    }
})

export const { setListUser, setListResource } = reducerSlice.actions
export default reducerSlice;