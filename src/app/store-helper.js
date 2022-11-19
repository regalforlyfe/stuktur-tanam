import { configureStore } from "@reduxjs/toolkit";

const generateStoreState = (reducer) => {
    const store = configureStore({
        reducer:reducer
    });
    return store;
}

const NewStoreHelper = {
    generateStoreState
}

export default NewStoreHelper;