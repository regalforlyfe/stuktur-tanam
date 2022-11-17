import React from "react";
import { useDispatch } from "react-redux";
import Action from "../redux/action";

const AddProduct = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('price', e.target.price.value);
    console.log(formData);
    Action.saveProduct(dispatch,{formData:formData})
  }
  return (
    <div className="container px-10 py-2">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl">Tambah Produk</h1>
        <br />
        <label className="block py-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Nama Produk
          </span>
          <input
            type="text"
            name="title"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Nama Produk"
          />
        </label>
        <label className="block py-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Harga
          </span>
          <input
            type="text"
            name="price"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Harga Produk"
          />
        </label>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
