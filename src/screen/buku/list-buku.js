import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import NewStoreHelper from "../../app/store-helper";
import StoreHelper from "../../app/store-helper";
import DefaultButton from "../../components/default-button";
import FirebaseUtility from "../../utility/firebase-utility";
import ListAtas from "./components/list-atas";
import ListBawah from "./components/list-bawah";
import Action from "./redux/action";
import reducerSlice from "./redux/reducer";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { async } from "@firebase/util";

const ListBuku = () => {
  const store = NewStoreHelper.generateStoreState(reducerSlice);

  // Initialize Firebase Cloud Messaging and get a reference to the service
  const firebaseApp = FirebaseUtility.initFirebase();
  const messaging = getMessaging(firebaseApp);
  const generateFCMToken = async () => {
    // const token = await messaging.getToken({ vapidKey: "BMoJyVdA0uYuVcUHjYGVkNUAePsEngf-N3-r1ls817sVDU54N2H8YFm7FPojSukUG6mxhEJFlKO3txiSB1NmmB8" });
    const token = await getToken(messaging,{ vapidKey: "BMoJyVdA0uYuVcUHjYGVkNUAePsEngf-N3-r1ls817sVDU54N2H8YFm7FPojSukUG6mxhEJFlKO3txiSB1NmmB8"});
    console.log("singo: fcmToken: " + token);
  }
  useEffect(() => {
    generateFCMToken();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });
  }, [])

  const MainComponent = () => {
    const users = useSelector((state) => state.reducer.listUsers);
    const resource = useSelector((state) => state.reducer.listResource);

    const stateData = store.getState();

    useEffect(() => {
      Action.getListUsers(store);
    }, [])


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
