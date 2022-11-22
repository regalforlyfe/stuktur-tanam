import { createSlice } from '@reduxjs/toolkit'

const reducerSlice = createSlice({
    name: 'listUser',
    initialState: {
        listUsers: [],
        listResource: []
    },
    reducers: {
        setListUser: (state,action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.listUsers = action.payload
        },
        setListResource: (state,action) => {
            state.listResource = action.payload
        }
    }
})

export const { setListUser, setListResource } = reducerSlice.actions
export default reducerSlice;