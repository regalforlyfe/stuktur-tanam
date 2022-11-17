import React from "react";
import { useDispatch } from "react-redux";
import DefaultButton from "../../../components/default-button";
import Action from "../redux/action";

const ListProduct = ({ products }) => {
    const dispatch = useDispatch();
  return (
    <div className="container mx-auto p-8">
      <div className="text-right py-4">
        <DefaultButton
          title={"Tambah Product"}
          backgroundColor={"blue"}
          onClick={() => {
            Action.showAddProduct(dispatch,{status:true})
          }}
        /> 
      </div>

      <table className="border-collapse border border-slate-400 table-fixed text-center w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 w-20">No</th>
            <th className="border border-slate-300 w-20">ID</th>
            <th className="border border-slate-300 ">Nama Product</th>
            <th className="border border-slate-300">Harga</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-slate-300">{index + 1}</td>
              <td className="border border-slate-300">{item.id}</td>
              <td className="border border-slate-300">{item.title}</td>
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
                    Action.deleteProduct(dispatch,{id:item.id,listProduct:products});
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
