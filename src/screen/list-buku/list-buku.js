import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import StoreHelper from '../../app/store-helper';
import DefaultButton from '../../components/default-button';
import ListAtas from './components/list-atas';
import ListBawah from './components/list-bawah';
import Action from './redux/action';
import { reducerListBuku } from './redux/reducer';

const ListBuku = () => {
  const MainComponent = () => {
    const users = useSelector(state => state.listUsers);
    const resource = useSelector(state => state.listResource);
    const dispatch = useDispatch();
    useEffect(() => {
      Action.getListUsers(dispatch);
    }, []);
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ListAtas users={users}/>
      <div style={{ height: 50 }} />
      <ListBawah resource={resource}/>
      <div style={{ height: 50 }} />
      <DefaultButton title={"Tambah"} onClick={() => {
        Action.getListUsers(dispatch);
      }} />
      <DefaultButton title={"Reset Resource"} onClick={() => {
        Action.resetResouce(dispatch);
      }} />
    </div>
  }
  return (
    <Provider store={StoreHelper.generateStoreState(reducerListBuku)}>
      <MainComponent />
    </Provider>
  );
};

export default ListBuku;