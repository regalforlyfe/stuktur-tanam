import React, { useEffect } from "react";
import { Provider } from "react-redux";
import FirebaseUtility from "../../utility/firebase-utility";
import Action from "./redux/Action";
import reducerSlice from "./redux/Reducer";
import { getMessaging } from "firebase/messaging";
import StoreHelper from "../../services/store-helper";

const Home = () => {
  const store = StoreHelper.generateStoreState(reducerSlice);
  const firebaseApp = FirebaseUtility.initFirebase();
  const messaging = getMessaging(firebaseApp);
  const generateFCMToken = async () => {
    const token = await FirebaseUtility.getFirebaseToken(messaging);
  };

  const MainComponent = () => {
    store.getState();

    useEffect(() => {
      Action.getActiveSection(store);
      generateFCMToken();
    }, []);

    return <div>Home</div>;
  };

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default Home;
