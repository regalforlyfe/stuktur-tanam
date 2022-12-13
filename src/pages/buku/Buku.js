import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import DefaultButton from "../../components/default-button";
import ListAtas from "./components/ListAtas";
import ListBawah from "./components/ListBawah";
import Action from "./redux/Action";
import reducerSlice from "./redux/Reducer";
import HoverButton from "../../components/hover-button";
import StoreHelper from "../../services/store-helper";

const Buku = () => {
  const store = StoreHelper.generateStoreState(reducerSlice);
  const MainComponent = () => {
    const users = useSelector((state) => state.reducer.listUsers);
    const resource = useSelector((state) => state.reducer.listResource);
    const buku = useSelector((state) => state.reducer.listBuku);
    store.getState();

    useEffect(() => {
      Action.getListBuku(store);
    }, []);

    return (
      <div className="container mx-auto">
        <div className="text-TNR">Times New Roman</div>
        <div className="text-Sagoe">Segoe UI</div>
        <div className="text-ANB">Arial Narrow Bold</div>
        <div className=""></div>
        <div className=""></div>
        <ListAtas buku={buku} />
        <div style={{ height: 50 }} />
        <ListBawah resource={resource} />
        <div style={{ height: 50 }} />
        <DefaultButton
          title={"Tambah"}
          backgroundColor={"blue"}
          onClick={() => {}}
        />
        <DefaultButton
          title={"Reset Resource"}
          backgroundColor={"red"}
          onClick={() => {}}
        />
        <HoverButton
          title={"Hover"}
          backgroundColor={"#5D7D73"}
          onClick={() => {}}
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

export default Buku;
