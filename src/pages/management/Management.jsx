import React from "react";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import StoreHelper from "../../services/store-helper";
import Tabel from "./component/Tabel";
import Action from "./redux/Action";
import reducerSlice from "./redux/Reducer";

const Management = () => {
  const store = StoreHelper.generateStoreState(reducerSlice);

  const MainComponent = () => {
    store.getState();
    const list = useSelector((state) => state.reducer.list);
    const currentPage = useSelector((state) => state.reducer.currentPage);
    const loading = useSelector((state) => state.reducer.loading);
    const postPerPage = useSelector((state) => state.reducer.postPerPage);
    const total = useSelector((state) => state.reducer.total);
    const totalPage = useSelector((state) => state.reducer.totalPage);

    useEffect(() => {
      Action.getList(store, currentPage, loading);
    }, []);
    return (
      <div
        className="container rounded-2xl p-5"
        style={{ background: "#F5F5F5" }}
      >
        <div className="flex flex-row items-center gap-x-4">
          <p className="flex-1">MANAGEMENT LIST</p>
          <input
            className="rounded-xl px-44 py-1"
            type="text"
            placeholder="Search for management"
          />
          <select className="rounded-xl p-1" name="status" id="status">
            <option value="active">Active</option>
            <option value="innactive">Innactive</option>
          </select>
          <label htmlFor="postperview">View</label>
          <select
            className="rounded-xl p-1"
            name="postperview"
            id="postperview"
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="my-2">
          <Tabel list={list} loading={loading} />
        </div>
        <div>
          <Pagination
            postsPerPage={postPerPage}
            totalPosts={total}
            currentPage={currentPage}
            onClick={() => {}}
          />
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

export default Management;
