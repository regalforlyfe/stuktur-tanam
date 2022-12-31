import React from "react";
import DefaultButton from "../../../components/default-button";
import StoreHelper from "../../../services/store-helper";
import Action from "../redux/Action";
import reducerSlice from "../redux/Reducer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
          )) || <Skeleton count={10} width="150px" height="1000px" />}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListProduct;
