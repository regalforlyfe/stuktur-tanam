import React from 'react'

const ListUserData = ({ userdata}) => {
  return (
    <div>
        <table className="w-full">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Email</th>
            <th>Nama Depan</th>
            <th>Nama Belakang</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((item, index) => (
            <tr key={item.id}>
              <td> <img src={item.avatar} alt=""></img></td>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.namaDepan}</td>
              <td>{item.namaBelakang}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListUserData