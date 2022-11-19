import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import NewStoreHelper from "../../app/store-helper";
import StoreHelper from "../../app/store-helper";
import DefaultButton from "../../components/default-button";
import ListAtas from "./components/list-atas";
import ListBawah from "./components/list-bawah";
import Action from "./redux/action";
import reducerSlice from "./redux/reducer";

const ListBuku = () => {
  const store = NewStoreHelper.generateStoreState(reducerSlice);
  
  const MainComponent = () => {
    const users = useSelector((state) => state.reducer.listUsers);
    const resource = useSelector((state) => state.reducer.listResource);

    const stateData = store.getState();

    useEffect(()=>{
      Action.getListUsers(store);
    },[])

    
    return (
      <div className="container mx-auto">
        <ListAtas users={users} />
        <div style={{ height: 50 }} />
        <ListBawah resource={resource} />
        <div style={{ height: 50 }} />
        <DefaultButton
          title={"Tambah"}
          backgroundColor={"blue"}
          onClick={() => {
          }}
        />
        <DefaultButton
          title={"Reset Resource"}
          backgroundColor={"red"}
          onClick={() => {
           
          }}
        />
      </div>
    );
  };
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default ListBuku;
