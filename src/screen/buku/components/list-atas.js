import React from "react";
import "../list-buku.css";
 
const ListAtas = ({ buku}) => {
  return (
    <div>
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
              <td className="border border-slate-300">{index + 1}</td>
              <td className="border border-slate-300"> <img className="img-responsive" src={item.avatar} alt="mini-project"></img></td>
              <td className="border border-slate-300">{item.id}</td>
              <td className="border border-slate-300">{item.email}</td>
              <td className="border border-slate-300">{item.namaDepan}</td>
              <td className="border border-slate-300">{item.namaBelakang}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAtas;
