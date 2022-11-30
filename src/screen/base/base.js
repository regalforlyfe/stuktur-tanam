import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import NewStoreHelper from "../../app/store-helper";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Section from "../section/section";
import Action from "./redux/action";
import reducerSlice from "./redux/reducer";

const Base = () => {
  const store = NewStoreHelper.generateStoreState(reducerSlice);

  const MainComponent = () => {
    const activeSection = useSelector((state) => state.reducer.activeSection);
    store.getState();

    useEffect(() => {
      Action.getActiveSection(store);
    }, []);

    console.log("base", activeSection);
    return (
      <div className="h-screen" style={{ background: '#26473D' }}>
        <div className="grid grid-cols-6 h-full">
          <div className="col-auto">
            <Navbar />
          </div>
          <div className="col-span-5 overflow-y-scroll m-5 rounded-3xl">
            <div className="bg-white">
              <Header
                onClick={(selectedSection) => {
                  Action.getSelectedSection(store, selectedSection);
                }}
              />
            </div>
            <div className="p-5 bg-white">
              <Section activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default Base;
