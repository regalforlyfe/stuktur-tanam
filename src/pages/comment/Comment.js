import React, { useEffect } from 'react'
import ListComment from './components/ListComment'
import Action from './redux/Action'
import reducerSlice from './redux/Reducer'
import StoreHelper from '../../services/store-helper'
import DefaultButton from "../../components/default-button";
import HoverButton from "../../components/hover-button";

import { Provider, useSelector } from 'react-redux'

const Comment = () => {

    const store = StoreHelper.generateStoreState(reducerSlice);
    const MainComponent = () => {
        const comment = useSelector((state) => state.reducer.listComment);
        store.getState();

        useEffect(() => {
            Action.getListComment(store);
        }, [])
        return (
            <div className="container mx-auto">
            <div className="text-TNR">Times New Roman</div>
            <div className="text-Sagoe">Segoe UI</div>
            <div className="text-ANB">Arial Narrow Bold</div>
            <div className=""></div>
            <div className=""></div>
            <ListComment comment={comment} />
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
        )
    }

    return (
        <Provider store={store}>
            <MainComponent />
        </Provider>
    )

}

export default Comment