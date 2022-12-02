import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import NewStoreHelper from "../../app/store-helper";
import DefaultButton from "../../components/default-button";
import FirebaseUtility from "../../utility/firebase-utility";
import ListAtas from "./components/list-atas";
import ListBawah from "./components/list-bawah";
import Action from "./redux/action";
import reducerSlice from "./redux/reducer";
import { getMessaging, onMessage } from "firebase/messaging";
import EncryptDecrypt from "../../services/encrypt-decrypt";
import HoverButton from "../../components/hover-button";

const ListBuku = () => {
  const test = EncryptDecrypt.encryptData("hai");
  console.log(test);

  const hasil = EncryptDecrypt.decryptData(test);
  console.log(hasil);

  const store = NewStoreHelper.generateStoreState(reducerSlice);

  // Initialize Firebase Cloud Messaging and get a reference to the service
  // const firebaseApp = FirebaseUtility.initFirebase();
  // const messaging = getMessaging(firebaseApp);
  // const generateFCMToken = async () => {
  //   const token = await FirebaseUtility.getFirebaseToken(messaging);
  //   console.log("singo: depan: " + token);
  // };
  useEffect(() => {
    // generateFCMToken();
    // onMessage(messaging, (payload) => {
    //   console.log("Message received. ", payload);
    // });
  }, []);

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
        <ListAtas buku={buku} />
        <div style={{ height: 50 }} />
        {/* <ListBawah resource={resource} /> */}
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

export default ListBuku;
