import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import StoreHelper from "../../app/store-helper";
import { reducerProduct } from "./redux/reducer";
import Action from "./redux/action";
import ListProduct from "./components/list-product";
import AddProduct from "./components/add-product";

const Product = () => {
  const MainComponent = () => {
    const products = useSelector((state) => state.listProduct);
    const showAddProduct = useSelector((state) => state.showAddProduct);

    const dispatch = useDispatch();

    const Parent = () => {
      if (showAddProduct === true) {
        return <AddProduct />;
      } else {
        return <ListProduct products={products} />;
      }
    };

    useEffect(() => {
      Action.getListProduct(dispatch);
    }, [dispatch]);

    return (
      <div className="container mx-auto">
        <Parent />
      </div>
    );
  };

  return (
    <Provider store={StoreHelper.generateStoreState(reducerProduct)}>
      <MainComponent />
    </Provider>
  );
};

export default Product;
