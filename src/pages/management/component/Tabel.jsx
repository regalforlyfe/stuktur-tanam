import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import EncryptDecrypt from "../../../services/encrypt-decrypt";
import RouteName from "../../../services/routename";

const Tabel = ({ list, loading }) => {
  if (loading) {
    return <Skeleton count={7} />;
  }
  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="py-2 my-2">id</th>
            <th>email</th>
            <th>first name</th>
            <th>last name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {list.map((item, index) => (
            <tr key={index} className="bg-white border-4 border-gray">
              <td className="py-2 my-2">{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabel;
