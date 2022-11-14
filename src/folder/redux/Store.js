import { legacy_createStore as createStore} from 'redux';
import { reducerListBuku } from './Reducer';

const storeState = createStore(reducerListBuku);
export default storeState;