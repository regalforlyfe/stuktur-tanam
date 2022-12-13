import React from "react";
import DefaultButton from "../../../components/default-button";
import StoreHelper from "../../../services/store-helper";
import Action from "../redux/Action";
import reducerSlice from "../redux/Reducer";

const ListProduct = ({ products }) => {
  const store = StoreHelper.generateStoreState(reducerSlice);
  store.getState();
  return (
    <div>
      <div className="text-right py-4">
        <DefaultButton
          title={"Tambah Product"}
          backgroundColor={"blue"}
          onClick={() => {
            Action.showAddProduct(store, { status: true });
          }}
        />
      </div>

      <table className="border-collapse border border-slate-400 table-fixed text-center w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 w-20">No</th>
            <th className="border border-slate-300 w-20">Id</th>
            <th className="border border-slate-300">Image</th>
            <th className="border border-slate-300 ">Nama Product</th>
            <th className="border border-slate-300">Harga</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300">{index + 1}</td>
              <td className="border border-slate-300">{item.id}</td>
              <td className="border border-slate-300">
                <img src={item.image} />
              </td>
              <td className="border border-slate-300">{item.name}</td>
              <td className="border border-slate-300">Rp. {item.price}</td>
              <td className="border border-slate-300">
                <DefaultButton
                  title={"Edit"}
                  onClick={""}
                  backgroundColor={"orange"}
                />
                <DefaultButton
                  title={"Hapus"}
                  onClick={() => {
                    Action.deleteProduct({
                      id: item.id,
                    });
                  }}
                  backgroundColor={"red"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
