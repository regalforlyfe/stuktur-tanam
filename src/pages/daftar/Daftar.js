import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import DaftarList from "./components/DaftarList";
import Action from "./redux/Action";
import reducerSlice from "./redux/Reducer";
import StoreHelper from "../../services/store-helper";
import AddDaftar from "./components/AddDaftar";

const Daftar = () => {
  const store = StoreHelper.generateStoreState(reducerSlice);
  store.getState();

  const MainComponent = () => {
    const daftar = useSelector((state) => state.reducer.listDaftar);
    const showAddDaftar = useSelector((state) => state.reducer.showAddDaftar);

    const Parent = () => {
      if (showAddDaftar === true) {
        return <AddDaftar />;
      } else {
        return <DaftarList daftar={daftar} />;
      }
    };

    useEffect(() => {
      Action.getListDaftar(store);
    }, []);

    return (
      <>
        <AddDaftar />
        <Parent />
      </>
    );
  };
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default Daftar;
