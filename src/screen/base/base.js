import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import NewStoreHelper from "../../app/store-helper";
import FirebaseUtility from "../../utility/firebase-utility";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Section from "../section/section";
import Action from "./redux/action";
import reducerSlice from "./redux/reducer";
import { getMessaging, onMessage } from "firebase/messaging";

const Base = () => {
  const store = NewStoreHelper.generateStoreState(reducerSlice);
  const firebaseApp = FirebaseUtility.initFirebase();
  const messaging = getMessaging(firebaseApp);
  const generateFCMToken = async () => {
    const token = await FirebaseUtility.getFirebaseToken(messaging);
    console.log("singo: depan: " + token);
  };

  const MainComponent = () => {
    // ini ga perlu di panggil di sini, karena komponen section sudah berada dalam 1 provider, dia bs langsung akses
    // state dari reducer, ga perlu parameterize dan di kirim dari sini.
    // kl activeSection di declare di sini, dan di controller ada dispatch activeSection, 1 page ini akan re-rendering
    // itu tidak bagus buat performance krna sama aja harus selalu re-rendering parent nya (state management ga efisien)
    // const activeSection = useSelector((state) => state.reducer.activeSection);
    store.getState();

    useEffect(() => {
      Action.getActiveSection(store);
      generateFCMToken();
    }, []);

    console.log("base executed");
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
              {/* code aslinya :*/}
              {/*  <Section activeSection={activeSection}/> */}
              {/* ini ga perlu di kirim parameterize begini. reason nya, kl ini parameterize, dan parameter nya di ambil */}
              {/* dari deklarasi di atas, ini 1 page akan re rendering setiap kali state berubah */}
              <Section />
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
