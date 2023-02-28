import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
    name:"listComment",
    initialState: {
        listComment: []
    },
    reducers: {
        setListComment: (state,action) => {
            state.listComment = action.payload
        }
    }
})

export const { setListComment } = reducerSlice.actions
export default reducerSlice;