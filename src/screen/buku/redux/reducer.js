import {
    SET_LIST_USERS, SET_RESOURCE,
} from './action'

const initData = {
    listUsers: [],
    listResource: []
}

export const reducerListBuku = (state = initData, action) => {
    switch (action.type) {
        case SET_LIST_USERS:
            console.log("SET_LIST_USERS");
            return { ...state, listUsers: action.data }
        case SET_RESOURCE:
            console.log("SET_RESOURCE");
            return { ...state, listResource: action.data }
        default: return state
    }
}