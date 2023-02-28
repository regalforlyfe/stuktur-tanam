import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import DefaultButton from "../../components/default-button";
import DaftarList from "./components/DaftarList";
import Action from "./redux/Action";
import reducerSlice from "./redux/Reducer";
import HoverButton from "../../components/hover-button";
import StoreHelper from "../../services/store-helper";
import { Link, useNavigate } from "react-router-dom"
import AddDaftar from "./components/AddDaftar";



const Daftar = () => {
  const store = StoreHelper.generateStoreState(reducerSlice);
  const MainComponent = () => {
    // const users = useSelector((state) => state.reducer.listUsers);
    const navigate = useNavigate();
    
    const daftar = useSelector((state) => state.reducer.listDaftar);
    const showAddDaftar = useSelector((state) => state.reducer.addDaftar);
    store.getState();

    const Parent = () => {
      if (showAddDaftar === true) {
        <AddDaftar />
      } else {
        return <DaftarList daftar={daftar} />;
      }
    };

    const navigateToAddDaftar = () => {
      navigate('/addDaftar')
    }

    useEffect(() => {
      Action.getListDaftar(store);
    }, []);

    return (
      // <div className="container mx-auto">
      //   <div className="text-TNR">Times New Roman</div>
      //   <div className="text-Sagoe">Segoe UI</div>
      //   <div className="text-ANB">Arial Narrow Bold</div>
      //   <div className=""></div>
      //   <div className=""></div>
      //   <DaftarList daftar={daftar} />
      //   <div style={{ height: 50 }} />
      //   <DefaultButton
      //     title={"Tambah"}
      //     backgroundColor={"blue"} 
      //     onClick={navigateToAddDaftar}
      //   />
        
        
      //   <DefaultButton
      //     title={"Reset Resource"}
      //     backgroundColor={"red"}
      //     onClick={() => {}}
      //   />
      // </div>
      <>
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
