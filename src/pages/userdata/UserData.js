import React, { useEffect } from 'react'
import ListUserData from "./components/ListUserData"
import StoreHelper from '../../services/store-helper'
import reducerSlice from './redux/Reducer'
import { Provider, useSelector } from 'react-redux'
import Action from '../buku/redux/Action'
const UserData = () => {
  const store = StoreHelper.generateStoreState(reducerSlice)
  const MainComponent = () => {
    const userdata = useSelector((state) => state.reducer.listUserData);
    store.getState();

    useEffect(() => {
      Action.getListUserData(store);
    }, []);
    
    return (
      <div>
          <ListUserData userdata={userdata} />
      </div>
    )
  }

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
}

export default UserData