import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducerSlice from "./redux/Reducer";
import Action from "./redux/Action";
import ListProduct from "./components/ListProduct";
import AddProduct from "./components/AddProduct";
import StoreHelper from "../../services/store-helper";

const Product = () => {
  const store = StoreHelper.generateStoreState(reducerSlice);

  const MainComponent = () => {
    const products = useSelector((state) => state.reducer.listProduct);
    const showAddProduct = useSelector((state) => state.reducer.addProduct);
    // const dispatch = useDispatch();
    store.getState();

    const Parent = () => {
      if (showAddProduct === true) {
        return <AddProduct />;
      } else {
        return <ListProduct products={products} />;
      }
    };

    useEffect(() => {
      Action.getListProduct(store);
    }, []);

    return (
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

export default Product;
