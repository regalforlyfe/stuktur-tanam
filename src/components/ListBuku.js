import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Controller from "../folder/redux/Controller";
import storeState from "../folder/redux/Store";

const ListBuku = () => {
    const MainComponent = ()=> {
        const buku = useSelector(state => state.listBuku)
        const dispatch = useDispatch();
        return <div>{buku}<button onClick={()=>{
            Controller.getData(dispatch,'ini buku')
        }}>tambah</button></div>
    }
  return (
    <Provider store={storeState}>
      <MainComponent/>
    </Provider>
  );
};

export default ListBuku;
