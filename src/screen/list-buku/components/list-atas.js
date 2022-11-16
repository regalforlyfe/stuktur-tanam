import React from 'react';

const ListAtas = ({users})=>{
    return (
        <div>
            {users.map((item, index) => (
              <table>
                <tr>
                  <th>No</th>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Nama Depan</th>
                  <th>Nama Belakang</th>
                </tr>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              </table>
              ))}
        </div>
    );
}

export default ListAtas;