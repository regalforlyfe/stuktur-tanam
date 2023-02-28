import DaftarModel from "../pages/daftar/models/DaftarModel";
import DataModel from "../pages/daftar/models/DaftarModel";
import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API;

// const getDataBuku = async ({ index }) => {
//   const url = BASE_API + Endpoint.listUsers + "?page=" + index;
//   const response = await CallApi({ url, method: "GET" });
//   return response.data.data;

// };
const getDaftar = async() => {
  const url = BASE_API + Endpoint.listUsers;
  const response = await CallApi({ url, method: 'GET' });
  const data = typeof response != "undefined" ? response.data : null;
  const data2 = typeof data != "undefined" && data != null ? data.data : [];
  let daftar2 = [];
  data2.forEach((element) => {
    var daftar = new DaftarModel({
      id: element.id,
      avatar: element.avatar,
      email: element.email,
      namaDepan: element.first_name,
      namaBelakang: element.last_name,
    });
    daftar2.push(daftar);
  });

  return daftar2;
}

// const saveDaftar = async(formData) => {
//   const url = BASE_API + Endpoint.addDaftar;
//   const response = await CallApi({ url, method: 'POST', data: formData});
//   return response.data;
// }

const saveDaftar = async (dat) => {
  const url = BASE_API + Endpoint.addDaftar;
  const response = await CallApi({ url, method: "POST", data: dat });
  const data = typeof response != "undefined" ? response.data : null;
  const data2 = typeof data != "undefined" && data != null ? data.data : [];
  console.log(data2);
  return data2;
}

const deleteDaftar = async (id) => {
  const url = BASE_API + Endpoint.addDaftar + '/' + id ;
  await CallApi({ url, method: "DELETE" });
  return id;
}

// const getDaftar = async () => {
//   const url = BASE_API + Endpoint.listUsers;
//   const response = await CallApi({ url, method: "GET" });
//   //console.log(response)
//   const data = typeof response != "undefined" ? response.data : null;
//   const data2 = typeof data != "undefined" && data != null ? data.data : [];
//   let daftar2 = [];
//   data2.forEach((element) => {
//     var daftar = new DaftarModel({
//       id: element.id,
//       name: element.name,
//       email: element.email,
//       gender: element.gender,
//       status: element.status,
//     });
//     daftar2.push(daftar);
//   });

//   return daftar2;
//   // let buku = [
//   //   new BukuModel({ id: "1", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
//   //   new BukuModel({ id: "2", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
//   //   new BukuModel({ id: "3", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
//   // ];
//   // console.log("repo", buku);
// };

const DaftarRepository = {
  // getDataBuku,
  getDaftar,
  saveDaftar,
  deleteDaftar,
};

export default DaftarRepository;
