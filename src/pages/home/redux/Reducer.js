import { createSlice } from '@reduxjs/toolkit'

const reducerSlice = createSlice({
    name: 'section',
    initialState: {
        activeSection: "",
    },
    reducers: {
        setListSection: (state,action) => {
            state.activeSection = action.payload
        },
    }
})

export const { setListSection } = reducerSlice.actions
export default reducerSlice;