import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteName from "../../services/routename";
import StoreHelper from "../../services/store-helper";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Buku from "../buku/Buku";
import Comment from "../comment/Comment";
import AddDaftar from "../daftar/components/AddDaftar";
import Daftar from "../daftar/Daftar";
import Dashboard from "../dashboard/Dashboard";
import Home from "../home/Home";
import AppLayout from "../layout/applayout/AppLayout";
import AuthLayout from "../layout/authlayout/AuthLayout";
import Product from "../product/Product";
import UserData from "../userdata/UserData";
// import Action from "./redux/Action";
import reducerSlice from "./redux/Reducer";

function Base() {
  const store = StoreHelper.generateStoreState(reducerSlice);
  const MainComponent = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path={RouteName.login} element={<Login />} />
              <Route path={RouteName.register} element={<Register />} />
            </Route>

            <Route element={<AppLayout />}>
              <Route path={RouteName.home} element={<Home />} />
              <Route path={RouteName.product} element={<Product />} />
              <Route path={RouteName.dashboard} element={<Dashboard />} />
              <Route path={RouteName.buku} element={<Buku />} />
              <Route path={RouteName.userdata} element={<UserData />} />
              <Route path={RouteName.comment} element={<Comment />} />
              <Route path={RouteName.daftar} element={<Daftar />} />
              <Route path={RouteName.addDaftar} element={<AddDaftar />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}

export default Base;
