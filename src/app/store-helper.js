import { legacy_createStore as createStore} from 'redux';

const generateStoreState = (reducer)=>{
    const storeState = createStore(reducer);
    return storeState;
}

const StoreHelper = {
    generateStoreState
}

export default StoreHelper;