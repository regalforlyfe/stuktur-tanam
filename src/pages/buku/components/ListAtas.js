import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../Buku.css";

const ListAtas = ({ buku }) => {
  const [no, setNo] = useState("");
  const [avatar, setAvatar] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [namadepan, setNamadepan] = useState("");
  const [namabelakang, setNamabelakang] = useState("");
  return (
    <div>
      <Skeleton />
      <table className="border-collapse border border-slate-400 table-auto text-center w-full">
        <thead>
          <tr>
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Avatar</th>
            <th className="border border-slate-300">Id</th>
            <th className="border border-slate-300">Email</th>
            <th className="border border-slate-300">Nama Depan</th>
            <th className="border border-slate-300">Nama Belakang</th>
          </tr>
        </thead>
        <tbody>
          {buku.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-slate-300">
                {index + 1 || <Skeleton />}
              </td>
              <td className="border border-slate-300">
                {" "}
                <img
                  className="img-responsive"
                  src={item.avatar || <Skeleton />}
                  alt="mini-project"
                ></img>
              </td>
              <td className="border border-slate-300">
                {item.id || <Skeleton />}
              </td>
              <td className="border border-slate-300">
                {item.email || <Skeleton />}
              </td>
              <td className="border border-slate-300">
                {item.namaDepan || <Skeleton />}
              </td>
              <td className="border border-slate-300">
                {item.namaBelakang || <Skeleton />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAtas;
