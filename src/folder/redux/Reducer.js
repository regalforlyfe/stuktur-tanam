import {
    SET_LIST_BUKU,
} from './Action'

const initData = {
    listBuku: 'ini apa',
}

export const reducerListBuku = (state = initData, action) => {
    switch (action.type) {
        case SET_LIST_BUKU:
            console.log("SET_LIST_BUKU");
            return { ...state, listBuku: action.data }
        default: return state
    }
}